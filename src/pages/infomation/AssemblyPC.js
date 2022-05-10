import React, { useState, useRef } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import styled from "styled-components";

//components
import SubVisual from "../../components/layout/SubVisual";
import TitleA from "../../components/layout/TitleA";
import YellowBtn from "../../components/layout/YellowBtn";

const AssemblyPCLayout = styled.section``;


const AssemblyPC = () => {
    return (
        <AssemblyPCLayout>
            <div className="wrap">
                <TitleA title="조립 및 중고 PC판매"></TitleA>               
            </div>            
        </AssemblyPCLayout>
    )
}

export default AssemblyPC;