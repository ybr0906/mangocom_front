import React, { useRef } from "react";
import { Routes, Route } from 'react-router-dom';
import styled from "styled-components";

const SubVisualLayout = styled.section`
padding-top:80px;
background: #ccc;
height: 270px;
overflow:hidden;
display: flex;
align-items: center;
justify-content: center;
position: relative;
img{
    width: 100%;
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    //background: #000;
    height: 100%;
}
p{
    font-size: 30px;
    text-align: center;
    color: #fff;
}
@media screen and (max-width: 1500px) {
    padding-top:5vw;
    height:20vw;
    p{
        font-size:2vw;
    }
}
@media screen and (max-width: 768px) {
    padding-top: 6vw;
    height: 22vw;
    p{
        font-size:2.5vw;
    }
}
@media screen and (max-width: 414px) {
    padding-top: 42px;
    height: 120px;
    p{
        font-size:16px;
    }
}
`;


const SubVisual = () => {

    return (
        <SubVisualLayout>
            <img src="" alt="" />
            <div className="wrap">
                <p>회사소개</p>
            </div>
        </SubVisualLayout>
    )
}

export default SubVisual;