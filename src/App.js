import React, { lazy, Suspense } from "react";
import { Routes, Route } from 'react-router-dom';

// import PrivateRoute from "./hook/PrivateRoute";
import './styles/css/common.css';

//components
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

//pages
//import Index from "./pages/Index";
//import Introduce from "./pages/company/Introduce";
//import Informationuse from "./pages/infomation/informationuse";
//import Service from "./pages/service/Service";
//import Directions from "./pages/locate/Directions";

const Index = lazy(() => import("./pages/Index"));
const Introduce = lazy(() => import("./pages/company/Introduce"));
const Informationuse = lazy(() => import("./pages/infomation/informationuse"));
const Service = lazy(() => import("./pages/service/Service"));
const Directions = lazy(() => import("./pages/locate/Directions"));


const App = () => {
    return (
        <>
            <Header></Header>
            <Routes>
                {/* 첫페이지 */}
                <Route path="/*" element={
                    <Suspense fallback={<div className="loading">Loading...</div>}>
                        <Index />
                    </Suspense>}>
                </Route>
                {/* 회사소개 */}
                <Route path="/introduce" element={<Suspense fallback={<div className="loading">Loading...</div>}>
                    <Introduce></Introduce>
                </Suspense>}></Route>
                {/* 이용안내 */}
                <Route path="informationuse/*" element={<Suspense fallback={<div className="loading">Loading...</div>}>
                    <Informationuse></Informationuse>
                </Suspense>}></Route>
                {/* 서비스문의 */}
                <Route path="/service/*" element={<Suspense fallback={<div className="loading">Loading...</div>}>
                    <Service></Service>
                </Suspense>}></Route>
                {/* 찾아오시는길 */}
                <Route path="/directions" element={<Suspense fallback={<div className="loading">Loading...</div>}>
                    <Directions></Directions>
                </Suspense>}></Route>

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