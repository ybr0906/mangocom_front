import React, { useRef } from "react";
import { Routes, Route } from 'react-router-dom';
import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-fade';


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
.slide{
    background:#ffbe2e;
}
.textarea{
    width:50%;
    position:relative;
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
    margin-left: auto;
    img{
        display:block;
        width:100%;
    }
}

@media screen and (max-width: 1500px) {
    .textarea{
        .slide{
        }
        .title{
            font-size:5vw;
        }
        ul{
            li{
                font-size:1.8vw;
            }
        }
    }
    .imgarea{
        width:50%;
        margin-right:0;
    }
}
@media screen and (max-width: 768px) {
    .wrap{
        flex-wrap:wrap;
    }
    .textarea{
        width:60%;
        .title{
            font-size:7vw;
            margin-bottom: 3vw;
        }
        ul{
            li{
                font-size:2.3vw;
            }
        }
    }
    .imgarea{
        width:40%;
    }
}
@media screen and (max-width: 600px) {
    .wrap{
        flex-wrap:wrap;
        align-items:center;
    }
    .textarea{
        width:100%;
        .slide{
            width:100%;
            text-align:center;
        }
    }
    .imgarea{
        width:100%;
        text-align:right;
        padding-top:10vw;
        img{
            max-width:45vw;
            display:inline-block;
        }
    }
}
@media screen and (max-width: 414px) {
    .textarea{
        .title{
            font-size:35px;
            margin-bottom: 15px;
        }
        ul{
            li{
                font-size:13px;
            }
        }
    }
    .imgarea{
        padding-top:30px;
        img{
            max-width:75vw;
        }
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
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    modules={[Autoplay, EffectFade]} effect="fade"
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    allowTouchMove={false}
                    >
                        <SwiperSlide className="slide">
                            <p className="title">HONEST <br/>REPAIR</p>
                            <ul>
                                <li>01. 최대한 고객님 앞에서 테스트하고 고장유무 확인 후 수리</li>
                                <li>02. 고장유무 확인 후 고객님께 안내후 수리진행</li>
                            </ul>
                        </SwiperSlide>
                        <SwiperSlide className="slide">
                            <p className="title">OUT OF ORDER<br/>FREE</p>
                            <ul>
                                <li>01. 동일증상에 한해 15일</li>
                                <li>02. 항상 최선을 다하는 A/S</li>
                            </ul>
                        </SwiperSlide>
                        <SwiperSlide className="slide">
                            <p className="title">NOTICE ON <br/>REPAIR</p>
                            <ul>
                                <li>01. 매장없는 업체어 절대 수리하지 말 것</li>
                                <li>02. 매장유무 확실히 확인할 것</li>
                            </ul>
                        </SwiperSlide>  
                    </Swiper>
                </div>
                <div className="imgarea">
                    <img src={mainVisual} alt="" />
                </div>
            </div>
        </VisualLayout>
    )
}

export default MainVisual;