import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Common/Header';
import ListNewsTop from "./Components/dulich/ListNewsTop";
import homeData from "./Json/home";
import DanhSachBaiBao from "./Components/baibao/DanhSachBaiBao";
import ListTongHop from "./Components/tintonghop/ListTongHop";
import MainNews from "./Components/MainNews/MainNews";

function App() {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<MainNews />} />
                    <Route path="/du-lich" element={<ListNewsTop dataNews={homeData}/>} />
                    <Route path="/bai-bao" element={<DanhSachBaiBao />} />
                    <Route path="/tong-hop" element={<ListTongHop />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
