import React, { Suspense, useLayoutEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Header from './Components/Common/Header';
import Footer from './Components/Common/Footer';
import ThethaoPage from "./Containers/ThethaoPage";
import CongnghePage from "./Containers/CongnghePage";
import VideoPage from "./Containers/VideoPage";
import NewsDetail from './Containers/NewsDetail';

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

    const navigate = useNavigate();

    useLayoutEffect(() => {
        const handleLinkClick = (event) => {
            event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ <a>
            const link = event.currentTarget.closest('a');
            if (link) {
                const href = link.href;
                console.log('Link href:', href);
                handleLinkHref(href);
            } else {
                console.log('LMAO'); // Log nếu không lấy được href
            }
        };

        // Gán sự kiện cho các thẻ <img> nằm trong thẻ <a>
        const assignEventListeners = () => {
            const images = document.querySelectorAll('a img');
            images.forEach(img => {
                if(img.closest('a')) {
                    img.addEventListener('click', handleLinkClick);
                }
            });
        };

        assignEventListeners();

        // Dọn dẹp sự kiện khi component unmount
        return () => {
            const images = document.querySelectorAll('a img');
            images.forEach(img => {
                img.removeEventListener('click', handleLinkClick);
                const link = img.closest('a');
                if (link) {
                    link.removeEventListener('click', handleLinkClick);
                }
            });
        };
    }, [navigate]);

    const handleLinkHref = (href) => {
        // Chuyển hướng đến DetailArticle với link làm tham số
        navigate(`/detail-article?link=${encodeURIComponent(href)}`);
    };



    return (
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
                        <Route path="/detail-article" element={<NewsDetail/>} />
                    </Routes>
                </Suspense>
                <Footer />
            </div>
    );
}

export default App;
