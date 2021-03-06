import React, { useRef, useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import styled from "styled-components";
import axios from "axios";

import logo from '../../styles/images/logo_w.png'

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
    width:125px;
    img{
        display:block;
        width:100%;
    }
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
        a{
            display:inline-block;
            color:#fff;
        }
    }
}

@media screen and (max-width: 1500px) {
    padding: 0 0 2.5vw 0;
    .footer_top{
        margin-bottom: 2vw;
        span{
            font-size: 1.2vw;
            padding: 1.5vw;
        }
    }
    .logo{
        width: 9vw;
    }
    address{
        max-width: 35vw;
        p{
            font-size:1.1vw;
            margin-right: 2vw;
            &.copyright{
                margin-top:2vw;
            }
        }
    }

}
@media screen and (max-width: 768px) {
    padding: 0 0 2.5vw 0;
    .footer_top{
        margin-bottom: 2.5vw;
        span{
            font-size: 1.6vw;
            padding:2vw;
        }
    }
    .wrap{
        justify-content:center;
    }
    .logo{
        width: 13vw;
    }
    address{
        max-width: initial;
        margin-top:2vw;
        justify-content: center;
        p{
            font-size:1.4vw;
            &.copyright{
                margin-top:0.5vw;
            }
        }
    }

}
@media screen and (max-width: 606px) {
    address{
        p{
            &.copyright{
                margin-top:0;
            }
        }
    }
}

@media screen and (max-width: 414px) {
    padding: 0 0 20px 0;
    .footer_top{
        margin-bottom: 20px;
        span{
            font-size: 11px;
            padding: 14px 20px;
        }
    }
    .logo{
        width: 70px;
    }
    address{
        margin-top:10px;
        p{
            font-size:11px;
            margin-right:15px;
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
            alert('???????????? ??????')
            setRender(!render)
        })
    }
    useEffect(() => {

    }, [render])

    return (
        <FooterLayout>
            <div className="footer_top">
                <span onClick={onServiceHandler}>????????????</span>
                <span onClick={onPrivacyHandler}>????????????????????????</span>
                {
                    localStorage.getItem('mangocomSession') == null ?
                        <span onClick={onManagerHandler}>?????????</span>
                        :
                        <span onClick={onLogoutHandler}>????????????</span>
                }
            </div>
            <div className="wrap">
                <h1 className="logo"><img src={logo} alt="" /></h1>
                <address>
                    <p>????????? ????????? ????????? ???????????? 1019?????? 8, 1??? 101???(?????????)</p>
                    <p>TEL : <a href="tel:010-8009-4613">010-8009-4613</a>, <a href="tel:010-9009-7747">010-9009-7747</a></p>
                    {/* 010-3959-6434 */}

                    <p>????????????????????? : 835-28-00958</p>
                    <p className="copyright">Copyright (c) 2022 ALL Rights Reserved.</p>
                </address>
            </div>


            {/*???????????? ??????*/}
            {serviceModal && <ServiceModal onServiceHandler={onServiceHandler}></ServiceModal>}
            {/*???????????????????????? ??????*/}
            {privacyModal && <PrivacyModal onPrivacyHandler={onPrivacyHandler}></PrivacyModal>}
            {/*????????? ??????*/}
            {managerModal && <ManagerModal onManagerHandler={onManagerHandler}></ManagerModal>}

        </FooterLayout>
    )
}

export default React.memo(Footer);