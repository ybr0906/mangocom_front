import React, { useState, useRef } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import styled from "styled-components";

//components
import SubVisual from "../../components/layout/SubVisual";
import TitleA from "../../components/layout/TitleA";
import YellowBtn from "../../components/layout/YellowBtn";
import TitleB from "../../components/layout/TitleB";
import OrangeBtn from "../../components/layout/OrangeBtn";

//image
import dobuleArrow from '../../styles/images/arrow_double.svg'
import rightArrow from '../../styles/images/arrow_right.svg'
import computer from '../../styles/images/computer.jpg'
import sample_detail from '../../styles/images/sample_detail.jpg'

const AssemblyPCDetailLayout = styled.section``;
const Info = styled.section`
    .name{
        font-size: 25px;
        font-weight: 800;
        padding: 37px 0 20px 0;
        position:relative;
        em{
            background: #ffc80b;
            color: #252525;
            font-size: 15px;
            padding: 4px 10px;
            border-radius: 20px;
            position: absolute;
            left: 0;
            top: 0;
            font-weight:500;
        }
    }
    .top{
        display:flex;
        align-items:center;
        justify-content:center;
        flex-wrap:wrap;
        .imgarea{
            width: 700px;
            display:flex;
            align-items:center;
            justify-content:center;
            img{
                display:block;
            }
        }
        .info{
            width: calc(100% - 700px);
            padding-left:50px;
            dl{
                display:flex;
                align-items:center;
                margin-bottom: 15px;
                dt{
                    font-size: 20px;
                    font-weight: 700;
                    width: 180px;
                }
                dd{
                    font-size: 17px;
                    width: calc(100% - 180px);
                    padding-left:20px;
                }
            }
        }
        .btnarea{
            width:100%;
        }
    }
`;
const Detail = styled.section`
margin-top:100px;
text-align:center;
.titleB{
    text-align:left;
    color: #ccc;
    font-weight: 900;
    font-size: 50px;
}
img{
    display:inline-block;
}
`;

const AssemblyPCDetail = () => {
    const navigate = useNavigate();
    const onListHandler = (e) => {        
        navigate(-1);
    }
    return (
        <AssemblyPCDetailLayout>
            <Info>
                <div className="name"><em>조립</em>인텔 7세대 카비레이크 i7-7700</div>
                <div className="top">
                    <div className="imgarea"><img src={computer} alt="" /></div>
                    <div className="info">
                        <dl>
                            <dt>CPU.</dt>
                            <dd>인텔 7세대 카비레이크 i7-7700(3.6Ghz)</dd>
                        </dl>
                        <dl>
                            <dt>M.Board.</dt>
                            <dd>ASRock Z270 EXTREME4</dd>
                        </dl>
                        <dl>
                            <dt>VGA.</dt>
                            <dd>NVIDIA Geforce GTX1070 8G</dd>
                        </dl>
                        <dl>
                            <dt>RAM.</dt>
                            <dd>삼성DDR4 32G</dd>
                        </dl>
                        <dl>
                            <dt>HDD.</dt>
                            <dd>ST/WD 1TB</dd>
                        </dl>
                        <dl>
                            <dt>SSD.</dt>
                            <dd>SSD 256G</dd>
                        </dl>
                        <dl>
                            <dt>POWER.</dt>
                            <dd>마이크로닉스 700W 85+</dd>
                        </dl>
                        <dl>
                            <dt>CASE.</dt>
                            <dd>COX AG 200X</dd>
                        </dl>
                        <dl>
                            <dt>CD-ROM.</dt>
                            <dd>LG DVD-M</dd>
                        </dl>
                        <dl>
                            <dt>제품의 특장점.</dt>
                            <dd>-</dd>
                        </dl>
                        <dl>
                            <dt>판매가.</dt>
                            <dd>2,410,000 원</dd>
                        </dl>
                    </div>
                    <div className="btnarea right">
                        <OrangeBtn text="조립문의"><em></em></OrangeBtn>
                    </div>
                </div>
            </Info>
            

            <Detail>
                <TitleB title="DETAIL"></TitleB> 
                <img src={sample_detail} alt="" />
            </Detail>
            <div className="btnarea right">
                <YellowBtn text="목록" click={onListHandler}><em></em></YellowBtn>
            </div>
        </AssemblyPCDetailLayout>
    )
}

export default AssemblyPCDetail;