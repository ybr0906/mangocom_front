import React, { useRef } from "react";
import { Routes, Route } from 'react-router-dom';
import styled from "styled-components";

const SubVisualLayout = styled.section`
padding-top:80px;
background: #ccc;
height: 270px;
margin-bottom: 80px;
`;

const SubVisual = () => {
    return (
        <SubVisualLayout>
            <div className="wrap">
            서브비주얼
            </div>
        </SubVisualLayout>
    )
}

export default SubVisual;