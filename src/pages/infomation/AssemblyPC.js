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

//pages
import AssemblyPCList from "./AssemblyPCList";
import AssemblyPCDetail from "./AssemblyPCDetail";

const AssemblyPCLayout = styled.section``;

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
            img{
                display:inline-block;
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
const AssemblyPC = () => {
    return (
        <AssemblyPCLayout>
            <div className="wrap">
                <TitleA title="조립 및 중고 PC판매"></TitleA>    
                <Routes>
                    {/* 리스트 */}
                    <Route path="/" element={<AssemblyPCList />}></Route>
                    {/* 디테일 */}
                    <Route path="/:id" element={<AssemblyPCDetail />}></Route>
                </Routes>    
            </div>            
        </AssemblyPCLayout>
    )
}

export default AssemblyPC;