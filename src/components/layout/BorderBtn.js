import React, { useRef } from "react";
import { Routes, Route } from 'react-router-dom';
import styled from "styled-components";

const BorderButton = styled.button`
    background-color:#fff;
    border:2px solid #ffc80b;
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

const BorderBtn = (props) => {
    return (
        <BorderButton className="border_btn" onClick={props.click}><em>{props.text}</em></BorderButton>
    )
}

export default BorderBtn;