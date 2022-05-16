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
    }  
}
`;
const AssemblyPCEdit = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [files, setFiles] = useState([]);
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

    const onConfirmHandler = () => {
        const formData = new FormData();

        Object.entries(files).forEach(([key, value]) => {
            formData.append(key, value);
        });
        formData.append('input', JSON.stringify(data));

        axios.put(`${process.env.host}/product`, formData).then(({ data }) => {
            alert('수정완료')
            navigate('/informationuse/assemblypc')
        })
    }

    useEffect(() => {
        axios.get(`${process.env.host}/product/${location.state.id_product}`).then(({ data }) => {
            //setFile((data.con_url || '').split(','));
            setData(data);
        })
    }, [])

    return (
        <AssemblyPCEditLayout>
            <ServiceWriteTable>
                <li>
                    <div className="line">
                        <p className="item">제품명.</p>
                        <p className="text">
                            <input type="text" name="title" defaultValue={data.title} onChange={onInputHandler} />
                        </p>
                    </div>
                    <div className="line">
                        <p className="item">구분.</p>
                        <p className="text">
                            <select name="category" value={data.category} onChange={onInputHandler}>
                                <option value="">구분을 선택해 주세요</option>
                                <option value="assembly">조립</option>
                                <option value="used">중고</option>
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
                        <p className="item">판매가.</p>
                        <p className="text">
                            <input type="text" name="price" defaultValue={data.price} onChange={onInputHandler} />
                        </p>
                    </div>
                </li>
                <li className="w100">
                    <div className="line">
                        <p className="item">제품의 특장점.</p>
                        <p className="text long">
                            <textarea name="contents" defaultValue={data.contents} onChange={onInputHandler}></textarea>
                        </p>
                    </div>
                </li>
                <li>
                    <div className="line">
                        <p className="item">제품 이미지.</p>
                        <p className="text">
                            <input type="file" name="thumbnail_url" onChange={onFileHandler} />
                        </p>
                    </div>
                    <div className="line">
                        <p className="item">디테일 이미지.</p>
                        <p className="text">
                            <input type="file" name="detail_url" onChange={onFileHandler} />
                        </p>
                    </div>
                </li>
            </ServiceWriteTable>
            <div className="btnarea right">
                <BorderBtn text="취소" click={onListHandler}><em></em></BorderBtn>
                <YellowBtn text="수정" click={onConfirmHandler}><em></em></YellowBtn>
            </div>
        </AssemblyPCEditLayout>
    )
}

export default AssemblyPCEdit;