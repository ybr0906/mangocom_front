import React, { useState, useRef } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import styled from "styled-components";

//components
import SubVisual from "../../components/layout/SubVisual";
import TitleA from "../../components/layout/TitleA";
import YellowBtn from "../../components/layout/YellowBtn";

//image
import map from '../../styles/images/locate.jpg'
import map_icon from '../../styles/images/map.png'


const DirectionsLayout = styled.section`
.maparea{
    img{
        display:block;
        width:100%;
    }
}
.info{
    margin-top: 25px;
    display: flex;
    flex-wrap: wrap;
    padding-left: 150px;
    position:relative;
    &:after{
        content:'';
        width:46px;
        height:46px;
        background-size:100%;
        background:url(${map_icon})left top no-repeat;
        position:absolute;
        left: 42px;
        top: 9px;
    }
    dl{
        margin-top: 15px;
        width:100%;
        display:flex;
        align-items:center;
        &:first-child{
            margin-top:0;
        }
        &.w50{
            width:50%;
        }
        dt{
            font-size: 20px;
            font-weight: 700;
            width: 100px;
        }
        dd{
            width: calc(100% - 100px);
            font-size: 17px;
        }
    }
}
`;

const Directions = () => {
    return (
        <DirectionsLayout className="sub_section">
            <SubVisual></SubVisual>
            <div className="wrap">
                <TitleA title="오시는 길"></TitleA>      
                <div className="maparea">
                    <img src={map} alt="" />
                </div>
                <div className="info">
                    <dl>
                        <dt>위치.</dt>
                        <dd>경기도 수원시 장안구 파장동 606-5번지 1층</dd>
                    </dl>
                    <dl className="w50">
                        <dt>전화.</dt>
                        <dd>000-000-0000</dd>
                    </dl>
                    <dl className="w50">
                        <dt>Email.</dt>
                        <dd>aaa@gmail.com</dd>
                    </dl>
                </div>
            </div>            
        </DirectionsLayout>
    )
}

export default React.memo(Directions);