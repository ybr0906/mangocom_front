import React, { useState, useRef } from "react";
import { Routes, Route, useNavigate, useParams } from 'react-router-dom';
import styled from "styled-components";
import axios from "axios";

//components
import YellowBtn from "../layout/YellowBtn";
import BorderBtn from "../layout/BorderBtn";

const CheckAlertLayout = styled.div`
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
        padding: 30px 30px 20px 30px;
        border-radius: 30px;
        text-align: center;
        transform: translate(-50%, -50%);
        p{
            font-size: 18px;
            font-weight: 600;
            margin-top: 10px;
            margin-bottom:10px;
        }
        .btnarea{
            margin-top:30px;
            button{
                margin-right:5px;
                &:last-child{
                    margin-right:0;
                }
            }
        }
    }
`;

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
        axios.post(`${process.env.host}/service/check`, { id: service_id, password }).then(({ data }) => {
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
        <CheckAlertLayout>
            <div className="inner">
                <p>비밀번호를 입력해주세요.</p>
                <input type="password" onChange={onInputHandler}></input>
                <div className="btnarea center">
                    <BorderBtn text="취소" click={onCancleHandler}><em></em></BorderBtn>
                    <YellowBtn text="확인" click={onConfirmHandler}><em></em></YellowBtn>
                </div>
            </div>
            <div className="shadow"></div>
        </CheckAlertLayout>
    )
}

export default CheckAlert;