import React, { useRef } from "react";
import { Routes, Route } from 'react-router-dom';
import styled from "styled-components";

//component

//images
import ArrowRight from '../../styles/images/arrow_right.svg'

const StatusLayout = styled.section`
background-color:#f7f7f7;
padding:65px 0;
.titleB{
    font-size:28px;
    color:#000;
    font-weight:600;
}
.more_btn{
    font-size:16px;
    color:#606060;
    padding-right:20px;
    position: absolute;
    right: 10px;
    top: 18px;
    cursor:pointer;
    transition:text-decoration .5s;
    transform: skew(-0.1deg);
    &:after{
        content:'';
        width:8px;
        height:13px;
        background:url(${ArrowRight})center no-repeat;
        position:absolute;
        right:0;
        top:4px;
    }
    &:hover{
        text-decoration:underline;
    }
}

@media screen and (max-width: 1500px) {
    padding:3vw 0;
    .titleB{
        font-size:2vw;
    }
    .more_btn{
        padding-right:2vw;
        right:50px;
        top:1vw;
        font-size:1.4vw;
        &:after{
            background-size:100%;
            width: 0.8vw;
            height: 1.4vw;
            top:0.3vw;
        }
    }
}
@media screen and (max-width: 768px) {
    padding:5vw 0;
    .titleB{
        font-size:2.2vw;
    }
    .more_btn{
        right:3vw;
        font-size:2vw;
        padding-right:3vw;
        &:after{
            width: 1vw;
            height: 1.4vw;
            top: 0.6vw;
        }
    }
}
@media screen and (max-width: 414px) {
    padding:30px 0;
    .titleB{
        font-size:15px;
    }
    .more_btn{
        font-size:14px;
        padding-right:14px;
        right:15px;
        &:after{
            width: 6px;
            height: 10px;
            top: 4px;
        }
    }
}
`;

const CardTable = styled.section`
display:flex;
flex-wrap:wrap;
margin-top: 45px;
    .box{
        margin-right:30px;
        width:calc((100% - 60px) / 3);
        background-color:#fff;
        border-radius:20px;
        position:relative;
        padding:30px 25px;
        cursor:pointer;
        border: 2px solid #fff;
        transition:box-shadow .5s, border .5s;
        &:hover{
            border: 2px solid #ffc80b;
            box-shadow: 5px 5px 15px rgb(0 0 0 / 15%);
        }
        &:nth-child(3n){
            margin-right:0;
        }
        &:nth-child(n+4){
            margin-top:27px;
        }
        .writer, .date{
            font-size:14px;
            color:#9c9c9c;
            transform: skew(-0.1deg);
        }
        .title{
            font-size: 16px;
            color: #333;
            font-weight: 600;
            line-height: 1.7;
            margin: 25px 0 30px 0;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            transform: skew(-0.1deg);
        }
        .status_line{
            position:absolute;
            right:30px;
            bottom:25px;
            .status{
                display: inline-block;
                padding: 6px 12px;
                font-size: 14px;
                border-radius: 20px;
                transform: skew(-0.1deg);
                &.wait{
                    background: #9c9c9c;
                    color: #fff;
                }
                &.complete{
                    background: #ffc80b;
                    color: #252525;
                }
                
            }
        }
    }

@media screen and (max-width: 1500px) {
    margin-top:3vw;
    .box{
        margin-right:2vw;
        width:calc((100% - 4vw) / 3);
        border-radius:1.5vw;
        padding:2vw;
        &:nth-child(n+4){
            margin-top:2vw;
        }
        .writer, .date{
            font-size:1.1vw;
        } 
        .title{
            font-size:1.2vw;
            margin: 2vw 0 2.5vw 0;
        }
        .status_line{
            right:2vw;
            bottom:2vw;
            .status{
                padding: 0.5vw 1vw;
                font-size: 1.1vw;
                border-radius: 5vw;
            }
        }
    }
}
@media screen and (max-width: 900px) {
    .box{
        margin-right: 1vw;
        width: calc((100% - 2vw) / 3);
        &:nth-child(n+4){
            margin-top:1vw;
        }
    }
}

@media screen and (max-width: 768px) {
    .box{
        margin-right: 1vw;
        width: calc((100% - 1vw) / 2);
        &:nth-child(3n){
            margin-right:1vw;
        }
        &:nth-child(2n){
            margin-right:0;
        }
        &:nth-child(n+3){
            margin-top:1vw;
        }
        .writer, .date{
            font-size:1.5vw;
        } 
        .title{
            font-size:1.7vw;
        }
        .status_line{
            .status{
                padding: 0.7vw 1.5vw;
                font-size: 1.5vw;
            }
        }
    }
}

@media screen and (max-width: 414px) {
    margin-top:20px;
    .box{
        margin-right: 0;
        width: 100%;
        border-radius:15px;
        padding:17px;
        &:nth-child(3n){
            margin-right:0;
        }
        &:nth-child(2n){
            margin-right:0;
        }
        &:nth-child(n+2){
            margin-top:10px;
        }
        .writer, .date{
            font-size:11px;
        } 
        .title{
            font-size:12px;
            margin:11px 0 14px 0;
        }
        .status_line{
            right:17px;
            bottom:17px;
            .status{
                padding: 4px 9px;
                font-size: 11px;
            }
        }
    }
}
`;
//임시데이터
const data = [
    {
        key:1,
        title: '3월 중순쯤 msi 크리에이터 노트북 배터리 교체한 사람입니다.! 잘 쓰고있었는데 이번 주말에 노트북을 아예…',     
        writer:'MSI스트레*',
        date:'2022-05-02',
        status:'접수대기'
    },
    {
        key:2,
        title: '3월 중순쯤 msi 크리에이터 노트북 배터리 교체한 사람입니다.! 잘 쓰고있었는데 이번 주말에 노트북을 아예…',     
        writer:'MSI스트레*',
        date:'2022-05-02',
        status:'접수대기'
    },
    {
        key:3,
        title: '3월 중순쯤 msi 크리에이터 노트북 배터리 교체한 사람입니다.! 잘 쓰고있었는데 이번 주말에 노트북을 아예…',     
        writer:'MSI스트레*',
        date:'2022-05-02',
        status:'접수완료'
    },
    {
        key:4,
        title: '3월 중순쯤 msi 크리에이터 노트북 배터리 교체한 사람입니다.! 잘 쓰고있었는데 이번 주말에 노트북을 아예…',     
        writer:'MSI스트레*',
        date:'2022-05-02',
        status:'접수완료'
    },
    {
        key:5,
        title: '3월 중순쯤 msi 크리에이터 노트북 배터리 교체한 사람입니다.! 잘 쓰고있었는데 이번 주말에 노트북을 아예…',     
        writer:'MSI스트레*',
        date:'2022-05-02',
        status:'접수완료'
    },
    {
        key:6,
        title: '3월 중순쯤 msi 크리에이터 노트북 배터리 교체한 사람입니다.! 잘 쓰고있었는데 이번 주말에 노트북을 아예…',     
        writer:'MSI스트레*',
        date:'2022-05-02',
        status:'접수완료'
    }
]
const MainStatus = () => {
    return (
        <StatusLayout>
        <div className="wrap">
            <h3 className="titleB">A/S 실시간 접수 및 처리현황</h3>
            <CardTable>
                {
                    data && data.map(i=>{
                        return(
                            <div className="box" key={i.key} data-key={i.key}>
                                <p className="writer">{i.writer}님</p>
                                <p className="title"><span>{i.title}</span></p>
                                <p className="date">{i.date}</p>
                                <p className="status_line">{i.reply == "" || i.reply == null ? <span className='status wait'>접수대기</span>: <span className='status complete'>접수완료</span>}</p>
                            </div>
                        )
                    })
                }
            </CardTable>
            <span className="more_btn">more</span>
        </div>
        </StatusLayout>
    )
}

export default MainStatus;