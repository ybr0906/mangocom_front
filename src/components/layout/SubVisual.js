import React, { useRef } from "react";
import { Routes, Route } from 'react-router-dom';
import styled from "styled-components";

//images
import Subvisual01 from '../../styles/images/sub_visual01.jpg'
import Subvisual02 from '../../styles/images/sub_visual02.jpg'
import Subvisual03 from '../../styles/images/sub_visual03.jpg'
import Subvisual04 from '../../styles/images/sub_visual04.jpg'

const SubVisualLayout = styled.section`
padding-top:80px;
background: #ccc;
height: 270px;
overflow:hidden;
display: flex;
align-items: center;
justify-content: center;
position: relative;
&:before{
    content:'';
    width:100%;
    height:100%;
    position:absolute;
    left:0;
    top:0;
    background: rgba(0,0,0,.3);
    z-index: 1;
}
&:after{
    content:'';
    width:100%;
    height:27%;
    position:absolute;
    left:0;
    top:0;
    background: rgba(255,255,255,.5);
    z-index: 1;
}
img{
    width: 100%;
    display: block;
    position: absolute;
    left: 0;
    top: 50%;
    transform:translateY(-50%);
    //background: #000;
}
p{
    font-size: 30px;
    text-align: center;
    color: #fff;
    position:relative;
    z-index:1;
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
    &:after{
        height:45px;
    }
    p{
        font-size:2.5vw;
    }
}
@media screen and (max-width: 414px) {
    padding-top: 42px;
    height: 160px;
    p{
        font-size:20px;
    }
}
`;


const SubVisual = () => {

    return (
        <SubVisualLayout>
            <img src={Subvisual01} alt="" />
            <div className="wrap">
                <p>회사소개</p>
            </div>
        </SubVisualLayout>
    )
}

export default SubVisual;