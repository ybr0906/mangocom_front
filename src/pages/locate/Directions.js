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
        align-items:flex-start;
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
            display:flex;
            flex-wrap:wrap;
            span{
                display:inline-block;
                margin-right:10px;
            }
        }
    }
}
@media screen and (max-width: 1500px) {
.info{
    margin-top: 2vw;
    padding-left: 10vw;
    &:after{
        width:3.5vw;
        height:3.5vw;
        background-size:100%;
        left: 3vw;
        top: 0.5vw;
    }
    dl{
        margin-top: 1vw;
        dt{
            font-size: 1.5vw;
            width: 8vw;
        }
        dd{
            width: calc(100% - 8vw);
            font-size: 1.3vw;
        }
    }
} 
}
@media screen and (max-width: 768px) {
.info{
    dl{
        dt{
            font-size: 1.8vw;
        }
        dd{
            font-size: 1.7vw;
        }
    }
} 
}

@media screen and (max-width: 414px) {
    .info{
        margin-top: 15px;
        padding-left: 0;
        &:after{
            display:none;
        }
        dl{
            margin-top:10px;
            dt{
                font-size: 13px;
                width:45px;
            }
            dd{
                font-size: 12px;
                width:calc(100% - 45px);
            }
        }
    } 
    }
`;

const Directions = () => {
    return (
        <DirectionsLayout className="sub_section">
            {/* <SubVisual></SubVisual> */}
            <div className="wrap">
                <TitleA title="????????? ???"></TitleA>
                <div className="maparea">
                    <img src={map} alt="" />
                </div>
                <div className="info">
                    <dl>
                        <dt>??????.</dt>
                        <dd>????????? ????????? ????????? ???????????? 1019?????? 8, 1??? 101???(?????????)</dd>
                    </dl>
                    <dl>
                        <dt>??????.</dt>
                        <dd>
                            <span>010-8009-4613, </span>
                            <span>010-9009-7747</span>
                            {/* <span>010-3959-6434</span> */}
                        </dd>
                    </dl>
                    {/* <dl className="w50">
                        <dt>Email.</dt>
                        <dd>aaa@gmail.com</dd>
                    </dl> */}
                </div>
            </div>
        </DirectionsLayout>
    )
}

export default React.memo(Directions);