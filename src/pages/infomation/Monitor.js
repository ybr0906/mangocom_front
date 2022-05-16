import React, { useState, useRef } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import styled from "styled-components";

//components
import SubVisual from "../../components/layout/SubVisual";
import TitleA from "../../components/layout/TitleA";
import YellowBtn from "../../components/layout/YellowBtn";
import OrangeBtn from "../../components/layout/OrangeBtn";

//images
import monitor from '../../styles/images/monitor_mock.png'

const MonitorLayout = styled.section`
.text{
    font-size: 23px;
    font-weight: 700;
    line-height: 1.8;
    position: absolute;
    left: 50%;
    top: 39%;
    transform: translate(-50%, -50%);
    text-align: center;
}
.btnarea{
    margin-top:80px;
}
.flex{
    position:relative;
}
.bg{
    width:100%;
    overflow:hidden;
    img{
        display:block;
        width:100%;
    }
}
@media screen and (max-width: 1500px) {
    .text{
        font-size: 1.6vw;
    }
    .btnarea{
        margin-top:5vw;
    }
}
@media screen and (max-width: 768px) {
    .text{
        font-size: 1.8vw;
    }
}
@media screen and (max-width: 414px) {
    .text{
        font-size: 10px;
        width:62%;
        line-height: 1.4;
        br{
            display:none;
        }
    }
    .btnarea{
        margin-top:40px;
    }
}
`;


const Monitor = () => {
    return (
        <MonitorLayout>
            <TitleA title="노트북 액정문의"></TitleA>      
            
            <div className="flex">
                <p className="text">모니터는 여러 브랜드에서 다양한 사이즈와 패널로 출시됩니다. 
                    <br/>그만큼 고장 증상이나 원인 역시 다양하므로 전문적인 기술이 필요합니다. 
                    <br/>MANGO COM에 문의 주시면 어떤 모니터, 어떤 증상이라도 빠르게 진단하고 해결해드립니다.
                </p>
                <div className="bg"><img src={monitor} alt="" /></div>
            </div>  
            
            <div className="btnarea center">
                <OrangeBtn text="서비스 신청 접수"><em></em></OrangeBtn>
            </div>
        </MonitorLayout>
    )
}

export default Monitor;