import React, { useRef } from "react";
import { Routes, Route } from 'react-router-dom';
import styled from "styled-components";

const TitleAStyle = styled.h3`
text-align: center;
font-size: 35px;
font-weight: 800;
margin-bottom: 70px;
@media screen and (max-width: 1500px) {
    font-size:3vw;
    margin-bottom:5vw;
}
@media screen and (max-width: 600px) {
    font-size:4vw;
}
@media screen and (max-width: 414px) {
    font-size:22px;
    margin-bottom:35px;
}
`;

const TitleA = (props) => {
    return (
        <TitleAStyle className="titleA">{props.title}</TitleAStyle>
    )
}

export default TitleA;