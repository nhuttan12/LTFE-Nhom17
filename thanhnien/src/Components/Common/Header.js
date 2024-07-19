import React, {useState} from "react";
import {TiWeatherCloudy} from "react-icons/ti";
import {FaMicrophoneAlt} from "react-icons/fa";
import {FaBullhorn} from "react-icons/fa";
import {FaNewspaper} from "react-icons/fa6";
import {FaRegUserCircle} from "react-icons/fa";
import {FaHome} from "react-icons/fa";

import "./Header.css";
import {Link, useLocation} from "react-router-dom";

function Header() {
    var date = new Date();
    date.getDate();
    const daysOfWeek = [
        "Chủ nhật",
        "Thứ hai",
        "Thứ ba",
        "Thứ tư",
        "Thứ năm",
        "Thứ sáu",
        "Thứ bảy",
    ];

    const currentDate = {
        dayName: daysOfWeek[date.getDay()],
        day: date.getDate(),
        month: date.getMonth(),
        year: date.getFullYear(),
    };
    const [activeLink, setActiveLink] = useState('');
    const location = useLocation();

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };
    return (
        <header className="header">
            <div className="header-ov">
                <div className="header-os">
                    <div className="header-list">
                        <div
                            className="date item">{currentDate.dayName}, {currentDate.day}/{currentDate.month}/{currentDate.year}</div>
                        <div className="area item">TP. Hồ Chí Minh</div>
                        <div className="tempurature item">33&deg;C</div>
                        <div className="weather item">
                            <TiWeatherCloudy size={25}/>
                        </div>
                        <a href="https://thanhnien.vn/ban-can-biet.htm" className="item">
                            Bạn cần biết
                        </a>
                        <a href="https://thanhnien.vn/tien-ich/thoi-tiet.htm" className="item">
                            Tiện ích
                        </a>
                        <a href="https://thanhnien.vn/lien-he.htm" className="item">
                            Liên hệ
                        </a>
                    </div>
                    <div className="header-social">
                        <div className="following">Theo dõi trên</div>
                        <a
                            href="https://www.youtube.com/@thanhnientvnews"
                            className="item"
                            title="Youtube"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src="https://thanhnien-static.mediacdn.vn/thanhnien.vn/image/icon_youtube_fill.svg"
                                alt="Youtube"
                            ></img>
                        </a>
                        <a
                            href="https://www.facebook.com/thanhnien"
                            className="item"
                            title="Facebook"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src="https://thanhnien-static.mediacdn.vn/thanhnien.vn/image/icon_facebook_full_color.svg"
                                alt="Facebook"
                            ></img>
                        </a>
                        <a
                            href="https://www.tiktok.com/@baothanhnien.official"
                            className="item"
                            title="Tiktok"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src="https://thanhnien-static.mediacdn.vn/thanhnien.vn/image/Icon_Tiktok_fill.svg"
                                alt="Tiktok"
                            ></img>
                        </a>
                        <a
                            href="https://zalo.me/2431025964363015388"
                            className="item"
                            title="Zalo"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src="https://thanhnien-static.mediacdn.vn/thanhnien.vn/image/icon_zalo_full_color.svg"
                                alt="Zalo"
                            ></img>
                        </a>
                    </div>
                </div>
            </div>
            <div className="header-sticky">
                <div className="header-top">
                    <div className="header-container">
                        <div className="header-flex">
                            <div className="header-left">
                                <input type="text" placeholder="Tìm kiếm" className="search"/>
                            </div>
                            <div className="header-center">
                                <Link to="/"><img
                                    className="header-logo-image"
                                    alt="Logo"
                                    src="https://static.thanhnien.com.vn/thanhnien.vn/image/logo.svg"
                                /></Link>
                            </div>
                            <div className="header-right">
                                <div className="podcast">
                                    <a href="https://thanhnien.vn/podcast.htm" title="Podcast"><h5>Podcast</h5></a>
                                    <div>
                                        <FaMicrophoneAlt size={20}/>
                                    </div>
                                </div>
                                <div className="advertisement">
                                    <a href="https://banggia.thanhnien.vn/" title="Quảng cáo"><h5>Quảng cáo</h5></a>
                                    <div>
                                        <FaBullhorn size={20}/>
                                    </div>
                                </div>
                                <div className="order-news">
                                    <a href="https://datbao.thanhnien.vn/" title="Đặt báo"><h5>Đặt báo</h5></a>
                                    <div>
                                        <FaNewspaper size={20}/>
                                    </div>
                                </div>
                                <div className="login">
                                    <a href="https://my.thanhnien.vn/page/login.html?redirect_url=https://thanhnien.vn/"
                                       title="Đăng nhập"><h5>Đăng nhập</h5></a>
                                    <div className="login">
                                        <FaRegUserCircle size={20}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-middle">
                    <div className="header-container">
                        <div className="header-nav">
                            <div className="header-nav-flex">
                                <ul className="menu-nav">
                                    <li>
                                        <Link
                                            to="/"
                                            title="Trang chủ"
                                            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                                        >
                                            <FaHome size={25}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/thoi-su"
                                            title="Thời sự"
                                            className={`nav-link ${location.pathname === '/thoi-su' ? 'active' : ''}`}
                                        >
                                            Thời sự
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/the-gioi"
                                            title="Thế giới"
                                            className={`nav-link ${location.pathname === '/the-gioi' ? 'active' : ''}`}
                                        >
                                            Thế giới
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/kinh-te"
                                            title="Kinh tế"
                                            className={`nav-link ${location.pathname === '/kinh-te' ? 'active' : ''}`}
                                        >
                                            Kinh tế
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/doi-song"
                                            title="Đời sống"
                                            className={`nav-link ${location.pathname === '/doi-song' ? 'active' : ''}`}
                                        >
                                            Đời sống
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/suc-khoe"
                                            title="Sức khoẻ"
                                            className={`nav-link ${location.pathname === '/suc-khoe' ? 'active' : ''}`}
                                        >
                                            Sức khoẻ
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/gioi-tre"
                                            title="Giới trẻ"
                                            className={`nav-link ${location.pathname === '/gioi-tre' ? 'active' : ''}`}
                                        >
                                            Giới trẻ
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/giao-duc"
                                            title="Giáo dục"
                                            className={`nav-link ${location.pathname === '/giao-duc' ? 'active' : ''}`}
                                        >
                                            Giáo dục
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/du-lich"
                                            title="Du lịch"
                                            className={`nav-link ${location.pathname === '/du-lich' ? 'active' : ''}`}
                                        >
                                            Du lịch
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/van-hoa"
                                            title="Văn hoá"
                                            className={`nav-link ${location.pathname === '/van-hoa' ? 'active' : ''}`}
                                        >
                                            Văn hoá
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/giai-tri"
                                            title="Giải trí"
                                            className={`nav-link ${location.pathname === '/giai-tri' ? 'active' : ''}`}
                                        >
                                            Giải trí
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/the-thao"
                                            title="Thể thao"
                                            className={`nav-link ${location.pathname === '/the-thao' ? 'active' : ''}`}
                                        >
                                            Thể thao
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/cong-nghe"
                                            title="Công nghệ"
                                            className={`nav-link ${location.pathname === '/cong-nghe' ? 'active' : ''}`}
                                        >
                                            Công nghệ
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/xe"
                                            title="Xe"
                                            className={`nav-link ${location.pathname === '/xe' ? 'active' : ''}`}
                                        >
                                            Xe
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/video"
                                            title="Video"
                                            className={`nav-link ${location.pathname === '/video' ? 'active' : ''}`}
                                        >
                                            Video
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/tieu-dung"
                                            title="Tiêu dùng"
                                            className={`nav-link ${location.pathname === '/tieu-dung' ? 'active' : ''}`}
                                        >
                                            Tiêu dùng
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
