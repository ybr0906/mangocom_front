import React from "react";
import { Routes, Route } from 'react-router-dom';
import styled from "styled-components";

//pages
import AssemblyPCList from "./AssemblyPCList";
import AssemblyPCDetail from "./AssemblyPCDetail";
import AssemblyPCWrite from "./AssemblyPCWrite";
import AssemblyPCEdit from "./AssemblyPCEdit";

const AssemblyPCLayout = styled.section`
@media screen and (max-width: 1100px) {
    .wrap{
        padding:0 !important;
    }
}
`;

const AssemblyPC = () => {
    return (
        <AssemblyPCLayout>
            <div className="wrap">
                {/* <TitleA title="조립 및 중고 PC판매"></TitleA> */}
                <Routes>
                    {/* 리스트 */}
                    <Route path="/" element={<AssemblyPCList />}></Route>
                    {/* 디테일 */}
                    <Route path="/:id" element={<AssemblyPCDetail />}></Route>
                    {/* 글쓰기 */}
                    <Route path="/write" element={<AssemblyPCWrite />}></Route>
                    {/* 수정 */}
                    <Route path="/edit" element={<AssemblyPCEdit />}></Route>
                </Routes>
            </div>
        </AssemblyPCLayout>
    )
}

export default AssemblyPC;