import React, { useRef } from "react";
import { Routes, Route } from 'react-router-dom';
import styled from "styled-components";

const TitleCStyle = styled.h3`
font-size: 20px;
font-weight: 800;
margin-bottom: 15px;
`;

const TitleC = (props) => {
    return (
        <TitleCStyle className="titleC">{props.title}</TitleCStyle>
    )
}

export default TitleC;