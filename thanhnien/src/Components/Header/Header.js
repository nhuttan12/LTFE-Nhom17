import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="container">
      <header className="header">
        <div className="header-ov">
          <div className="header-list">
            <div className="date item">Thứ hai, 24/6/2024</div>
            <div className="area item">Hồ Chí Minh</div>
            <div className="tempurature item">29 C</div>
            <div className="weather item"></div>
            <a href="https://example.com" className="item">Bạn cần biết</a>
            <a href="https://example.com" className="item">Tiện ích</a>
            <a href="https://example.com" className="item">Liên hệ</a>
          </div>
          <div className="header-social">
            <text className="following">Theo dõi trên</text>
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
      </header>
    </div>
  );
}

export default Header;
