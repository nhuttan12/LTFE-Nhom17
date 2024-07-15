import React from "react";
import { TiWeatherCloudy } from "react-icons/ti";
import { FaMicrophoneAlt } from "react-icons/fa";
import { FaBullhorn } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { FaHome } from "react-icons/fa";

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
            <div className="date item">{currentDate.dayName}, {currentDate.day}/{currentDate.month}/{currentDate.year}</div>
            <div className="area item">TP. Hồ Chí Minh</div>
            <div className="tempurature item">33&deg;C</div>
            <div className="weather item">
              <TiWeatherCloudy size={25}/>
            </div>
            <a href="https://example.com" className="item">
              Bạn cần biết
            </a>
            <a href="https://example.com" className="item">
              Tiện ích
            </a>
            <a href="https://example.com" className="item">
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
                <input type="text" placeholder="Tìm kiếm" className="search" />
              </div>
              <div className="header-center">
                <img
                  className="header-logo-image"
                  alt="Logo"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Thanh_Ni%C3%AAn_logo.svg/2560px-Thanh_Ni%C3%AAn_logo.svg.png"
                />
              </div>
              <div className="header-right">
                <div className="podcast">
                  <h5>Podcast</h5>
                  <div>
                    <FaMicrophoneAlt size={20} />
                  </div>
                </div>
                <div className="advertisement">
                  <h5>Quảng cáo</h5>
                  <div>
                  <FaBullhorn size={20} />
                  </div>
                </div>
                <div className="order-news">
                  <h5>Đặt báo</h5>
                  <div>
                  <FaNewspaper size={20} />
                  </div>
                </div>
                <div className="login">
                  <h5>Đăng nhập</h5>
                  <div className="login">
                  <FaRegUserCircle size={20} />
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
                    <a
                      href="https://example.com"
                      title="Trang chủ"
                      className="nav-link home"
                    >
                      <FaHome size={25} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://example.com"
                      title="Thời sự"
                      className="nav-link"
                    >
                      Thời sự
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://example.com"
                      title="Thế giới"
                      className="nav-link"
                    >
                      Thế giới
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://example.com"
                      title="Đời sống"
                      className="nav-link"
                    >
                      Đời sống
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://example.com"
                      title="Sức khoẻ"
                      className="nav-link"
                    >
                      Sức khoẻ
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://example.com"
                      title="Giới trẻ"
                      className="nav-link"
                    >
                      Giới trẻ
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://example.com"
                      title="Giáo dục"
                      className="nav-link"
                    >
                      Giáo dục
                    </a>
                  </li>
                  <li>
                    <Link
                      to="/du-lich"
                      title="Du lịch"
                      className="nav-link"
                    >
                      Du lịch
                    </Link>
                  </li>
                  <li>
                    <a
                      href="https://example.com"
                      title="Văn hoá"
                      className="nav-link"
                    >
                      Văn hoá
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://example.com"
                      title="Giải trí"
                      className="nav-link"
                    >
                      Giải trí
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://example.com"
                      title="Thể thao"
                      className="nav-link"
                    >
                      Thể thao
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://example.com"
                      title="Công nghệ - Game"
                      className="nav-link"
                    >
                      Công nghệ - Game
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://example.com"
                      title="Xe"
                      className="nav-link"
                    >
                      Xe
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://example.com"
                      title="Video"
                      className="nav-link"
                    >
                      Video
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://example.com"
                      title="Tiêu dùng"
                      className="nav-link"
                    >
                      Thời trang trẻ
                    </a>
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
