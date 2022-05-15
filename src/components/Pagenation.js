import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Pagenation from 'react-js-pagination';
import styled from 'styled-components';

//image
import dobuleArrow from '../styles/images/arrow_double.svg'
import rightArrow from '../styles/images/arrow_right.svg'

const PageStyled = styled.div`
    .pagination { 
        display: flex; 
        justify-content: center; 
        margin-top: 50px; 
    } 
    li { 
        display: inline-block; 
        width: 32px; 
        height: 32px; 
        border: 1px solid #e2e2e2; 
        display: flex; 
        justify-content: center; 
        align-items: center; 
        font-size: 14px; 
        margin: 0 2px;
        cursor: pointer;
        &:first-child{
            a{
                font-size:0 !important;
                display:block;
                background:url(${dobuleArrow})center no-repeat;
                width: 12px;
                height: 10px;
                background-size: 100%;
                transform: rotate(180deg);
            }
        }
        &:nth-child(2n){
            a{
                font-size:0 !important;
                display:block;
                background:url(${rightArrow})center no-repeat;
                width: 8px;
                height: 12px;
                background-size: 100%;
                transform: rotate(180deg);
            }
        }
        &:last-child{
            a{
                font-size:0 !important;
                display:block;
                background:url(${dobuleArrow})center no-repeat;
                width: 12px;
                height: 10px;
                background-size: 100%;
                transform: rotate(0);
            }
        }
        &:nth-last-child(2){
            a{
                font-size:0 !important;
                display:block;
                background:url(${rightArrow})center no-repeat;
                width: 8px;
                height: 12px;
                background-size: 100%;
            }
        }
        a { 
            text-decoration: none;
            color: #fff; 
            font-size: 14px; 
            &:hover, &.active{
                color: #ffe383; 
            }
        } 
        .active { 
            background-color: #ffe383; 
            a { 
                color: white; 
            } 
        } 

    }
    .page-selection { 
        width: 48px; 
        height: 30px; 
        color: #ffe383; 
    }
    
@media screen and (max-width: 1500px) {
    .pagination{
        margin-top:3vw;
    }
    li{
        width:2.4vw;
        height:2.4vw;
        &:first-child{
            a{
                width: 1.1vw;
                height: 1vw;
            }
        }
        &:nth-child(2n){
            a{
                width: 0.6vw;
                height: 1vw;
            }
        }
        &:last-child{
            a{
                width: 1.1vw;
                height: 1vw;
            }
        }
        &:nth-last-child(2){
            a{
                width: 0.6vw;
                height: 1vw;
            }
        }
    }
}
@media screen and (max-width: 768px) {
    li{
        width:3.4vw;
        height:3.4vw;
        &:first-child{
            a{
                width: 1.6vw;
                height: 1vw;
            }
        }
        &:nth-child(2n){
            a{
                width: 0.9vw;
                height: 1vw;
            }
        }
        &:last-child{
            a{
                width: 1.6vw;
                height: 1vw;
            }
        }
        &:nth-last-child(2){
            a{
                width: 0.9vw;
                height: 1vw;
            }
        }
    }
}

@media screen and (max-width: 414px) {
    margin-top:20px;
    li{
        width:25px;
        height:25px;
        &:first-child{
            a{
                width: 10px;
                height: 11px;
            }
        }
        &:nth-child(2n){
            a{
                width: 5.5px;
                height: 9px;
            }
        }
        &:last-child{
            a{
                width: 10px;
                height: 11px;
            }
        }
        &:nth-last-child(2){
            a{
                width: 5.5px;
                height: 9px;
            }
        }
    }
}
`;

const Paging = (props) => {
    const { total, setData, page, setPage, input } = props;

    const onPageHandler = (page) => {
        setPage(page);
        axios.get(`${process.env.host}/service?page=${page}&input=${input}`).then(({ data }) => {
            setData(data.data);
        })
    };

    return (
        <PageStyled>
            <Pagenation
                activePage={page}
                itemsCountPerPage={5}
                totalItemsCount={total}
                pageRangeDisplayed={5}
                prevPageText={"‹"}
                nextPageText={"›"}
                onChange={onPageHandler}
            />
        </PageStyled>
    )
}

export default Paging;