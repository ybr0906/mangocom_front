import React from "react";
import styled from "styled-components";


const ServiceModalLayout = styled.div`
    position:fixed;
    left:0;
    top:0;
    width:100%;
    height:100%;
    z-index: 500;
    .shadow{
        position:fixed;
        left:0;
        top:0;
        width:100%;
        height:100%;
        background:rgba(0,0,0,.3);
        z-index: 2;
    }
    .inner{
        background-color: #fff;
        position: absolute;
        left: 50%;
        top: 50%;
        z-index: 5;
        border-radius: 30px;
        text-align: center;
        transform: translate(-50%, -50%);
        width: 80vw;
        max-width: 900px;
        .title{
            font-size: 18px;
            font-weight: 600;
            text-align: center;
            background-color: #ffc80b;
            padding: 20px 10px;
            border-radius: 30px 30px 0 0;
        }
        .inner_wrap{
            text-align: left;
            padding:20px 30px 30px 30px;
            max-height: 80vh;
            overflow-y: auto;
            .bigA{
                font-size: 17px;
                font-weight: 800;
                margin-bottom: 15px;
                margin-top: 20px;
                &:first-child{
                    margin-top:0;
                }
            }
            .big{
                font-size: 16px;
                font-weight: 600;
                margin-bottom: 15px;
                margin-top: 15px;
                transform: skew(-0.1deg);
            }
            .small{
                font-size: 14px;
                font-weight: 600;
                margin-bottom: 5px;
                transform: skew(-0.1deg);
                position:relative;
                &.num01{
                    padding-left: 23px;
                    &:before{
                        content: attr(data-num);
                        position: absolute;
                        left: 0;
                        top: 2px;
                        width: 13px;
                        height: 13px;
                        border: 1px solid #000;
                        border-radius: 50%;
                        font-size: 11px;
                        font-weight: 800;
                        text-align: center;
                    }
                }
                &.num02{
                    padding-left: 14px;
                    &:before{
                        content: attr(data-num);
                        position: absolute;
                        left: 0;
                        top: 0;
                        font-size: 12px;
                    }

                }
                &.line{
                    padding-left: 11px;
                    margin-left: 14px;
                    &:before{
                        content: '-';
                        position: absolute;
                        left: 0;
                        top: 0;
                        font-size: 12px;
                    }
                }
            }
        }
        .close{
            position: absolute;
            right: 20px;
            top: 20px;
            width: 30px;
            height: 30px;
            cursor:pointer;
            &:before, &:after{
                content:'';
                width:100%;
                height:3px;
                background:#333;
                border-radius: 3px;
                position: absolute;
                left: 0;
                bottom: 50%;
            }
            &:before{transform: rotate(45deg);}
            &:after{transform: rotate(-45deg);}
        }
    }

@media screen and (max-width: 1500px) {

    .inner{
        border-radius:2vw;
        .title{
            font-size: 1.5vw;
            padding: 1.3vw 0.8vw;
            border-radius:2vw 2vw 0 0;
        }
        .inner_wrap{
            padding:2vw;
            .bigA{
                font-size: 1.3vw;
                margin-bottom: 1vw;
                margin-top: 2vw;
            }
            .big{
                font-size: 1.2vw;
                margin-bottom: 1vw;
                margin-top: 1vw;
            }
            .small{
                font-size: 1vw;
                margin-bottom: 0.2vw;
                &.num01{
                    padding-left: 1.7vw;
                    &:before{
                        top: 0;
                        width: 1.1vw;
                        height: 1.1vw;
                        font-size: 0.9vw;
                    }
                }
                &.num02{
                    padding-left: 1.2vw;
                    &:before{
                        font-size: 1vw;
                    }

                }
                &.line{
                    padding-left: 1vw;
                    margin-left: 1vw;
                    &:before{
                        font-size: 1vw;
                    }
                }
            }
        }
        .close{
            right: 2vw;
            top: 1.5vw;
            width: 2vw;
            height: 2vw;
        }
    }
}

@media screen and (max-width: 768px) {
    .inner{
        .title{
            font-size: 2.5vw;
            padding: 1.8vw 0.8vw;
        }
        .inner_wrap{
            padding:3vw;
            .bigA{
                font-size: 2vw;
            }
            .big{
                font-size: 1.9vw;
            }
            .small{
                font-size: 1.7vw;
                &.num01{
                    padding-left: 19px;
                    &:before{
                        width: 12px;
                        height: 12px;
                        font-size: 10px;
                    }
                }
                &.num02{
                    padding-left: 15px;
                    &:before{
                        font-size: 10px;
                    }

                }
                &.line{
                    padding-left: 10px;
                    margin-left: 10px;
                    &:before{
                        font-size: 10px;
                    }
                }
            }
        }
        .close{
            top: 2.5vw;
            width:3vw;
        }
    }
}

@media screen and (max-width: 414px) {
    .inner{
        border-radius:15px;
        .title{
            font-size: 16px;
            padding: 10px 20px;
            border-radius: 15px 15px 0 0;
        }
        .inner_wrap{
            padding:15px;
            .bigA{
                font-size: 14px;
                margin-bottom: 10px;
                margin-top: 20px;
            }
            .big{
                font-size: 13px;
                margin-top:5px;
                margin-bottom:5px;
            }
            .small{
                font-size: 11px;
            }
        }
        .close{
            right: 11px;
            top: 12px;
            width: 20px;
            height: 20px;
        }
    }
}
`;

const ServiceModal = ({ onServiceHandler }) => {
    console.log('??????')
    return (
        <ServiceModalLayout>
            <div className="inner">
                <h4 className="title">????????????</h4>
                <div className="inner_wrap">
                    <p className="bigA">??? 1 ??? ??? ??? </p>

                    <p className="big">???1???(??????)</p>
                    <p className="small">??? ????????????(?????? '??????')???  MANGO COM(?????? ????????? ?????????)??? ?????? ??????(?????? '??????')?????? ????????? ???????????? ???????????? ???????????? ??? ????????? ?????? ?????? ????????? ?????? ????????? ????????? ??????????????? ???????????? ???????????? ?????????. </p>

                    <p className="big">???2???(??????????????? ?????? ??? ??????)</p>
                    <p className="small num01" data-num="1"> ??? ????????? ??? ????????? ????????? ????????? ???????????? ???????????? ??????????????? ?????? ?????? ???????????? ????????? ????????? ?????? ??? ????????? ???????????? ??????????????? ????????? ???????????? ???????????? ?????????????????? ??? ????????? ???????????????. <br />????????? ????????? ?????????????????? ?????? ??? ??? ???????????? </p>
                    <p className="small num01" data-num="2">????????? ???????????? ????????? ????????? ???????????? ??? ????????? ????????? ??? ?????????, ????????? ????????? ???????????? ?????? ?????? ?????? ????????? ???????????????.</p>

                    <p className="big">??? 3 ??? (????????? ??????)</p>
                    <p className="small num01" data-num="1">????????? ????????? ???????????? ??? ????????? ???????????? ??? ????????? ???????????? ????????? ????????? ???????????? ?????????????????????, ?????????????????????,??????????????? ?????????????????? ?????? ?????? ??? ?????? ??????????????? ????????? ????????????. </p>

                    <p className="big">??? 4 ??? (????????? ??????) </p>
                    <p className="small num01" data-num="1">??? ???????????? ???????????? ????????? ????????? ????????? ????????????. </p>
                    <p className="small num02" data-num="1.">'????????????'?????? ?????? ???????????? ???????????? ???????????? ???????????? ???????????? ???????????????. </p>
                    <p className="small num02" data-num="2.">'????????????'?????? ?????? ????????? ????????? ???????????? ????????? ???????????? ?????? ?????? ?????? ????????? ????????????. </p>
                    <p className="small num02" data-num="3.">'???????????????(ID)'??? ?????? ??????????????? ????????? ????????? ????????? ????????? ????????? ???????????? ????????? ???????????? ???????????? ????????? ????????? ????????????. </p>
                    <p className="small num02" data-num="4.">'????????????'??? ?????? ??????????????? ?????? ?????? ?????????????????? ????????? ???????????? ?????? ???????????? ??????????????? ??????????????? ????????? ??????????????? ????????? ????????? ????????? ????????? ????????????. </p>
                    <p className="small num02" data-num="5.">'??????'??? ?????? ?????? ?????? ????????? ??????????????? ???????????? ?????? ????????????. </p>
                    <p className="small num01" data-num="2">??? ???????????? ???????????? ????????? ????????? ???1????????? ????????? ?????? ??????????????? ???????????? ??? ???????????? ???????????? ????????? ?????? ????????????. </p>

                    <p className="bigA">??? 2 ??? ????????????</p>
                    <p className="big">??? 5 ??? (?????? ????????? ??????) </p>
                    <p className="small num01" data-num="1">??????????????? ??????????????? ?????? ????????? ??? ???????????? ????????? ?????? ????????? ??????????????? ????????? ????????? ???????????? ???????????????. </p>
                    <p className="small num01" data-num="2">??? ??????????????? ?????? ????????? ????????? ??????????????? '??????' ????????? ??????????????? ??????????????? ?????????. </p>

                    <p className="big">??? 6 ??? (????????? ?????? ??????) </p>
                    <p className="small num01" data-num="1">??? ???????????? ??????????????? ?????? ??????????????? ???????????? ???????????? ??????(??????, ????????? ???)??? ???????????? ???????????? ????????? ??? ????????? ??????????????? </p>
                    <p className="small num01" data-num="2">?????? ????????? ????????? ?????? ????????? ????????? ?????????????????? ?????????????????? ???????????? ????????? ???????????? ???????????? ?????? ????????? ????????? ????????? ????????? ??? ????????????. </p>
                    <p className="small num01" data-num="3">??????????????? ????????? ??????????????? ????????? ??????????????? </p>
                    <p className="small num01" data-num="4">????????? ??????(?????? ??????  ???????????????)??? ???????????? ??????????????? ??? ????????? ID??? ?????????????????? ????????? ??? ??? ?????????, ??????????????? ?????? ????????? ?????? ??? ????????????. </p>
                    <p className="small num01" data-num="5">????????? ??? ???????????? ???????????? ????????? ????????? ???????????? ???????????? ???????????? ????????? ????????? ??? ??? ????????????. </p>

                    <p className="big">??? 7 ??? (??????????????? ?????? ??? ??????) </p>
                    <p className="small">????????? ??????????????? ????????? ?????? ?????? ????????? ???????????? ??????????????? ???????????? ?????? ??????????????????????????? ???????????????. ????????? ??????????????? ?????? ??? ????????? ???????????? ???????????? ??? ????????? ???????????? ??????????????? ???????????????. ?????????, ????????? ???????????? ??????????????? ?????? ????????? ????????? ????????? ????????? ????????? ?????? ????????????. </p>

                    <p className="big">??? 8 ??? (?????? ????????? ????????? ??????) </p>
                    <p className="small num01" data-num="1">????????? ??? 6?????? ????????? ?????? ????????????????????? ????????? ?????? ????????? ?????? ????????? ????????? ?????? ????????? ????????? ????????? ???????????????. </p>
                    <p className="small num01" data-num="2">????????? ??????????????? ???????????? ????????? ????????? ???????????? ?????? ?????????. </p>
                    <p className="small num02" data-num="1.">?????? ????????? ?????? ?????? ????????? ????????? ???????????? </p>
                    <p className="small num02" data-num="2.">?????? ????????? ??????????????? ??????????????? ???????????? ???????????? ?????? </p>
                    <p className="small num02" data-num="3.">??????????????? ?????????????????? ?????? ????????? ?????? PC??????, ????????? ???????????? ?????????????????? ???????????? ???????????? </p>
                    <p className="small num02" data-num="4.">????????? ?????? ?????? ?????? ??????????????? ????????? ???????????? ????????? ?????? </p>
                    <p className="small num02" data-num="5.">???????????? ?????????????????? PC??????, ????????? ???????????? ?????? ???????????? ???????????? ?????? ?????? </p>
                    <p className="small num02" data-num="6.">?????? ????????? ?????? ????????????????????? ???????????? ??????????????? </p>
                    <p className="small num01" data-num="3"> ????????? ????????? ??????????????? ?????? ??? ?????? ???????????? ???????????? ??? ????????? ????????? ?????? ??????????????? ????????? ????????? ????????? ????????? ??? ????????????. </p>
                    <p className="small num02" data-num="1.">????????? ????????? ????????? ?????? ?????? </p>
                    <p className="small num02" data-num="2.">????????? ????????? ????????? ?????? ?????? </p>
                    <p className="small num02" data-num="3.">?????? ????????? ??????????????? ??????????????? ????????? ?????? </p>
                    <p className="small num01" data-num="4">????????? ????????? ????????? ??????????????? ?????????????????? ????????? ???????????? ???????????? ?????? ???????????? ???????????? ?????? ????????? ?????????. </p>
                    <p className="small num01" data-num="5">????????? ????????????????????? ??????????????? ???????????? ????????? ????????? ?????? ?????? ????????? ????????? ??? ????????????. </p>

                    <p className="bigA">??? 3 ??? ?????? ???????????? ????????? ??????</p>
                    <p className="big">??? 9 ???(????????? ????????? ??????) </p>
                    <p className="small num02" data-num="1.">????????? ???????????? ?????? ???????????? ???????????? ????????? ??????????????? ????????? ???????????? ?????? ??????????????? ?????????. ??????, ?????? ????????? ????????? ???????????? ???????????? ??? ????????? ??????????????? ??????, ???????????? ?????? ??????????????? ??????????????? ?????????. </p>
                    <p className="small num02" data-num="2.">????????? ????????? ????????? ??????????????????????????? ????????? ??????????????? ??????????????? ????????? ????????? ????????????. ???, ????????? ????????? ?????? ????????? ????????? ?????? ???????????? ???????????? ?????? ??? ????????????. </p>
                    <p className="small num02" data-num="3.">????????? ??? 2 ?????? ???????????? ???????????? ?????? ?????? ????????? ????????? ???????????? ??????????????? ?????? ????????? ??????????????? ??? 3 ????????? ??????????????? ?????? ???????????? ????????? ?????? ???????????? ??????????????? ???????????? ????????? ????????? ?????????. </p>
                    <p className="small num02" data-num="4.">????????? ??????????????? ???????????? ???????????? ????????? ????????? ????????? ????????? ???????????? ????????? ????????? ???????????? ?????? ?????? ?????? ???????????????. ??????, ????????????, ???????????? ?????? ????????? ???????????? ???????????? ??? ???????????? ?????? ??????????????? ????????? ??? ????????????. </p>
                    <p className="small num02" data-num="5.">????????? ??????????????? ??????, ??????????????? ?????? ??? ?????? ??? ???????????? ???????????? ?????? ??? ???????????? ?????? ???????????? ????????? ???????????? ?????????. </p>
                    <p className="small num02" data-num="6.">????????? ????????? ???????????? ????????? ???????????? ?????? ???????????? ?????? ????????? ??????????????? ?????? ??????????????? ???????????? ?????? ????????? ??? ?????? ???????????? ????????? ????????? ???????????? ????????? ?????? ??? ??? ????????????. ??? ?????? ????????? ????????? ????????? ??????????????? ????????? ????????? ????????? ??????????????? ???????????? ???????????? ??????????????? ????????? ????????? ??? ?????????, ????????? ?????? ????????? ?????? ????????? ????????? ???????????? ?????? ????????? ???????????????. </p>

                    <p className="big">??? 10 ???(????????? ????????? ??????) </p>
                    <p className="small num02" data-num="1.">????????? ???????????? ????????? ??? ????????? ????????? ?????? ????????? ?????????. </p>
                    <p className="small line">?????? ????????? ID ??? ??????????????? ???????????? ???????????? ?????? </p>
                    <p className="small line">???????????? ???????????? ?????? ????????? ????????? ???????????? ?????? ?????? ??????,??????,??????, 2?????? ?????? ?????? ????????? ??????,??????,??????,??????,??????,?????? ?????? ??????????????? ???3????????? ???????????? ?????? </p>
                    <p className="small line">????????? ????????? ?????????????????? ???????????? ?????? ?????? </p>
                    <p className="small line">????????? ?????????, ???3?????? ????????? ??? ?????? ????????? ???????????? ?????? </p>
                    <p className="small line">???????????? ??? ??????????????? ???????????? ????????? ??????,??????,??????,?????? ?????? ???????????? ???????????? ?????? </p>
                    <p className="small line">????????? ??????????????? ??????????????? ???????????? ?????? </p>
                    <p className="small line">???????????? ????????? ????????? ??????????????? ?????? ?????? ?????? ??? ????????? ??????????????? ????????? ???????????? ??????????????? ?????? ?????? ???????????? ?????? </p>
                    <p className="small line">???????????? ????????? ????????? ????????? ??? ?????? ????????? ??????????????? ???????????? ????????? ????????? ????????? ????????? ???????????? ?????? </p>
                    <p className="small line">???????????????????????????, ????????????????????? ??? ????????? ?????? ?????????????????? ??????????????? ?????? ?????? </p>
                    <p className="small line">???????????????????????? ??????, ?????? ?????? ??????????????? ?????? ????????? ?????? ?????? </p>
                    <p className="small line">?????? ??????????????? ???????????? ?????? </p>
                    <p className="small num02" data-num="2.">????????? ??? ????????? ???????????? ????????? ????????? ???????????? ?????? ??????????????? ??????????????? ?????? ????????? ??????????????? ????????? ????????? ????????? ??????????????? ?????????. </p>
                    <p className="small num02" data-num="3.">????????? ????????? ???????????? ?????? ????????? ?????? ???????????? ???????????? ??????????????? ??? ??? ?????????, ?????? ???????????? ????????? ????????? ????????? ????????? ???????????? ????????????. </p>
                    <p className="small num02" data-num="4.">????????? ?????? ?????? ??????????????? ???????????? ????????? ????????? ????????????????????? ?????????. </p>
                    <p className="small num02" data-num="5.">????????? ???????????? ????????????, ?????? ??????????????? ????????? ???????????? ??????, ?????? ??? ??? ?????????, ?????? ????????? ????????? ??? ????????????. </p>
                    <p className="small num02" data-num="6.">????????? ????????? ?????? ??????????????? ???????????? ?????? ?????? ?????? ?????? ??? ????????? ????????? ??? ????????????. </p>
                    <p className="small num02" data-num="7.">????????? ??????????????? ??????????????? ???????????? ?????? ?????????(ID)?????? ???????????? ????????? ??????????????? ?????? ?????? ?????? ????????? ???????????? ???????????? ?????? ????????? ???????????? ???????????? ????????? ????????? ???????????? ?????????. </p>
                    <p className="small num02" data-num="8.">????????? ??????????????? ???????????? ???????????? ?????? ?????? ????????? ???????????? ???????????? ??????????????? ???????????? ????????? ??????????????? ????????? ??? ????????????. </p>
                    <p className="small num02" data-num="9.">????????? ??????????????? ???????????? ??????????????? ????????? ???????????? ????????? ???????????? ?????? ????????? ??????????????? ?????????. </p>

                    <p className="bigA">??? 4 ??? ???????????? ?????? </p>
                    <p className="big">??? 11 ??? (????????? ?????? ??????) </p>
                    <p className="small num01" data-num="1">????????? ????????? ????????? ????????? ?????? ????????? ????????? ????????? ?????? ??? ????????????, 1??? 24?????? ????????? ???????????? ?????????. ???, ????????? ????????? ????????????, ?????? ??? ????????? ?????? ????????? ?????? ????????? ????????? ???????????? ??????????????? ??? ?????????, ???????????? ?????? ???????????? ?????? ????????? ??????????????? ?????? ?????? ????????? ???????????????. </p>
                    <p className="small num01" data-num="2">????????? ????????? ????????? ??? ?????? ????????? ?????? ?????????????????? ??????(????????????????????? ??????,???????????? ???????????????, ??????????????? ???)??? ??????????????? ??????????????? ??????(PC????????????, ????????????????????? ???)??? ??????,????????? ?????? ??????????????? ?????? ???????????? ???????????? ????????????. </p>

                    <p className="big">??? 12 ??? (?????????ID ??????) </p>
                    <p className="small num01" data-num="1"> ?????????(ID)??? ??????????????? ?????? ?????? ??????????????? ???????????? ????????????. </p>
                    <p className="small num01" data-num="2">????????? ?????????(ID)??? ???????????? ????????? ?????? ????????? ????????? ????????? ??? ????????? ???????????? ?????????. </p>

                    <p className="big">??? 13 ??? (???????????? ??????) </p>
                    <p className="small">????????? ?????? ??? ?????? ???????????? ??????????????? ????????? ???????????? ?????? ??????????????? ?????? ?????? ?????? ????????? ??? ??? ????????????. </p>
                    <p className="small line">?????? ?????? ?????? ??? 3????????? ?????? ????????? ????????? ????????? ??????????????? ????????? ?????? </p>
                    <p className="small line">???????????? ??? ??????????????? ???????????? ????????? ??????????????? ??????????????? ?????? </p>
                    <p className="small line">???????????? ?????? ????????? ???????????? ????????? ??????</p>
                    <p className="small line">????????? ???????????? ?????? ????????? ?????? </p>
                    <p className="small line">????????? ??????????????? ??????????????? ???????????? ????????? ?????? </p>
                    <p className="small line">?????? ????????? ?????? ??? 3?????? ????????? ??? ?????? ????????? ???????????? ????????? ?????? </p>
                    <p className="small line">???????????? ????????? ????????? ????????? ???????????????, ????????? ????????? ???????????? ?????? ?????? </p>
                    <p className="small line">?????? ??????????????? ??????????????? ???????????? ?????? </p>

                    <p className="big">??? 14 ??? (???????????? ?????? ?????????) </p>
                    <p className="small num01" data-num="1">????????? ???????????? ???????????? ????????? ????????? ?????? ??????, ???????????? ?????? ??? ???????????? ????????? ????????? ??????????????? ????????? ??? ????????????. </p>
                    <p className="small num01" data-num="2">????????? ????????? ??????????????? ???????????? ????????? ?????? ?????????, ?????? ????????? ?????? ??? 13??? ??? ?????? ??????????????? ???????????? ?????? ???????????? ?????? ??????????????? ?????? ?????? ?????? ????????? ??? ????????????. </p>

                    <p className="big">??? 15 ??? (????????? ??????) </p>
                    <p className="small num01" data-num="1">????????? ????????? ????????? ?????? ?????? ????????? ????????? ???????????? ????????? ????????? ????????? ?????????????????? ?????????????????? ???????????? ???????????? ????????? ??? ????????????. </p>

                    <p className="big">??? 16 ??? (???????????? ??? ??????????????? ??????)  </p>
                    <p className="small num01" data-num="1">????????? ???????????? ???????????? ????????? ??? ?????? ????????? ??????????????? ????????? ??????????????? ?????? ?????????????????? ????????????. ????????? ????????? ????????? ???????????? ??????????????? ?????? ???????????????. </p>
                    <p className="small num01" data-num="2">????????? ??????????????? ???????????? ????????? ??? ???????????? ?????? ???????????? ??????????????? ????????? ??????????????? ?????? ?????? ????????? ???????????? ???????????? ????????? ????????? ?????? ????????? ?????? ????????????.</p>

                    <p className="bigA">??? 5 ??? ?????? ?????? ??? ?????? ?????? </p>
                    <p className="big">??? 17 ??? (?????? ?????? ??? ??????) </p>
                    <p className="small">????????? ??????????????? ??????????????? ?????? ????????? ?????? ????????? ??????????????? "????????????"??? ???????????? ?????? ???????????????. </p>

                    <p className="big">??? 18 ??? (????????? ????????????) </p>
                    <p className="small num01" data-num="1">????????? ????????? ????????? ??????????????? ????????? ??? ?????? ??? 10??? ????????? ???????????????, ?????? ??? ?????? ???????????? ?????? ????????? ????????? ????????? ??? ????????????. </p>
                    <p className="small line">??????????????? ???????????? ????????? ID ??? ?????? ?????? </p>
                    <p className="small line">??? ??????????????? ?????? ????????? ?????????, ????????? ????????? ????????? ?????? </p>
                    <p className="small line">?????? ???????????? ????????? ????????? ????????? ??? ?????? </p>
                    <p className="small line">???????????? ??????????????? ??? ?????? ??????????????? ?????? ????????? ?????? ?????? </p>
                    <p className="small line">?????? ??????????????? ?????? </p>
                    <p className="small num02" data-num="1.">???????????????????????? ??????????????? ?????? ?????? </p>
                    <p className="small num02" data-num="2.">?????????????????? ???????????? ?????? ?????? ??? 7?????? ???????????? ???????????? ????????? ?????? </p>
                    <p className="small num02" data-num="3.">???????????? ????????? ????????? ???????????? ?????? ????????? ????????? ?????? </p>
                    <p className="small num02" data-num="4.">???????????? ?????? ?????? ?????? ??????????????? mp3??? ?????? ?????? </p>
                    <p className="small line">???????????? ????????? ??????????????? ???????????? ????????? ??????????????? ????????? ???????????? ??????????????? ??? ???????????? ?????? </p>
                    <p className="small num01" data-num="2">?????? ???????????? ????????? ?????? ???????????? ???????????? ???????????? ????????? ????????? ????????? ?????? ?????? ?????? ????????? ????????? ????????????, ??????, ???????????? ?????? ?????? ??????????????? ??????????????? ?????? ?????? ??? ????????????.</p>

                    <p className="bigA">??? 6 ??? ???????????? ??? ????????????</p>
                    <p className="big">??? 19 ??? (??????????????? ?????? ??? ??????) </p>
                    <p className="small num02" data-num="1.">????????? ?????????????????? ????????? ?????? ????????? ??????????????? ???????????????????????? ????????? ?????? ?????? ????????? ????????? ????????? ????????? ??????????????? ?????? ???????????????. </p>
                    <p className="small num02" data-num="2.">????????? ??????????????? ????????? ??? ?????? ???????????? ?????? ?????? ????????? ????????? ??????????????? ?????? ????????????????????? ????????? ?????? ??? 1 ?????? ????????? ????????????. </p>
                    <p className="small num02" data-num="3.">????????? ???????????? ???????????? ?????? ?????? ??????????????? ????????? ????????? ?????? ?????? ????????? ??? 3 ???????????? ???????????? ??????, ????????? ????????? ????????? ??????????????? ?????? ?????? ?????? ????????? ????????? ????????? ????????? ??????????????? ??????, ?????? ????????? ???????????? ?????? ????????? ?????? ????????? ?????? ????????? ????????? ????????? ?????? ????????? ??????????????? ?????????. </p>

                    <p className="big">??? 20 ??? (????????????) </p>
                    <p className="small num01" data-num="1">????????? ????????????, ?????? ??? ?????? ?????? ????????? ?????????????????? ????????? ???????????? ????????? ??? ?????? ???????????? ????????? ????????? ?????? ????????? ???????????????. </p>
                    <p className="small num01" data-num="2">????????? ???????????? ???????????? ???????????? ???????????? ??????????????? ??????????????? ???????????? ???????????? ????????? ????????? ?????? ????????? ???????????????. </p>
                    <p className="small num01" data-num="3">????????? ???????????? ????????? ??????, ??????, ????????????, ?????? ??? ???????????? ????????? ????????? ????????? ?????? ????????? ???????????????. </p>
                    <p className="small num01" data-num="4">????????? ????????? ??????????????? ?????? ????????? ????????? ?????? ?????? ????????? ????????? ????????? ?????? ????????????. </p>
                    <p className="small num01" data-num="5">????????? ???????????? ????????? ????????? ?????? ????????? ????????? ??????, ?????? ????????? ???????????? ??? ???????????? ????????? ???????????? ???????????? ????????? ????????? ?????? ????????? ?????? ????????????. </p>
                    <p className="small num01" data-num="6">????????? ????????? ???????????? ????????? ?????? ??????, ??????, ????????? ?????????, ????????? ??? ????????? ????????? ????????? ?????? ????????????. </p>
                    <p className="small num01" data-num="7">????????? ?????? ????????? ?????? ????????? ??? 3 ??? ???????????? ???????????? ????????? ?????? ????????????(????????? ?????? ??????)?????? ??? ????????? ???????????? ???????????? ????????? ????????? ????????? ???????????? ???????????????. </p>
                    <p className="small num01" data-num="8">???????????? ???????????? ????????? ???????????? ???????????? ????????? ??????????????? ????????? ????????? ????????? ?????? ????????????. </p>

                    <p className="big">??? 21 ??? (????????? ??? ????????????) </p>
                    <p className="small num01" data-num="1">??? ????????? ???????????? ?????? ????????? ????????????????????? ??? ??????????????? ???????????? ????????????. </p>
                    <p className="small num01" data-num="2">????????? ????????? ???????????? ????????? ??????????????? ????????? ????????? ??????, ???????????? ????????? ????????? ?????? ????????? ????????? ?????? ????????? ????????? ??? ????????????. </p>
                    <p className="small num01" data-num="3">????????? ???????????? ????????? ????????? ?????? ????????? ???????????? ?????? ????????? ?????? ???????????? ???????????? ????????? ?????? ???????????? ?????????. </p>

                    <p className="bigA">[??? ???] </p>
                    <p className="small">??? ????????? 2017??? 02??? 02????????? ???????????????. </p>
                </div>
                <button className="close" onClick={onServiceHandler}></button>
            </div>
            <div className="shadow"></div>
        </ServiceModalLayout>
    )
}

export default ServiceModal;