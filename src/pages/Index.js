import React, { useRef } from "react";
import { Routes, Route } from 'react-router-dom';

//pages
import MainVisual from './main/MainVisual'
import MainService from './main/MainService'
import MainStatus from './main/MainStatus'
import MainCustomer from './main/MainCustomer'

const Index = () => {
    return (
        <main>
            <MainVisual></MainVisual>
            <MainService></MainService>
            <MainStatus></MainStatus>
            <MainCustomer></MainCustomer>
        </main>
    )
}

export default React.memo(Index);