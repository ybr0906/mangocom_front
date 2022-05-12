import React, { useRef } from "react";
import { Routes, Route } from 'react-router-dom';
import styled from "styled-components";

const TitleAStyle = styled.h3`
text-align: center;
font-size: 35px;
font-weight: 800;
margin-bottom: 70px;
`;

const TitleA = (props) => {
    return (
        <TitleAStyle className="titleA">{props.title}</TitleAStyle>
    )
}

export default TitleA;