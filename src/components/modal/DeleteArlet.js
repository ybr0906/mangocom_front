import React from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import axios from "axios";

//components
import YellowBtn from "../layout/YellowBtn";
import BorderBtn from "../layout/BorderBtn";

const DeleteAlertLayout = styled.div`
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
        padding: 30px;
        border-radius: 30px;
        text-align: center;
        transform: translate(-50%, -50%);
        p{
            font-size: 18px;
            font-weight: 600;
            margin-top: 10px;
        }
        .btnarea{
            margin-top:30px;
        }
    }
`;

const DeleteAlert = (props) => {
    const { setDeleteModal, service_id, file } = props;
    const navigate = useNavigate();

    const onCancleHandler = (e) => {
        setDeleteModal(false)
    }
    const onConfirmHandler = (e) => {
        axios.post(`${process.env.host}/member/check`, { sid: localStorage.getItem('mangocomSession') }).then(({ data }) => {
            axios.delete(`${process.env.host}/service/${service_id}`, { data: { deleteFile: file } }).then(({ data }) => {
                setDeleteModal(false)
                navigate(-1)
            })
        })
    }
    return (
        <DeleteAlertLayout>
            <div className="inner">
                <p>삭제하시겠습니까?</p>
                <div className="btnarea center">
                    <BorderBtn text="취소" click={onCancleHandler}><em></em></BorderBtn>
                    <YellowBtn text="확인" click={onConfirmHandler}><em></em></YellowBtn>
                </div>
            </div>
            <div className="shadow"></div>
        </DeleteAlertLayout>
    )
}

export default DeleteAlert;