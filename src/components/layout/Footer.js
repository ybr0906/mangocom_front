import React, { useRef, useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import styled from "styled-components";
import axios from "axios";

//components
import PrivacyModal from "../modal/PrivacyModal";
import ServiceModal from "../modal/ServiceModal";
import ManagerModal from "../modal/ManagerModal";

const FooterLayout = styled.footer`
background-color:#232323;
padding: 0 0 50px 0;
.wrap{
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
}
.footer_top{
    width:100%;
    display: flex;
    margin-bottom: 30px;
    justify-content: center;
    border-bottom: 1px solid rgba(255,255,255,.3);
    span{
        color: #fff;
        font-size: 16px;
        transform: skew(-0.1deg);
        padding: 20px;
        cursor:pointer;
        position:relative;
        &:after{
            content:'';
            width:1px;
            height:20%;
            background:rgba(255,255,255,.3);
            position:absolute;
            right:0;
            top:50%;
            transform: translateY(-50%);
        }
        &:last-child:after{
            display:none;
        }
    }
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
    const [render, setRender] = useState(false);
    const [serviceModal, setServiceModal] = useState(false);
    const onServiceHandler = (e) => {
        setServiceModal(!serviceModal)
    }
    const [privacyModal, setPrivacyModal] = useState(false);
    const onPrivacyHandler = (e) => {
        setPrivacyModal(!privacyModal)
    }
    const [managerModal, setManagerModal] = useState(false);
    const onManagerHandler = (e) => {
        setManagerModal(!managerModal)
    }

    const onLogoutHandler = () => {
        localStorage.removeItem('mangocomSession')
        axios.post(`${process.env.host}/member/logout`, { sid: localStorage.getItem('neoulSession') }).then(({ data }) => {
            alert('로그아웃 완료')
            setRender(!render)
        })
    }
    useEffect(() => {

    }, [render])

    return (
        <FooterLayout>
            <div className="footer_top">
                <span onClick={onServiceHandler}>이용약관</span>
                <span onClick={onPrivacyHandler}>개인정보처리방침</span>
                {
                    localStorage.getItem('mangocomSession') == null ?
                        <span onClick={onManagerHandler}>관리자</span>
                        :
                        <span onClick={onLogoutHandler}>로그아웃</span>
                }
            </div>
            <div className="wrap">
                <h1 className="logo">로고</h1>
                <address>
                    <p>경기도 수원시 장안구 파장동 606-5번지 1층</p>
                    <p>TEL : 000-000-0000</p>
                    <p>E-mail : aaa@gmail.com</p>
                    <p>사업자등록번호 : 000-00-00000</p>
                    <p className="copyright">Copyright (c) 2022 ALL Rights Reserved.</p>
                </address>
            </div>


            {/*이용약관 모달*/}
            {serviceModal && <ServiceModal onServiceHandler={onServiceHandler}></ServiceModal>}
            {/*개인정보처리방침 모달*/}
            {privacyModal && <PrivacyModal onPrivacyHandler={onPrivacyHandler}></PrivacyModal>}
            {/*관리자 모달*/}
            {managerModal && <ManagerModal onManagerHandler={onManagerHandler}></ManagerModal>}

        </FooterLayout>
    )
}

export default React.memo(Footer);