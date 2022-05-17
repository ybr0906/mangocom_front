import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import axios from "axios";

//components
import BlackBtn from "../../components/layout/BlackBtn";
import Pagenation from '../../components/Pagenation';


const AssemblyPCListLayout = styled.section`
.btnarea{
    margin-top:70px;
}

@media screen and (max-width: 1500px) {
    .btnarea{
        margin-top:5vw;
    }
}

@media screen and (max-width: 414px) {
    .btnarea{
        margin-top:40px;
    }
}
`;

// const SearchForm = styled.div`
// display:flex;
// align-items:center;
// justify-content: flex-end;
// margin-bottom:20px;
// input{
//     height: 45px;
//     width:330px;
//     border-radius: 25px 0 0 25px;
//     padding-left: 25px;
// }
// button{
//     background: #555;
//     text-align: center;
//     color: #fff;
//     display: inline-block;
//     height: 45px;
//     border-radius: 0 25px 25px 0;
//     padding: 8px 30px 8px 24px;
//     box-sizing: border-box;
//     vertical-align: top;
//     transition: background .4s;
//     :hover{
//         background: #000;
//     }
// }

// @media screen and (max-width: 1500px) {
//     margin-bottom:2vw;
//     input{
//         height:4vw;
//         padding-left:2.5vw;
//         width:30vw;
//     }
//     button{
//         height: 4vw;
//         padding: 1.1vw 2.5vw 1.5vw 2vw;
//     }
// }
// @media screen and (max-width: 768px) {
//     input{
//         height: 5vw;
//         padding-left: 2.5vw;
//         width: 35vw;
//     }
//     button{
//         height: 5vw;
//         padding: 0 3.5vw 0 3vw;
//         line-height: 5vw;
//     }
// }
// @media screen and (max-width: 414px) {
//     margin-bottom:5vw;
//     input{
//         height: 35px;
//         padding-left: 21px;
//         width: 80vw;
//         font-size:12px;
//     }
//     button{
//         height: 35px;
//         padding: 0 3.5vw 0 3vw;
//         line-height: 35px;
//         font-size: 12px;
//         width: 20vw;    
//     }
// }
// `;


const CardTable = styled.section`
display:flex;
flex-wrap:wrap;
    .box{
        margin-right:30px;
        width:calc((100% - 90px) / 4);
        background-color:#fff;
        border-radius:20px;
        position:relative;
        padding:30px 25px;
        cursor:pointer;
        transition:box-shadow .5s;
        box-shadow: 5px 5px 15px rgb(0 0 0 / 15%);
        border: 2px solid #fff;
        transition:border .5s;
        &:hover{
            border: 2px solid #ffc80b;
        }
        &:nth-child(4n){
            margin-right:0;
        }
        &:nth-child(n+5){
            margin-top:30px;
        }
        
        .imgarea{
            display:flex;
            align-items:center;
            justify-content:center;
            margin-bottom: 20px;
            width:274px;
            height:265px;
            overflow:hidden;
            img{
                display:inline-block;
                width: 100%;
            }
        }
        .name{
            font-size: 18px;
            padding: 30px 0 20px 0;
            position:relative;
            em{
                background: #ffc80b;
                color: #252525;
                font-size: 12px;
                padding: 4px 10px;
                border-radius: 20px;
                position: absolute;
                left: 0;
                top: 0;
            }
        }
        .detail{
            font-size: 13px;
            color: #a1a1a1;
            line-height: 1.3;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            transform: skew(-0.1deg);
            min-height: 33px;
            span{
                display:inline-block;
            }
        }
        .price{
            margin-top: 30px;
            font-size: 20px;
            font-weight: 600;
            text-align: right;
        }
    }


@media screen and (max-width: 1500px) {
    .box{
        margin-right: 1vw;
        width: calc((100% - 3vw) / 4);
        padding: 2vw 1.8vw 2.5vw 1.8vw;
        border-radius:2vw;
        &:nth-child(n+5){
            margin-top:1vw;
        }
        .imgarea{
            margin-bottom:1vw;
            width: 100%;
            height: 17vw;
        }
        .name{
            font-size:1.5vw;
            padding:2.5vw 0 1vw 0;
            em{
                font-size: 1vw;
                padding: 0.3vw 1.2vw;
                border-radius: 2vw;
            }
        }
        .detail{
            font-size:1.1vw;
            min-height:2.5vw;
        }
        .price{
            margin-top: 2vw;
            font-size: 1.8vw;
        }
    }
}
@media screen and (max-width: 800px) {
    .box{
        margin-right: 1vw;
        width: calc((100% - 1vw) / 2);
        &:nth-child(2n){
            margin-right:0;
        }
        &:nth-child(n+3){
            margin-top:1vw;
        }
        .imgarea{
            height:38vw;
        }
    }
}

@media screen and (max-width: 768px) {
    .box{
        .name{
            font-size:2vw;
            padding:3vw 0 2vw 0;
        }
        .detail{
            font-size:1.5vw;
        }
        .price{
            font-size: 2.5vw;
        }
    }
}
@media screen and (max-width: 600px) {
    .box{
        margin-right: 2vw;
        width: calc((100% - 2vw) / 2);
        padding: 2vw 4vw 3.5vw 4vw;
        border-radius:3vw;
        &:nth-child(n+3){
            margin-top:2vw;
        }
        .name{
            font-size: 2.4vw;
            padding: 4vw 0 1.5vw 0;
        }
        .detail{
            font-size:1.8vw;
        }
        .price{
            font-size: 2.8vw;
        }
    }
}

@media screen and (max-width: 414px) {
    .box{
        margin-right: 10px;
        width: calc((100% - 10px) / 2);
        padding: 10px 15px 20px 15px;
        border-radius: 15px;
        &:nth-child(3n){
            margin-right:10px;
        }
        &:nth-child(2n){
            margin-right:0;
        }
        &:nth-child(n+3){
            margin-top:10px;
        }
        .name{
            font-size: 13px;
            padding: 22px 0 10px 0;
            em{
                font-size: 10px;
                padding: 2px 7px;
                border-radius: 20px;
            }
        }
        .detail{
            font-size:11px;
            min-height:30px;
        }
        .price{
            font-size:15px;
            margin-top:13px;
        }
    }
}
@media screen and (max-width: 360px) {
    .box{
        margin-right: 0;
        width: 100%;
        &:nth-child(3n){
            margin-right:0;
        }
        &:nth-child(n+2){
            margin-top:10px;
        }
        .imgarea{
            height:80vw;
        }
    }
}
`;

// const Category = styled.div`

// `;

//임시데이터
// const data = [
//     {
//         key:1,
//         image:computer, 
//         category:'조립',
//         name:'인텔 7세대 카비레이크 i7-7700',
//         cpuname:'인텔 7세대 카비레이크 i7-7700(3.6Ghz)',
//         mboard:'ASRock Z270 EXTREME4',
//         vga:'NVIDIA Geforce GTX1070 8G',
//         ram:'삼성DDR4 32G',
//         hdd:'ST/WD 1TB',
//         SSd:'SSD 256G',
//         power:'	마이크로닉스 700W 85+',
//         case:'	COX AG 200X',
//         cdRom:'	LG DVD-M',
//         features:'	-',
//         price:'	2,410,000 원',
//         detailImage:''
//     },
//     {
//         key:2,
//         image:computer,
//         category:'조립',
//         name:'인텔 7세대 카비레이크 i7-7700',
//         cpuname:'인텔 7세대 카비레이크 i7-7700(3.6Ghz)',
//         mboard:'ASRock Z270 EXTREME4',
//         vga:'NVIDIA Geforce GTX1070 8G',
//         ram:'삼성DDR4 32G',
//         hdd:'ST/WD 1TB',
//         SSd:'SSD 256G',
//         power:'	마이크로닉스 700W 85+',
//         case:'	COX AG 200X',
//         cdRom:'	LG DVD-M',
//         features:'	-',
//         price:'	2,410,000 원',
//         detailImage:''
//     },
//     {
//         key:3,
//         image:computer,
//         category:'조립',
//         name:'인텔 7세대 카비레이크 i7-7700',
//         cpuname:'인텔 7세대 카비레이크 i7-7700(3.6Ghz)',
//         mboard:'ASRock Z270 EXTREME4',
//         vga:'NVIDIA Geforce GTX1070 8G',
//         ram:'삼성DDR4 32G',
//         hdd:'ST/WD 1TB',
//         SSd:'SSD 256G',
//         power:'	마이크로닉스 700W 85+',
//         case:'	COX AG 200X',
//         cdRom:'	LG DVD-M',
//         features:'	-',
//         price:'	2,410,000 원',
//         detailImage:''
//     },
//     {
//         key:4,
//         image:computer,
//         category:'조립',
//         name:'인텔 7세대 카비레이크 i7-7700',
//         cpuname:'인텔 7세대 카비레이크 i7-7700(3.6Ghz)',
//         mboard:'ASRock Z270 EXTREME4',
//         vga:'NVIDIA Geforce GTX1070 8G',
//         ram:'삼성DDR4 32G',
//         hdd:'ST/WD 1TB',
//         SSd:'SSD 256G',
//         power:'	마이크로닉스 700W 85+',
//         case:'	COX AG 200X',
//         cdRom:'	LG DVD-M',
//         features:'	-',
//         price:'	2,410,000 원',
//         detailImage:''
//     }
// ]

const AssemblyPCList = () => {
    const navigate = useNavigate();
    const refId = useRef();

    const [input, setInput] = useState('');
    const [data, setData] = useState();
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(1);

    const onDetatilHandler = (e) => {
        refId.current = e.currentTarget.dataset.key;
        navigate(`/informationuse/assemblypc/${e.currentTarget.dataset.key}`);
        window.scrollTo({ top: 0, left: 0 });
    }
    const onWriteHandler = (e) => {
        navigate(`/informationuse/assemblypc/write`);
        window.scrollTo({ top: 0, left: 0 });
    }

    useEffect(() => {
        axios.get(`${process.env.host}/product?page=${page}&input=${input}`).then(({ data }) => {
            setCount(data.data[0].count);
            setData(data.data);
        })
    }, [])

    return (
        <AssemblyPCListLayout>
            {/* <SearchForm>
                <input type="text" placeholder="검색어를 입력해주세요" />
                <button>검색</button>
            </SearchForm> */}
            {/* <Category>
                <span className="on">전체</span>
                <span>중고</span>
                <span>조립</span>
            </Category> */}
            <CardTable>
                {
                    data && data.map(i => {
                        return (
                            <div className="box" key={i.id_sale} data-key={i.id_sale} onClick={onDetatilHandler}>
                                <div className="imgarea"><img src={i.thumbnail_url} alt="" /></div>
                                <p className="name">{i.category == "used" ? <em>중고</em> : <em>조립</em>}{i.title}</p>
                                <div className="detail">
                                    <span>{i.cpu_value}</span> /
                                    <span>{i.mainboard}</span> /
                                    <span>{i.vga}</span>
                                </div>
                                <p className="price">{i.price}만원</p>
                            </div>
                        )
                    })
                }
            </CardTable>

            {/* <Paging>
                <span className="arrow first_arrow"><img src={dobuleArrow} alt="" /></span>
                <span className="arrow prev_arrow"><img src={rightArrow} alt="" /></span>
                <div className="paging_num">
                    <span className="num on">1</span>
                    <span className="num">2</span>
                    <span className="num">3</span>
                </div>
                <span className="arrow next_arrow"><img src={rightArrow} alt="" /></span>
                <span className="arrow last_arrow"><img src={dobuleArrow} alt="" /></span>
            </Paging> */}
            <Pagenation className="paging" total={count} setData={setData} page={page} setPage={setPage} input={input}></Pagenation>


            {/*관리자일때 보이는 버튼*/}
            {
                localStorage.getItem('mangocomSession') &&
                <div className="btnarea right">
                    <BlackBtn text="등록" click={onWriteHandler}></BlackBtn>
                </div>
            }

            {/*관리자일때 보이는 버튼*/}
        </AssemblyPCListLayout>
    )
}

export default AssemblyPCList;