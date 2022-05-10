import React, { useState, useRef } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import styled from "styled-components";

//components
import SubVisual from "../../components/layout/SubVisual";
import TitleA from "../../components/layout/TitleA";
import YellowBtn from "../../components/layout/YellowBtn";

//pages
import ServiceList from "./ServiceList";
import ServiceDetail from "./ServiceDetail";
import ServiceWrite from "./ServiceWrite";
import ServiceEdit from "./ServiceEdit";

const Service = () => {

    return (
        <section className="sub_section">
            <SubVisual></SubVisual>
            <div className="wrap">
                <TitleA title="서비스 문의"></TitleA>
                    <Routes>
                        {/* 리스트 */}
                        <Route path="/" element={<ServiceList />}></Route>
                        {/* 디테일 */}
                        <Route path="/:id" element={<ServiceDetail />}></Route>
                        {/* 글쓰기 */}
                        <Route path="/write" element={<ServiceWrite />}></Route>
                        {/* 수정 */}
                        <Route path="/edit" element={<ServiceEdit />}></Route>
                    </Routes>                                  
            </div>            
        </section>
    )
}

export default React.memo(Service);