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


const TabA = styled.div`
// border-bottom: 1px solid #efefef;
ul{
    display:flex;
    align-itmes:center;
    justify-content:center;
}
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

@media screen and (max-width: 1500px) {
    li{
        span{
            font-size: 1.4vw;
            padding: 1.5vw 2.5vw;
        }
    }
}
@media screen and (max-width: 768px) {
    li{
        span{
            font-size: 1.8vw;
            padding: 1.8vw 2.5vw;
        }
        &.on{
            border-width:2px;
        }
    }
}
@media screen and (max-width: 414px) {
    border-bottom: 1px solid #efefef;
    ul{
        flex-wrap:wrap;
    }
    li{
        width:50%;
        text-align:center;
        border: 1px solid #e1e1e1;
        border-bottom: 0;
        border-left: 0;
        span{
            font-size: 12px;
            padding: 13px 20px;
        }
        &.on{
            border-bottom: 0;
            border-color:#ffa90b;
            background: #ffa90b;
            span{
                color:#fff;
            }
        }
    }
}
`;


const Informationuse = () => {
    const navigate = useNavigate();
    const refId= useRef();
    const [target, setTargetTab] = useState('mac')

    const onMenuHandler = (e) => {
        refId.current = e.currentTarget.dataset.num;
        const target = e.target.dataset.title
        navigate(`/informationuse/${target}`);
        setTargetTab(e.target.dataset.title);
    }
    return (
        <section className="sub_section">
            {/* <SubVisual></SubVisual> */}
            <div className="wrap">
            <TitleA title="이용안내"></TitleA>   
            </div>
            <TabA>
                <ul>
                    <li className={target == 'mac' ? 'on' : ''} onClick={onMenuHandler}><span data-title="mac">맥북, 아이맥 수리(애플)</span></li>
                    <li className={target == 'pcrepair' ? 'on' : ''}><span data-title="pcrepair" onClick={onMenuHandler}>컴퓨터수리(출장AS)</span></li>
                    <li className={target == 'assemblypc' ? 'on' : ''}><span data-title="assemblypc" onClick={onMenuHandler}>조립 및 중고 PC판매</span></li>
                    <li className={target == 'monitor' ? 'on' : ''}><span data-title="monitor" onClick={onMenuHandler}>노트북 액정문의</span></li>
                </ul>
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
                    {/* 모니터 액정문의 */}
                    <Route path="/monitor" element={<Monitor />}></Route>
                </Routes>          
            </div>            
        </section>
    )
}

export default React.memo(Informationuse);