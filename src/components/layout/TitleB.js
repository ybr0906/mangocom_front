import React, { useRef } from "react";
import { Routes, Route } from 'react-router-dom';
import styled from "styled-components";

const TitleBStyle = styled.h3`
font-size: 25px;
font-weight: 800;
margin-bottom: 15px;
color: #159135;
`;

const TitleB = (props) => {
    return (
        <TitleBStyle className="titleB">{props.title}</TitleBStyle>
    )
}

export default TitleB;