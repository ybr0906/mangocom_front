import React, { useState, useRef } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import styled from "styled-components";

//components
import YellowBtn from "../layout/YellowBtn";
import BorderBtn from "../layout/BorderBtn";

const DeleteAlertLayout = styled.div`
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
        padding: 30px;
        border-radius: 30px;
        text-align: center;
        transform: translate(-50%, -50%);
        p{
            font-size: 18px;
            font-weight: 600;
            margin-top: 10px;
        }
        .btnarea{
            margin-top:30px;
        }
    }
`;

const DeleteAlert = (props) => {
    const navigate = useNavigate();
    const onDeleteHandler = (e) => {    
        navigate(`/service`);
    }
    return (
        <DeleteAlertLayout>
            <div className="inner">
                <p>삭제하시겠습니까?</p>             
                <div className="btnarea right">
                    <BorderBtn text="취소" click={onDeleteHandler}><em></em></BorderBtn>
                    <YellowBtn text="확인" click={onDeleteHandler}><em></em></YellowBtn>
                </div>      
            </div>
            <div className="shadow"></div>
        </DeleteAlertLayout>
    )
}

export default DeleteAlert;