import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Common/Header';
import ListNewsTop from "./Components/dulich/ListNewsTop";
import HomePage from "./Containers/HomePage";
import Footer from "./Components/Common/Footer";
import ThoisuPage from "./Containers/ThoisuPage";
import KinhtePage from "./Containers/KinhtePage";
import GioitrePage from "./Containers/GioitrePage";
import ThegioiPage from "./Containers/ThegioiPage";
import VanhoaPage from "./Containers/VanhoaPage";
import XePage from "./Containers/XePage";
import DulichPage from "./Containers/DulichPage";
import TieudungPage from "./Containers/TieudungPage";
import SuckhoePage from "./Containers/SuckhoePage";
import MultiSide from "./Components/Multimedia/MultiSide";
import GiaoducPage from "./Containers/GiaoducPage";
import GiaitriPage from "./Containers/GiaitriPage";
import DoisongPage from "./Containers/DoisongPage";

function App() {
    return (
        <Router>
            <div>
                <Header />
                {/*<HomePage/>*/}
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/thoi-su" element={<ThoisuPage />} />
                    <Route path="/kinh-te" element={<KinhtePage />} />
                    <Route path="/the-gioi" element={<ThegioiPage />} />
                    <Route path="/doi-song" element={<DoisongPage />} />
                    <Route path="/suc-khoe" element={<SuckhoePage />} />
                    <Route path="/gioi-tre" element={<GioitrePage />} />
                    <Route path="/giao-duc" element={<GiaoducPage />} />
                    {/*<Route path="/giao-duc" element={<MultiSide />} />*/}
                    <Route path="/du-lich" element={<DulichPage />} />
                    <Route path="/van-hoa" element={<VanhoaPage />} />
                    <Route path="/giai-tri" element={<GiaitriPage />} />
                    {/*<Route path="/the-thao" element={<ThethaoPage />} />*/}
                    {/*<Route path="/cong-nghe" element={<CongnghePage />} />*/}
                    <Route path="/xe" element={<XePage />} />
                    {/*<Route path="/thoi-trang-tre" element={<ThoitrangPage />} />*/}
                    {/*<Route path="/ban-doc" element={<BandocPage />} />*/}
                    {/*<Route path="/rao-vat" element={<RaovatPage />} />*/}
                    {/*<Route path="/video" element={<VideoPage />} />*/}
                    <Route path="/tieu-dung" element={<TieudungPage />} />
                </Routes>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
