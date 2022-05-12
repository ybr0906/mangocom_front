import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useParams } from 'react-router-dom';
import styled from "styled-components";
import axios from "axios";
import fileDownload from 'js-file-download'

//components
import YellowBtn from "../../components/layout/YellowBtn";
import BorderBtn from "../../components/layout/BorderBtn";
import CheckAlert from "../../components/modal/CheckAlert";

//image
import dobuleArrow from '../../styles/images/arrow_double.svg'
import rightArrow from '../../styles/images/arrow_right.svg'
import DeleteAlert from "../../components/modal/DeleteArlet";

const ServiceDetailLayout = styled.section`
.btnarea{
    margin-top:70px;
    button{
        margin-right:5px;
        &:last-child{
            margin-right:0;
        }
    }
}
`;
const ServiceDetailTable = styled.ul`
li{
    display:flex;
    align-items:center;
    .line{
        width:calc((100% - 60px) / 2);
        margin-right:60px;
        display:flex;
        align-items:center;
        flex-wrap: wrap;
        margin-top: 50px;
        &:last-child{
            margin-right:0;
        }
        .item{
            font-size: 20px;
            font-weight: 600;
            margin-right: 30px;
            min-width: 108px;
        }
        .text{
            font-size: 16px;
            line-height: 1.7;
            transform: skew(-0.1deg);
            &.long{
                width:100%;
                margin-top: 20px;
            }
        }
    }
    &.w100{
        .line{
            width:100%;
        }      
    }
    &.reply{  
        .replyarea{
            width:100%;
            margin-top: 20px;
            .long{
                margin-top: 0;
            }
        }
        textarea{
            width:100%;
        }
        .btnarea{
            margin-top:20px;
        }
    }
}
`;

const ServiceDetail = () => {
    const navigate = useNavigate();
    const param = useParams();

    const [type, setType] = useState('');
    const [checkAlertModal, setcheckAlertModal] = useState(false)
    const [data, setData] = useState({
        name: "",
        phone: "",
        address: "",
        symptom: "",
        reg_date: "",
        type: "",
        reply: "",
    });
    const [file, setFile] = useState([]);

    const onFileHandler = (e) => {
        const { name, url } = e.target.dataset;
        axios.get(url, {
            responseType: 'blob',
        }).then((res) => {
            fileDownload(res.data, name)
        })
    }

    const onDeleteHandler = (e) => {
        setType('delete');
        if (localStorage.getItem('neoulSession')) {
            // axios.post(`${process.env.host}/member/check`, {sid:localStorage.getItem('neoulSession')}).then(({data})=>{
            //     setDeleteModal(modal => !modal)
            // })            
        } else {
            setcheckAlertModal(true)
        }
    }
    const onEditHandler = (e) => {
        setType('edit');
        if (localStorage.getItem('neoulSession')) {
            //navigate('/message/edit', {state:{id_board:data.id_board}})                    
        } else {
            setcheckAlertModal(true)
        }
    }

    const onListHandler = (e) => {
        navigate(-1);
    }

    const replyCompeleteHandler = (e) => {
        setreply(true)
    }

    useEffect(() => {
        axios.get(`${process.env.host}/service/${param.id}`).then(({ data }) => {
            setFile((data.file_url || '').split(','));
            setData(data);
        })
    }, [])

    return (
        <ServiceDetailLayout>
            <div className="wrap">
                <ServiceDetailTable>
                    <li>
                        <div className="line">
                            <p className="item">성함.</p>
                            <p className="text">{data.name}</p>
                        </div>
                        <div className="line">
                            <p className="item">서비스 항목.</p>
                            <p className="text">{data.type}</p>
                        </div>
                    </li>
                    <li>
                        <div className="line">
                            <p className="item">연락처.</p>
                            <p className="text">{data.phone}</p>
                        </div>
                        <div className="line">
                            <p className="item">날짜.</p>
                            <p className="text">{data.reg_date}</p>
                        </div>
                    </li>
                    <li className="w100">
                        <div className="line">
                            <p className="item">주소.</p>
                            <p className="text">{data.address}</p>
                        </div>
                    </li>
                    {
                        (data.file_name || '').split(',').map((i, index) => {
                            return (
                                <span className='file' key={index} data-name={i} data-url={file[index]} onClick={onFileHandler}>{i}</span>
                            )
                        })
                    }
                    <li className="w100">
                        <div className="line">
                            <p className="item">증상.</p>
                            <p className="text long">
                                {(data.symptom || '').split('\n').map((line, index) => {
                                    return (
                                        <span key={index}>
                                            {line}
                                            <br />
                                        </span>
                                    );
                                })}
                            </p>
                        </div>
                    </li>
                    <li className="w100 reply">
                        <div className="line">
                            <p className="item">답변.</p>
                            <div className="replyarea">
                                {
                                    data.progress == 0 ?
                                        <>
                                            <textarea></textarea>
                                            <div className="btnarea right">
                                                <YellowBtn text="확인" click={replyCompeleteHandler}><em></em></YellowBtn>
                                            </div>
                                        </>
                                        :
                                        <p className="text long">{data.reply}</p>
                                }

                            </div>
                        </div>
                    </li>
                </ServiceDetailTable>

                <div className="btnarea right">
                    <BorderBtn text="삭제" click={onDeleteHandler}><em></em></BorderBtn>
                    <BorderBtn text="수정" click={onEditHandler}><em></em></BorderBtn>
                    <YellowBtn text="목록" click={onListHandler}><em></em></YellowBtn>
                </div>
            </div>
            {/*삭제 수정 버튼 클릭시 모달*/}
            {checkAlertModal && <CheckAlert setcheckAlertModal={setcheckAlertModal} file={file} type={type} service_id={param.id}></CheckAlert>}
            {/* {deleteModal && <DeleteAlert setDeleteModal={setDeleteModal}></DeleteAlert>} */}
        </ServiceDetailLayout>
    )
}

export default ServiceDetail;