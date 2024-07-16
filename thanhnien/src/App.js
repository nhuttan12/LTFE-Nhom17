import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Common/Header';
import ListNewsTop from "./Components/dulich/ListNewsTop";
import homeData from "./Json/home";
import DanhSachBaiBao from "./Components/baibao/DanhSachBaiBao";
import ListTongHop from "./Components/tintonghop/ListTongHop";
import MainNews from "./Components/MainNews/MainNews";
import HomePage from "./Containers/HomePage";
import Footer from "./Components/Common/Footer";

function App() {
    return (
        <Router>
            <div>
                <Header />
                {/*<HomePage/>*/}
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/du-lich" element={<ListNewsTop dataNews={homeData}/>} />
                    <Route path="/bai-bao" element={<DanhSachBaiBao />} />
                    <Route path="/tong-hop" element={<ListTongHop />} />
                </Routes>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
