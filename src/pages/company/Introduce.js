import React, { useRef } from "react";
import { Routes, Route } from 'react-router-dom';
import styled from "styled-components";

//components
import SubVisual from "../../components/layout/SubVisual";
import TitleA from "../../components/layout/TitleA";
import YellowBtn from "../../components/layout/YellowBtn";

//images
import pc from '../../styles/images/pc.png'

const IntroduceLayout = styled.section`
.inner{
    position:relative;
    .title{
        font-size: 70px;
        font-family: 'Orbitron', sans-serif;
        margin-bottom: 50px;
        em{
            color:#ffc80b;
        }
    }
    .big{
        font-size: 30px;
        margin-top: 20px;
        font-weight: 600;
        &.orange{
            color: #ffb40b;
        }
    }
    .small{
        font-size: 18px;
        margin-top: 30px;
        line-height: 1.5;
    }
    .ceo{
        margin-top: 50px;
        text-align: right;
        font-size: 30px;
        em{
            font-weight:900;
        }
    }
    .bg{
        position: absolute;
        right: 0;
        top: 18%;
    }

}
`;

const Introduce = () => {
    return (
        <IntroduceLayout className="sub_section">
        <SubVisual></SubVisual>
        <div className="wrap">
            <TitleA title="회사소개"></TitleA>   
            <div className="inner">
                <div className="bg"><img src={pc} alt="" /></div>
                <h4 className="title">WITH CEO AT <em>MANGO COM</em></h4>
                <p className="big orange">컴퓨터 A/S 기술을 선도하는 MANGO COM 입니다.</p>
                <p className="big">컴퓨터 애프터 서비스 시장의 새로운 강자로 자리매김 하기 위해 <br/>노력하는 MANGO COM이 되겠습니다.</p>
                <p className="small">
                    MANGO COM의 회장님은 바로 '고객'이십니다.
                    <br/>고객님이 계시기에 MANGO COM이 존재합니다.
                    <br/>이제 회장님께서 사장에게 직접 지시하십시오.    
                </p>
                <p className="small">
                    MANGO COM의 모든 임직원과 매장, 서비스 센터에서는 고객을 MANGO COM의 회장님으로 생각합니다.
                    <br/>MANGO COM를 사용 하시면서 조금이라도 불편하신 점이 있으시면 사장에게 직접 이메일을 보내주십시오.
                    <br/>반드시 사장이 직접 읽고 정성을 다하여 조치해 드릴 것을 약속드립니다.
                </p>
                <p className="small">
                    이곳 MANGO COM 홈페이지에서는 서비스 신청뿐만 아니라 제품 정보, 서비스 이력을 직접 확인할 수 있도록 했으며 고객의 불편함을 워격을 통해 해결해 드리는 원격서비스를 비롯해 스스로 제품을 진단 할 수 있는 자가 진단 서비스등 다양하고 유익한 정보를 드릴 수 있도록 구축하였습니다.
                </p>
                <p className="small">
                    앞으로도 MANGO COM는 고객을 생각하고 고객과 항상 함께하며 더욱 사랑받는 회사가 되도록 노력하겠습니다.
                </p>
                <p className="ceo">MANGO COM 대표 <em>김김김</em></p>
            </div> 
        </div>            
    </IntroduceLayout>
    )
}

export default React.memo(Introduce);