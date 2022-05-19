import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

//image
import quote from "../../styles/images/img_quotes_left.png"

//components
import TitleB from "../../components/layout/TitleB";
import TitleC from "../../components/layout/TitleC";
import OrangeBtn from "../../components/layout/OrangeBtn";

const PCRepairLayout = styled.section`
p{
    font-size: 18px;
    width: 100%;
    line-height: 1.5;
}
.btnarea {
    margin-top:80px;
}
.tab_content{
    display:none;
    &.show{
        display:block;
    }
}
.tableA{
    margin:50px 0;
    .no_bor{
        text-align:center;
    }
}
@media screen and (max-width: 1500px) {
    p{
        font-size:1.3vw;
    }
    .btnarea{
        margin-top:5vw;
    }
    .tableA{
        margin:3vw 0;
    }
}

@media screen and (max-width: 980px) {
    .wrap{
        padding:0 2vw !important;
    }
}
@media screen and (max-width: 414px) {
    .wrap{
        padding:0 !important;
    }
    p{
        font-size:12px;
    }
    .btnarea{
        margin-top:40px;
    }
    .tableA{
        width:500px;
    }
}
`;
const TabB = styled.ul`
display:flex;
margin-bottom:70px;
border-bottom: 2px solid #efefef;
li{
    cursor:pointer;
    position: relative;
    bottom: -2px;
    border: 1px solid #d3d3d3;
    border-left: none;
    &:first-child{
        border-left:1px solid #d3d3d3;
    }
    span{
        display:block;
        font-size: 17px;
        padding: 15px 30px;
        transition:font-weight .5s;
        background: #efefef;
    }
    &:hover{
        span{
            font-weight: 800;
        }
    }
    &.on{
        background: #fff;
        border-bottom: 0;
        span{
            background:#fff;
            font-weight: 800;
        }
    }
}
@media screen and (max-width: 1500px) {
    margin-bottom:4vw;
    li{
        span{
            font-size: 1.4vw;
            padding: 1.5vw 2vw; 
        }
    }
}
@media screen and (max-width: 414px) {
    margin-bottom:25px;
    li{
        span{
            font-size: 12px;
            padding: 10px 20px;
        }
    }
}
`;
const ServiceBox = styled.div`
    display:flex;
    justify-content:center;
    margin: 80px 0;
    dl{
        background:#efefef;
        padding: 50px 45px;
        color:#3a3a3a;
        &:first-child{
            border-radius: 100px 0 0 100px;
            padding-left:80px;
        }
        &:last-child{
            text-align:right;
            border-radius: 0 100px 100px 0;
            padding-right:80px;
            background:#dddddd;
        }
        dt{
            font-size: 40px;
            font-weight: 800;
            letter-spacing: -2px;
        }
        dd{
            font-size: 20px;
            font-weight: 600;
            letter-spacing: -1px;
            margin-top: 15px;
        }
    }

@media screen and (max-width: 1500px) {
    margin: 4vw 0;
    dl{
        padding: 3vw 4vw;
        &:first-child{
            border-radius: 10vw 0 0 10vw;
            padding-left: 6vw
        }
        &:last-child{
            border-radius: 0 10vw 10vw 0;
            padding-right:6vw;
        }
        dt{
            font-size: 2.3vw;
        }
        dd{
            font-size: 1.5vw;
            margin-top: 1.5vw;
        }
    }
}
@media screen and (max-width: 768px) {
    dl{
        dt{
            font-size: 2.6vw;
        }
        dd{
            font-size: 1.8vw;
        }
    }
}
@media screen and (max-width: 414px) {
    margin: 25px 0;
    dl{
        padding: 20px;
        &:first-child{
            border-radius: 50px 0 0 50px;
            padding-left: 40px;
        }
        &:last-child{
            border-radius: 0 50px 50px 0;
            padding-right:40px;
        }
        dt{
            font-size: 17px;
        }
        dd{
            font-size: 11px;
            margin-top: 7px;
        }
    }
}
@media screen and (max-width: 380px) {
    flex-wrap:wrap;
    dl{
        width:100%;
        &:first-child{
            border-radius: 50px 50px 0 0;
        }
        &:last-child{
            border-radius:0 0 50px 50px;
        }
    }
}
`;
const ServiceList01 = styled.div`
dl{
    border-bottom: 1px solid #e1e1e1;
    padding: 20px 0;
    display:flex;
    &:first-child{
        padding-top:0;
    }
    dt{
        font-size: 20px;
        font-weight: 700;
        background: #ffc80b;
        padding: 20px 30px;
        padding-left: 65px;
        width: 265px;
        position:relative;    
        display: flex;
        align-items: center;    
        &:before{
            content: attr(data-num);
            font-size: 30px;
            color: #ffecab;
            position: absolute;
            left: 18px;
            top: 50%;
            transform: translateY(-50%);
            font-weight: 600;
            letter-spacing: -1px;
            font-family: 'Poppins', sans-serif;
        }
        &.center{
            padding-left: 30px;
            text-align: center;
            justify-content: center;
        }
    }
    dd{
        font-size: 18px;
        padding: 10px;
        color: #666;
        line-height: 1.5;
        margin-left: 30px;
        width: calc(100% - 295px);
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        .bullet02{
            &:first-child{
                margin-top:0;
            }
        }
    }
}

@media screen and (max-width: 1500px) {
    dl{
        padding:1.5vw 0;
        dt{
            font-size: 1.5vw;
            padding: 1vw 3vw;
            padding-left: 6vw;
            width: 22vw;
            &:before{
                font-size:2.5vw;
                left:2vw;
            }
            &.center{
                padding-left:3vw;
            }
        }
        dd{
            font-size: 1.3vw;
            padding: 1vw;
            margin-left: 2vw;
            width: calc(100% - 22vw);
        }
    }
}
@media screen and (max-width: 414px) {
    dl{
        flex-wrap:wrap;
        padding:10px 0;
        dt{
            font-size:13px;
            padding:10px 20px;
            padding-left: 40px;
            width: 100%;
            &:before {
                font-size: 22px;
                left: 9px;
                top: 18px;
            }
        }
        dd{
            font-size: 12px;
            padding: 10px;
            margin-left: 0;
            width: 100%;
            padding-bottom:0;
        }
    }
}
`;
const BoxTitle = styled.div`
text-align: center;
font-size: 30px;
font-weight: 600;
margin-top: 40px;
padding: 40px 30px;
background: #000000;
color: #fff;
em{
    position:relative;
    padding: 0 100px;
    &:before, &:after{
        content:'';
        width: 70px;
        height: 45px;
        background:url(${quote})center no-repeat;
        position:absolute;
        top:0;
        background-size:100%;
    }
    &:before{
        left:0;
        top: -10px;
    }
    &:after{
        right:0;
        transform:rotate(180deg);
    }
}

@media screen and (max-width: 1500px) {
    font-size: 2.2vw;
    margin-top: 3vw;
    padding: 3vw 2vw;
    em{
        padding:0 7vw;
        &:before, &:after{
            width:4vw;
            height:3vw;
        }
        &:before{
            top: -0.5vw;
        }

    }
}
@media screen and (max-width: 500px) {
    em{
        padding: 0 5vw;
        width: 100%;
        display: block;
    }
}
@media screen and (max-width: 414px) {
    font-size: 16px;
    padding: 18px 30px;
    em{
        padding:0 31px;
        &:before, &:after{
            width: 22px;
            height: 17px;
        }
        &:before{
            top: -1px;
        }

    }
}
`;


const PCRepair = () => {
    const navigate = useNavigate();
    const [openTab, setOpenTab] = useState(1)

    const onTabHandler = (e) => {
        e.currentTarget.dataset.num;
        setOpenTab(e.currentTarget.dataset.num);
    };
    return (
        <PCRepairLayout>
            {/* <TitleA title="컴퓨터수리(출장AS)"></TitleA> */}
            <TabB>
                <li data-num="1" onClick={onTabHandler} className={openTab == 1 ? 'on' : ''}><span>서비스신청</span></li>
                <li data-num="2" onClick={onTabHandler} className={openTab == 2 ? 'on' : ''}><span>AS규정</span></li>
                <li data-num="3" onClick={onTabHandler} className={openTab == 3 ? 'on' : ''}><span>요금표</span></li>
            </TabB>
            <div className={(openTab == 1 ? 'show' : 'service_app tab_content')}>
                <TitleB title="서비스신청"></TitleB>
                <p>컴퓨터 A/S기술을 선도하는 MANGO COM입니다. <br />컴퓨터 애프터 서비스 시장의 새로운 강자로 자리매김 하기 위해 노력하는 MANGO COM이 되겠습니다.</p>
                <ServiceBox>
                    <dl>
                        <dt>신속한 서비스</dt>
                        <dd>AS 접수시 빠른 긴급출동으로 서비스를 통한 PC장애처리</dd>
                    </dl>
                    <dl>
                        <dt>정확한 서비스</dt>
                        <dd>고장원인을 파악 사용자 PC를 최적의 상태로 유지</dd>
                    </dl>
                </ServiceBox>
                <TitleC title="고객 5대 서비스"></TitleC>
                <ServiceList01>
                    <dl>
                        <dt data-num="01">방문약속 서비스</dt>
                        <dd>방문시간을 고객님의 편한 날짜와 시간에 맞추어 약속시간에 방문하는 서비스입니다. <br />A/S신청에서 접수 그리고 방문까지 고객님의 시간에 최대한 맞춰드리겠습니다.</dd>
                    </dl>
                    <dl>
                        <dt data-num="02">1:1 서비스</dt>
                        <dd>수리 의뢰시 해당 엔지니어가 직접 수리과정 및 수리내역, 요금 등을 자세히 설명해드림으로서 <br />고객과의 신뢰감을 높일 수 있습니다.</dd>
                    </dl>
                    <dl>
                        <dt data-num="03">재고장 무료 서비스</dt>
                        <dd>수리받은 제품에 동일 증상으로 재고장 발생시 15일동안 무료로 수리를 해 드리는 서비스입니다. <br />재고장시 안심하시고 수리 받으셔도 됩니다. 확실한 사후 관리를 약속드립니다.</dd>
                    </dl>
                    <dl>
                        <dt data-num="04">원격서비스</dt>
                        <dd>MANGO COM에서 프로그램 설치시 원격서비스를 지원해드립니다.(일부유상지원됨)<br /> 단, 프로그램을 고객님이 또는 다른곳에서 서비스를 받으실 경우 원격지원이 안됩니다.<br />*기본이외의 요청하시는 서비스는 비용이 추가 될 수 있습니다.</dd>
                    </dl>
                    <dl>
                        <dt data-num="05">전담 엔지니어 서비스</dt>
                        <dd>수리 후 전담 엔지니어를 두어 고객님의 PC환경에 맞게 사후관리, 문의안내, 방문A/S등 <br />고객님의 가족 또는 동료, 친구처럼 편안한 관계같은 서비스입니다.</dd>
                    </dl>
                </ServiceList01>
                <div className="btnarea center">
                    <OrangeBtn text="서비스 신청 접수" click={() => { navigate('/service/write', { state: { select: 'as' } }) }}><em></em></OrangeBtn>
                </div>
            </div>
            <div className={(openTab == 2 ? 'show' : 'service_as tab_content')}>
                <TitleB title="AS규정"></TitleB>

                <TitleC title="무상 AS"></TitleC>
                <ServiceList01 className="mb80">
                    <dl>
                        <dt className="center">하드웨어적인 불량</dt>
                        <dd>
                            <p className="bullet02" data-num="1.">매장에서 교체한 부품일 경우 1년 무상 / 단, 출장 요청 시 출장비는 청구됩니다. (매장으로 방문할 경우 1년 무상)</p>
                            <p className="bullet02" data-num="2."> 출장 나가서 교체한 부품일 경우, 1년 무상 교체 <br />(고객과실로 인한 건은 유상으로 진행됩니다. - 외관 파손 및 액체로 인한 파손, 소비자가 분해한 경우)</p>
                            <p className="bullet02" data-num="3.">접촉 불량으로 인한 수리건 - 메모리, 그래픽 카드, 메인보드, CPU 접촉 불량으로 재조립할 경우<br />(수리일로부터 15일(1회) 동안 무상으로 A/S 진행됩니다.)</p>
                            <p className="bullet02" data-num="4.">출장으로 진핸된 것과 매장방문으로 A/S가 진행된 건 다릅니다. <br />출장으로 진행된 건 출장비가 청구된 경우이기 때문에 15일(1회)동안은 비용 발생 되지 않지만, 매장으로 방문해서 수리한 경우 매장 방문시 15일(1회) 무상, 출장 요청 시 출장비가 청구됩니다. <br />단, 수리건 외 다른 쪽에서 불량이 날 경우 비용이 청구됩니다.</p>
                            <p className="bullet02" data-num="5.">조립 컴퓨터 신품 구매 고객님 → 1년 하드웨어 무상 <br />중고 컴퓨터 및 부품 구매 고객님 → 1달 하드웨어 무상<br />소프트웨어는 유상처리됩니다.</p>
                        </dd>
                    </dl>
                    <dl>
                        <dt className="center">소프트웨어적인 불량</dt>
                        <dd>
                            <p className="bullet02" data-num="1.">OS 재설치한 경우 15일 동안은 바이러스 및 기타 악성 프로그램, 파일 충돌도 15일(1회) 동안은 무상으로 서비스 해드립니다.</p>
                            <p className="bullet02" data-num="2.">15일 안에 프로그램 손상되는 경우는 기계적인 문제가 있을 수 있기 때문에 정밀점검을 추천합니다.</p>
                            <p className="bullet02" data-num="3.">출장 나가서 OS 설치한 건 15일(1회)동안 출장포함 무상, <br />매장 방문해서 작업한건 매장에 가지고 오시면 15일(1회)무상, 출장 요청 시 출장비 청구됩니다.</p>
                            <p className="bullet02" data-num="4.">바이러스 및 윈도우 업데이트로 OS가 손상된 경우 원래는 유상처리됩니다. (고객과실로 분류됩니다.) <br />MANGO COM에서는 15일(1회)동안 무상으로 서비스 해드립니다.</p>
                        </dd>
                    </dl>
                </ServiceList01>
                <TitleC title="유상 AS"></TitleC>
                <ServiceList01 className="mb80">
                    <dl>
                        <dt className="center">하드웨어적인 불량</dt>
                        <dd>
                            <p className="bullet02" data-num="1.">고객과실로 인한 고장 (제품 분해 및 충격에 인한 파손, 액체로 인한 파손, 소비자 과실로 인한 파손)</p>
                            <p className="bullet02" data-num="2.">무상 기간이 끝난 제품</p>
                        </dd>
                    </dl>
                    <dl>
                        <dt className="center">소프트웨어적인 불량</dt>
                        <dd>
                            <p className="bullet02" data-num="1.">수리 후 15일이 지난 상태</p>
                        </dd>
                    </dl>
                </ServiceList01>

                <BoxTitle><em>하드웨어와 소프트웨어 수리는 별개입니다.</em></BoxTitle>

                <div className="btnarea center">
                    <OrangeBtn text="서비스 신청 접수" click={() => { navigate('/service/write', { state: { select: 'as' } }) }}><em></em></OrangeBtn>
                </div>
            </div>
            <div className={(openTab == 3 ? 'show' : 'service_price tab_content')}>
                <TitleB title="요금표"></TitleB>
                <ul className="bullet01">
                    <li><p>기본출장료 10,000원 (점검 및 에러 증상만 원하시는 경우 : 출장비 포함 20,000원~ 30,000원)</p></li>
                    <li><p>모든 수리비는 출장비 별도의 금액입니다. MANGO COM의 기본 출장비는 10,000원입니다.</p></li>
                    <li><p>방문이 이루어지면 출장비는 반드시 청구되며, 취소를 원하시면 반드시 방문 전 취소를 해 주셔야 합니다.</p></li>
                    <li><p>불량증상 확인 후 수리거부시에는 불량증상 기술지원비용 10,000원이 청구됩니다.</p></li>
                    <li><p>SW적인 수리 후 동일불량이 발생하는 경우 15일 이내(1회) 무상 AS를 진행해 드립니다.</p></li>
                </ul>

                <div className="tablescroll">
                    <table className="tableA">
                        <caption>AS요금표</caption>
                        <colgroup>
                            <col style={{ "width": "12%" }} />
                            <col style={{ "width": "20%" }} />
                            <col style={{ "width": "48%" }} />
                            <col style={{ "width": "20%" }} />
                        </colgroup>
                        <thead>
                            <tr>
                                <th>부분</th>
                                <th>구분</th>
                                <th>수리내역</th>
                                <th>요금</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>복구</td>
                                <td>데이터 복구</td>
                                <td>바이러스 및 기타 원인으로 데이터 복구</td>
                                <td className="no_bor">25,000원 ~ 400,000원</td>
                            </tr>
                            <tr>
                                <td rowSpan={18}>S/W</td>
                                <td rowSpan={2}>포맷</td>
                                <td>하드디스트 초기화</td>
                                <td className="no_bor" rowSpan={2}>10,000원</td>
                            </tr>
                            <tr>
                                <td>베드섹터처리(사용자의 동의를 얻은 후 실행)</td>
                            </tr>
                            <tr>
                                <td>응용프로그램 설치</td>
                                <td>각종 프로그램 설치</td>
                                <td className="no_bor">20,000원</td>
                            </tr>
                            <tr>
                                <td>바이러스</td>
                                <td>바이러스 치료 및 백신 설치</td>
                                <td className="no_bor">20,000원</td>
                            </tr>
                            <tr>
                                <td rowSpan={5}>환경설정</td>
                                <td>CMOS SETUP</td>
                                <td className="no_bor" rowSpan={3}>10,000원</td>
                            </tr>
                            <tr>
                                <td>CONFIG, AUTOEXEC</td>
                            </tr>
                            <tr>
                                <td>간단한 프로그램 세팅</td>
                            </tr>
                            <tr>
                                <td>카드류 설치 및 세팅</td>
                                <td className="no_bor" rowSpan={2}>20,000원</td>
                            </tr>
                            <tr>
                                <td>주변기기 설치 및 세팅</td>
                            </tr>
                            <tr>
                                <td rowSpan={2}>주변기기 설치</td>
                                <td>각종 주변기기 Drive 설치(프린터, 스캐너 등)</td>
                                <td className="no_bor" rowSpan={2}>10,000원</td>
                            </tr>
                            <tr>
                                <td>호환성 문제로 인한 드라이버 업데이트</td>
                            </tr>
                            <tr>
                                <td rowSpan={7}>Windows 설치 <br />드라이버 세팅 포함</td>
                                <td>윈도우 설치 (매장 방문 시)</td>
                                <td className="no_bor">25,000원</td>
                            </tr>
                            <tr>
                                <td>윈도우 설치 (출장 시)</td>
                                <td className="no_bor">35,000원</td>
                            </tr>
                            <tr>
                                <td>맥 운영체제 OSX 초기화 (매장 방문 시)</td>
                                <td className="no_bor">25,000원</td>
                            </tr>
                            <tr>
                                <td>맥 운영체제 OSX 초기화 (출장 시)</td>
                                <td className="no_bor">40,000원</td>
                            </tr>
                            <tr>
                                <td>부트캠프 설치 (매장 방문 시)</td>
                                <td className="no_bor">35,000원</td>
                            </tr>
                            <tr>
                                <td>부트캠프 설치 (출장 시)</td>
                                <td className="no_bor">50,000원</td>
                            </tr>
                            <tr>
                                <td>데이터 백업 (5G당 7,000원 추가)</td>
                                <td className="no_bor">10,000원</td>
                            </tr>
                            <tr>
                                <td rowSpan={10}>H/W</td>
                                <td rowSpan={3}>하드웨어 분해 및 <br />교체, 추가</td>
                                <td>충격, 이물질 등으로 인한 기구물 추가 및 교체</td>
                                <td className="no_bor" rowSpan={2}>10,000원</td>
                            </tr>
                            <tr>
                                <td>FAN 교체, CD-ROM, FDD 가이드 추가</td>
                            </tr>
                            <tr>
                                <td>BIOS 업데이트</td>
                                <td className="no_bor">20,000원</td>
                            </tr>
                            <tr>
                                <td rowSpan={2}>하드웨어 미분해 수리</td>
                                <td>충격, 이물질 등으로 인한 키보드, 마우스 수리</td>
                                <td className="no_bor" rowSpan={2}>10,000</td>
                            </tr>
                            <tr>
                                <td>마이크 등 단순교체</td>
                            </tr>
                            <tr>
                                <td>소모성 교환</td>
                                <td>하드웨어 분해 후 배터리 또는 소모성 부품 교체</td>
                                <td className="no_bor">20,000원</td>
                            </tr>
                            <tr>
                                <td>이동설치</td>
                                <td>컴퓨터 및 주변기기 이동설치</td>
                                <td className="no_bor">20,000원</td>
                            </tr>
                            <tr>
                                <td>통신회선</td>
                                <td>선로점검, 사용자의 사용환경 설정</td>
                                <td className="no_bor">15,000원</td>
                            </tr>
                            <tr>
                                <td>하드디스트 교체</td>
                                <td>하드디스크 교체로 인한 데이터 백업 (500MB이하)</td>
                                <td className="no_bor">20,000원</td>
                            </tr>
                            <tr>
                                <td>인터넷 공유</td>
                                <td>S/W, H/W 인터넷 공유 (장비, 공사비는 심사 후 결정)</td>
                                <td className="no_bor">30,000원</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <ul className="bullet01">
                    <li><p>상황에 따라 약간의 요금 변동은 있을 수 있습니다.</p></li>
                    <li><p>요금표에 정해진 금액외에 부당한 서비스 요금을 청구하거나 과다한 요금을 청구하지 않습니다.</p></li>
                    <li><p>하드웨어(부품) 교체시에는 별도의 하드웨어(부품)비용이 청구됩니다.</p></li>
                    <li><p>하드웨어(부품) 교체시에 고장 하드웨어(고장부품)은 회수 조치 합니다.</p></li>
                </ul>
                <BoxTitle><em>항상 최선을 다하는 MANGO COM이 되도록 노력하겠습니다.</em></BoxTitle>
                <div className="btnarea center">
                    <OrangeBtn text="서비스 신청 접수" click={() => { navigate('/service/write', { state: { select: 'as' } }) }}><em></em></OrangeBtn>
                </div>
            </div>
        </PCRepairLayout>
    )
}

export default PCRepair;