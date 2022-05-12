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
`;

const BlackBtn = (props) => {
    return (
        <BlackButton className="yellow_btn" onClick={props.click}><em>{props.text}</em></BlackButton>
    )
}

export default BlackBtn;