import React, { useRef } from "react";
import { Routes, Route } from 'react-router-dom';
import styled from "styled-components";

const SubVisualLayout = styled.section`
padding-top:80px;
background: #ccc;
height: 270px;
`;


const SubVisual = () => {

    return (
        <SubVisualLayout>
            <div className="wrap">
                <img src="" alt="" />
                <p></p>
            </div>
        </SubVisualLayout>
    )
}

export default SubVisual;