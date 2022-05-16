import React, { useRef, useState } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import styled from "styled-components";

import logo from '../../styles/images/logo2.png'

const HeaderLayout = styled.header`
position:absolute;
left:0;
top:0;
width:100%;
z-index:2;
height: 73px;
.wrap{
    display:flex;
    align-items:center;
    justify-content:space-between;
    height:100%;
}
.logo{
    cursor:pointer;
    width:110px;
    img{
        display:block;
        width:100%;
    }
}
.mobile_btn, .shadow{
    display:none;
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
        padding: 10px 0;
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
@media screen and (max-width: 1500px) {
    height:5vw;
.logo{
    width: 6.5vw;
}
nav{
    span{
        font-size: 1.3vw;
        margin: 0 2vw;
        padding-bottom: 1vw;
    }
}
}

@media screen and (max-width: 768px) {
    padding:0;
    height:50px;
    .wrap{
        height:100%;
    }
    .logo{
        width: 70px;
    }
    .mobile_btn{
        display:block;
        position:relative;
        width:25px;
        height:16px;
        top: -3px;
        z-index:6;
        .line{
            width:100%;
            height:3px;
            background-color:#333;
            border-radius:3px;
            position:absolute;
            left:0;
            &.line01{
                top:0;
            }
            &.line02{
                top:50%;
            }
            &.line03{
                top:100%;
            }
        }
        &.close{
            .line{
                &.line01{
                    top:50%;
                    transform: rotate(45deg);
                }
                &.line02{
                    opacity:0;
                }
                &.line03{
                    top:50%;
                    transform: rotate(-45deg);
                }
            }
        }
    }
    nav{
        display:none;
        position: absolute;
        right: 0;
        top: 0;
        width: 50vw;
        height: 100vh;
        background: #fff;
        flex-wrap: wrap;
        padding: 60px 5vw;
        z-index:5;
        span{
            font-size: 3vw;
            margin: 0;
            padding-bottom:3vw;
            &:after{
                display:none;
            }
        }
        &.open{
            display:block;
        }
    }
    .shadow{
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.3);
        z-index: 2;
        &.open{
            display:block;
        }
    }
}
@media screen and (max-width: 414px) {
    height:40px;
    .logo{
        width:60px;
    }
    nav{
        width: 60vw;
        padding: 60px 25px;
        span{
            font-size: 15px;
            padding-bottom:14px;
        }
    }
}
`;

const Header = () => {
    const navigate = useNavigate();

    const onMenuHandler = (e) => {
        const navBg = document.getElementById('nav')
        const button = document.querySelector('.mobile_btn');
        const shadow = document.querySelector('.shadow');
        navigate(`/${e.target.dataset.title}`);

        navBg.classList.remove('open')
        shadow.classList.remove('open')
        button.classList.remove('close')
    }
   
    const [nav, setNav] = useState(false);
    const onNavHandler = () => {
        const navBg = document.getElementById('nav')
        const shadow = document.querySelector('.shadow');
        setNav(!nav);
        navBg.classList.toggle('open')
        shadow.classList.toggle('open')
    }

    return (
        <HeaderLayout>
            <div className="wrap">
                <h1 className="logo" data-title="" onClick={onMenuHandler}><img src={logo} alt="" /></h1>
                <span className={nav ? "mobile_btn close" : "mobile_btn"} onClick={onNavHandler}>
                    <em className="line line01"></em>
                    <em className="line line02"></em>
                    <em className="line line03"></em>
                </span>
                <nav id="nav">
                    <span data-title="introduce" onClick={onMenuHandler}>회사소개</span>
                    <span data-title="informationuse" onClick={onMenuHandler}>이용안내</span>
                    <span data-title="service" onClick={onMenuHandler}>서비스 문의</span>
                    <span data-title="directions" onClick={onMenuHandler}>오시는 길</span>
                </nav>     
                <div className="shadow"></div>           
            </div>
        </HeaderLayout>
    )
}

export default React.memo(Header);