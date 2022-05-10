import React, { useRef } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import styled from "styled-components";

const HeaderLayout = styled.header`
position:absolute;
left:0;
top:0;
width:100%;
padding: 20px 0;
.wrap{
    display:flex;
    align-items:center;
    justify-content:space-between;
}
.logo{
    cursor:pointer;
}
nav{
    display:flex;
    align-items:center;
    span{
        display: block;
        font-size: 18px;
        color: #333;
        font-weight: 600;
        margin: 0 30px;
        cursor:pointer;
        padding-bottom: 10px;
        position:relative;
        &:after{
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 2px;
            background: #333;
            opacity:0;
            transition:opacity .5s;
        }
        &:hover{
            &:after{
                opacity:1;
            }
        }
    }
}
`;

const Header = () => {
    const navigate = useNavigate();

    const onMenuHandler = (e) => {
        navigate(`/${e.target.dataset.title}`);
    }

    return (
        <HeaderLayout>
            <div className="wrap">
                <h1 className="logo" data-title="" onClick={onMenuHandler}>로고</h1>
                <nav>
                    <span data-title="introduce" onClick={onMenuHandler}>회사소개</span>
                    <span data-title="informationuse" onClick={onMenuHandler}>이용안내</span>
                    <span data-title="service" onClick={onMenuHandler}>서비스 문의</span>
                    <span data-title="directions" onClick={onMenuHandler}>찾아오시는 길</span>
                </nav>                
            </div>
        </HeaderLayout>
    )
}

export default React.memo(Header);