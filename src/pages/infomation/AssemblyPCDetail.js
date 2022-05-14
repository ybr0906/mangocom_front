import React, { useState, useRef } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import styled from "styled-components";

//components
import SubVisual from "../../components/layout/SubVisual";
import TitleA from "../../components/layout/TitleA";
import YellowBtn from "../../components/layout/YellowBtn";
import TitleB from "../../components/layout/TitleB";
import OrangeBtn from "../../components/layout/OrangeBtn";
import BlackBtn from "../../components/layout/BlackBtn";

//image
import dobuleArrow from '../../styles/images/arrow_double.svg'
import rightArrow from '../../styles/images/arrow_right.svg'
import computer from '../../styles/images/computer.jpg'
import sample_detail from '../../styles/images/sample_detail.jpg'

const AssemblyPCDetailLayout = styled.section`
.btnarea{
    margin-top:70px;
    button{
        margin-right:5px;
        &:last-child{
            margin-right:0;
        }
    }
}

@media screen and (max-width: 1500px) {
    .btnarea{
        margin-top:5vw;
    }
}

@media screen and (max-width: 414px) {
    .btnarea{
        margin-top:40px;
    }
}
`;
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

@media screen and (max-width: 1500px) {
    .name{
        font-size: 2vw;
        padding: 2vw 0 3vw 0;
        em{
            font-size: 1vw;
            padding: 0.2vw 0.8vw;
            border-radius: 5vw;
        }
    }
    .top{
        .imgarea{
            width: 50%;
            img{
                display:block;
                min-width:100%;
            }
        }
        .info{
            width: 50%;
            padding-left:2vw;
            dl{
                margin-bottom: 1.3vw;
                dt{
                    font-size: 1.5vw;
                    width: 12vw;
                }
                dd{
                    font-size: 1.3vw;
                    width: calc(100% - 12vw);
                    padding-left:1.5vw;
                }
            }
        }
    }
}
@media screen and (max-width: 1050px) {
    .name{
        font-size: 2.5vw;
        padding: 4vw 0 3vw 0;
        em{
            font-size: 1.5vw;
            padding:0.5vw 1.4vw;
        }
    }
    .top{
        .imgarea{
            width: 40%;
        }
        .info{
            width: 60%;
            dl{
                margin-bottom: 1.8vw;
                dt{
                    font-size: 2vw;
                    width: 15vw;
                }
                dd{
                    font-size: 1.8vw;
                    width: calc(100% - 15vw);
                    padding-left:1.5vw;
                }
            }
        }
    }
}
@media screen and (max-width: 768px) {
    .name{
        font-size: 2.5vw;
        padding: 4vw 0 3vw 0;
        em{
            font-size: 1.5vw;
            padding:0.5vw 1.4vw;
        }
    }
    .top{
        .imgarea{
            width: 100%;
            img{
                min-width:auto;
                width:50%;
            }
        }
        .info{
            width: 100%;
            margin-top:4vw;
            padding-left:0;
            dl{
                margin-bottom: 1.8vw;
                dt{
                    font-size: 2vw;
                    width: 15vw;
                }
                dd{
                    font-size: 1.8vw;
                    width: calc(100% - 15vw);
                    padding-left:1.5vw;
                }
            }
        }
    }
}

@media screen and (max-width: 414px) {
    .name{
        font-size: 15px;
        padding: 22px 0 10px 0;
        em{
            font-size: 10px;
            padding: 3px 11px;
        }
    }
    .top{
        .imgarea{
            img{
                width:70%;
            }
        }
        .info{
            margin-top:20px;
            dl{
                margin-bottom: 8px;
                dt{
                    font-size: 13px;
                    width: 120px;
                }
                dd{
                    font-size: 12px;
                    width: calc(100% - 15vw);
                    padding-left: 5px;
                }
            }
        }
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
    max-width:100%;
}

@media screen and (max-width: 1500px) {
    margin-top:6vw;
    .titleB{
        font-size:3.5vw;
        margin-bottom:3vw;
    }
}

@media screen and (max-width: 414px) {
    margin-top:15px;
    .titleB{
        font-size:25px;
        margin-bottom:15px;
    }
}
`;

const AssemblyPCDetail = () => {
    const navigate = useNavigate();
    const onListHandler = (e) => {        
        navigate(-1);
        window.scrollTo({top:0, left:0});
    }

    const onEditHandler = (e) => {        
        navigate(`/informationuse/assemblypc/edit`);
        window.scrollTo({top:0, left:0});
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
                {/*관리자일경우 보이는 버튼*/}
                <BlackBtn text="수정" click={onEditHandler}></BlackBtn>
                <BlackBtn text="삭제"></BlackBtn>
                <YellowBtn text="목록" click={onListHandler}><em></em></YellowBtn>
            </div>
        </AssemblyPCDetailLayout>
    )
}

export default AssemblyPCDetail;