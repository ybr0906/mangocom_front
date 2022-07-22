import React, { useRef, useEffect, useState } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import axios from "axios";

//component
import CheckAlert from '../../components/modal/CheckAlert'

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

const MainStatus = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [checkAlertModal, setcheckAlertModal] = useState(false);
    const service_id = useRef();

    const onDetatilHandler = (e) => {
        service_id.current = e.currentTarget.dataset.key;
        setcheckAlertModal(true);
        if (localStorage.getItem("mangocomSession")) {
            navigate(`/service/${service_id.current}`);
        }
    }

    useEffect(() => {
        axios.get(`${process.env.host}/service/index`).then(({ data }) => {
            setData(data);
        })
    }, [])

    return (
        <StatusLayout>
            <div className="wrap">
                <h3 className="titleB">서비스 문의</h3>
                <CardTable>
                    {
                        data && data.map(i => {
                            return (
                                <div className="box" key={i.service_id} data-key={i.service_id} onClick={onDetatilHandler}>
                                    <p className="writer">{i.name}님</p>
                                    <p className="title"><span>{i.symptom}</span></p>
                                    <p className="date">{i.reg_date}</p>
                                    <p className="status_line">{i.progress == 0 ? <span className='status wait'>접수대기</span> : <span className='status complete'>접수완료</span>}</p>
                                </div>
                            )
                        })
                    }
                </CardTable>
                <span className="more_btn" onClick={() => {
                    navigate('/service')
                    window.scrollTo({ top: 0, left: 0 });
                }}>more</span>
            </div>
            {checkAlertModal && <CheckAlert service_id={service_id.current} type="detail" setcheckAlertModal={setcheckAlertModal}></CheckAlert>}
        </StatusLayout>
    )
}

export default MainStatus;