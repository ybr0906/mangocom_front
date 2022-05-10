import React, { useRef } from "react";
import { Routes, Route } from 'react-router-dom';
import styled from "styled-components";

const FooterLayout = styled.footer`
background-color:#232323;
padding: 50px 0;
.wrap{
    display:flex;
    justify-content:space-between;
}
.logo{
    color:#fff;
}
address{
    display:flex;
    flex-wrap:wrap;
    max-width: 486px;
    p{
        font-size:14px;
        color:rgba(255,255,255,.9);
        display:inline-block;
        margin-right: 30px;
        line-height: 1.8;
        transform: skew(-0.1deg);
        letter-spacing: 0;
        &.copyright{
            margin-top:25px;
        }
    }
}
`;

const Footer = () => {
    return (
        <FooterLayout>
            <div className="wrap">
                <h1 className="logo">로고</h1>
                <address>
                    <p>경기도 수원시 권선구 동수원로242번길 45(권선동)</p>
                    <p>TEL : 031-247-5119</p>
                    <p>E-mail : skjtry@naver.com</p>
                    <p>사업자등록번호 : 124-40-87008</p>
                    <p className="copyright">Copyright (c) 2022 ALL Rights Reserved.</p>
                </address>
            </div>
        </FooterLayout>
    )
}

export default React.memo(Footer);