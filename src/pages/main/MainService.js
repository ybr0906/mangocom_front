import React, { useEffect, useRef, useState } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import axios from "axios";
import Slider from "react-slick";

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
        .wrap{
            flex-direction: column-reverse;
        }
    }
    

    @media screen and (max-width: 414px) {
        padding:35px 0 30px 0;
    }
`;
const QuickApplication = styled.div`
    width:454px;
    border-radius:30px;
    box-shadow:5px 5px 15px rgba(0,0,0,.15);
    border: 4px solid #ffc80b;
    .title{
        font-size:18px;
        font-weight:600;
        text-align:center;
        background-color:#ffc80b;
        padding: 20px 10px;
        border-radius:25px 25px 0 0;
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
            border-radius:1.5vw 1.5vw 0 0;
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
        width:100%;
        .title{
            font-size:2vw;
            padding:1.8vw 1vw;
            border-radius: 1.3vw 1.3vw 0px 0px;
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
            border-radius: 4px 4px 0px 0px;
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
            border-radius: 8px 8px 0 0;        
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
    width:100%;
    justify-content: flex-end;
    margin-top: 75px;
    .wrap{
        width:100%;
    }
    .box{
        margin-right:20px;
        width: calc(25% - 20px);
        height: 240px;
        text-align: center;
        border-radius: 30px;
        box-shadow: 5px 5px 15px rgb(0 0 0 / 15%);
        padding-top: 60px;
        cursor:pointer;
        position: relative;
        transition: background .5s;
        &:last-child{
            margin-right:0;
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
        margin-top:5vw;
        .box{
            margin-right: 1vw;
            width: calc(25% - 1vw);
            height: 14vw;
            padding: 3vw 0;
            border-radius: 2vw;
            &>img{
                width:30%;
            }
            p{
                font-size:1.3vw;
                margin-top:1.3vw;
            }
            &:last-child{
                &>img{
                    width: 26%;
                }
            }
        }
    }
    @media screen and (max-width: 768px) {
        margin-top:4vw;

        .wrap{
            flex-direction: inherit;
        }
        .box{
            margin-right: 1.5vw;
            width: calc(50% - 1.5vw);
            padding: 3.2vw 0;
            height:18vw;
            &:nth-child(2n){
                margin-right:0;
            }&:nth-child(n+3){
                margin-top:2vw;
            }
            &>img{
                width:25%;
            }
            &:last-child>img{
                width:19%;
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
        padding-bottom:5vw;
        .box{
            margin-right: 2vw;
            width: calc(50% - 2vw);
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
        padding-bottom:10px;
        margin-top:30px;
        .box{
            margin-right: 15px;
            width: calc((100% - 15px) / 2);
            padding: 20px 0;
            height:auto;
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

const RealTime = styled.div`
    width: calc(100% - 454px);
    padding-left: 90px;
    .titleB{
        font-size:28px;
        color:#000;
        font-weight:600;
    }
    .list{
        margin-top:15px;
        overflow: hidden;
        .item{
            display: flex !important;
            align-items: center;
            padding:9px 0;
            .status{
                display: inline-block;
                padding: 6px 12px;
                font-size: 14px;
                border-radius: 20px;
                transform: skew(-0.1deg);
                margin-right:35px;
                &.wait{
                    background: #9c9c9c;
                    color: #fff;
                }
                &.complete{
                    background: #ffc80b;
                    color: #252525;
                }
                
            }
            .title{
                font-size: 16px;
                color: #333;
                font-weight: 600;
                line-height: 1.7;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                margin-right:15px;
                transform: skew(-0.1deg);
            }
            .date{
                font-size:14px;
                color:#9c9c9c;
                transform: skew(-0.1deg);
                margin-left:auto;
            }
        }
    }

    @media screen and (max-width: 1500px) {
        width: 62%;
        padding-left: 6vw;
        .titleB{
            font-size:2vw;
        }
        .list{
            .item{
                padding:0.5vw 0;

                .date{
                    font-size:1vw;
                } 
                .title{
                    font-size: 1.1vw;
                    margin-right: 1vw;
                }
                .status{
                    padding: 0.5vw 1vw;
                    font-size: 1vw;
                    margin-right: 2vw;
                }
            }
        }
    }
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 0;
        margin-top: 0;
        margin-bottom: 5vw;
        .titleB{
            font-size:2.2vw;
        }
        .list{
            .item{
                .date{
                    font-size:1.5vw;
                } 
                .title{
                    font-size:1.7vw;
                }
                .status{
                    padding: 0.7vw 1.5vw;
                    font-size: 1.5vw;
                }
            }
        }
    }
    @media screen and (max-width: 414px) {
        margin-bottom:30px;
        .titleB{
            font-size:15px;
        }
        .list{
            .item{
                padding:5px 0;
                .date{
                    font-size:11px;
                } 
                .title{
                    font-size:12px;
                    margin-right:10px;
                }
                .status{
                    margin-right:10px;
                    padding: 4px 9px;
                    font-size: 11px;
                }
            }
        }
    }
`
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
    const [cal, setCal] = useState({});
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

        // if (input.name == '') {
        //     alert('????????? ??????????????????.');
        // } else if (input.password == '') {
        //     alert('??????????????? ??????????????????.');
        // } else if (input.category == '') {
        //     alert('?????????????????? ??????????????????.');
        // } else if (input.phone == "") {
        //     alert('???????????? ??????????????????.');
        // } else if (input.address == "") {
        //     alert('????????? ??????????????????.');
        // } else if (input.symptom == "") {
        //     alert('????????? ??????????????????.');
        // } else if (input.check == "") {
        //     alert('?????? ?????? ?????? ????????? ??????????????????.');
        // } else {
        //     axios.post(`${process.env.host}/service/index`, input).then(({ data }) => {
        //         alert('?????? ??????')
        //         navigate('/service')
        //     })
        // }
        if (input.name == '') {
            alert('????????? ??????????????????.');
        } else if (input.password == '') {
            alert('??????????????? ??????????????????.');
        } else if (input.symptom == "") {
            alert('????????? ??????????????????.');
        } else if (input.check == "") {
            alert('?????? ?????? ?????? ????????? ??????????????????.');
        } else {
            axios.post(`${process.env.host}/service/index`, input).then(({ data }) => {
                alert('?????? ??????')
                navigate('/service')
            })
        }
    }
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 10,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 500,
        vertical: true,
        verticalSwiping: true,
        pauseOnHover: false,
        arrows: false,
        // beforeChange: function (currentSlide, nextSlide) {
        //     console.log("before change", currentSlide, nextSlide);
        // },
        // afterChange: function (currentSlide) {
        //     console.log("after change", currentSlide);
        // },
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 7,
                }
            }
        ]
    };

    useEffect(() => {
        function leftPad(value) {
            if (value >= 10) {
                return value;
            }

            return `0${value}`;
        }

        function toStringByFormatting(source, delimiter = '-', check) {
            const year = source.getFullYear();
            const month = leftPad(source.getMonth() + 1);
            const day = leftPad(source.getDate());


            if (check == 1) {
                return [year, month, day - 1].join(delimiter);
            } else if (check == 2) {
                return [year, month, day - 2].join(delimiter);
            } else if (check == 3) {
                return [year, month, day - 3].join(delimiter);
            } else if (check == 4) {
                return [year, month, day - 4].join(delimiter);
            } else if (check == 5) {
                return [year, month, day - 5].join(delimiter);
            }

            return [year, month, day].join(delimiter);
        }



        const dateStr = toStringByFormatting(new Date());
        const dateStr1 = toStringByFormatting(new Date(), '-', 1);
        const dateStr2 = toStringByFormatting(new Date(), '-', 2);
        const dateStr3 = toStringByFormatting(new Date(), '-', 3);
        const dateStr4 = toStringByFormatting(new Date(), '-', 4);
        const dateStr5 = toStringByFormatting(new Date(), '-', 5);

        setCal({
            dateStr: dateStr,
            dateStr1: dateStr1,
            dateStr2: dateStr2,
            dateStr3: dateStr3,
            dateStr4: dateStr4,
            dateStr5: dateStr5,
        });
    }, [])

    return (
        <ServiceLayout>
            <div className="wrap">
                <QuickApplication>
                    <h3 className="title">?????? ????????? ??????</h3>
                    <div className="inner">
                        <div className="w50">
                            <dl>
                                <dt>??????.</dt>
                                <dd><input type="text" placeholder="????????? ????????? ?????????" name="name" onChange={onChangeHandler} /></dd>
                            </dl>
                            <dl>
                                <dt>????????????.</dt>
                                <dd><input type="password" placeholder="??????????????? ????????? ?????????" name="password" onChange={onChangeHandler} /></dd>
                            </dl>
                        </div>
                        <div className="w50">
                            <dl>
                                <dt>????????? ??????.</dt>
                                {/* <dd>
                                    <select name="category" onChange={onChangeHandler}>
                                        <option value="">????????? ????????? ?????????</option>
                                        <option value="apple">??????, ????????? ??????(??????)</option>
                                        <option value="as">????????? ??????(??????AS)</option>
                                        <option value="product">?????? ??? ?????? PC ??????</option>
                                        <option value="monitor">????????? ????????????</option>
                                    </select>
                                </dd> */}
                                <dd>
                                    <select name="category" onChange={onChangeHandler}>
                                        <option value="">????????? ????????? ?????????</option>
                                        <option value="store_as">?????? ??????</option>
                                        <option value="business_trip_as">?????? ??????</option>
                                    </select>
                                </dd>
                            </dl>
                            <dl>
                                <dt>?????????.</dt>
                                <dd><input type="text" placeholder="???????????? ????????? ?????????" name="phone" onChange={onChangeHandler} /></dd>
                            </dl>
                        </div>
                        <dl>
                            <dt>??????.</dt>
                            <dd><input type="text" placeholder="????????? ????????? ?????????" name="address" onChange={onChangeHandler} /></dd>
                        </dl>
                        <dl>
                            <dt>??????.</dt>
                            <dd><textarea placeholder="????????? ????????? ?????????" name="symptom" onChange={onChangeHandler}></textarea></dd>
                        </dl>
                        <div className="checkbox">
                            <input type="checkbox" id="check" name="check" onChange={onChangeHandler} />
                            <label htmlFor="check"><em>???????????? ?????? ??????</em>??? ???????????????</label>
                            <span className="link" onClick={onPrivacyHandler}>??????</span>
                        </div>
                        <div className="btnarea center">
                            <YellowBtn text="????????? ?????? ??????" click={onConfirmHandler}><em></em></YellowBtn>
                        </div>
                    </div>
                </QuickApplication>

                <RealTime>
                    <h3 className="titleB">A/S ????????? ?????? ??? ????????????</h3>
                    <Slider className="list" {...settings}>
                        <div className="item">
                            <span className="status complete">????????????</span>
                            <p className="title">??????????????? ????????? ???????????? ???????????? ???????????? ???????????????.</p>
                            <p className="date">{cal.dateStr}</p>
                        </div>
                        <div className="item">
                            <span className="status complete">????????????</span>
                            <p className="title">????????? ?????? ??? ????????? ?????? ????????????(????????? 3??? ????????? ??????????????????).</p>
                            <p className="date">{cal.dateStr}</p>
                        </div>
                        <div className="item">
                            <span className="status complete">????????????</span>
                            <p className="title">????????? ?????????.</p>
                            <p className="date">{cal.dateStr}</p>
                        </div>
                        <div className="item">
                            <span className="status complete">????????????</span>
                            <p className="title">?????? ??? ????????? ??????.</p>
                            <p className="date">{cal.dateStr}</p>
                        </div>
                        <div className="item">
                            <span className="status complete">????????????</span>
                            <p className="title">????????? ????????? ?????? ??????.</p>
                            <p className="date">{cal.dateStr1}</p>
                        </div>
                        <div className="item">
                            <span className="status complete">????????????</span>
                            <p className="title">????????? ?????? ???????????? ????????? ?????? ????????? ????????????.</p>
                            <p className="date">{cal.dateStr2}</p>
                        </div>
                        <div className="item">
                            <span className="status complete">????????????</span>
                            <p className="title">????????? ????????????</p>
                            <p className="date">{cal.dateStr2}</p>
                        </div>
                        <div className="item">
                            <span className="status complete">????????????</span>
                            <p className="title">????????? ???????????? ???????????? ????????? ????????????</p>
                            <p className="date">{cal.dateStr2}</p>
                        </div>
                        <div className="item">
                            <span className="status complete">????????????</span>
                            <p className="title">???????????? ?????? ???????????? ?????????????????? ?????????????????? ???????????? ?????? ?????????.</p>
                            <p className="date">{cal.dateStr3}</p>
                        </div>
                        <div className="item">
                            <span className="status complete">????????????</span>
                            <p className="title">?????? ????????? ????????? ???????????? ?????? ???????????? ??????????????? ???????????????.</p>
                            <p className="date">{cal.dateStr4}</p>
                        </div>
                        <div className="item">
                            <span className="status complete">????????????</span>
                            <p className="title">????????? ????????? ????????????.</p>
                            <p className="date">{cal.dateStr5}</p>
                        </div>
                        <div className="item">
                            <span className="status complete">????????????</span>
                            <p className="title">????????? ??????????????????.</p>
                            <p className="date">{cal.dateStr5}</p>
                        </div>
                    </Slider>
                </RealTime>
            </div>


            <ServiceCategory>
                <div className="wrap">
                    <div className="box" onClick={onMacRepairHandler}>
                        <img src={category01} alt="" />
                        <p>??????, ????????? ??????(??????)<img src={ArrowRight} alt="" /></p>
                    </div>
                    <div className="box" onClick={onAssemblyPCHandler}>
                        <img src={category02} alt="" />
                        <p>????????? ??????(??????AS)<img src={ArrowRight} alt="" /></p>
                    </div>
                    <div className="box" onClick={onPCRepairHandler}>
                        <img src={category03} alt="" />
                        <p>?????? ??? ?????? PC ??????<img src={ArrowRight} alt="" /></p>
                    </div>
                    <div className="box" onClick={onMonitorHandler}>
                        <img src={category04} alt="" />
                        <p>????????? ????????????<img src={ArrowRight} alt="" /></p>
                    </div>
                </div>
            </ServiceCategory>
            {/*???????????????????????? ??????*/}
            {privacyModal && <PrivacyModal onPrivacyHandler={onPrivacyHandler}></PrivacyModal>}
        </ServiceLayout>
    )
}

export default MainService;