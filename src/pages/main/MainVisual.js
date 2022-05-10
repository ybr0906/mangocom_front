import React, { useRef } from "react";
import { Routes, Route } from 'react-router-dom';
import styled from "styled-components";

const VisualLayout = styled.section`
background-color:#ffbe2e;
height:100vh;
display: flex;
align-items: center;
.wrap{
    width:100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.textarea{
    .title{
        font-family: 'Orbitron', sans-serif;
        font-size:70px;
        color:#333;
        margin-bottom: 30px;
    }
    ul{
        li{
            font-size:25px;
            color:#fff;
            line-height: 1.8;
        }
    }
}
`;

//images
import mainVisual from '../../styles/images/main_visual.png'

const MainVisual = () => {
    return (
        <VisualLayout>
            <div className="wrap">
                <div className="textarea">
                    <p className="title">COMPUTER <br/>SERVICE</p>
                    <ul>
                        <li>01. 매장없는 업체에 절대 수리하지 말것</li>
                        <li>02. 매장 유무 확실히 확인할 것</li>
                    </ul>
                </div>
                <div className="imgarea">
                    <img src={mainVisual} alt="" />
                </div>
            </div>
        </VisualLayout>
    )
}

export default MainVisual;