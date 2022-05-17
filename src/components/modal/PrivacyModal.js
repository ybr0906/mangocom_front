import React from "react";
import styled from "styled-components";

//components

const PrivacyModalLayout = styled.div`
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
    border-radius: 30px;
    text-align: center;
    transform: translate(-50%, -50%);
    width: 80vw;
    max-width: 900px;
    .title{
        font-size: 18px;
        font-weight: 600;
        text-align: center;
        background-color: #ffc80b;
        padding: 20px 10px;
        border-radius: 30px 30px 0 0;
    }
    .inner_wrap{
        text-align: left;
        padding:20px 30px 30px 30px;
        max-height: 80vh;
        overflow-y: auto;
        .bigA{
            font-size: 17px;
            font-weight: 800;
            margin-bottom: 15px;
            margin-top: 20px;
            &:first-child{
                margin-top:0;
            }
        }
        .big{
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 15px;
            margin-top: 15px;
            transform: skew(-0.1deg);
        }
        .small{
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 5px;
            transform: skew(-0.1deg);
            position:relative;
            &.num01{
                padding-left: 23px;
                &:before{
                    content: attr(data-num);
                    position: absolute;
                    left: 0;
                    top: 2px;
                    width: 13px;
                    height: 13px;
                    border: 1px solid #000;
                    border-radius: 50%;
                    font-size: 11px;
                    font-weight: 800;
                    text-align: center;
                }
            }
            &.num02{
                padding-left: 14px;
                &:before{
                    content: attr(data-num);
                    position: absolute;
                    left: 0;
                    top: 0;
                    font-size: 12px;
                }

            }
            &.line{
                padding-left: 11px;
                margin-left: 14px;
                &:before{
                    content: '-';
                    position: absolute;
                    left: 0;
                    top: 0;
                    font-size: 12px;
                }
            }
        }
    }
    .close{
        position: absolute;
        right: 20px;
        top: 20px;
        width: 30px;
        height: 30px;
        cursor:pointer;
        &:before, &:after{
            content:'';
            width:100%;
            height:3px;
            background:#333;
            border-radius: 3px;
            position: absolute;
            left: 0;
            bottom: 50%;
        }
        &:before{transform: rotate(45deg);}
        &:after{transform: rotate(-45deg);}
    }
}

@media screen and (max-width: 1500px) {

    .inner{
        border-radius:2vw;
        .title{
            font-size: 1.5vw;
            padding: 1.3vw 0.8vw;
            border-radius:2vw 2vw 0 0;
        }
        .inner_wrap{
            padding:2vw;
            .bigA{
                font-size: 1.3vw;
                margin-bottom: 1vw;
                margin-top: 2vw;
            }
            .big{
                font-size: 1.2vw;
                margin-bottom: 1vw;
                margin-top: 1vw;
            }
            .small{
                font-size: 1vw;
                margin-bottom: 0.2vw;
                &.num01{
                    padding-left: 1.7vw;
                    &:before{
                        top: 0;
                        width: 1.1vw;
                        height: 1.1vw;
                        font-size: 0.9vw;
                    }
                }
                &.num02{
                    padding-left: 1.2vw;
                    &:before{
                        font-size: 1vw;
                    }

                }
                &.line{
                    padding-left: 1vw;
                    margin-left: 1vw;
                    &:before{
                        font-size: 1vw;
                    }
                }
            }
        }
        .close{
            right: 2vw;
            top: 1.5vw;
            width: 2vw;
            height: 2vw;
        }
    }
}

@media screen and (max-width: 768px) {
    .inner{
        .title{
            font-size: 2.5vw;
            padding: 1.8vw 0.8vw;
        }
        .inner_wrap{
            padding:3vw;
            .bigA{
                font-size: 2vw;
            }
            .big{
                font-size: 1.9vw;
            }
            .small{
                font-size: 1.7vw;
                &.num01{
                    padding-left: 19px;
                    &:before{
                        width: 12px;
                        height: 12px;
                        font-size: 10px;
                    }
                }
                &.num02{
                    padding-left: 15px;
                    &:before{
                        font-size: 10px;
                    }

                }
                &.line{
                    padding-left: 10px;
                    margin-left: 10px;
                    &:before{
                        font-size: 10px;
                    }
                }
            }
        }
        .close{
            top: 2.5vw;
            width:3vw;
        }
    }
}

@media screen and (max-width: 414px) {
    .inner{
        border-radius:15px;
        .title{
            font-size: 16px;
            padding: 10px 20px;
            border-radius: 15px 15px 0 0;
        }
        .inner_wrap{
            padding:15px;
            .bigA{
                font-size: 14px;
                margin-bottom: 10px;
                margin-top: 20px;
            }
            .big{
                font-size: 13px;
                margin-top:5px;
                margin-bottom:5px;
            }
            .small{
                font-size: 11px;
            }
        }
        .close{
            right: 11px;
            top: 12px;
            width: 20px;
            height: 20px;
        }
    }
}
`;

const PrivacyModal = ({ onPrivacyHandler }) => {
    //console.log(props);
    return (
        <PrivacyModalLayout>
            <div className="inner">
                <h4 className="title">개인정보취급방침</h4>
                <div className="inner_wrap">
                    <p className="big">1. 개인정보 수집에 대한 동의 및 수집방법</p>
                    <p className="small num01" data-num="1">회사는 이용자들이 회사의 개인정보 보호정책 또는 이용약관의 내용에 대하여 「동의」버튼 또는 「취소」버튼을 클릭할 수 있는 절차를 마련하여, 「동의」버튼을 클릭하면 개인정보 수집에 대해 동의한 것으로 봅니다.</p>
                    <p className="small num01" data-num="2">상기 1항에 의한 동의가 있는 경우, 원활한 서비스 제공을 위하여 홈페이지를 통하여 "2. 개인정보 수집항목" 등을 입력 받습니다.</p>

                    <p className="big">2. 개인정보 수집항목</p>
                    <p className="small">회원은 "1. 개인정보 수집에 대한 동의 및 수집방법" 의 구직등록시에는 대부분의 콘텐츠에 자유롭게 접근할 수 있으며, 필수항목이외에는 선택항목을 입력하지 않더라도 서비스 이용에 제한을 받지 않습니다.</p>
                    <p className="small num01" data-num="1">구직등록 시 수집하는 개인정보의 범위 <br />이름, 실거주지, 희망근무지, 최종학력, 실제생년월일, 취업경력, 주거형태, 현재취업여부, 취업가능시기, 전화번호, 휴대폰번호, E-mail, 현주소, 이력서사진</p>
                    <p className="small num01" data-num="2">이력서 등록시 수집하는 개인정보의 범위 <br />개인신상정보, 학력 및 경력사항, 가족사항, 자기소개서, 경력기술서</p>

                    <p className="big">3. 개인정보의 수집목적 및 이용목적</p>
                    <p className="small">회사는 인터넷을 통하여 채용 관련 서비스를 하고 있습니다.</p>
                    <p className="small">회사는 이용자의 사전 동의 없이는 이용자의 개인 정보를 함부로 공개하지 않으며, 수집된 정보는 아래와 같이 이용하고 있습니다.</p>
                    <p className="small">여러분이 회사를 통해 작성하신 개인정보는 여러분에게 정보 및 서비스를 제공함에 궁극적인 목적이 있습니다. </p>
                    <p className="small">예를 들어 채용정보 맞춤서비스는 여러분이 제공한 정보를 토대로 기업에서 의뢰한 구인정보에 의한 채용정보와 전자우편, UMS 등으로 맞춤 서비스를 하고 있습니다. </p>
                    <p className="small">또한 인터넷 이력서를 여러분이 직접 열람하거나 기업에 발송할 때, 회사는 여러분이 작성한 개인정보들로 이력서를 디자인합니다. </p>
                    <p className="small">물론, 꼼꼼히 잘 작성할수록 이력서는 돋보이겠지요. 기업회원의 경우는 밖으로 드러나지 않고 변경만 할 수 있습니다. </p>
                    <p className="small">회사는 기업회원으로 가입한 가입자의 정보를 가지고 전화 혹은 전자우편으로 연락을 취하여 정보를 확인하고는 합니다. </p>
                    <p className="small">또한 회사는 공지사항이나 게시판, 채용정보 등 특정한 내용을 전자우편을 통하여 발송하기도 합니다. </p>
                    <p className="small">회사는 여러분의 생일, 기념일, 취업, 승진, 전직을 축하하기 위해 필요한 정보를 이용자의 동의 하에 요청할 수 있습니다.</p>
                    <p className="small">회사가 제공하는 서비스는 대부분이 무료이며 다양한 정보를 서비스하기 위한 영리목적의 광고를 싣습니다. </p>
                    <p className="small">여러분에 대해서 조금이라도 알고 있으면 여러분에게 보다 더 유용한 광고 내용을 전달할 수 있습니다. </p>
                    <p className="small">이것은 여러분에게나 회사에 정보를 싣는 광고주들 모두에게 유익한 방법이라고 생각합니다. </p>
                    <p className="small">일종의 중간 역할로써 회사는 여러분의 나이 및 성별을 회사의 개인보호정책에 동의하는 특정광고주에게 알려 줍니다.</p>
                    <p className="small">여러분의 정보를 다른 신상정보와 함께 알려주는 것이 아니라 단지 나이 및 성별을 있는 그대로 광고를 전달하는 서버에 전하게 되고 광고를 회사로 보내는 서버에서는 여러분의 나이나 성별에 맞는 광고를 회사에 보내주게 됩니다. 이러한 종류의 타겟팅 광고는 회사를 통한 배너광고 및 스폰서 광고 뿐 아니라 회사가 보내는 광고성 메일에서도 이루어집니다.</p>
                    <p className="small">만약 여러분이 광고성메일을 받겠다고 선택을 하시면 회사로부터 특별히 제작된 전자우편을 받아보실 수 있습니다. </p>
                    <p className="small">이러한 과정에서 광고주 혹은 광고대행사에서는 여러분의 신상정보를 절대로 열람할 수 없습니다.</p>
                    <p className="small">회사는 여러분의 행동양식, 이용자 분포, 관심사 등의 인구통계학적인 내용을 회사 시스템에 쌓인 이용 통계(로그파일)로 부터 내부적으로 분석합니다. 분석을 토대로 한 자료는 내부목적으로 사용됩니다. </p>
                    <p className="small">단 개인을 식별할 수 없는 통계자료는 현재와 장래의 광고주, 협력사, 또는 제3자에게 공개할 수 있습니다</p>
                    <p className="small">첫째, 이용자들이 제공한 개인정보를 바탕으로 보다 더 유용한 서비스를 개발할 수 있습니다. 회사는 신규 서비스개발이나 컨텐츠의 확충시에 기존 이용자들이 회사에 제공한 개인정보를 바탕으로 개발해야 할 서비스의 우선 순위를 보다 더 효율적으로 정하고, 회사는 이용자들이 필요로 할 컨텐츠를 합리적으로 선택하여 제공할 수 있습니다.</p>
                    <p className="small">둘째, 회사가 제공하는 각종 정보 및 서비스 등은 대부분 무료입니다. 회사는 이러한 무료 서비스를 제공하기 위해서 광고를 게재하고 있는데, 이용자들에 대한 정확한 개인정보를 바탕으로 각 서비스나 메뉴 등에 적절하게 광고와 내용들을 전달해 드릴 수 있으며, 이것은 궁극적으로 회사가 이용자 여러분들게 드리는 또 하나의 정보로서의 가치를 지니게 됩니다. </p>
                    <p className="small">회사는 광고주들로부터 광고를 받아 광고주들이 대상으로 하려는 이용자의 유형에 맞게 광고를 보여줄 뿐, 광고주들에게는 절대로 이용자들의 개인정보를 보여주거나 제공하지 않습니다.</p>

                    <p className="big">4. 회사는 개인의 이메일주소 무단수집을 거부</p>
                    <p className="small">"본 웹사이트에 게시된 이메일 주소가 전자우편 수집 프로그램이나 그 밖의 기술적 장치를 이용하여 무단으로 수집되는 것을 거부하며,이를 위반시 정보통신망법 제 50조 2항에 의해 형사처벌됨을 유념하시기 바랍니다." <br />정보통신망법 제50조의2 (전자우편주소의 무단 수집행위 등 금지)</p>
                    <p className="small num02" data-num="1.">누구든지 전자우편주소의 수집을 거부하는 의사가 명시된 인터넷 홈페이지에서 자동으로 전자우편주소를 수집하는 프로그램 그 밖의 기술적 장치를 이용하여 전자우편주소를 수집하여서는 아니된다.</p>
                    <p className="small num02" data-num="2.">누구든지 제1항의 규정을 위반하여 수집된 전자우편주소를 판매•유통하여서는 아니된다.</p>
                    <p className="small num02" data-num="3.">누구든지 제1항 및 제2항의 규정에 의하여 수집•판매 및 유통이 금지된 전자우편주소임을 알고 이를 정보전송에 이용하여서는 아니된다.</p>

                    <p className="big">5. 회사가 수집하는 개인정보의 보유 및 이용기간 </p>
                    <p className="small">이용자가 회사의 회원으로서 회사에서 제공하는 서비스를 이용하는 동안 회사는 이용자들의 개인정보를 계속적으로 보유하며 서비스 제공 등을 위해 이용합니다. </p>
                    <p className="small">다만, 아래의 이용자 자신의 개인정보 관리(열람,정정,삭제 등)에 관한 사항" 에서 설명한 절차와 방법에 따라 회원 본인이 직접 삭제하거나 수정한 정보, 가입해지를 요청한 경우에는 재생할 수 없는 방법에 의하여 디스크에서 완전히 삭제하며 추후 열람이나 이용이 불가능한 상태로 처리됩니다.</p>
                    <p className="small">그리고 "회사가 수집하는 개인정보 항목 및 수집방법"에서와 같이 일시적인 목적(설문조사, 이벤트 등)으로 입력 받은 개인정보는 그 목적이 달성된 이후에는 동일한 방법으로 사후 재생이 불가능한 상태로 처리됩니다.</p>
                    <p className="small">당사는 이용자의 권리 남용, 악용 방지, 권리침해/명예훼손 분쟁 및 수사협조 등의 요청이 있었을 경우에는 이의 재발에 대비하여 회원의 이용계약 해지 시로부터 1년 동안 회원의 개인정보를 보관할 수 있습니다.</p>
                    <p className="small">귀하의 개인정보는 다음과 같이 개인정보의 수집목적 또는 제공받은 목적이 달성되면 파기하는 것을 원칙으로 합니다. </p>
                    <p className="small">상법, 전자상거래등에서의 소비자보호에 관한 법률 등 관계법령의 규정에 의하여 보존할 필요가 있는 경우 당사는 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다. </p>
                    <p className="small">이 경우 당사는 보관하는 정보를 그 보관의 목적으로만 이용하며 보존기간은 아래와 같습니다. </p>
                    <p className="small">다만, 아래의 경우 회원정보를 보관합니다. 이 경우 회사는 회사는 보관하는 정보를 그 보관의 목적으로만 이용합니다.</p>
                    <p className="small">계약 또는 청약철회 등에 관한 기록: 5년 </p>
                    <p className="small">대금결제 및 재화 등의 공급에 관한 기록: 5년 </p>
                    <p className="small">소비자의 불만 또는 분쟁처리에 관한 기록: 3년</p>
                    <p className="small">회사는 귀중한 회원의 개인정보를 안전하게 처리하며, 유출의 방지를 위하여 다음과 같은 방법을 통하여 개인정보를 파기합니다.</p>
                    <p className="small line">종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.</p>
                    <p className="small line">전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다</p>

                    <p className="big">6. 개인정보의 열람, 수정, 삭제 및 파기</p>
                    <p className="small">서비스 이용자는 자유롭게 본인의 개인정보를 열람, 수정 및 삭제할 수 있습니다. 개인정보를 열람, 수정 및 삭제 하고자 할 경우에는 회사는 '개인회원서비스'의 개인정보관리, 이력서관리에서 직접 처리할 수 있습니다.</p>
                    <p className="small">이 밖에 개인정보관리책임자에게 전화, 서면, 이메일로 연락하면 즉각 처리합니다.</p>
                    <p className="small">회사는 귀하가 개인정보의 오류에 대한 정정을 요청한 경우, 정정을 완료하기 전까지 당해 개인정보를 이용하거나 제공을 하지 않습니다.</p>
                    <p className="small">회원탈퇴를 원할 경우 당사의 고객센터로 이메일, 전화, FAX 등을 통해 연락하여 본인 확인 절차를 거친 후 탈퇴할 수 있습니다. </p>
                    <p className="small">당사는 회원탈퇴를 하고 개인정보파기 등의 조치를 취한 경우에는 그 사실을 이용자에게 지체 없이 통지합니다.</p>
                    <p className="small">개인정보가 파기된다는 것은 추후 열람이나 이용이 불가능한 형태로 처리된다는 것을 의미합니다. </p>
                    <p className="small">이 경우 전자적 파일 형태인 경우에는 하드디스크에서 재생 불가능하게 삭제되며 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각됩니다.</p>
                    <p className="small">당사는 이용자가 타인의 정보 또는 기타 개인정보를 도용하여 구직등록과 서비스를 이용하였을 경우에는 지체 없이 해당 아이디에 대한 서비스 이용정지 또는 회원탈퇴 등 필요한 조치를 취합니다.</p>

                    <p className="big">7. 회사가 수집한 개인정보의 공유 및 제공</p>
                    <p className="small">회사는 이용자들의 개인정보를 "개인정보의 수집목적 및 이용목적"에서 고지한 범위내에서 사용하며, 이용자의 사전 동의 없이는 동 범위를 초과하여 이용하거나 원칙적으로 이용자의 개인정보를 외부에 공개하지 않습니다. </p>
                    <p className="small">다만, 아래의 경우에는 예외로 합니다.</p>
                    <p className="small">첫째, 이용자들이 사전에 공개에 동의한 경우</p>
                    <p className="small">둘째, 홈페이지에 게시한 회사 서비스 이용약관이나 기타 회원서비스 등의 이용약관을 위반한 경우</p>
                    <p className="small">셋째, 회사 서비스를 이용하여 타인에게 정신적-물질적 피해를 줌으로서 그에 대한 법적인 조치를 취하기 위하여 개인정보를 공개해야 한다고 판단되는 충분한 근거가 있는 경우</p>
                    <p className="small">넷째, 기타 법에 의해 요구된다고 선의로 판단되는 경우(ex. 관련법에 의거 적법한 절차에 의한 정부기관의 요청이 있는 경우 등)</p>
                    <p className="small">다섯째, 통계작성,학술연구나 시장조사를 위하여 특정개인을 식별할 수 없는 형태로 광고주,협력업체나 연구단체 등에 제공하는 경우</p>
                    <p className="small">그리고 회사는 새로운 기술개발이나 보다 나은 서비스의 제공을 위하여 이용자들의 개인정보를 공유할 수 있습니다. </p>
                    <p className="small">이 경우에도 정보수집 또는 정보제공 이전에 이용자들에게 개인정보를 공유할 기관이나 단체가 누구인지, 어떤 정보가 왜 필요한지, 그리고 언제까지 어떻게 보호되고 관리되는지 알려드리고 동의를 구하는 절차를 거치게 되며, 이용자들의 동의가 없는 경우에는 추가적인 정보를 임의로 수집하거나 공유하지 않습니다.</p>
                    <p className="small">성별, 연령별 기타 특정 조건의 집단에 대한 광고 게재 및 발송 시에도 이용자들의 개인정보는 광고를 의뢰한 개인이나 기업 등에 제공되지 않으며, 기타 통계처리나 학술연구, 시장조사를 위하여 필요한 경우에도 특정한 개인을 식별할 수 없는 형태로만 정보가 제공됩니다.</p>

                    <p className="big">8. 이용자 자신의 개인정보 관리(열람,정정,삭제 등)에 관한 사항</p>
                    <p className="small">이용자는 언제든지 회사 홈페이지를 이용하여 등록되어 있는 자신의 개인정보를 조회하거나 수정할 수 있으며 가입해지를 요청할 수도 있습니다. </p>
                    <p className="small">이용자들의 개인정보 조회 및 수정을 위해서는 회사 회원관리 메뉴에서 아이디와 비밀번호를 사용하여 로그인(LOG-IN)하면 되는데, 아이디(ID), 이름을 제외한 모든 입력사항을 수정할 수 있습니다. </p>
                    <p className="small">또한, 가입해지는 회사 홈페이지에 있는 "개인서비스 &gt; 회원탈퇴"를 클릭하고 해당확인버튼을 누르시면 처리됩니다. 이용자들은 회사 서비스의 회원 아이디(ID)에 대하여 가입해지 또는 이용해지를 할 수 있으나 이로 인하여 모든 서비스를 이용할 수 없게 되는 것은 아니며, 단지 회원서비스등 로그인이 요구되는 서비스에 대해서만 그 기능을 이용할 수 없게 됩니다. </p>
                    <p className="small">회사는 이용자의 요청에 의해 해지 또는 삭제된 개인정보는 회사가 수집하는 개인정보의 보유 및 이용기간에 명시된 바에 따라 처리하고 그 외의 용도로 열람 또는 이용할 수 없도록 처리하고 있습니다. </p>
                    <p className="small">만약 회사가 이용자 정보를 제3자와 공유할 경우에는 정보 수집 또는 전송 전에 이용자에게 통지를 할 것이며 이용자는 항상 이러한 정보제공에 대해서 허락하지 않을 수 있습니다. 귀하의 정보가 공유되는 것을 원하지 않으신다면, 특정한 서비스를 이용하지 않으시거나 특정한 판촉행사나 콘테스트에 참여하지 않으시면 됩니다. </p>
                    <p className="small">기타 개인정보의 이용과 이용범위에 대한 동의의 철회 및 개인정보의 열람 등에 대하여 실행이 어려운 경우는 개인정보보호담당자에게 메일이나 유선으로 그 처리를 요청하시면 가능한 절차에 정한 최단시간 내에 정보의 사용중지, 정정, 삭제 등의 조치를 취하게 됩니다.</p>

                    <p className="big">9. 개인정보관련 기술적-관리적 대책</p>
                    <p className="small">회사는 이용자들의 개인정보를 처리함에 있어 개인정보가 분실, 도난, 누출, 변조 또는 훼손되지 않도록 안전성 확보를 위하여 노력하고 있습니다.</p>
                    <p className="small">회사는 구직회원 및 이용자의 비밀번호는 암호화되어 저장 및 관리되고 있어 본인만이 알고 있으며, 변경도 비밀번호를 알고 있는 본인에 의해서만 가능합니다.</p>
                    <p className="small">회사는 SSL(보안서버) 등을 통하여 네트워크상에서 개인정보를 암호화하여 안전하게 전송할 수 있도록 하고 있습니다. 그리고 전산 시스템을 전문 서비스 업체를 통해 관리 및 물리적인 출입을 통제하고 있으며, 외부로부터의 해킹 및 침입 등에 대비하여 보안관제를 운영하며 정보보호를 위해 노력하고 있습니다.</p>
                    <p className="small">회사는 개인정보 보호를 위하여 담당자들에게 교육을 하고 있으며, 개인정보보호에 문제가 발견될 경우 즉시 수정하고 바로 잡을 수 있도록 노력하고 있습니다.</p>
                    <p className="small">회사는 이용자 개인의 실수나 기본적인 인터넷의 위험성 때문에 일어나는 일들에 대해 책임을 지지 않습니다.</p>
                    <p className="small">이용자 개개인이 본인의 개인정보를 보호하기 위해서 자신의 ID 와 비밀번호를 적절하게 관리하고 여기에 대한 책임을 져야 합니다.</p>

                    <p className="big">10. 개인정보의 위탁처리</p>
                    <p className="small">회사는 서비스 향상 및 원활한 업무처리를 위해 아래와 같이 개인정보 취급 업무를 외부 전문업체에 위탁하여 운영하고 있습니다.</p>

                    <p className="big">11. 개인정보 자동수집 장치의 설치, 운영 및 그 거부에 관한 사항</p>
                    <p className="small">회사는 귀하의 정보를 수시로 저장하고 찾아내는 '쿠키(cookie)' 등을 운용합니다. 쿠키란 회사의 웹사이트를 운영하는데 이용되는 서버가 귀하의 브라우저에 보내는 아주 작은 텍스트 파일로서 귀하의 컴퓨터 하드디스크에 저장됩니다. 회사는 다음과 같은 목적을 위해 쿠키를 사용합니다.</p>
                    <p className="small num01" data-num="1">쿠키 등 사용 목적 </p>
                    <p className="small line">웹사이트 접속자의 접속 빈도나 방문 시간 등을 분석, 이용자의 취향과 관심분야를 파악하기 위한 쿠키를 사용합니다. <br />귀하는 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서, 귀하는 웹브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 아니면 모든 쿠키의 저장을 거부할 수도 있습니다.</p>
                    <p className="small num01" data-num="2">쿠키 설정 거부 방법 <br />예: 쿠키 설정을 거부하는 방법으로는 사용자가 사용하시는 웹 브라우저의 옵션을 선택함으로써 모든 쿠키를 허용하거나 쿠키를 저장할 때마다 확인을 거치거나, 모든 쿠키의 저장을 거부할 수 있습니다. <br />설정방법 예(인터넷 익스플로어의 경우) : 웹 브라우저 상단의 도구 &gt; 인터넷 옵션 &gt; 개인정보 <br />단, 귀하께서 쿠키 설치를 거부하였을 경우에도 서비스 이용에는 어려움이 없습니다.</p>

                    <p className="big">12. 개인정보관련 의견수렴 및 불만처리에 관한 사항</p>
                    <p className="small">회사는 개인정보보호와 관련하여 이용자 여러분들의 의견을 수렴하고 있으며 불만을 처리하기 위하여 모든 절차와 방법을 마련하고 있습니다. </p>
                    <p className="small">이용자들은 회사 개인정보 관리책임자 및 담당자의 소속-성명 및 연락처"항을 참고하여 전화나 메일을 통하여 불만사항을 신고할 수 있고, 회사는 이용자들의 신고사항에 대하여 신속하고도 충분한 답변을 해 드릴 것입니다. <br />또는 정부에서 설치하여 운영중인 아래의 기관에 불만처리를 신청할 수 있습니다.</p>
                    <p className="small line">한국인터넷진흥원 개인정보침해신고센터 (http://www.1336.or.kr, 전화 118) </p>
                    <p className="small line">개인정보 분쟁조정위원회 (http://www.kopico.or.kr, 전화 02-405-5150) </p>
                    <p className="small line">정보보호마크 인증위원회 (http://www.eprivacy.or.kr, 전화 02-580-0533)</p>

                    <p className="big">13. 개인정보 관리책임자 및 담당자의 소속-성명-연락처</p>
                    <p className="small">회사는 귀하가 좋은 정보를 안전하게 이용할 수 있도록 최선을 다하고 있습니다. <br />개인정보를 보호하는데 있어 귀하께 고지한 사항들에 반하는 사고가 발생할 경우 개인정보관리책임자가 책임을 집니다. 이용자 개인정보와 관련한 아이디(ID)의 비밀번호에 대한 보안유지책임은 해당 이용자 자신에게 있습니다. </p>
                    <p className="small">회사에서는 비밀번호에 대해 어떠한 방법으로도 이용자에게 직접적으로 질문하는 경우는 없으므로 타인에게 비밀번호가 유출되지 않도록 각별히 주의하시기 바랍니다. </p>
                    <p className="small">특히 "사. 개인정보관련 기술적-관리적 대책"항에서 명시한 것과 같이 공공장소에서 온라인상에서 접속해 있을 경우에는 더욱 유의하셔야 합니다. <br />회사는 개인정보에 대한 의견수렴 및 불만처리를 담당하는 개인정보 관리책임자 및 담당자를 지정하고 있고, 연락처는 아래와 같습니다.</p>
                </div>
                <button className="close" onClick={onPrivacyHandler}></button>
            </div>
            <div className="shadow"></div>
        </PrivacyModalLayout>
    )
}

export default PrivacyModal;