import React, { useRef } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const onMenuHandler = (e) => {
        navigate(`/${e.target.dataset.title}`);
    }

    return (
        <>
            Header
            <button data-title="" onClick={onMenuHandler}>로고</button>
            <button data-title="introduce" onClick={onMenuHandler}>회사소개</button>
            <button data-title="informationuse" onClick={onMenuHandler}>이용안내</button>
            <button data-title="service" onClick={onMenuHandler}>서비스문의</button>
            <button data-title="directions" onClick={onMenuHandler}>찾아오시는 길</button>
        </>
    )
}

export default React.memo(Header);