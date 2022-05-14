import React, { useState, useEffect, useRef } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import axios from "axios";

//components
import YellowBtn from "../../components/layout/YellowBtn";
import Pagenation from '../../components/Pagenation';
import CheckAlert from "../../components/modal/CheckAlert";

//image
import dobuleArrow from '../../styles/images/arrow_double.svg'
import rightArrow from '../../styles/images/arrow_right.svg'

const ServiceListLayout = styled.section`
.btnarea{
    margin-top:70px;
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

const SearchForm = styled.div`
display:flex;
align-items:center;
justify-content: flex-end;
margin-bottom:20px;
input{
    height: 45px;
    width:330px;
    border-radius: 25px 0 0 25px;
    padding-left: 25px;
}
button{
    background: #555;
    text-align: center;
    color: #fff;
    display: inline-block;
    height: 45px;
    border-radius: 0 25px 25px 0;
    padding: 8px 30px 8px 24px;
    box-sizing: border-box;
    vertical-align: top;
    transition: background .4s;
    :hover{
        background: #000;
    }
}

@media screen and (max-width: 1500px) {
    margin-bottom:2vw;
    input{
        height:4vw;
        padding-left:2.5vw;
    }
    button{
        height: 4vw;
        padding: 1.1vw 2.5vw 1.5vw 2vw;
    }
}
@media screen and (max-width: 768px) {
    input{
        height: 5vw;
        padding-left: 2.5vw;
        width: 35vw;
    }
    button{
        height: 5vw;
        padding: 0 3.5vw 0 3vw;
        line-height: 5vw;
    }
}
@media screen and (max-width: 414px) {
    margin-bottom:5vw;
    input{
        height: 35px;
        padding-left: 21px;
        width: 80vw;
        font-size:12px;
    }
    button{
        height: 35px;
        padding: 0 3.5vw 0 3vw;
        line-height: 35px;
        font-size: 12px;
        width: 20vw;    
    }
}
`;
const CardTable = styled.section`
display:flex;
flex-wrap:wrap;
    .box{
        margin-right:30px;
        width:calc((100% - 90px) / 4);
        background-color:#fff;
        border-radius:20px;
        position:relative;
        padding:30px 25px;
        cursor:pointer;
        transition:box-shadow .5s;
        box-shadow: 5px 5px 15px rgb(0 0 0 / 15%);
        border: 2px solid #fff;
        transition:border .5s;
        &:hover{
            border: 2px solid #ffc80b;
        }
        &:nth-child(4n){
            margin-right:0;
        }
        &:nth-child(n+5){
            margin-top:30px;
        }
        .writer, .date{
            font-size:14px;
            color:#9c9c9c;
            transform: skew(-0.1deg);
        }
        .title{
            font-size: 16px;
            color: #333;
            font-weight: 600;
            line-height: 1.7;
            margin: 25px 0 30px 0;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            transform: skew(-0.1deg);
        }
        .status_line{
            position:absolute;
            right:30px;
            bottom:25px;
            .status{
                display: inline-block;
                padding: 6px 12px;
                font-size: 14px;
                border-radius: 20px;
                transform: skew(-0.1deg);
                &.wait{
                    background: #9c9c9c;
                    color: #fff;
                }
                &.complete{
                    background: #ffc80b;
                    color: #252525;
                }
                
            }
        }
    }
`;

const ServiceList = () => {
    const [input, setInput] = useState('');
    const [data, setData] = useState([]);
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(1);
    const [checkAlertModal, setcheckAlertModal] = useState(false)
    const service_id = useRef();

    const navigate = useNavigate();

    const onDetatilHandler = (e) => {
        service_id.current = e.currentTarget.dataset.key;
        setcheckAlertModal(true);
        if (localStorage.getItem("mangocomSession")) {
            navigate(`/service/${service_id.current}`);
        }
    }
    const onWriteHandler = () => {
        navigate("/service/write");
    }

    const onInputHandler = (e) => {
        setInput(e.target.value);
    }

    const onSearchHandler = (e) => {
        axios.get(`${process.env.host}/service?page=${page}&input=${input}`).then(({ data }) => {
            setCount(data.data[0].count);
            setData(data.data);
        })
    }

    useEffect(() => {
        axios.get(`${process.env.host}/service?page=${page}&input=${input}`).then(({ data }) => {
            setCount(data.data[0].count);
            setData(data.data);
        })
    }, [])
    return (
        <ServiceListLayout>
            <SearchForm>
                <input type="text" placeholder="검색어를 입력해주세요" onChange={onInputHandler} />
                <button onClick={onSearchHandler}>검색</button>
            </SearchForm>

            <CardTable>
                {
                    data && data.map(i => {
                        return (
                            <div className="box" key={i.service_id} data-key={i.service_id} onClick={onDetatilHandler}>
                                <p className="writer">{i.name}님</p>
                                <p className="title"><span>{i.symptom}</span></p>
                                <p className="date">{i.reg_date}</p>
                                <p className="status_line">{i.progress == 0 ? <span className='status wait'>접수대기</span> : <span className='status complete'>접수완료</span>}</p>
                            </div>
                        )
                    })
                }
            </CardTable>
            <Pagenation className="paging" total={count} setData={setData} page={page} setPage={setPage} input={input}></Pagenation>
            <div className="btnarea center">
                <YellowBtn text="글쓰기" click={onWriteHandler}><em></em></YellowBtn>
            </div>
            {checkAlertModal && <CheckAlert service_id={service_id.current} type="detail" setcheckAlertModal={setcheckAlertModal}></CheckAlert>}
        </ServiceListLayout>
    )
}

export default ServiceList;