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
        span{
            display:block;
            font-family: 'Orbitron',sans-serif;
            overflow:hidden;
            em{
                display:block;
                transform: translateY(100%);
                transition:transform .8s;
                transition-delay:.2s;
            }
        }
    }
    ul{
        li{
            font-size:25px;
            font-weight: 600;
            color: #070f44;
            line-height: 1.8;
            overflow:hidden;
            em{
                display:block;
                transform: translateY(100%);
                transition:transform .8s;
                transition-delay:.5s;
            }
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

.swiper-slide-active{
    .title{
        span{
            em{
                transform: translateY(0);
            }
        }
    }
    ul{
        li{
            em{
                transform: translateY(0);
            }
        }
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
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        allowTouchMove={false}
                    >
                        <SwiperSlide className="slide">
                            <p className="title">
                                <span><em>HONEST</em></span>
                                <span><em>REPAIR</em></span>
                            </p>
                            <ul>
                                <li><em>01. 최대한 고객님 앞에서 테스트하고 고장유무 확인 후 수리</em></li>
                                <li><em>02. 고장유무 확인 후 고객님께 안내후 수리진행</em></li>
                            </ul>
                        </SwiperSlide>
                        <SwiperSlide className="slide">
                            <p className="title">
                                <span><em>OUT OF ORDER</em></span>
                                <span><em>FREE</em></span>
                            </p>
                            <ul>
                                <li><em>01. 동일증상에 한해 15일</em></li>
                                <li><em>02. 항상 최선을 다하는 A/S</em></li>
                            </ul>
                        </SwiperSlide>
                        <SwiperSlide className="slide">
                            <p className="title">
                                <span><em>NOTICE ON </em></span>
                                <span><em>REPAIR</em></span>
                            </p>
                            <ul>
                                <li><em>01. 매장없는 업체에 절대 수리하지 말 것</em></li>
                                <li><em>02. 매장유무 확실히 확인할 것</em></li>
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