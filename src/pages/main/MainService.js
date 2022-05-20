import React, { useRef, useState } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import axios from "axios";

//component
import YellowBtn from '../../components/layout/YellowBtn'
import PrivacyModal from "../../components/modal/PrivacyModal";

//images
import ArrowGray from '../../styles/images/arrow_gray.svg'
import ArrowRight from '../../styles/images/arrow_long.svg'
import category01 from '../../styles/images/category01.png'
import category02 from '../../styles/images/category02.png'
import category03 from '../../styles/images/category03.png'
import category04 from '../../styles/images/category04.png'

const ServiceLayout = styled.section`
    padding:80px 0;
    .wrap{
        display:flex;
        align-items:center;
        justify-content:space-between;
        flex-wrap:wrap;
    }

    @media screen and (max-width: 768px) {
        padding:10vw 0;
    }
    @media screen and (max-width: 500px){
        .wrap{
            flex-direction: column-reverse;
        }
    }

    @media screen and (max-width: 414px) {
        padding:30px 0;
    }
`;
const QuickApplication = styled.div`
    width:454px;
    border-radius:30px;
    box-shadow:5px 5px 15px rgba(0,0,0,.15);
    .title{
        font-size:18px;
        font-weight:600;
        text-align:center;
        background-color:#ffc80b;
        padding: 20px 10px;
        border-radius:30px 30px 0 0;
    }
    .inner{
        padding: 30px;
        .w50{
            display:flex;
            align-items:center;
            dl{
                margin-right:20px;
                width:calc((100% - 20px)/2);
                &:last-child{
                    margin-right:0;
                }
            }
            &:first-child{
                dl{
                    margin-top:0;
                }
            }
        }
        dl{
            margin-top:30px;
            dt{
                font-size:15px;
                color:#333;
                font-weight:600;
                margin-bottom: 10px;
                transform: skew(-0.1deg);
            }
            dd{
                input{
                    border:none;
                    border-bottom:1px solid #d8d8d8;
                    width:100%;
                    min-width:auto;
                    transform: skew(-0.1deg);
                }
                select{
                    border:none;
                    border-bottom:1px solid #d8d8d8;
                    width:100%;
                    min-width:auto;
                    background-image:url(${ArrowGray});
                    background-position:right 5px center;
                    background-repeat:no-repeat;
                    transform: skew(-0.1deg);
                }
                textarea{
                    border-width:1px;
                    transform: skew(-0.1deg);
                }
                input, select, textarea{
                    transition:border-color .5s;
                }
                input:hover, select:hover, textarea:hover, input:focus, select:focus, textarea:focus{
                    border-color:#000;
                }
            }
        }
        .checkbox{
            margin-top:15px;
            display: flex;
            align-items: center;
            em{
                text-decoration:underline;
            }
            .link{
                background: #ccc;
                display: inline-block;
                padding: 2px 10px;
                border-radius: 20px;
                font-size: 12px;
                margin-left: 10px;
                cursor:pointer;
            }
        }
        .btnarea{
            margin-top:30px;
            .yellow_btn{
                padding: 14px 46px;
                position:relative;
                :after{
                    content:'';
                    background-image:url(${ArrowRight});
                    background-position:center;
                    background-repeat:no-repeat;
                    position:absolute;
                    right: 20px;
                    top: 16px;
                    width:8px;
                    height:14px;
                }
                em{
                    padding-right: 10px;
                }
            }
        }
    }
    @media screen and (max-width: 1500px) {
        width:38%;
        border-radius:2vw;
        .title{
            font-size:1.5vw;
            padding:1.5vw 1vw;
            border-radius:2vw 2vw 0 0;
        }
        .inner{
            padding:2vw;
            .w50{
                dl{
                    margin-right:2vw;
                    width:calc((100% - 2vw) / 2);
                }
            }
            dl{
                margin-top:2vw;
                dt{
                    font-size:1.2vw;
                    margin-bottom:1vw;
                }
            }
            .checkbox{
                margin-top:1vw;
                .link{
                    padding: 0.2vw 1vw;
                    border-radius: 5vw;
                    font-size: 1vw;
                    margin-left: 1vw;
                }
            }
            .btnarea{
                margin-top:2vw;
            }
        }
    }
    @media screen and (max-width: 768px) {
        width:65%;
        .title{
            font-size:2vw;
            padding:1.8vw 1vw;
        }
        .inner{
            padding:3vw;
            .w50{
                dl{
                    margin-right:2vw;
                    width:calc((100% - 2vw) / 2);
                }
            }
            dl{
                dt{
                    font-size:1.7vw;
                }
            }
            .checkbox{
                margin-top:1vw;
                .link{
                    padding: 0.2vw 1vw;
                    border-radius: 5vw;
                    font-size: 1vw;
                    margin-left: 1vw;
                }
            }
            .btnarea{
                margin-top:3vw;
                .yellow_btn{
                    font-size:1.8vw;
                    padding:2vw 6vw;
                    :after{
                        right: 2.5vw;
                        top: 2vw;
                        width: 1vw;
                        height: 2vw;
                        background-size: 100%;
                    }
                }
            }
        }
    }
    @media screen and (max-width: 500px) {
        width:100%;
        .title{
            font-size:2vw;
            padding:1.8vw 1vw;
        }
        .inner{
            padding:3vw;
            .w50{
                dl{
                    margin-right:2vw;
                    width:calc((100% - 2vw) / 2);
                }
            }
            dl{
                dt{
                    font-size:1.7vw;
                }
            }
            .checkbox{
                margin-top:1vw;
                .link{
                    padding: 0.2vw 1vw;
                    border-radius: 5vw;
                    font-size: 1vw;
                    margin-left: 1vw;
                }
            }
            .btnarea{
                margin-top:3vw;
                .yellow_btn{
                    font-size:1.8vw;
                    padding:2vw 6vw;
                    :after{
                        right: 2.5vw;
                        top: 2vw;
                        width: 1vw;
                        height: 2vw;
                        background-size: 100%;
                    }
                }
            }
        }
    }
    @media screen and (max-width: 414px) {
        border-radius:15px;
        .title{
            font-size: 16px;
            padding: 12px 20px;
            border-radius: 15px 15px 0 0;        
        }
        .inner{
            padding:18px;
            .w50{
                dl{
                    margin-right: 15px;
                    width: calc((100% - 15px) / 2);
                }
            }
            dl{
                margin-top:12px;
                dt{
                    font-size:13px;
                    margin-bottom:5px;
                }
            }
            .checkbox{
                margin-top:10px;
                .link{
                    padding: 2px 8px;
                    border-radius: 13px;
                    font-size: 10px;
                    margin-left: 10px;
                }
            }
            .btnarea{
                margin-top:20px;
                .yellow_btn{
                    font-size: 13px;
                    padding: 10px 28px;
                    :after{
                        right: 13px;
                        top: 10px;
                        width: 6px;
                        height: 14px;
                    }
                }
            }
        }
    }
`;

const ServiceCategory = styled.div`
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    width:calc(100% - 454px);
    justify-content: flex-end;
    .box{
        margin-right:60px;
        width: 380px;
        height: 240px;
        text-align: center;
        border-radius: 30px;
        box-shadow: 5px 5px 15px rgb(0 0 0 / 15%);
        padding-top: 60px;
        cursor:pointer;
        position: relative;
        transition: background .5s;
        &:nth-child(2n){
            margin-right:0;
        }
        &:nth-child(n+3){
            margin-top:50px;
        }
        img{
            display:inline-block;
        }
        p{
            font-size:16px;
            color:#333;
            font-weight:600;
            margin-top: 17px;
            display: flex;
            align-items: center;
            justify-content: center;
            transform: skew(-0.1deg);
            img{
                opacity:0;
                display:block;
                margin-left: 0;
                transition: .5s;
            }
        }
        
        &:hover{
            background:#ffc80b;
            p{
                img{
                    opacity:1;
                    display:block;
                    margin-left: 20px;
                }
            }
        }
    }

    @media screen and (max-width: 1500px) {
        width: 60%;
        padding-left: 2%;
        .box{
            margin-right: 2vw;
            width: calc((100% - 2vw)/2);
            height: auto;
            padding: 4vw 0;
            border-radius: 2vw;
            &:nth-child(n+3){
                margin-top:2vw;
            }
            &>img{
                width:35%;
            }
            p{
                font-size:1.3vw;
                margin-top:2vw;
            }
            &:last-child{
                &>img{
                    width: 26%;
                }
            }
        }
    }
    @media screen and (max-width: 768px) {
        width: 35%;
        padding-left: 2%;
        .box{
            margin-right: 0;
            width: 100%;
            padding: 3vw 0;
            &:nth-child(n+2){
                margin-top:2vw;
            }
            &>img{
                width:29%;
            }
            p{
                font-size:1.8vw;
                margin-top:1vw;
                img{
                    width:1.2vw;
                }
            }
        }
    }
    @media screen and (max-width: 500px) {
        width: 100%;
        padding-left: 0;
        padding-bottom:5vw;
        .box{
            margin-right: 2vw;
            width: calc((100% - 2vw) / 2);
            padding: 3vw 0;
            &:nth-child(2){
                margin-top:0;
            }
            &:nth-child(n+3){
                margin-top:2vw;
            }
            &:last-child{
                &>img{
                    width:21%;
                }
            }
            p{
                font-size:1.8vw;
                margin-top:1vw;
            }
        }
    }
    @media screen and (max-width: 414px) {
        padding-bottom:20px;
        .box{
            margin-right: 15px;
            width: calc((100% - 15px) / 2);
            padding: 20px 0;
            &:nth-child(n+3){
                margin-top:15px;
            }
            &:last-child{
                &>img{
                    width:21%;
                }
            }
            p{
                font-size:12px;
                margin-top:10px;
            }
        }
    }
`;

//component

const MainService = () => {
    const [privacyModal, setPrivacyModal] = useState(false);
    const [input, setInput] = useState({
        name: "",
        password: "",
        phone: "",
        category: "",
        address: "",
        symptom: "",
        check: "",
    });
    const onPrivacyHandler = (e) => {
        setPrivacyModal(!privacyModal)
    }
    const navigate = useNavigate();

    const onMacRepairHandler = (e) => {
        navigate(`/informationuse/mac`);
        window.scrollTo({ top: 0, left: 0 });
    }
    const onAssemblyPCHandler = (e) => {
        navigate(`/informationuse/pcrepair`);
        window.scrollTo({ top: 0, left: 0 });
    }
    const onPCRepairHandler = (e) => {
        navigate(`/informationuse/assemblypc`);
        window.scrollTo({ top: 0, left: 0 });
    }
    const onMonitorHandler = (e) => {
        navigate(`/informationuse/monitor`);
        window.scrollTo({ top: 0, left: 0 });
    }

    const onChangeHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const onConfirmHandler = (e) => {

        if (input.name == '') {
            alert('이름을 입력해주세요.');
        } else if (input.password == '') {
            alert('비밀번호를 입력해주세요.');
        } else if (input.category == '') {
            alert('서비스항목을 입력해주세요.');
        } else if (input.phone == "") {
            alert('연락처를 입력해주세요.');
        } else if (input.address == "") {
            alert('주소를 입력해주세요.');
        } else if (input.symptom == "") {
            alert('증상을 입력해주세요.');
        } else if (input.check == "") {
            alert('계정 정보 수집 이용에 동의해주세요.');
        } else {
            axios.post(`${process.env.host}/service/index`, input).then(({ data }) => {
                alert('접수 완료')
                navigate('/service')
            })
        }
    }

    return (
        <ServiceLayout>
            <div className="wrap">
                <QuickApplication>
                    <h3 className="title">빠른 서비스 신청</h3>
                    <div className="inner">
                        <div className="w50">
                            <dl>
                                <dt>성함.</dt>
                                <dd><input type="text" placeholder="성함을 입력해 주세요" name="name" onChange={onChangeHandler} /></dd>
                            </dl>
                            <dl>
                                <dt>비밀번호.</dt>
                                <dd><input type="password" placeholder="비밀번호를 입력해 주세요" name="password" onChange={onChangeHandler} /></dd>
                            </dl>
                        </div>
                        <div className="w50">
                            <dl>
                                <dt>서비스 항목.</dt>
                                <dd>
                                    <select name="category" onChange={onChangeHandler}>
                                        <option value="">항목을 선택해 주세요</option>
                                        <option value="apple">맥북, 아이맥 수리(애플)</option>
                                        <option value="as">컴퓨터 수리(출장AS)</option>
                                        <option value="product">조립 및 중고 PC 판매</option>
                                        <option value="monitor">노트북 액정문의</option>
                                    </select>
                                </dd>
                            </dl>
                            <dl>
                                <dt>연락처.</dt>
                                <dd><input type="text" placeholder="연락처를 입력해 주세요" name="phone" onChange={onChangeHandler} /></dd>
                            </dl>
                        </div>
                        <dl>
                            <dt>주소.</dt>
                            <dd><input type="text" placeholder="주소를 입력해 주세요" name="address" onChange={onChangeHandler} /></dd>
                        </dl>
                        <dl>
                            <dt>증상.</dt>
                            <dd><textarea placeholder="증상을 입력해 주세요" name="symptom" onChange={onChangeHandler}></textarea></dd>
                        </dl>
                        <div className="checkbox">
                            <input type="checkbox" id="check" name="check" onChange={onChangeHandler} />
                            <label htmlFor="check"><em>개인정보 수집 이용</em>에 동의합니다</label>
                            <span className="link" onClick={onPrivacyHandler}>보기</span>
                        </div>
                        <div className="btnarea center">
                            <YellowBtn text="서비스 신청 접수" click={onConfirmHandler}><em></em></YellowBtn>
                        </div>
                    </div>
                </QuickApplication>

                <ServiceCategory>
                    <div className="box" onClick={onMacRepairHandler}>
                        <img src={category01} alt="" />
                        <p>맥북, 아이맥 수리(애플)<img src={ArrowRight} alt="" /></p>
                    </div>
                    <div className="box" onClick={onAssemblyPCHandler}>
                        <img src={category02} alt="" />
                        <p>컴퓨터 수리(출장AS)<img src={ArrowRight} alt="" /></p>
                    </div>
                    <div className="box" onClick={onPCRepairHandler}>
                        <img src={category03} alt="" />
                        <p>조립 및 중고 PC 판매<img src={ArrowRight} alt="" /></p>
                    </div>
                    <div className="box" onClick={onMonitorHandler}>
                        <img src={category04} alt="" />
                        <p>노트북 액정문의<img src={ArrowRight} alt="" /></p>
                    </div>
                </ServiceCategory>
            </div>
            {/*개인정보처리방침 모달*/}
            {privacyModal && <PrivacyModal onPrivacyHandler={onPrivacyHandler}></PrivacyModal>}
        </ServiceLayout>
    )
}

export default MainService;