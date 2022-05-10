import React, { useState, useRef } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import styled from "styled-components";

//components
import YellowBtn from "../../components/layout/YellowBtn";

//image
import dobuleArrow from '../../styles/images/arrow_double.svg'
import rightArrow from '../../styles/images/arrow_right.svg'

const ServiceListLayout = styled.section`
.btnarea{
    margin-top:70px;
}
`;

const SearchForm = styled.div`
display:flex;
align-items:center;
justify-content: flex-end;
margin-bottom:20px;
input{
    height: 45px;
    width:330px;
    border-radius: 25px 0 0 25px;
    padding-left: 25px;
}
button{
    background: #555;
    text-align: center;
    color: #fff;
    display: inline-block;
    height: 45px;
    border-radius: 0 25px 25px 0;
    padding: 8px 30px 8px 24px;
    box-sizing: border-box;
    vertical-align: top;
    transition: background .4s;
    :hover{
        background: #000;
    }
}
`;
const CardTable = styled.section`
display:flex;
flex-wrap:wrap;
    .box{
        margin-right:30px;
        width:calc((100% - 90px) / 4);
        background-color:#fff;
        border-radius:20px;
        position:relative;
        padding:30px 25px;
        cursor:pointer;
        transition:box-shadow .5s;
        box-shadow: 5px 5px 15px rgb(0 0 0 / 15%);
        border: 2px solid #fff;
        transition:border .5s;
        &:hover{
            border: 2px solid #ffc80b;
        }
        &:nth-child(4n){
            margin-right:0;
        }
        &:nth-child(n+5){
            margin-top:30px;
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
`;
const Paging = styled.div`
display:flex;
align-items:center;
justify-content:center;
margin-top: 80px;
span{
    background: #fff;
    border: 1px solid #ddd;
    box-sizing: border-box;
    width: 36px;
    height: 36px;
    transition: background .4s;
    cursor:pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 3px;
    &.arrow{
        &.first_arrow, &.prev_arrow{
            transform:rotate(180deg);
        }
    }
}
.paging_num{
    margin:0 5px;
    display:flex;
    align-items:center;
    justify-content:center;
    .num{
        font-family: 'Poppins', sans-serif;
        color: #b5b5b5;
        font-size: 16px;
        line-height: 36px;
        transition:.5s;
        &:hover{
            color:#ffc80b;
        }
        &.on{            
            background-color: #ffc80b;
            color: #252525;
            border: 1px solid #ffc80b;
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
    },
    {
        key:7,
        title: '3월 중순쯤 msi 크리에이터 노트북 배터리 교체한 사람입니다.! 잘 쓰고있었는데 이번 주말에 노트북을 아예…',     
        writer:'MSI스트레*',
        date:'2022-05-02',
        status:'접수완료'
    },
    {
        key:8,
        title: '3월 중순쯤 msi 크리에이터 노트북 배터리 교체한 사람입니다.! 잘 쓰고있었는데 이번 주말에 노트북을 아예…',     
        writer:'MSI스트레*',
        date:'2022-05-02',
        status:'접수완료'
    }
]
const ServiceList = () => {
    
    
    const navigate = useNavigate();
    const refId= useRef();
    const onDetatilHandler = (e) => {
        refId.current = e.currentTarget.dataset.key;
        navigate(`/service/${e.currentTarget.dataset.key}`);
    }
    const onWriteHandler = () => {
        navigate("/service/write");
    }
    return (
        <ServiceListLayout>
            <SearchForm>
                <input type="text" placeholder="검색어를 입력해주세요" />
                <button>검색</button>
            </SearchForm>
            
            <CardTable>
                {
                    data && data.map(i=>{
                        return(
                            <div className="box" key={i.key} data-key={i.key} onClick={onDetatilHandler}>
                                <p className="writer">{i.writer}님</p>
                                <p className="title"><span>{i.title}</span></p>
                                <p className="date">{i.date}</p>
                                <p className="status_line">{i.reply == "" || i.reply == null ? <span className='status wait'>접수대기</span>: <span className='status complete'>접수완료</span>}</p>
                            </div>
                        )
                    })
                }
            </CardTable>
            <Paging>
                <span className="arrow first_arrow"><img src={dobuleArrow} alt="" /></span>
                <span className="arrow prev_arrow"><img src={rightArrow} alt="" /></span>
                <div className="paging_num">
                    <span className="num on">1</span>
                    <span className="num">2</span>
                    <span className="num">3</span>
                </div>
                <span className="arrow next_arrow"><img src={rightArrow} alt="" /></span>
                <span className="arrow last_arrow"><img src={dobuleArrow} alt="" /></span>                    
            </Paging>
            <div className="btnarea center">
                <YellowBtn text="글쓰기" click={onWriteHandler}><em></em></YellowBtn>
            </div>      
        </ServiceListLayout>
    )
}

export default ServiceList;