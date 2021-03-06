import React, { useRef } from "react";
import { Routes, Route } from 'react-router-dom';
import styled from "styled-components";

const OrangeButton = styled.button`
    background:linear-gradient(to bottom, #ffc80b, #ffa90b);
    font-size: 21px;
    font-weight: 800;
    padding: 20px 41px;
    border-radius: 42px;
    transition: box-shadow .4s;
    :hover{
        box-shadow:0 0 20px rgba(255,200,11,.5);
    }
    em{
        display:inline-block;
        color: #fff;
        transform: skew(-0.1deg);
    }

    @media screen and (max-width: 1500px) {
        font-size: 1.7vw;
        padding: 1.5vw 3.5vw;
        border-radius: 4vw;
    }
    @media screen and (max-width: 414px) {
        font-size: 16px;
        padding: 12px 30px;
        border-radius: 40px;
    }
`;

const OrangeBtn = (props) => {
    return (
        <OrangeButton className="orange_btn" onClick={props.click}><em>{props.text}</em></OrangeButton>
    )
}

export default OrangeBtn;