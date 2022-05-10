import React, { useRef } from "react";
import { Routes, Route } from 'react-router-dom';
import styled from "styled-components";

const YellowButton = styled.button`
    background-color:#ffc80b;
    font-size: 15px;
    font-weight: 600;
    padding: 10px 35px;
    border-radius: 30px;
    transition: background .4s;
    :hover{
        background-color:#ffe383;        
    }
    em{
        display:inline-block;
        transform: skew(-0.1deg);
    }
`;

const YellowBtn = (props) => {
    return (
        <YellowButton className="yellow_btn" onClick={props.click}><em>{props.text}</em></YellowButton>
    )
}

export default YellowBtn;