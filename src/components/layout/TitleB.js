import React, { useRef } from "react";
import { Routes, Route } from 'react-router-dom';
import styled from "styled-components";

const TitleBStyle = styled.h3`
font-size: 25px;
font-weight: 800;
margin-bottom: 15px;
color: #159135;

@media screen and (max-width: 1500px) {
    font-size:2.2vw;
    margin-bottom:1.2vw;
}
@media screen and (max-width: 600px) {
    font-size:3.2vw;
}
@media screen and (max-width: 414px) {
    font-size:17px;
    margin-bottom:10px;
}
`;

const TitleB = (props) => {
    return (
        <TitleBStyle className="titleB">{props.title}</TitleBStyle>
    )
}

export default TitleB;