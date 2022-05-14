import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Pagenation from 'react-js-pagination';
import styled from 'styled-components';

const PageStyled = styled.div`
    .pagination { 
        display: flex; 
        justify-content: center; 
        margin-top: 15px; 
    } 
    ul { list-style: none; 
        padding: 0; 
    } 
    ul.pagination li { 
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
    }
    ul.pagination li a { 
        text-decoration: none;
        color: #fff; 
        font-size: 14px; 
    } 
    ul.pagination li.active a { 
        color: white; 
    } 
    ul.pagination li.active { 
        background-color: #337ab7; 
    } 
    ul.pagination li a:hover, ul.pagination li a.active { 
        color: blue; 
    } 
    .page-selection { 
        width: 48px; height: 30px; color: #337ab7; 
    }
    
@media screen and (max-width: 414px) {
    ul.pagination li{
        width:28px;
        height:28px;
    }
    ul.pagination li a{
        font-size:11px;
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