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

@media screen and (max-width: 1500px) {
    .btnarea{
        margin-top:5vw;
    }
}

@media screen and (max-width: 414px) {
    .btnarea{
        margin-top:40px;
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

@media screen and (max-width: 1500px) {
    li{
        .line{
            width:calc((100% - 3vw) / 2);
            margin-right:3vw;
            margin-top: 3vw;
            .item{
                font-size: 1.5vw;
                margin-right: 0;
                min-width: 100%;
            }
            .text{
                font-size: 1.6vw;
                margin-top:0.5vw;
                &.long{
                    width:100%;
                    margin-top: 1vw;
                }
                input, select, textarea{
                    font-size: 1.3vw;
                    padding: 1vw 1.5vw;
                }
            }
        }
        .filebox{
            .default{
                font-size: 1.3vw;
                padding: 1vw 1.5vw;
                height:3.5vw;
            }
            label{
                height: 3.5vw;
                margin-left: 1vw;
                padding: 1vw 1.5vw;
            }
            input[type="file"]{
                padding:0 !important;
            }
        }
    }  
    }
    
    @media screen and (max-width: 768px) {
        li{
            .line{
                .item{
                    font-size: 1.8vw;
                }
                .text{
                    font-size: 2vw;
                    margin-top:1vw;
                    input, select, textarea{
                        font-size: 1.6vw;
                        padding: 1.2vw 1.5vw;
                    }
                }
            }
            .filebox{
                .default{
                    height:4.2vw;
                }
                label{
                    height: 4.2vw;
                }
            }
        }  
    }
    @media screen and (max-width: 414px) {
        li{
            flex-wrap:wrap;
            &:first-child{
                .line:first-child{
                    margin-top:0;
                }
            }
            .line{
                margin-right:0;
                width:100%;
                margin-top:20px;
                .item{
                    font-size: 14px;
                }
                .text{
                    margin-top:7px;
                    font-size: 16px;
                    input, select, textarea{
                        font-size: 13px;
                        padding: 10px 10px;
                    }
                    textarea{
                        min-height:120px;
                    }
                    &.long{
                        margin-top:10px;
                    }
                }
            }
            .filebox{
                .default{
                    height:27px;
                    font-size: 13px;
                    padding: 10px 10px;
                }
                label{
                    height: 27px;
                    font-size: 13px;
                    padding: 5px 10px;
                    margin-left: 5px;
                }
            }
        }  
    }
`;

const ServiceDetail = () => {
    const navigate = useNavigate();
    const param = useParams();

    const [replyRender, setReplyRender] = useState(false);
    const [reply, setReply] = useState('');
    const [type, setType] = useState('');
    const [checkAlertModal, setcheckAlertModal] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false);
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
        if (localStorage.getItem('mangocomSession')) {
            setDeleteModal(true)
        } else {
            setcheckAlertModal(true)
        }
    }
    const onEditHandler = (e) => {
        setType('edit');
        if (localStorage.getItem('mangocomSession')) {
            navigate('/service/edit', { state: { service_id: param.id } })
        } else {
            setcheckAlertModal(true)
        }
    }

    const onListHandler = (e) => {
        navigate(-1);
    }

    const onReplyHandler = (e) => {
        setReply(e.target.value)
    }

    const onConfirmHandler = () => {
        axios.patch(`${process.env.host}/service`, { reply: reply, service_id: param.id, progress: 1 }).then(({ data }) => {
            setReplyRender((replyRender) => !replyRender)
            alert("답변완료")
        })
    }

    useEffect(() => {
        axios.get(`${process.env.host}/service/${param.id}`).then(({ data }) => {
            setFile((data.file_url || '').split(','));
            setData(data);
        })
    }, [replyRender])

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
                            {
                                data.type == 'apple' ?
                                    <p className="text">맥북, 아이맥 수리(애플)</p>
                                    :
                                    data.type == 'as' ? <p className="text">컴퓨터 수리(출장AS)</p>
                                        :
                                        data.type == 'product' ? <p className="text">조립 및 중고 PC 판매</p>
                                            :
                                            data.type == 'monitor' && <p className="text">노트북 액정문의</p>
                            }
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
                    <li className="w100">
                        <div className="line">
                            <p className="item">첨부파일.</p>
                            <p className="text">
                                {
                                    (data.file_name || '').split(',').map((i, index) => {
                                        return (
                                            <span className='file' key={index} data-name={i} data-url={file[index]} onClick={onFileHandler}>{i}</span>
                                        )
                                    })
                                }
                            </p>
                        </div>
                    </li>
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
                            {
                                data.progress == 0 ?
                                    localStorage.getItem('mangocomSession') ?
                                        <>
                                            <p className="item">답변.</p>
                                            <div className="replyarea">
                                                <textarea onChange={onReplyHandler}></textarea>
                                                <div className="btnarea right">
                                                    <YellowBtn text="확인" click={onConfirmHandler}><em></em></YellowBtn>
                                                </div>
                                            </div>
                                        </>
                                        :
                                        <></>
                                    :
                                    localStorage.getItem('mangocomSession') ?
                                        <>
                                            <p className="item">답변.</p>
                                            <div className="replyarea">
                                                <textarea onChange={onReplyHandler} defaultValue={data.reply}></textarea>
                                                <div className="btnarea right">
                                                    <YellowBtn text="확인" click={onConfirmHandler}><em></em></YellowBtn>
                                                </div>
                                            </div>
                                        </>
                                        :
                                        <>
                                            <p className="item">답변.</p>
                                            <div className="replyarea">
                                                <p className="text long">{data.reply}</p>
                                            </div>
                                        </>
                            }

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
            {deleteModal && <DeleteAlert setDeleteModal={setDeleteModal} file={file} service_id={param.id}></DeleteAlert>}
        </ServiceDetailLayout>
    )
}

export default ServiceDetail;