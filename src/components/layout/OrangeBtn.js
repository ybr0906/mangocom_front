import React, { useRef } from "react";
import { Routes, Route } from 'react-router-dom';
import styled from "styled-components";

const OrangeButton = styled.button`
    background:linear-gradient(to bottom, #ffc80b, #ffa90b);
    font-size: 21px;
    font-weight: 800;
    padding: 20px 41px;
    border-radius: 42px;
    transition: background .4s;
    :hover{
        box-shadow:0 0 20px rgba(255,255,255,.5);
    }
    em{
        display:inline-block;
        color: #fff;
        transform: skew(-0.1deg);
    }
`;

const OrangeBtn = (props) => {
    return (
        <OrangeButton className="orange_btn" onClick={props.click}><em>{props.text}</em></OrangeButton>
    )
}

export default OrangeBtn;