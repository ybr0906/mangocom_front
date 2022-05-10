import React, { useState, useRef } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import styled from "styled-components";

//components
import SubVisual from "../../components/layout/SubVisual";
import TitleA from "../../components/layout/TitleA";
import YellowBtn from "../../components/layout/YellowBtn";

//pages
import MacRepair from "./MacRepair";
import PCRepair from "./PCRepair";
import AssemblyPC from "./AssemblyPC";
import Monitor from "./Monitor";


const Informationuse = () => {
    return (
        <section className="sub_section">
            <SubVisual></SubVisual>
            <div className="wrap">
                <Routes>
                    {/* 맥북, 아이맥 수리(애플) */}
                    <Route path="/" element={<MacRepair />}></Route>
                    {/* 컴퓨터수리(출장AS) */}
                    <Route path="/pcrepair" element={<PCRepair />}></Route>
                    {/* 조립 및 중고 PC판매 */}
                    <Route path="/assemblypc" element={<AssemblyPC />}></Route>
                    {/* 노트북 액정문의 */}
                    <Route path="/monitor" element={<Monitor />}></Route>
                </Routes>          
            </div>            
        </section>
    )
}

export default React.memo(Informationuse);