import React, { useRef } from "react";
import { Routes, Route } from 'react-router-dom';
import styled from "styled-components";

const VisualLayout = styled.section`
background-color:#ffbe2e;
height:100vh;
display: flex;
align-items: center;
.wrap{
    width:100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.textarea{
    position:relative;
    width: 50%;
    .slide{
        position:absolute;
        left:0;
        top:-152px;
        opacity:0;
        &.on{
            opacity:1;
        }
    }
    .title{
        font-family: 'Orbitron', sans-serif;
        font-size:70px;
        color:#333;
        margin-bottom: 30px;
    }
    ul{
        li{
            font-size:25px;
            color:#fff;
            line-height: 1.8;
        }
    }
}
.imgarea{
    width: 60%;
    overflow: hidden;
    margin-right: -10%;
    img{
        display:block;
        width:100%;
    }
}
`;

//images
import mainVisual from '../../styles/images/main_visual04.png'

const MainVisual = () => {
    return (
        <VisualLayout>
            <div className="wrap">
                <div className="textarea">
                    <div className="slide on">
                        <p className="title">HONEST <br/>REPAIR</p>
                        <ul>
                            <li>01. 최대한 고객님 앞에서 테스트하고 고장유무 확인 후 수리</li>
                            <li>02. 고장유무 확인 후 고객님께 안내후 수리진행</li>
                        </ul>
                    </div>
                    <div className="slide">
                        <p className="title">OUT OF ORDER<br/>FREE</p>
                        <ul>
                            <li>01. 동일증상에 한해 15일</li>
                            <li>02. 항상 최선을 다하는 A/S</li>
                        </ul>
                    </div>
                    <div className="slide">
                        <p className="title">NOTICE ON <br/>REPAIR</p>
                        <ul>
                            <li>01. 매장없는 업체어 절대 수리하지 말 것</li>
                            <li>02. 매장유무 확실히 확인할 것</li>
                        </ul>
                    </div>                    
                </div>
                <div className="imgarea">
                    <img src={mainVisual} alt="" />
                </div>
            </div>
        </VisualLayout>
    )
}

export default MainVisual;