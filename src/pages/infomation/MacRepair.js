import React, { useState, useRef } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import styled from "styled-components";

//components
import SubVisual from "../../components/layout/SubVisual";
import TitleA from "../../components/layout/TitleA";
import OrangeBtn from "../../components/layout/OrangeBtn";

//images
import macbook from '../../styles/images/macbook.svg'
import imac from '../../styles/images/imac.png'
import monitor from '../../styles/images/monitor.png'
import keyboard from '../../styles/images/keyboard.png'
import m_board from '../../styles/images/m_board.png'
import ssd from '../../styles/images/ssd.png'
import etc from '../../styles/images/etc.png'
import power from '../../styles/images/power.png'
import ram from '../../styles/images/ram.png'

const MacRepairLayout = styled.section`
@media screen and (max-width: 980px) {
    .wrap{
        padding:0 2vw !important;
    }
}
@media screen and (max-width: 414px) {
    .wrap{
        padding:0 !important;
    }
}
`;

const MacLayout = styled.article`
display:block;
text-align:center;
margin: 0 auto;
margin-bottom: 100px;
position:relative;
width: 100%;
max-width: 1200px;
&.imac{
    max-width:1100px;
    margin-top: 200px;
    .textbox{
        top: 37%;
    }
}
img{
    display:block;
    width:100%;
}
li{
    &>img{
        max-width: 60px;
        margin-bottom: 15px;
        display: inline-block;
    }
}
.textbox{
    position:absolute;
    width: 100%;
    left:50%;
    top:50%;
    transform:translate(-50%, -50%);
    .text{
        font-size: 30px;
        color: #fff;
        font-weight: 700;
        margin-bottom: 35px;
    }
    .title{
        font-size: 30px;
        color:#ff9000;
        font-weight: 700;
        margin-bottom: 45px;
    }
}


.service_category{
    display:flex;
    align-items:center;
    justify-content:center;
    margin-bottom: 50px;
    li{
        margin: 0 15px;
        p{
            font-size: 19px;
            font-weight: 700;
            color: #fff;
        }
    }
    
}

@media screen and (max-width: 1500px) {
    margin-bottom:5vw;
    &.imac{
        margin-top:10vw;
    }
    .textbox{
        .text{
            font-size:2vw;
            margin-bottom:2vw;
        }
        .title{
            font-size:2vw;
            margin-bottom:3vw;
        }
    }
    .service_category{
        margin-bottom:4vw;
        li{
            &>img{
                max-width:5vw;
                margin-bottom:1vw;
            }
            p{
                font-size: 1.3vw;
            }
        }
    }
}
@media screen and (max-width: 980px) {
    &.macbook{
        .textbox{
            top:47%;
        }
        .service_category{
            width:70%;
            margin:0 auto;
            margin-bottom:2vw;
            flex-wrap:wrap;
        }
    }

    &.imac{
        .service_category{
            width:85%;
            margin:0 auto;
            margin-bottom:2vw;
            flex-wrap:wrap;
        }
    }
    .textbox{
        .text{
            font-size: 2.5vw;
            margin-bottom: 1vw;
        }
        .title{
            font-size:2.5vw;
            margin-bottom:1vw;
        }

    }
    .service_category{
        margin-bottom:2vw;
        li{
            margin:1vw 2vw;
            p{
                margin-bottom:0.5vw;
            }
        }
    }
}

@media screen and (max-width: 640px) {
    .service_category{
        li{
            margin:0.5vw 1vw;
            &>img {
                max-width: 4vw;
                margin-bottom: 0.5vw;
            }
            p{
                font-size:1.2vw;
            }
        }
    }
}
@media screen and (max-width: 414px) {
    &.macbook{
        .service_category{
            width:80%;
        }   
    }
    .textbox{
        .text{
            font-size:3vw;
            margin-bottom:3vw;
        }
        .title{
            font-size:4vw;
            margin-bottom:3vw;
        }
    }
    .service_category{
        margin-bottom:4vw !important;
        li{
            margin:0.5vw 2vw;
            &>img {
                display:none;
            }
            p{
                font-size:1.2vw;
            }
        }
    }

}
`;

const BoxText = styled.article`
.title{
    font-size: 33px;
    color: #333;
    font-weight: 700;
    margin-bottom: 35px;
    text-align: center;
}
.box{
    background-color:#f2f2f2;
    padding: 50px 40px;
    display:flex;
    align-items:center;
    justify-content:center;
    p{
        font-size: 23px;
        margin-bottom: 25px;
        position: relative;
        padding-left: 57px;
        &:last-child{
            margin-bottom:0;
        }
        &:before{
            content: attr(data-num);
            font-size: 31px;
            color: #ccc;
            position: absolute;
            left: 0;
            top: -6px;
            font-weight: 600;
            letter-spacing: -1px;
            font-family: 'Poppins', sans-serif;
        }
    }
}
@media screen and (max-width: 1500px) {
    .title{
        font-size:2vw;
        margin-bottom:2vw;
    }
    .box{
        padding:4vw 3vw;
        p{
            font-size: 1.5vw;
            margin-bottom: 1.5vw;
            padding-left:3.5vw;
            &:before{
                font-size:2vw;
                top:-0.3vw;
            }
        }
    }
}

@media screen and (max-width: 980px) {
    .title{
        font-size:2.5vw;
    }
    .box{
        padding:3vw;
        p{
            font-size:1.6vw;
            margin-bottom:1.2vw;
        }
    }
}

@media screen and (max-width: 414px) {
    .title{
        font-size:3.5vw;
    }
    .box{
        p{
            font-size:2vw;
            padding-left:4vw;

            &:before{
                font-size:2.5vw;
                top:0;
            }
        }
    }
}
`;

const MacRepair = () => {
    return (
        <MacRepairLayout>
            <div className="wrap">
                <TitleA title="맥북, 아이맥 수리(애플)"></TitleA> 
                <MacLayout className="macbook">
                    <img src={macbook} alt="" className="bg" />
                    <div className="textbox">
                        <p className="text">새롭게 태어나는 당신의 MACBOOK- 경이롭다</p>
                        <p className="title">MACBOOK AS</p>
                        <ul className="service_category">
                            <li>
                                <img src={monitor} alt="" />
                                <p>액정수리</p>
                            </li>
                            <li>
                                <img src={power} alt="" />
                                <p>배터리수리</p>
                            </li>
                            <li>
                                <img src={keyboard} alt="" />
                                <p>키보드수리</p>
                            </li>
                            <li>
                                <img src={m_board} alt="" />
                                <p>메인보드수리</p>
                            </li>
                            <li>
                                <img src={m_board} alt="" />
                                <p>메인보드교체</p>
                            </li>
                            <li>
                                <img src={ssd} alt="" />
                                <p>SSD 업그레이드</p>
                            </li>
                            <li>
                                <img src={etc} alt="" />
                                <p>기타수리</p>
                            </li>
                        </ul>
                        <OrangeBtn text="MACBOOK AS 신청하기"><em></em></OrangeBtn>
                    </div>
                </MacLayout>       

                <MacLayout className="imac">
                    <img src={imac} alt="" className="bg" />
                    <div className="textbox">
                        <p className="text">보다 더 안전하게 가까워진다 <br/>컴퓨터를 뛰어넘는 iMac</p>
                        <p className="title">iMac AS</p>
                        <ul className="service_category">
                            <li>
                                <img src={monitor} alt="" />
                                <p>액정수리</p>
                            </li>
                            <li>
                                <img src={power} alt="" />
                                <p>파워수리</p>
                            </li>   
                            <li>
                                <img src={m_board} alt="" />
                                <p>메인보드수리</p>
                            </li>
                            <li>
                                <img src={ssd} alt="" />
                                <p>SSD 업그레이드</p>
                            </li>
                            <li>
                                <img src={ram} alt="" />
                                <p>RAM 업그레이드</p>
                            </li>
                            <li>
                                <img src={etc} alt="" />
                                <p>기타수리</p>
                            </li>
                        </ul>
                        <OrangeBtn text="iMac AS 신청하기"><em></em></OrangeBtn>
                    </div>
                </MacLayout>  

                <BoxText>
                    <p className="title">MANGO COM MAC 서비스센터가 지키는 약속</p>
                    <div className="box">
                        <div>
                            <p data-num="01.">정확학 수리로 고객님들의 불편을 최소화하겠습니다.</p>
                            <p data-num="02.">명확한 수리비용으로 만족도를 최대화하겠습니다.</p>
                            <p data-num="03.">신속한 수리로 고객님이 물어보기 전에 미리 연락드리겠습니다.</p>
                            <p data-num="04.">친절한 자세로 고객님을 대하겠습니다.</p>
                            <p data-num="05.">철저한 고객정보 보안을 책임지겠습니다.</p>
                        </div>
                    </div>
                </BoxText>     
            </div>            
        </MacRepairLayout>
    )
}

export default MacRepair;