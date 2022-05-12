import React from "react";
import { Routes, Route } from 'react-router-dom';

// import PrivateRoute from "./hook/PrivateRoute";
import './styles/css/common.css';

//components
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

//pages
import Index from "./pages/Index";
import Introduce from "./pages/company/Introduce";
import Informationuse from "./pages/infomation/informationuse";
import Service from "./pages/service/Service";
import Directions from "./pages/locate/Directions";


const App = () => {
    return (
        <>
            <Header></Header>
            <Routes>
                {/* 첫페이지 */}
                <Route path="/*" element={<Index />}></Route>
                {/* 회사소개 */}
                <Route path="/introduce" element={<Introduce></Introduce>}></Route>
                {/* 이용안내 */}
                <Route path="informationuse/*" element={<Informationuse></Informationuse>}></Route>
                {/* 서비스문의 */}
                <Route path="/service/*" element={<Service></Service>}></Route>               
                {/* 찾아오시는길 */}
                <Route path="/directions" element={<Directions></Directions>}></Route>

                {/* <Route path="/apple" element={<Apple />}></Route>
                <Route path="/pc" element={<Apple />}></Route>
                <Route path="/notebook" element={<Apple />}></Route>
                <Route path="/sales" element={<Apple />}></Route> */}
            </Routes>
            <Footer></Footer>
        </>
    )
}

export default React.memo(App);