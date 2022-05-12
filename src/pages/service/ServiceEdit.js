import React, { useState, useRef, useEffect, useL } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import styled from "styled-components";

//components
import YellowBtn from "../../components/layout/YellowBtn";
import BorderBtn from "../../components/layout/BorderBtn";

//image
import dobuleArrow from '../../styles/images/arrow_double.svg'
import rightArrow from '../../styles/images/arrow_right.svg'
import ArrowGray from '../../styles/images/arrow_gray.svg'

const ServiceEditLayout = styled.section`
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
const ServiceEditTable = styled.ul`
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

    .filebox{
        display:flex;
        align-items:flex-end;
        .upload-name {
            display: inline-block;
            height: 40px;
            padding: 0 10px;
            vertical-align: middle;
            border: 1px solid #dddddd;
            width: 78%;
            color: #999999;
        }
        .default{
            border: none;
            border-bottom: 2px solid #d8d8d8;
            width: 100%;
            min-width: auto;
            font-size: 17px;
            height: 54px;
            padding: 15px 13px;
            -webkit-transition: border-color .5s;
            transition: border-color .5s;
            position:relative;
        }
        .file-name{
            font-size: 17px;
        }
        label {
            display: inline-block;
            padding: 10px 20px;
            color: #fff;
            vertical-align: middle;
            background-color: #999999;
            cursor: pointer;
            height: 40px;
            margin-left: 10px;
        }
        input[type="file"] {
            position: absolute;
            width: 0;
            height: 0;
            padding: 0;
            overflow: hidden;
            border: 0;
        }
    }
}
`;

const ServiceEdit = () => {
    const navigate = useNavigate();
    const onListHandler = (e) => {
        navigate(-1);
    }
    useEffect(() => {

    }, [])
    return (
        <ServiceEditLayout>
            <div className="wrap">
                <ServiceEditTable>
                    <li>
                        <div className="line">
                            <p className="item">성함.</p>
                            <p className="text">
                                <input type="text" />
                            </p>
                        </div>
                        <div className="line">
                            <p className="item">비밀번호.</p>
                            <p className="text">
                                <input type="password" />
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="line">
                            <p className="item">연락처.</p>
                            <p className="text">
                                <input type="text" />
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
                                <input type="text" />
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
                    <li className="w100">
                        <div className="line">
                            <p className="item">첨부파일.</p>
                            <div className="text long">
                                <div className="filebox">
                                    <div className="default">
                                        {/* {postfiles && postfiles.file.map((i, index) => <div className="file-name" key={index}>{i.name}</div>)} */}
                                    </div>
                                    <label htmlFor="file">파일찾기</label>
                                    <input type="file" id="file" multiple />
                                </div>
                            </div>
                        </div>
                    </li>
                </ServiceEditTable>

                <div className="btnarea right">
                    <BorderBtn text="취소" click={onListHandler}><em></em></BorderBtn>
                    <YellowBtn text="확인" click={onListHandler}><em></em></YellowBtn>
                </div>
            </div>
        </ServiceEditLayout>
    )
}

export default ServiceEdit;