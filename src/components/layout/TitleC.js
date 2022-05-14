import React, { useRef } from "react";
import { Routes, Route } from 'react-router-dom';
import styled from "styled-components";

const TitleCStyle = styled.h3`
font-size: 20px;
font-weight: 800;
margin-bottom: 15px;

@media screen and (max-width: 1500px) {
    font-size:1.7vw;
    margin-bottom:1vw;
}

@media screen and (max-width: 600px) {
    font-size:2.7vw;
}
@media screen and (max-width: 414px) {
    font-size: 15px;
    margin-bottom: 10px;
}
`;

const TitleC = (props) => {
    return (
        <TitleCStyle className="titleC">{props.title}</TitleCStyle>
    )
}

export default TitleC;