import React, { useState, useRef } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import styled from "styled-components";

//components
import SubVisual from "../../components/layout/SubVisual";
import TitleA from "../../components/layout/TitleA";
import YellowBtn from "../../components/layout/YellowBtn";

const PCRepairLayout = styled.section``;


const PCRepair = () => {
    return (
        <PCRepairLayout>
            <div className="wrap">
                <TitleA title="컴퓨터수리(출장AS)"></TitleA>               
            </div>            
        </PCRepairLayout>
    )
}

export default PCRepair;