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

const AssemblyPCEditLayout = styled.section`
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
const AssemblyPCEdit = () => {
    const navigate = useNavigate();
    const onListHandler = (e) => {        
        navigate(-1);
        window.scrollTo({top:0, left:0});
    }
    return (
        <AssemblyPCEditLayout>
            <ServiceWriteTable>
                <li>
                    <div className="line">
                        <p className="item">제품명.</p>
                        <p className="text">
                            <input type="text" />
                        </p>
                    </div>
                    <div className="line">
                        <p className="item">구분.</p>
                        <p className="text">
                            <select>
                                <option>구분을 선택해 주세요</option>
                                <option>조립</option>
                            </select>
                        </p>
                    </div>
                </li>
                <li>
                    <div className="line">
                        <p className="item">CPU.</p>
                        <p className="text">
                            <input type="text" />
                        </p>
                    </div>
                    <div className="line">
                        <p className="item">M.Board.</p>
                        <p className="text">
                            <input type="text" />
                        </p>
                    </div>
                </li>
                <li>
                    <div className="line">
                        <p className="item">VGA.</p>
                        <p className="text">
                            <input type="text" />
                        </p>
                    </div>
                    <div className="line">
                        <p className="item">RAM.</p>
                        <p className="text">
                            <input type="text" />
                        </p>
                    </div>
                </li>
                <li>
                    <div className="line">
                        <p className="item">HDD.</p>
                        <p className="text">
                            <input type="text" />
                        </p>
                    </div>
                    <div className="line">
                        <p className="item">SSD.</p>
                        <p className="text">
                            <input type="text" />
                        </p>
                    </div>
                    <div className="line">
                        <p className="item">POWER.</p>
                        <p className="text">
                            <input type="text" />
                        </p>
                    </div>
                </li>
                <li>
                    <div className="line">
                        <p className="item">CASE.</p>
                        <p className="text">
                            <input type="text" />
                        </p>
                    </div>
                    <div className="line">
                        <p className="item">CD-ROM.</p>
                        <p className="text">
                            <input type="text" />
                        </p>
                    </div>
                    <div className="line">
                        <p className="item">판매가.</p>
                        <p className="text">
                            <input type="text" />
                        </p>
                    </div>
                </li>
                <li className="w100">
                    <div className="line">
                        <p className="item">제품의 특장점.</p>
                        <p className="text long">
                            <textarea></textarea>
                        </p>
                    </div>
                </li>
                <li>
                    <div className="line">
                        <p className="item">제품 이미지.</p>
                        <p className="text">
                            <input type="file" />
                        </p>
                    </div>
                    <div className="line">
                        <p className="item">디테일 이미지.</p>
                        <p className="text">
                            <input type="file" />
                        </p>
                    </div>
                </li>
            </ServiceWriteTable>    
            <div className="btnarea right">
                <BorderBtn text="취소" click={onListHandler}><em></em></BorderBtn>
                <YellowBtn text="수정" click={onListHandler}><em></em></YellowBtn>
            </div>
        </AssemblyPCEditLayout>
    )
}

export default AssemblyPCEdit;