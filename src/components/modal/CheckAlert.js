import React, { useState, useRef } from "react";
import { Routes, Route, useNavigate, useParams } from 'react-router-dom';
import styled from "styled-components";
import axios from "axios";

//components
import YellowBtn from "../layout/YellowBtn";
import BorderBtn from "../layout/BorderBtn";


const CheckAlert = (props) => {
    const { setcheckAlertModal, file, type, service_id } = props;
    const navigate = useNavigate();
    const param = useParams();

    const [password, setPassword] = useState('');


    const onInputHandler = (e) => {
        setPassword(e.target.value);
    }
    const onCancleHandler = (e) => {
        setcheckAlertModal(false)
    }
    const onConfirmHandler = (e) => {
        axios.post(`${process.env.host}/auth/check`, { id: service_id, password }).then(({ data }) => {
            const { success } = data;
            if (success) {
                if (type == "detail") {
                    navigate(`/service/${service_id}`);
                } else if (type == "delete") {
                    axios.delete(`${process.env.host}/service/${service_id}`, { data: { deleteFile: file } }).then(({ data }) => {
                        setcheckAlertModal(false)
                        navigate(-1)
                    })
                } else if (type == "edit") {
                    navigate(`/service/edit`, { state: { service_id: service_id } });
                }
            } else {
                alert("비밀번호가 다릅니다.");
            }

        })
    }
    return (
        <div className="inner">
            <p>비밀번호를 입력해주세요.</p>
            <input type="password" onChange={onInputHandler}></input>
            <div className="btnarea right">
                <BorderBtn text="취소" click={onCancleHandler}><em></em></BorderBtn>
                <YellowBtn text="확인" click={onConfirmHandler}><em></em></YellowBtn>
            </div>
        </div>
    )
}

export default CheckAlert;