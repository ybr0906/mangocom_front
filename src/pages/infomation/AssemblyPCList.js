import React, { useState, useRef } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import styled from "styled-components";

//components
import SubVisual from "../../components/layout/SubVisual";
import TitleA from "../../components/layout/TitleA";
import YellowBtn from "../../components/layout/YellowBtn";

//image
import dobuleArrow from '../../styles/images/arrow_double.svg'
import rightArrow from '../../styles/images/arrow_right.svg'
import computer from '../../styles/images/computer.jpg'

const AssemblyPCListLayout = styled.section``;

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
        
        .imgarea{
            display:flex;
            align-items:center;
            justify-content:center;
            margin-bottom: 20px;
            img{
                display:inline-block;
                width: 100%;
            }
        }
        .name{
            font-size: 18px;
            padding: 30px 0 20px 0;
            position:relative;
            em{
                background: #ffc80b;
                color: #252525;
                font-size: 12px;
                padding: 4px 10px;
                border-radius: 20px;
                position: absolute;
                left: 0;
                top: 0;
            }
        }
        .detail{
            font-size: 13px;
            color: #a1a1a1;
        }
        .price{
            margin-top: 30px;
            font-size: 20px;
            font-weight: 600;
            text-align: right;
        }
    }
`;

//임시데이터
const data = [
    {
        key:1,
        image:computer, 
        category:'조립',
        name:'인텔 7세대 카비레이크 i7-7700',
        cpuname:'인텔 7세대 카비레이크 i7-7700(3.6Ghz)',
        mboard:'ASRock Z270 EXTREME4',
        vga:'NVIDIA Geforce GTX1070 8G',
        ram:'삼성DDR4 32G',
        hdd:'ST/WD 1TB',
        SSd:'SSD 256G',
        power:'	마이크로닉스 700W 85+',
        case:'	COX AG 200X',
        cdRom:'	LG DVD-M',
        features:'	-',
        price:'	2,410,000 원',
        detailImage:''
    },
    {
        key:2,
        image:computer,
        category:'조립',
        name:'인텔 7세대 카비레이크 i7-7700',
        cpuname:'인텔 7세대 카비레이크 i7-7700(3.6Ghz)',
        mboard:'ASRock Z270 EXTREME4',
        vga:'NVIDIA Geforce GTX1070 8G',
        ram:'삼성DDR4 32G',
        hdd:'ST/WD 1TB',
        SSd:'SSD 256G',
        power:'	마이크로닉스 700W 85+',
        case:'	COX AG 200X',
        cdRom:'	LG DVD-M',
        features:'	-',
        price:'	2,410,000 원',
        detailImage:''
    },
    {
        key:3,
        image:computer,
        category:'조립',
        name:'인텔 7세대 카비레이크 i7-7700',
        cpuname:'인텔 7세대 카비레이크 i7-7700(3.6Ghz)',
        mboard:'ASRock Z270 EXTREME4',
        vga:'NVIDIA Geforce GTX1070 8G',
        ram:'삼성DDR4 32G',
        hdd:'ST/WD 1TB',
        SSd:'SSD 256G',
        power:'	마이크로닉스 700W 85+',
        case:'	COX AG 200X',
        cdRom:'	LG DVD-M',
        features:'	-',
        price:'	2,410,000 원',
        detailImage:''
    },
    {
        key:4,
        image:computer,
        category:'조립',
        name:'인텔 7세대 카비레이크 i7-7700',
        cpuname:'인텔 7세대 카비레이크 i7-7700(3.6Ghz)',
        mboard:'ASRock Z270 EXTREME4',
        vga:'NVIDIA Geforce GTX1070 8G',
        ram:'삼성DDR4 32G',
        hdd:'ST/WD 1TB',
        SSd:'SSD 256G',
        power:'	마이크로닉스 700W 85+',
        case:'	COX AG 200X',
        cdRom:'	LG DVD-M',
        features:'	-',
        price:'	2,410,000 원',
        detailImage:''
    }
]

const AssemblyPCList = () => {
    const navigate = useNavigate();
    const refId= useRef();
    const onDetatilHandler = (e) => {
        refId.current = e.currentTarget.dataset.key;
        navigate(`/informationuse/assemblypc/${e.currentTarget.dataset.key}`);
    }
    return (
        <AssemblyPCListLayout>
            <SearchForm>
                <input type="text" placeholder="검색어를 입력해주세요" />
                <button>검색</button>
            </SearchForm>            
        
            <CardTable>
                {
                    data && data.map(i=>{
                        return(
                            <div className="box" key={i.key} data-key={i.key} onClick={onDetatilHandler}>
                                <div className="imgarea"><img src={i.image} alt="" /></div>
                                <p className="name"><em>{i.category}</em>{i.name}</p>
                                <div className="detail">
                                    <span>{i.cpuname}</span> / 
                                    <span>{i.mboard}</span> / 
                                    <span>{i.vga}</span>
                                </div>
                                <p className="price">{i.price}</p>
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
        </AssemblyPCListLayout>
    )
}

export default AssemblyPCList;