import React, { useState, useRef } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import styled from "styled-components";

//components
import SubVisual from "../../components/layout/SubVisual";
import TitleA from "../../components/layout/TitleA";
import YellowBtn from "../../components/layout/YellowBtn";
import OrangeBtn from "../../components/layout/OrangeBtn";

const MonitorLayout = styled.section`
.text{
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
}
.btnarea{
    margin-top:80px;
}
`;


const Monitor = () => {
    return (
        <MonitorLayout>
            <div className="wrap">
                <TitleA title="노트북 액정문의"></TitleA>      
                
                <p className="text">모니터는 여러 브랜드에서 다양한 사이즈와 패널로 출시됩니다.
                    <br/>그만큼 고장 증상이나 원인 역시 다양하므로 전문적인 기술이 필요합니다.
                    <br/>MANGO COM에 문의 주시면 어떤 모니터, 어떤 증상이라도 빠르게 진단하고 해결해드립니다.
                </p>
                <div className="btnarea center">
                    <OrangeBtn text="서비스 신청 접수"><em></em></OrangeBtn>
                </div>
            </div>            
        </MonitorLayout>
    )
}

export default Monitor;