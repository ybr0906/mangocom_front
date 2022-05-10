import React, { useState, useRef } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import styled from "styled-components";

//components
import YellowBtn from "../../components/layout/YellowBtn";
import BorderBtn from "../../components/layout/BorderBtn";

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
    
    const [deleteModal, setDeleteModal] = useState(false);    
    const [reply, setreply] = useState(false);    

    const onDeleteHandler = (e) => {        
        setDeleteModal(true) 
    }
    const onListHandler = (e) => {        
        navigate(-1);
    }
    const onEditHandler = (e) => {        
        navigate(`/service/edit`);
    }
    const replyCompeleteHandler = (e) => {          
        setreply(true) 
    }

    
    return (
        <ServiceDetailLayout>
            <div className="wrap">
                <ServiceDetailTable>
                    <li>
                        <div className="line">
                            <p className="item">성함.</p>
                            <p className="text">MSI스트레*</p>
                        </div>
                        <div className="line">
                            <p className="item">서비스 항목.</p>
                            <p className="text">맥북 아이맥 수리(애플)</p>
                        </div>
                    </li>
                    <li>
                        <div className="line">
                            <p className="item">연락처.</p>
                            <p className="text">000-0000-0000</p>
                        </div>
                        <div className="line">
                            <p className="item">날짜.</p>
                            <p className="text">2022-05-10</p>
                        </div>
                    </li>
                    <li className="w100">
                        <div className="line">
                            <p className="item">주소.</p>
                            <p className="text">서울특별시 서초구 반포동</p>
                        </div>
                    </li>
                    <li className="w100">
                        <div className="line">
                            <p className="item">증상.</p>
                            <p className="text long">
                                노트북 발열 쓰로틀링 쿨러청소와 써멀구리스재도포희망 한성 SPARQ 노트북 배터리 충전이 안되요 
                                <br/>화면 연결되는 힌지부분 좌측이 벌어져요 배터리 선 연결해도
                                <br/>화면 연결되는 힌지부분 좌측이 벌어져요 배터리 선 연결해도
                                <br/>화면 연결되는 힌지부분 좌측이 벌어져요 배터리 선 연결해도
                                <br/>화면 연결되는 힌지부분 좌측이 벌어져요 배터리 선 연결해도
                                <br/>화면 연결되는 힌지부분 좌측이 벌어져요 배터리 선 연결해도
                            </p>
                        </div>
                    </li>
                    <li className="w100 reply">
                        <div className="line">
                            <p className="item">답변.</p>
                            <div className="replyarea">
                                <textarea></textarea>
                                <div className="btnarea right">
                                    <YellowBtn text="확인" click={replyCompeleteHandler}><em></em></YellowBtn>
                                </div>
                                {reply && <p className="text long">접수되었습니다</p>}
                                
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
            {/*삭제버튼 클릭시 모달*/}     
            {deleteModal && <DeleteAlert setDeleteModal={setDeleteModal}></DeleteAlert>}
        </ServiceDetailLayout>
    )
}

export default ServiceDetail;