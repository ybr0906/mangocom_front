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
    @media screen and (max-width: 1500px) {
        font-size:1.2vw;
        padding: 0.9vw 3vw;
        border-radius: 4vw;
    }
    
    @media screen and (max-width: 600px) {
        font-size: 2.5vw;
        padding: 1.2vw 4vw;
        border-radius: 5vw;
    }
    
    @media screen and (max-width: 414px) {
        font-size: 13px;
        padding:6px 20px;
        border-radius: 40px;
    }
`;

const BorderBtn = (props) => {
    return (
        <BorderButton className="border_btn" onClick={props.click}><em>{props.text}</em></BorderButton>
    )
}

export default BorderBtn;