import React, { useRef } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import styled from "styled-components";

//component

//images
import kakao from '../../styles/images/kakao.png'
import blog from '../../styles/images/blog.png'
import map from '../../styles/images/map.png'
import tel_bg from '../../styles/images/tel.png'

const CustomerLayout = styled.section`
    padding:100px 0;
    .wrap{
        display:flex;
        align-items:center;
        justify-content:space-between;
    }
    @media screen and (max-width: 1500px) {
        padding:5vw 0;
    }
    @media screen and (max-width: 414px) {
        padding:30px 0;
        .wrap{
            flex-wrap:wrap;
        }
    }
`;
const SocialList = styled.div`
display:flex;
align-items:center;
justify-content:center;
text-align:center;
width:calc(100% - 700px);
&>div{
    margin-right:60px;
    cursor:pointer;
}
.imgarea{
    background-color:#f7f7f7;
    width:112px;
    height:112px;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    img{
        display:inline-block;
    }
}
p{
    font-size:18px;
    color:#333;
    font-weight:600;
    margin-top: 15px;
}
@media screen and (max-width: 1500px) {
    width:45%;
    &>div{
        margin-right:3vw;
    }
    .imgarea{
        width: 6.62vw;
        height: 6.62vw;
        img{
            width:45%;
        }
    }
    p{
        font-size:1.2vw;
        margin-top:1vw;
    }
}
@media screen and (max-width: 768px) {
    .imgarea{
        width: 9vw;
        height: 9vw;
    }
    p{
        font-size:1.5vw;
    }
}
@media screen and (max-width: 414px) {
    width:100%;
    &>div{
        margin-right:20px;
        &:last-child{
            margin-right:0;
        }
    }
    .imgarea{
        width: 60px;
        height: 60px;
    }
    p{
        font-size:12px;
    }
}
`;
const CustomerCenter = styled.div`
background-color:#f7f7f7;
border-radius:20px;
text-align:center;
color:#333;
padding:35px 30px;
width:700px;
.title{
    font-size:26px;
    font-weight:800;
}
.tel{
    font-size:33px;
    font-weight:600;    
    padding: 40px 0px 40px 110px;
    display: inline-block;
    padding-left:110px;
    background:url(${tel_bg})left center no-repeat;
}
.time{
    font-size:14px;
    line-height: 1.8;
    transform: skew(-0.1deg);
    font-weight: 600;
}
@media screen and (max-width: 1500px) {
    width:55%;
    padding:3vw 2vw;
    .title{
        font-size:2vw;
    }
    .tel{
        font-size:2vw;
        padding:3vw 0 3vw 0;
        padding-left:8vw;
        background-size:5.5vw;
    }
    .time{
        font-size:1.2vw;
    }
}
@media screen and (max-width: 414px) {
    width:100%;
    padding:20px;
    margin-top:20px;
    .title{
        font-size:16px;
    }
    .tel{
        font-size: 16px;
        padding: 20px 0 20px 0;
        padding-left: 52px;
        background-size: 36px;
    }
    .time{
        font-size:10px;
    }
}
`;

const MainCustomer = () => {
    const navigate = useNavigate();
    const onMoveHandler = (e) => {
        navigate(`/directions`);
    }
    const onKakaoHandler = () => {
        window.open('http://pf.kakao.com/_nxmKtb/chat', '_blank')
    }
    const onBlogHandler = () => {
        window.open('https://blog.naver.com/rkdcjf108', '_blank')
    }

    return (
        <CustomerLayout>
            <div className="wrap">
                <SocialList>
                    <div>
                        <div className="imgarea"><img src={kakao} alt="" onClick={onKakaoHandler} /></div>
                        <p>카카오톡 상담</p>
                    </div>
                    <div>
                        <div className="imgarea"><img src={blog} alt="" onClick={onBlogHandler} /></div>
                        <p>블로그</p>
                    </div>
                    <div onClick={onMoveHandler}>
                        <div className="imgarea"><img src={map} alt="" /></div>
                        <p>오시는 길</p>
                    </div>
                </SocialList>

                <CustomerCenter>
                    <p className="title">CUSTOMER CENTER</p>
                    <div className="tel">
                        <p>010-8009-4613</p>
                        <p>010-3959-6434</p>
                    </div>
                    <p className="time">평일 09:00 ~ 20:00  /  토요일 09:00 ~ 17:00 <br />연중무휴</p>
                </CustomerCenter>
            </div>
        </CustomerLayout>
    )
}

export default MainCustomer;