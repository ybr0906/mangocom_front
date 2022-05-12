import React, { useState, useRef } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import styled from "styled-components";

//components
import YellowBtn from "../layout/YellowBtn";
import BorderBtn from "../layout/BorderBtn";

const ManagerModalLayout = styled.div`
    position:fixed;
    left:0;
    top:0;
    width:100%;
    height:100%;
    z-index: 500;
    .shadow{
        position:fixed;
        left:0;
        top:0;
        width:100%;
        height:100%;
        background:rgba(0,0,0,.3);
        z-index: 2;
    }
    .inner{
        background-color: #fff;
        position: absolute;
        left: 50%;
        top: 50%;
        z-index: 5;
        border-radius: 30px;
        text-align: center;
        transform: translate(-50%, -50%);
        .inner_wrap{
            text-align: left;
            padding:20px 30px 30px 30px;
            max-height: 80vh;
            overflow-y: auto;
        }
        .title{
            font-size: 18px;
            font-weight: 600;
            text-align: center;
            background-color: #ffc80b;
            padding: 20px 10px;
            border-radius: 30px 30px 0 0;
        }
        p{
            font-size: 18px;
            font-weight: 600;
            margin-top: 10px;
        }
        .btnarea{
            margin-top:30px;
        }
        .close{
            position: absolute;
            right: 20px;
            top: 20px;
            width: 30px;
            height: 30px;
            cursor:pointer;
            &:before, &:after{
                content:'';
                width:100%;
                height:3px;
                background:#333;
                border-radius: 3px;
                position: absolute;
                left: 0;
                bottom: 50%;
            }
            &:before{transform: rotate(45deg);}
            &:after{transform: rotate(-45deg);}
        }
        dl{
            display:flex;
            margin-top: 15px;
            align-items: center;
            dt{
                font-size: 17px;
                width: 70px;
                font-weight: 600;
                text-align: left;
            }
            dd{
                width:calc(100% - 70px);
                text-align: left;
                input{
                    width:100%;
                }
            }
        }
    }
`;

const ManagerModal = ({onManagerHandler}) => {
    return (
        <ManagerModalLayout>
            <div className="inner">
                <h4 className="title">관리자 로그인</h4>
                <div className="inner_wrap">
                    <dl>
                        <dt>아이디</dt>
                        <dd><input type="text" placeholder="아이디를 입력해주세요."/></dd>
                    </dl>
                    <dl>
                        <dt>비밀번호</dt>
                        <dd><input type="password" placeholder="비밀번호를 입력해주세요."/></dd>
                    </dl>       
                    <div className="btnarea center">
                        <YellowBtn text="로그인"><em></em></YellowBtn>
                    </div>   
                </div>
                <button className="close" onClick={onManagerHandler}></button>   
            </div>
            <div className="shadow"></div>
        </ManagerModalLayout>
    )
}

export default ManagerModal;