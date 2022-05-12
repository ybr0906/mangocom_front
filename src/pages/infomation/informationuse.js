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


const TabA = styled.ul`
display:flex;
align-itmes:center;
justify-content:center;
margin-bottom: 100px;
border-bottom: 1px solid #efefef;
li{
    span{
        display: block;
        font-size: 18px;
        padding: 20px 30px;
        cursor:pointer;
    }
    &.on{
        border-bottom: 3px solid #ffa90b;
        span{
            font-weight: 800;
        }
    }
}
`;


const Informationuse = () => {
    const navigate = useNavigate();
    const refId= useRef();

    const onMenuHandler = (e) => {
        refId.current = e.currentTarget.dataset.key;
        navigate(`/informationuse/${e.target.dataset.title}`);
    }
    return (
        <section className="sub_section">
            <SubVisual></SubVisual>
            <TabA>
                <li className="on" onClick={onMenuHandler}><span data-title="mac">맥북, 아이맥 수리(애플)</span></li>
                <li><span data-title="pcrepair" onClick={onMenuHandler}>컴퓨터수리(출장AS)</span></li>
                <li><span data-title="assemblypc" onClick={onMenuHandler}>조립 및 중고 PC판매</span></li>
                <li><span data-title="monitor" onClick={onMenuHandler}>노트북 액정문의</span></li>
            </TabA>
            <div className="wrap">
                <Routes>
                    {/* 맥북, 아이맥 수리(애플) */}
                    <Route path="/" element={<MacRepair />}></Route>
                    <Route path="/mac" element={<MacRepair />}></Route>
                    {/* 컴퓨터수리(출장AS) */}
                    <Route path="/pcrepair" element={<PCRepair />}></Route>
                    {/* 조립 및 중고 PC판매 */}
                    <Route path="/assemblypc/*" element={<AssemblyPC />}></Route>
                    {/* 노트북 액정문의 */}
                    <Route path="/monitor" element={<Monitor />}></Route>
                </Routes>          
            </div>            
        </section>
    )
}

export default React.memo(Informationuse);