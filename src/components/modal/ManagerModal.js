import React, { useState, useRef } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import axios from 'axios'

//components
import YellowBtn from "../layout/YellowBtn";
import BorderBtn from "../layout/BorderBtn";

const ManagerModalLayout = styled.div`
    position:fixed;
    left:0;
    top:0;
    width:100%;
    height:100%;
    z-index: 500;
    .shadow{
        position:fixed;
        left:0;
        top:0;
        width:100%;
        height:100%;
        background:rgba(0,0,0,.3);
        z-index: 2;
    }
    .inner{
        background-color: #fff;
        position: absolute;
        left: 50%;
        top: 50%;
        z-index: 5;
        border-radius: 30px;
        text-align: center;
        transform: translate(-50%, -50%);
        .inner_wrap{
            text-align: left;
            padding:20px 30px 30px 30px;
            max-height: 80vh;
            overflow-y: auto;
        }
        .title{
            font-size: 18px;
            font-weight: 600;
            text-align: center;
            background-color: #ffc80b;
            padding: 20px 10px;
            border-radius: 30px 30px 0 0;
        }
        p{
            font-size: 18px;
            font-weight: 600;
            margin-top: 10px;
        }
        .btnarea{
            margin-top:30px;
        }
        .close{
            position: absolute;
            right: 20px;
            top: 20px;
            width: 30px;
            height: 30px;
            cursor:pointer;
            &:before, &:after{
                content:'';
                width:100%;
                height:3px;
                background:#333;
                border-radius: 3px;
                position: absolute;
                left: 0;
                bottom: 50%;
            }
            &:before{transform: rotate(45deg);}
            &:after{transform: rotate(-45deg);}
        }
        dl{
            display:flex;
            margin-top: 15px;
            align-items: center;
            dt{
                font-size: 17px;
                width: 70px;
                font-weight: 600;
                text-align: left;
            }
            dd{
                width:calc(100% - 70px);
                text-align: left;
                input{
                    width:100%;
                }
            }
        }
    }

@media screen and (max-width: 1500px) {

    .inner{
        border-radius:2vw;
        .title{
            font-size: 1.5vw;
            padding: 1.3vw 0.8vw;
            border-radius:2vw 2vw 0 0;
        }
        .inner_wrap{
            padding:1.5vw 2vw 2vw 2vw;
        }
        dl{
            margin-top:0.5vw;
            dt{
                font-size: 1.2vw;
                width: 7vw;
            }
            dd{
                width:calc(100% - 7vw);
            }
        }
        .btnarea{
            margin-top:2vw;
        }
        .close{
            right: 2vw;
            top: 1.5vw;
            width: 2vw;
            height: 2vw;
        }
    }
}

@media screen and (max-width: 768px) {
    .inner{
        .title{
            font-size: 2.5vw;
            padding: 1.8vw 0.8vw;
        }
        .inner_wrap{
            padding:3vw 3.5vw 3.5vw 3.5vw;
        }
        dl{
            width:40vw;
            dt{
                font-size: 1.7vw;
                width: 9vw;
            }
            dd{
                width:calc(100% - 9vw);
            }
        }
        .close{
            top: 2.5vw;
            width:3vw;
        }
    }
}

@media screen and (max-width: 600px) {

    .inner{
        dl{
            width:50vw;
            dt{
                font-size: 2vw;
                width: 10vw;
            }
            dd{
                width:calc(100% - 10vw);
            }
        }
    }
}
@media screen and (max-width: 414px) {
    .inner{
        border-radius:15px;
        .title{
            font-size: 16px;
            padding: 10px 20px;
            border-radius: 15px 15px 0 0;
        }
        .inner_wrap{
            padding:15px;
        }
        .close{
            right: 11px;
            top: 12px;
            width: 20px;
            height: 20px;
        }

        dl{
            width:80vw;
            margin-top:5px;
            dt{
                font-size: 15px;
                width: 75px;
            }
            dd{
                width:calc(100% - 75px);
            }
        }
        .btnarea{
            margin-top:20px;
        }
    }
}
`;

const ManagerModal = ({ onManagerHandler }) => {
    const navigate = useNavigate();

    const [input, setInput] = useState({
        id: '',
        password: '',
    });

    const onChangeHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }


    const onConfirmHandler = (e) => {
        axios.post(`${process.env.host}/member`, input).then(({ data }) => {
            if (data.success) {
                localStorage.setItem('mangocomSession', data.sid);
                onManagerHandler()
                alert('로그인 성공')
            } else {
                alert('로그인 정보가 일치하지 않습니다.');
            }
        })
    }
    // const onLoginHandler = () => {        
    //     if(localStorage.getItem('neoulSession')==null){            
    //         navigate('/login')
    //     }else{            
    //         localStorage.removeItem('neoulSession')
    //         axios.post(`${process.env.host}/member/logout`, {sid: localStorage.getItem('neoulSession')}).then(({data})=>{               
    //         })
    //         navigate(-1)
    //     }
    //     setModal(false)
    // }

    return (
        <ManagerModalLayout>
            <div className="inner">
                <h4 className="title">관리자 로그인</h4>
                <div className="inner_wrap">
                    <dl>
                        <dt>아이디</dt>
                        <dd><input type="text" name="id" placeholder="아이디를 입력해주세요." onChange={onChangeHandler} /></dd>
                    </dl>
                    <dl>
                        <dt>비밀번호</dt>
                        <dd><input type="password" name="password" placeholder="비밀번호를 입력해주세요." onChange={onChangeHandler} /></dd>
                    </dl>
                    <div className="btnarea center">
                        <YellowBtn text="로그인" click={onConfirmHandler}><em></em></YellowBtn>
                    </div>
                </div>
                <button className="close" onClick={onManagerHandler}></button>
            </div>
            <div className="shadow"></div>
        </ManagerModalLayout>
    )
}

export default ManagerModal;