import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Common/Header';
import Footer from './Components/Common/Footer';
import ThethaoPage from "./Containers/ThethaoPage";
import CongnghePage from "./Containers/CongnghePage";
import VideoPage from "./Containers/VideoPage";

// Use React.lazy to lazy load the components
const HomePage = React.lazy(() => import('./Containers/HomePage'));
const ThoisuPage = React.lazy(() => import('./Containers/ThoisuPage'));
const KinhtePage = React.lazy(() => import('./Containers/KinhtePage'));
const GioitrePage = React.lazy(() => import('./Containers/GioitrePage'));
const ThegioiPage = React.lazy(() => import('./Containers/ThegioiPage'));
const VanhoaPage = React.lazy(() => import('./Containers/VanhoaPage'));
const XePage = React.lazy(() => import('./Containers/XePage'));
const DulichPage = React.lazy(() => import('./Containers/DulichPage'));
const TieudungPage = React.lazy(() => import('./Containers/TieudungPage'));
const SuckhoePage = React.lazy(() => import('./Containers/SuckhoePage'));
const GiaoducPage = React.lazy(() => import('./Containers/GiaoducPage'));
const GiaitriPage = React.lazy(() => import('./Containers/GiaitriPage'));
const DoisongPage = React.lazy(() => import('./Containers/DoisongPage'));

function App() {
    return (
        <Router>
            <div>
                <Header />
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/thoi-su" element={<ThoisuPage />} />
                        <Route path="/kinh-te" element={<KinhtePage />} />
                        <Route path="/the-gioi" element={<ThegioiPage />} />
                        <Route path="/doi-song" element={<DoisongPage />} />
                        <Route path="/suc-khoe" element={<SuckhoePage />} />
                        <Route path="/gioi-tre" element={<GioitrePage />} />
                        <Route path="/giao-duc" element={<GiaoducPage />} />
                        <Route path="/du-lich" element={<DulichPage />} />
                        <Route path="/van-hoa" element={<VanhoaPage />} />
                        <Route path="/giai-tri" element={<GiaitriPage />} />
                        <Route path="/the-thao" element={<ThethaoPage />} />
                        <Route path="/cong-nghe" element={<CongnghePage />} />
                        <Route path="/xe" element={<XePage />} />
                        <Route path="/video" element={<VideoPage />} />
                        <Route path="/tieu-dung" element={<TieudungPage />} />
                    </Routes>
                </Suspense>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
