import React, { useState, useRef, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import styled from "styled-components";
import axios from "axios";

//components
import YellowBtn from "../../components/layout/YellowBtn";
import BorderBtn from "../../components/layout/BorderBtn";

//image
import dobuleArrow from '../../styles/images/arrow_double.svg'
import rightArrow from '../../styles/images/arrow_right.svg'
import ArrowGray from '../../styles/images/arrow_gray.svg'

const ServiceEditLayout = styled.section`
.btnarea{
    margin-top:70px;
    button{
        margin-right:5px;
        &:last-child{
            margin-right:0;
        }
    }
}
@media screen and (max-width: 1500px) {
    .btnarea{
        margin-top:5vw;
    }
}

@media screen and (max-width: 414px) {
    .btnarea{
        margin-top:40px;
    }
}
`;
const ServiceEditTable = styled.ul`
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

@media screen and (max-width: 1500px) {
    li{
        .line{
            width:calc((100% - 3vw) / 2);
            margin-right:3vw;
            margin-top: 3vw;
            .item{
                font-size: 1.5vw;
                margin-right: 0;
                min-width: 100%;
            }
            .text{
                margin-top:0.5vw;
                &.long{
                    width:100%;
                    margin-top: 1vw;
                }
                input, select, textarea{
                    font-size: 1.3vw;
                    padding: 1vw 1.5vw;
                }
            }
        }
        .filebox{
            .default{
                font-size: 1.3vw;
                padding: 1vw 1.5vw;
                height:3.5vw;
            }
            label{
                height: 3.5vw;
                margin-left: 1vw;
                padding: 1vw 1.5vw;
            }
            input[type="file"]{
                padding:0 !important;
            }
        }
    }  
    }
    
    @media screen and (max-width: 768px) {
        li{
            .line{
                .item{
                    font-size: 1.8vw;
                }
                .text{
                    margin-top:1vw;
                    input, select, textarea{
                        font-size: 1.6vw;
                        padding: 1.2vw 1.5vw;
                    }
                }
            }
            .filebox{
                .default{
                    height:4.2vw;
                }
                label{
                    height: 4.2vw;
                }
            }
        }  
    }
    @media screen and (max-width: 414px) {
        li{
            flex-wrap:wrap;
            &:first-child{
                .line:first-child{
                    margin-top:0;
                }
            }
            .line{
                margin-right:0;
                width:100%;
                margin-top:20px;
                .item{
                    font-size: 14px;
                }
                .text{
                    margin-top:7px;
                    input, select, textarea{
                        font-size: 13px;
                        padding: 10px 10px;
                    }
                    textarea{
                        min-height:120px;
                    }
                    &.long{
                        margin-top:10px;
                    }
                }
            }
            .filebox{
                .default{
                    height:27px;
                    font-size: 13px;
                    padding: 10px 10px;
                }
                label{
                    height: 27px;
                    font-size: 13px;
                    padding: 5px 10px;
                    margin-left: 5px;
                }
            }
        }  
    }
`;

const ServiceEdit = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [data, setData] = useState({});
    const [file, setFile] = useState([]);
    const [editFile, setEditFile] = useState({
        file: [],
        previewURL: "",
    })


    const onInputHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const onFileHandler = (e) => {
        setData({ ...data, file_name: null });
        let reader = new FileReader();
        let file = e.target.files[0];
        const filesInArr = Array.from(e.target.files);

        reader.onloadend = () => {
            setEditFile({
                file: filesInArr,
                previewURL: reader.result,
            });
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    }

    const onCancleHandler = () => {
        navigate(-1)
    }
    const onConfirmHandler = () => {
        const formData = new FormData();

        if (editFile.file.length != 0) {
            editFile.file.map((i) => {
                formData.append('file', i);
            })
            file.map((i) => {
                formData.append('deleteFile', i);
            })
        }

        formData.append('input', JSON.stringify(data));

        axios.put(`${process.env.host}/service/${location.state.service_id}`, formData).then(({ data }) => {
            navigate(-1);
        })
    }

    useEffect(() => {
        axios.get(`${process.env.host}/service/${location.state.service_id}`).then(({ data }) => {
            setFile((data.file_url || '').split(','));
            setData(data);
        })
    }, [])
    return (
        <ServiceEditLayout>
            <div className="wrap">
                <ServiceEditTable>
                    <li>
                        <div className="line">
                            <p className="item">??????.</p>
                            <p className="text">
                                <input type="text" name="name" defaultValue={data.name} onChange={onInputHandler} />
                            </p>
                        </div>
                        <div className="line">
                            <p className="item">????????????.</p>
                            <p className="text">
                                <input type="password" name="password" defaultValue={data.password} onChange={onInputHandler} />
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="line">
                            <p className="item">?????????.</p>
                            <p className="text">
                                <input type="text" name="phone" defaultValue={data.phone} onChange={onInputHandler} />
                            </p>
                        </div>
                        <div className="line">
                            <p className="item">????????? ??????.</p>
                            <p className="text">
                                <select value={data.type} name="type" onChange={onInputHandler}>
                                    <option value="">????????? ????????? ?????????</option>
                                    <option value="apple">??????, ????????? ??????(??????)</option>
                                    <option value="as">????????? ??????(??????AS)</option>
                                    <option value="product">?????? ??? ?????? PC ??????</option>
                                    <option value="monitor">????????? ????????????</option>
                                </select>
                            </p>
                        </div>
                    </li>
                    <li className="w100">
                        <div className="line">
                            <p className="item">??????.</p>
                            <p className="text">
                                <input type="text" name="address" defaultValue={data.address} onChange={onInputHandler} />
                            </p>
                        </div>
                    </li>
                    <li className="w100">
                        <div className="line">
                            <p className="item">??????.</p>
                            <p className="text long">
                                <textarea placeholder="????????? ????????? ?????????" name="symptom" defaultValue={data.symptom} onChange={onInputHandler}></textarea>
                            </p>
                        </div>
                    </li>
                    <li className="w100">
                        <div className="line">
                            <p className="item">????????????.</p>
                            <div className="text long">
                                <div className="filebox">
                                    <div className="default">

                                        {(data.file_name || '').split(',').map((i, index) => {
                                            return (
                                                <div className='file-name' key={index}>{i}</div>
                                            )
                                        })}
                                        {
                                            editFile.file && editFile.file.map((i, index) => {
                                                return (
                                                    <div className='file-name' key={index}>{i.name}</div>
                                                )
                                            })
                                        }


                                    </div>
                                    <label htmlFor="file">????????????</label>
                                    <input type="file" id="file" multiple onChange={onFileHandler} />
                                </div>
                            </div>
                        </div>
                    </li>
                </ServiceEditTable>

                <div className="btnarea right">
                    <BorderBtn text="??????" click={onCancleHandler}><em></em></BorderBtn>
                    <YellowBtn text="??????" click={onConfirmHandler}><em></em></YellowBtn>
                </div>
            </div>
        </ServiceEditLayout>
    )
}

export default ServiceEdit;