import React, { useState, useRef } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import styled from "styled-components";

//components
import YellowBtn from "../../components/layout/YellowBtn";
import BorderBtn from "../../components/layout/BorderBtn";

//image
import dobuleArrow from '../../styles/images/arrow_double.svg'
import rightArrow from '../../styles/images/arrow_right.svg'
import ArrowGray from '../../styles/images/arrow_gray.svg'

const ServiceWriteLayout = styled.section`
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
const ServiceWriteTable = styled.ul`
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
            width:100%;
            margin-top:10px;
            &.long{
                width:100%;
                margin-top: 20px;
            }
            input, select, textarea{
                font-size:17px;
                height: auto;
                padding: 15px 13px;
                transition:border-color .5s;
            }
            input:hover, select:hover, textarea:hover, input:focus, select:focus, textarea:focus{
                border-color:#000;
            }
            input{
                border:none;
                border-bottom:2px solid #d8d8d8;
                width:100%;
                min-width:auto;
            }
            select{
                border:none;
                border-bottom:2px solid #d8d8d8;
                width:100%;
                min-width:auto;
                background-image:url(${ArrowGray});
                background-position:right 5px center;
                background-repeat:no-repeat;
            }
            textarea{
                min-height:200px;
            }
        }
    }
    &.w100{
        .line{
            width:100%;
            margin-right:0;
        }        
    }
}
`;

const ServiceWrite = () => {
    const navigate = useNavigate();
    const onListHandler = (e) => {        
        navigate(-1);
    }
    return (
        <ServiceWriteLayout>
            <div className="wrap">
                <ServiceWriteTable>
                    <li>
                        <div className="line">
                            <p className="item">성함.</p>
                            <p className="text">
                                <input type="text" placeholder="성함을 입력해주세요."/>
                            </p>
                        </div>
                        <div className="line">
                            <p className="item">비밀번호.</p>
                            <p className="text">
                                <input type="password" placeholder="비밀번호를 입력해 주세요" />
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="line">
                            <p className="item">연락처.</p>
                            <p className="text">
                                <input type="text" placeholder="연락처를 입력해 주세요" />
                            </p>
                        </div>
                        <div className="line">
                            <p className="item">서비스 항목.</p>
                            <p className="text">
                                <select>
                                    <option>항목을 선택해 주세요</option>
                                    <option>맥북, 아이맥 수리(애플)</option>
                                    <option>컴퓨터 수리(출장AS)</option>
                                    <option>조립 및 중고 PC 판매</option>
                                    <option>노트북 액정문의</option>
                                </select>
                            </p>
                        </div>
                    </li>
                    <li className="w100">
                        <div className="line">
                            <p className="item">주소.</p>
                            <p className="text">
                                <input type="text" placeholder="주소를 입력해 주세요" />
                            </p>
                        </div>
                    </li>
                    <li className="w100">
                        <div className="line">
                            <p className="item">증상.</p>
                            <p className="text long">
                                <textarea placeholder="증상을 입력해 주세요"></textarea>
                            </p>
                        </div>
                    </li>
                </ServiceWriteTable>    
                
                <div className="btnarea right">
                    <BorderBtn text="취소" click={onListHandler}><em></em></BorderBtn>
                    <YellowBtn text="확인" click={onListHandler}><em></em></YellowBtn>
                </div>                  
            </div>
        </ServiceWriteLayout>
    )
}

export default ServiceWrite;