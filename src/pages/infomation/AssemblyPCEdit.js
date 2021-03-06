import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import styled from "styled-components";
import axios from "axios";

//components
import YellowBtn from "../../components/layout/YellowBtn";
import BorderBtn from "../../components/layout/BorderBtn";

//image

import ArrowGray from '../../styles/images/arrow_gray.svg'

const AssemblyPCEditLayout = styled.section`
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
            }&.right{
                position:relative;
                input{
                    padding-right:50px;
                    text-align:right;
                }
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
            .unit{
                position:absolute;
                right:0;
                bottom:14px;
                font-size:17px;
            }
        }
        .img_size{
            font-size:14px;
            margin-top:5px;
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
            display:flex;
            align-items:center;
            flex-wrap:wrap;
            &>div{
                margin-right:10px;
                &:last-child{
                    margin-right:0;
                }
            }
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
            &.right{
                input{
                    paddingr-right:3vw;
                }
                .unit{
                    bottom: 1vw;
                    font-size: 1.3vw;
                }
            }
            input, select, textarea{
                font-size: 1.3vw;
                padding: 1vw 1.5vw;
            }
        }
        
        .img_size{
            font-size:1vw;
            margin-top:0.5vw;
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
                &.right{
                    input{
                        paddingr-right:4vw;
                    }
                    .unit{
                        bottom: 1.2vw;
                        font-size: 1.7vw;
                    }
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
                &.right{
                    input{
                        paddingr-right:31px;
                    }
                    .unit{
                        bottom: 11px;
                        font-size: 13px;
                    }
                }
            }
            .img_size{
                font-size:10px;
                margin-top:5px;
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
const AssemblyPCEdit = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [deleteFiles, setDeleteFiles] = useState();
    const [files, setFiles] = useState();
    const [data, setData] = useState({
        title: "", contents: "", price: "", category: "", cpu_value: "", mainboard: "", vga: "", ram: "", hdd: "", ssd: "", power: "", case_value: "", cdrom: "", thumbnail_url: "", detail_url: ""
    });

    const onInputHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const onFileHandler = (e) => {
        setFiles({ ...files, [e.target.name]: e.target.files[0] });
    }

    const onListHandler = (e) => {
        navigate(-1);
        window.scrollTo({ top: 0, left: 0 });
    }

    const onConfirmHandler = async () => {
        const formData = new FormData();

        if (files) {
            Object.entries(files).forEach(([key, value]) => {
                formData.append(key, value);
            });
        }

        formData.append('input', JSON.stringify(data));

        await axios.put(`${process.env.host}/product/${location.state.id_product}`, formData).then(({ data }) => {
            alert('????????????')
            navigate('/informationuse/assemblypc')
        })
    }

    useEffect(() => {

        if (!localStorage.getItem('mangocomSession')) {
            alert('????????? ???????????????.')
            navigate(-1)
        }

        axios.get(`${process.env.host}/product/${location.state.id_product}`).then(({ data }) => {
            setData(data);
        })
    }, [])

    return (
        <AssemblyPCEditLayout>
            <ServiceWriteTable>
                <li>
                    <div className="line">
                        <p className="item">?????????.</p>
                        <p className="text">
                            <input type="text" name="title" defaultValue={data.title} onChange={onInputHandler} />
                        </p>
                    </div>
                    <div className="line">
                        <p className="item">??????.</p>
                        <p className="text">
                            <select name="category" value={data.category} onChange={onInputHandler}>
                                <option value="">????????? ????????? ?????????</option>
                                <option value="assembly">??????</option>
                                <option value="used">??????</option>
                            </select>
                        </p>
                    </div>
                </li>
                <li>
                    <div className="line">
                        <p className="item">CPU.</p>
                        <p className="text">
                            <input type="text" name="cpu_value" defaultValue={data.cpu_value} onChange={onInputHandler} />
                        </p>
                    </div>
                    <div className="line">
                        <p className="item">M.Board.</p>
                        <p className="text">
                            <input type="text" name="mainboard" defaultValue={data.mainboard} onChange={onInputHandler} />
                        </p>
                    </div>
                </li>
                <li>
                    <div className="line">
                        <p className="item">VGA.</p>
                        <p className="text">
                            <input type="text" name="vga" defaultValue={data.vga} onChange={onInputHandler} />
                        </p>
                    </div>
                    <div className="line">
                        <p className="item">RAM.</p>
                        <p className="text">
                            <input type="text" name="ram" defaultValue={data.ram} onChange={onInputHandler} />
                        </p>
                    </div>
                </li>
                <li>
                    <div className="line">
                        <p className="item">HDD.</p>
                        <p className="text">
                            <input type="text" name="hdd" defaultValue={data.hdd} onChange={onInputHandler} />
                        </p>
                    </div>
                    <div className="line">
                        <p className="item">SSD.</p>
                        <p className="text">
                            <input type="text" name="ssd" defaultValue={data.ssd} onChange={onInputHandler} />
                        </p>
                    </div>
                    <div className="line">
                        <p className="item">POWER.</p>
                        <p className="text">
                            <input type="text" name="power" defaultValue={data.power} onChange={onInputHandler} />
                        </p>
                    </div>
                </li>
                <li>
                    <div className="line">
                        <p className="item">CASE.</p>
                        <p className="text">
                            <input type="text" name="case_value" defaultValue={data.case_value} onChange={onInputHandler} />
                        </p>
                    </div>
                    <div className="line">
                        <p className="item">CD-ROM.</p>
                        <p className="text">
                            <input type="text" name="cdrom" defaultValue={data.cdrom} onChange={onInputHandler} />
                        </p>
                    </div>
                    <div className="line">
                        <p className="item">?????????.</p>
                        <p className="text right">
                            <input type="text" name="price" defaultValue={data.price} onChange={onInputHandler} />
                            <em className="unit">??????</em>
                        </p>
                    </div>
                </li>
                <li className="w100">
                    <div className="line">
                        <p className="item">????????? ?????????.</p>
                        <p className="text long">
                            <textarea name="contents" defaultValue={data.contents} onChange={onInputHandler}></textarea>
                        </p>
                    </div>
                </li>
                <li>
                    <div className="line">
                        <p className="item">?????? ?????????.</p>
                        <div className="text">
                            <div className="filebox">
                                <div className="default">
                                    {/* {data && <div className="file-name" >{data.thumbnail_name}</div>} */}
                                    {
                                        files ?
                                            files.thumbnail_url ?
                                                <div className="file-name" >{files.thumbnail_url.name}</div>
                                                :
                                                <div className="file-name" >{data.thumbnail_name}</div>
                                            :
                                            <div className="file-name" >{data.thumbnail_name}</div>
                                    }
                                </div>
                                <label htmlFor="thumbnail_url">????????????</label>
                                <input type="file" name="thumbnail_url" id="thumbnail_url" onChange={onFileHandler} />
                            </div>
                        </div>
                        <p className="img_size">?????? ????????? ????????? 566 X 549 ?????????.</p>
                    </div>
                    <div className="line">
                        <p className="item">????????? ?????????.</p>
                        <div className="text">
                            <div className="filebox">
                                <div className="default">
                                    {
                                        files ?
                                            files.detail_url ?
                                                <div className="file-name" >{files.detail_url.name}</div>
                                                :
                                                <div className="file-name" >{data.detail_name}</div>
                                            :
                                            <div className="file-name" >{data.detail_name}</div>
                                    }
                                </div>
                                <label htmlFor="detail_url">????????????</label>
                                <input type="file" name="detail_url" id="detail_url" onChange={onFileHandler} />
                            </div>
                        </div>
                    </div>
                </li>
            </ServiceWriteTable>
            <div className="btnarea right">
                <BorderBtn text="??????" click={onListHandler}><em></em></BorderBtn>
                <YellowBtn text="??????" click={onConfirmHandler}><em></em></YellowBtn>
            </div>
        </AssemblyPCEditLayout>
    )
}

export default AssemblyPCEdit;