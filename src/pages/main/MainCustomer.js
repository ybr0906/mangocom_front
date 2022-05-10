import React, { useRef } from "react";
import { Routes, Route } from 'react-router-dom';
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
    margin: 35px 0 40px 0;
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

`;

const MainCustomer = () => {
    return (
        <CustomerLayout>
            <div className="wrap">
                <SocialList>
                    <div>
                        <div className="imgarea"><img src={kakao} alt="" /></div>
                        <p>카카오톡 상담</p>
                    </div>
                    <div>
                        <div className="imgarea"><img src={blog} alt="" /></div>
                        <p>블로그</p>
                    </div>
                    <div>
                        <div className="imgarea"><img src={map} alt="" /></div>
                        <p>오시는 길</p>
                    </div>
                </SocialList>

                <CustomerCenter>
                    <p className="title">CUSTOMER CENTER</p>
                    <div className="tel">
                        <p>012-345-6789</p>
                        <p>012-345-6789</p>
                    </div>
                    <p className="time">평일 09:00 ~ 20:00  /  토요일 09:00 ~ 17:00 <br/>일요일, 공휴일 휴무</p>
                </CustomerCenter>
            </div>
        </CustomerLayout>
    )
}

export default MainCustomer;