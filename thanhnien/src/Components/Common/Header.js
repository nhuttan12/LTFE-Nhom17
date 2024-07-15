import React from "react";
import {TiWeatherCloudy} from "react-icons/ti";
import {FaMicrophoneAlt} from "react-icons/fa";
import {FaBullhorn} from "react-icons/fa";
import {FaNewspaper} from "react-icons/fa6";
import {FaRegUserCircle} from "react-icons/fa";
import {FaHome} from "react-icons/fa";

import "./Header.css";
import {Link} from "react-router-dom";

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
                              <a href="https://my.thanhnien.vn/page/login.html?redirect_url=https://thanhnien.vn/" title="Đăng nhập"><h5>Đăng nhập</h5></a>
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
                          <Link to="/" title="Trang chủ" className="nav-link home">
                            <FaHome size={25}/>
                          </Link>
                        </li>
                        <li>
                          <Link to="/thoi-su" title="Thời sự" className="nav-link">
                            Thời sự
                          </Link>
                        </li>
                        <li>
                          <Link to="/the-gioi" title="Thế giới" className="nav-link">
                            Thế giới
                          </Link>
                        </li>
                        <li>
                          <Link to="/doi-song" title="Đời sống" className="nav-link">
                            Đời sống
                          </Link>
                        </li>
                        <li>
                          <Link to="/suc-khoe" title="Sức khoẻ" className="nav-link">
                            Sức khoẻ
                          </Link>
                        </li>
                        <li>
                          <Link to="/gioi-tre" title="Giới trẻ" className="nav-link">
                            Giới trẻ
                          </Link>
                        </li>
                        <li>
                          <Link to="/giao-duc" title="Giáo dục" className="nav-link">
                            Giáo dục
                          </Link>
                        </li>
                        <li>
                          <Link to="/du-lich" title="Du lịch" className="nav-link">
                            Du lịch
                          </Link>
                        </li>
                        <li>
                          <Link to="/van-hoa" title="Văn hoá" className="nav-link">
                            Văn hoá
                          </Link>
                        </li>
                        <li>
                          <Link to="/giai-tri" title="Giải trí" className="nav-link">
                            Giải trí
                          </Link>
                        </li>
                        <li>
                          <Link to="/the-thao" title="Thể thao" className="nav-link">
                            Thể thao
                          </Link>
                        </li>
                        <li>
                          <Link to="/cong-nghe-game" title="Công nghệ - Game" className="nav-link">
                            Công nghệ - Game
                          </Link>
                        </li>
                        <li>
                          <Link to="/xe" title="Xe" className="nav-link">
                            Xe
                          </Link>
                        </li>
                        <li>
                          <Link to="/video" title="Video" className="nav-link">
                            Video
                          </Link>
                        </li>
                        <li>
                          <Link to="/thoi-trang-tre" title="Thời trang trẻ" className="nav-link">
                            Thời trang trẻ
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
