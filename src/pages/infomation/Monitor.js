import React, { useState, useRef } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import styled from "styled-components";

//components
import SubVisual from "../../components/layout/SubVisual";
import TitleA from "../../components/layout/TitleA";
import YellowBtn from "../../components/layout/YellowBtn";

const MonitorLayout = styled.section``;


const Monitor = () => {
    return (
        <MonitorLayout>
            <div className="wrap">
                <TitleA title="노트북 액정문의"></TitleA>               
            </div>            
        </MonitorLayout>
    )
}

export default Monitor;