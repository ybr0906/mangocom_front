import React, { useRef } from "react";
import { Routes, Route } from 'react-router-dom';
import styled from "styled-components";

const BlackButton = styled.button`
    background-color:#000;
    font-size: 15px;
    font-weight: 600;
    padding: 10px 35px;
    border-radius: 30px;
    color:#fff;
    transition: background .4s;
    :hover{
        background-color:#8b8b8b;        
    }
    em{
        display:inline-block;
        transform: skew(-0.1deg);
    }

@media screen and (max-width: 1500px) {
    font-size:1.2vw;
    padding: 1vw 3vw;
    border-radius: 4vw;
}

@media screen and (max-width: 600px) {
    font-size: 2.5vw;
    padding: 1.5vw 4vw;
    border-radius: 5vw;
}

@media screen and (max-width: 414px) {
    font-size: 13px;
    padding:8px 20px;
    border-radius: 40px;
}
`;

const BlackBtn = (props) => {
    return (
        <BlackButton className="yellow_btn" onClick={props.click}><em>{props.text}</em></BlackButton>
    )
}

export default BlackBtn;