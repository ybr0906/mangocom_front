import React, { useState, useRef } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import axios from 'axios';

//components
import YellowBtn from "../../components/layout/YellowBtn";
import BorderBtn from "../../components/layout/BorderBtn";

//image
import dobuleArrow from '../../styles/images/arrow_double.svg'
import rightArrow from '../../styles/images/arrow_right.svg'
import ArrowGray from '../../styles/images/arrow_gray.svg'

const ServiceWriteLayout = styled.section`
.btnarea{
    margin-top:70px;
    button{
        margin-right:5px;
        &:last-child{
            margin-right:0;
        }
    }
}
`;
const ServiceWriteTable = styled.ul`
li{
    display:flex;
    align-items:center;
    .line{
        width:calc((100% - 60px) / 2);
        margin-right:60px;
        display:flex;
        align-items:center;
        flex-wrap: wrap;
        margin-top: 50px;
        &:last-child{
            margin-right:0;
        }
        .item{
            font-size: 20px;
            font-weight: 600;
            margin-right: 30px;
            min-width: 108px;
        }
        .text{
            width:100%;
            margin-top:10px;
            &.long{
                width:100%;
                margin-top: 20px;
            }
            input, select, textarea{
                font-size:17px;
                height: auto;
                padding: 15px 13px;
                transition:border-color .5s;
            }
            input:hover, select:hover, textarea:hover, input:focus, select:focus, textarea:focus{
                border-color:#000;
            }
            input{
                border:none;
                border-bottom:2px solid #d8d8d8;
                width:100%;
                min-width:auto;
            }
            select{
                border:none;
                border-bottom:2px solid #d8d8d8;
                width:100%;
                min-width:auto;
                background-image:url(${ArrowGray});
                background-position:right 5px center;
                background-repeat:no-repeat;
            }
            textarea{
                min-height:200px;
            }
        }
    }
    &.w100{
        .line{
            width:100%;
            margin-right:0;
        }        
    }
    .filebox{
        display:flex;
        align-items:flex-end;
        .upload-name {
            display: inline-block;
            height: 40px;
            padding: 0 10px;
            vertical-align: middle;
            border: 1px solid #dddddd;
            width: 78%;
            color: #999999;
        }
        .default{
            border: none;
            border-bottom: 2px solid #d8d8d8;
            width: 100%;
            min-width: auto;
            font-size: 17px;
            height: 54px;
            padding: 15px 13px;
            -webkit-transition: border-color .5s;
            transition: border-color .5s;
            position:relative;
        }
        .file-name{
            font-size: 17px;
        }
        label {
            display: inline-block;
            padding: 10px 20px;
            color: #fff;
            vertical-align: middle;
            background-color: #999999;
            cursor: pointer;
            height: 40px;
            margin-left: 10px;
        }
        input[type="file"] {
            position: absolute;
            width: 0;
            height: 0;
            padding: 0;
            overflow: hidden;
            border: 0;
        }
    }
}
`;

const ServiceWrite = () => {
    const [input, setInput] = useState();
    const [postfiles, setPostfiles] = useState({
        file: [],
        previewURL: "",
    });
    const navigate = useNavigate();

    const onCancleHandler = (e) => {
        navigate(-1)
    }
    const onConfirmHandler = (e) => {

        if (input.name == '') {
            alert('이름을 입력해주세요.');
        } else if (input.password == '') {
            alert('비밀번호를 입력해주세요.');
        } else if (input.title == '') {
            alert('제목을 입력해주세요.');
        } else if (input.contents == "") {
            alert('내용을 입력해주세요.');
        } else {
            const formData = new FormData();
            postfiles.file.map((i) => {
                formData.append('file', i);
            })
            formData.append('input', JSON.stringify(input));

            axios.post(`${process.env.host}/service`, formData).then(({ data }) => {
                console.log(data)
            })
        }
    }

    const onInputHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    const onSelectHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    const onFileHandler = (e) => {
        e.stopPropagation();
        let reader = new FileReader();
        let file = e.target.files[0];
        const filesInArr = Array.from(e.target.files);

        reader.onloadend = () => {
            setPostfiles({
                file: filesInArr,
                previewURL: reader.result,
            });
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    }


    return (
        <ServiceWriteLayout>
            <div className="wrap">
                <ServiceWriteTable>
                    <li>
                        <div className="line">
                            <p className="item">성함.</p>
                            <p className="text">
                                <input type="text" placeholder="성함을 입력해주세요." name="name" onChange={onInputHandler} />
                            </p>
                        </div>
                        <div className="line">
                            <p className="item">비밀번호.</p>
                            <p className="text">
                                <input type="password" placeholder="비밀번호를 입력해 주세요" name="password" onChange={onInputHandler} />
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="line">
                            <p className="item">연락처.</p>
                            <p className="text">
                                <input type="text" placeholder="연락처를 입력해 주세요" name="phone" onChange={onInputHandler} />
                            </p>
                        </div>
                        <div className="line">
                            <p className="item">서비스 항목.</p>
                            <p className="text">
                                <select name="type" onChange={onSelectHandler}>
                                    <option value="">항목을 선택해 주세요</option>
                                    <option value="apple">맥북, 아이맥 수리(애플)</option>
                                    <option value="as">컴퓨터 수리(출장AS)</option>
                                    <option value="product">조립 및 중고 PC 판매</option>
                                    <option value="monitor">노트북 액정문의</option>
                                </select>
                            </p>
                        </div>
                    </li>
                    <li className="w100">
                        <div className="line">
                            <p className="item">주소.</p>
                            <p className="text">
                                <input type="text" placeholder="주소를 입력해 주세요" name="address" onChange={onInputHandler} />
                            </p>
                        </div>
                    </li>
                    <li className="w100">
                        <div className="line">
                            <p className="item">증상.</p>
                            <p className="text long">
                                <textarea placeholder="증상을 입력해 주세요" name="symptom" onChange={onInputHandler}></textarea>
                            </p>
                        </div>
                    </li>
                    <li className="w100">
                        <div className="line">
                            <p className="item">첨부파일.</p>
                            <div className="text long">
                                <div className="filebox">
                                    <div className="default">
                                        {postfiles && postfiles.file.map((i, index) => <div className="file-name" key={index}>{i.name}</div>)}
                                    </div>
                                    <label htmlFor="file">파일찾기</label>
                                    <input type="file" id="file" multiple onChange={onFileHandler} />
                                </div>
                            </div>
                        </div>
                    </li>
                </ServiceWriteTable>

                <div className="btnarea right">
                    <BorderBtn text="취소" click={onCancleHandler}><em></em></BorderBtn>
                    <YellowBtn text="확인" click={onConfirmHandler}><em></em></YellowBtn>
                </div>
            </div>
        </ServiceWriteLayout>
    )
}

export default ServiceWrite;