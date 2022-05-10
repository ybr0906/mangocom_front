import React, { useState, useRef } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import styled from "styled-components";

//components
import SubVisual from "../../components/layout/SubVisual";
import TitleA from "../../components/layout/TitleA";
import YellowBtn from "../../components/layout/YellowBtn";

const MacRepairLayout = styled.section``;

const MacLayout = styled.article`
display:block;
background:#838383;
.text{
    font-size: 25px;
    color: #fff;
}
.title{
    font-size: 25px;
    color:#ff9000;
}
.service_category{}
`;

const MacRepair = () => {
    return (
        <MacRepairLayout>
            <div className="wrap">
                <TitleA title="맥북, 아이맥 수리(애플)"></TitleA> 
                <MacLayout className="macbook">
                    <p className="text">새롭게 태어나는 당신의 MACBOOK- 경이롭다</p>
                    <p className="title">MACBOOK AS</p>
                    <ul className="service_category">
                        <li>
                            <span></span>
                            <p>액정수리</p>
                        </li>
                        <li>
                            <span></span>
                            <p>배터리수리</p>
                        </li>
                        <li>
                            <span></span>
                            <p>키보드수리</p>
                        </li>
                        <li>
                            <span></span>
                            <p>메인보드수리</p>
                        </li>
                        <li>
                            <span></span>
                            <p>메인보드교체</p>
                        </li>
                        <li>
                            <span></span>
                            <p>SSD 업그레이드</p>
                        </li>
                        <li>
                            <span></span>
                            <p>기타수리</p>
                        </li>
                    </ul>
                    <YellowBtn text="MACBOOK AS 신청하기"><em></em></YellowBtn>
                </MacLayout>       

                <MacLayout className="imac">
                    <p className="text">보다 더 안전하게 가까워진다 <br/>컴퓨터를 뛰어넘는 iMac</p>
                    <p className="title">iMac AS</p>
                    <ul className="service_category">
                        <li>
                            <span></span>
                            <p>액정수리</p>
                        </li>
                        <li>
                            <span></span>
                            <p>파워수리</p>
                        </li>   
                        <li>
                            <span></span>
                            <p>메인보드수리</p>
                        </li>
                        <li>
                            <span></span>
                            <p>SSD 업그레이드</p>
                        </li>
                        <li>
                            <span></span>
                            <p>RAM 업그레이드</p>
                        </li>
                        <li>
                            <span></span>
                            <p>기타수리</p>
                        </li>
                    </ul>
                    <YellowBtn text="iMac AS 신청하기"><em></em></YellowBtn>
                </MacLayout>  

                <div>
                    <p>MANGO COM MAC 서비스센터가 지키는 약속</p>
                    <div>
                        <p data-num="01">정확학 수리로 고객님들의 불편을 최소화하겠습니다.</p>
                        <p data-num="02">명확한 수리비용으로 만족도를 최대화하겠습니다.</p>
                        <p data-num="03">신속한 수리로 고객님이 물어보기 전에 미리 연락드리겠습니다.</p>
                        <p data-num="04">친절한 자세로 고객님을 대하겠습니다.</p>
                        <p data-num="05">철저한 고객정보 보안을 책임지겠습니다.</p>
                    </div>
                </div>     
            </div>            
        </MacRepairLayout>
    )
}

export default MacRepair;