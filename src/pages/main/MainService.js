import React, { useRef, useState } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import styled from "styled-components";

//component
import YellowBtn from '../../components/layout/YellowBtn'
import PrivacyModal from "../../components/modal/PrivacyModal";

//images
import ArrowGray from '../../styles/images/arrow_gray.svg'
import ArrowRight from '../../styles/images/arrow_long.svg'
import category01 from '../../styles/images/category01.png'
import category02 from '../../styles/images/category02.png'
import category03 from '../../styles/images/category03.png'
import category04 from '../../styles/images/category04.png'

const ServiceLayout = styled.section`
    padding:80px 0;
    .wrap{
        display:flex;
        align-items:center;
        justify-content:space-between;
    }
`;
const QuickApplication = styled.div`
    width:454px;
    border-radius:30px;
    box-shadow:5px 5px 15px rgba(0,0,0,.15);
    .title{
        font-size:18px;
        font-weight:600;
        text-align:center;
        background-color:#ffc80b;
        padding: 20px 10px;
        border-radius:30px 30px 0 0;
    }
    .inner{
        padding: 30px;
        .w50{
            display:flex;
            align-items:center;
            dl{
                margin-top:0;
                margin-right:20px;
                width:calc((100% - 20px)/2);
                &:last-child{
                    margin-right:0;
                }
            }
        }
        dl{
            margin-top:30px;
            dt{
                font-size:15px;
                color:#333;
                font-weight:600;
                margin-bottom: 10px;
                transform: skew(-0.1deg);
            }
            dd{
                input{
                    border:none;
                    border-bottom:1px solid #d8d8d8;
                    width:100%;
                    min-width:auto;
                    transform: skew(-0.1deg);
                }
                select{
                    border:none;
                    border-bottom:1px solid #d8d8d8;
                    width:100%;
                    min-width:auto;
                    background-image:url(${ArrowGray});
                    background-position:right 5px center;
                    background-repeat:no-repeat;
                    transform: skew(-0.1deg);
                }
                textarea{
                    border-width:1px;
                    transform: skew(-0.1deg);
                }
                input, select, textarea{
                    transition:border-color .5s;
                }
                input:hover, select:hover, textarea:hover, input:focus, select:focus, textarea:focus{
                    border-color:#000;
                }
            }
        }
        .checkbox{
            margin-top:15px;
            display: flex;
            align-items: center;
            em{
                text-decoration:underline;
            }
            .link{
                background: #ccc;
                display: inline-block;
                padding: 2px 10px;
                border-radius: 20px;
                font-size: 12px;
                margin-left: 10px;
                cursor:pointer;
            }
        }
        .btnarea{
            margin-top:30px;
            .yellow_btn{
                padding: 14px 46px;
                position:relative;
                :after{
                    content:'';
                    background-image:url(${ArrowRight});
                    background-position:center;
                    background-repeat:no-repeat;
                    position:absolute;
                    right: 20px;
                    top: 16px;
                    width:8px;
                    height:14px;
                }
                em{
                    padding-right: 10px;
                }
            }
        }
    }
`;

const ServiceCategory = styled.div`
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    width:calc(100% - 454px);
    justify-content: flex-end;
    .box{
        margin-right:60px;
        width: 380px;
        height: 240px;
        text-align: center;
        border-radius: 30px;
        box-shadow: 5px 5px 15px rgb(0 0 0 / 15%);
        padding-top: 60px;
        cursor:pointer;
        &:nth-child(2n){
            margin-right:0;
        }
        &:nth-child(n+3){
            margin-top:50px;
        }
        img{
            display:inline-block;
        }
        p{
            font-size:16px;
            color:#333;
            font-weight:600;
            margin-top: 17px;
            transform: skew(-0.1deg);
        }
    }
`;

//component

const MainService = () => {
    const [privacyModal, setPrivacyModal] = useState(false);    
    const onPrivacyHandler = (e) => {       
        setPrivacyModal(!privacyModal) 
    }
    const navigate = useNavigate();
    
    const onMacRepairHandler = (e) => {
        navigate(`/informationuse/mac`);
        window.scrollTo({top:0, left:0});
    }
    const onAssemblyPCHandler = (e) => {
        navigate(`/informationuse/pcrepair`);
        window.scrollTo({top:0, left:0});
    }
    const onPCRepairHandler = (e) => {
        navigate(`/informationuse/assemblypc`);
        window.scrollTo({top:0, left:0});
    }
    const onMonitorHandler = (e) => {
        navigate(`/informationuse/monitor`);
        window.scrollTo({top:0, left:0});
    }

    return (
        <ServiceLayout>
            <div className="wrap">
                <QuickApplication>
                    <h3 className="title">빠른 서비스 신청</h3>
                    <div className="inner">
                        <div className="w50">
                            <dl>
                                <dt>성함.</dt>
                                <dd><input type="text" placeholder="성함을 입력해 주세요" /></dd>
                            </dl>
                            <dl>
                                <dt>서비스 항목.</dt>
                                <dd>
                                    <select>
                                        <option>항목을 선택해 주세요</option>
                                        <option>맥북, 아이맥 수리(애플)</option>
                                        <option>컴퓨터 수리(출장AS)</option>
                                        <option>조립 및 중고 PC 판매</option>
                                        <option>노트북 액정문의</option>
                                    </select>
                                </dd>
                            </dl>
                        </div>
                        <dl>
                            <dt>연락처.</dt>
                            <dd><input type="text" placeholder="연락처를 입력해 주세요" /></dd>
                        </dl>
                        <dl>
                            <dt>주소.</dt>
                            <dd><input type="text" placeholder="주소를 입력해 주세요" /></dd>
                        </dl>
                        <dl>
                            <dt>증상.</dt>
                            <dd><textarea placeholder="증상을 입력해 주세요"></textarea></dd>
                        </dl>
                        <div className="checkbox">
                            <input type="checkbox" id="check" name="check" />
                            <label htmlFor="check"><em>개인정보 수집 이용</em>에 동의합니다</label>
                            <span className="link" onClick={onPrivacyHandler}>보기</span>
                        </div>                        
                        <div className="btnarea center">
                            <YellowBtn text="서비스 신청 접수"><em></em></YellowBtn>
                        </div>
                    </div>
                </QuickApplication>

                <ServiceCategory>
                    <div className="box" onClick={onMacRepairHandler}>
                        <img src={category01} alt="" />
                        <p>맥북, 아이맥 수리(애플)</p>
                    </div>
                    <div className="box" onClick={onAssemblyPCHandler}>
                        <img src={category02} alt="" />
                        <p>컴퓨터 수리(출장AS)</p>
                    </div>
                    <div className="box" onClick={onPCRepairHandler}>
                        <img src={category03} alt="" />
                        <p>조립 및 중고 PC 판매</p>
                    </div>
                    <div className="box" onClick={onMonitorHandler}>
                        <img src={category04} alt="" />
                        <p>노트북 액정문의</p>
                    </div>
                </ServiceCategory>
            </div>
            {/*개인정보처리방침 모달*/}     
            {privacyModal && <PrivacyModal onPrivacyHandler={onPrivacyHandler}></PrivacyModal>}
        </ServiceLayout>
    )
}

export default MainService;