import React from "react";
import "./MainNews.css";

const main_data = {
  image:
    "https://images2.thanhnien.vn/thumb_w/640/528068263637045248/2024/6/24/tro-xi-nhiet-dien-1a-171921031585163605971.jpg",
  title:
    "Chính phủ yêu cầu báo cáo về 3,8 triệu tấn tro xỉ tồn đọng ở trà vinh",
  description:
    "Phó thủ tướng Trần Hồng Hà yêu cầu các bên liên quan báo cáo về hàng triệu tấn tro xỉ tại Trà Vinh đang khó tiêu thụ, dù đã được chứng nhận hợp chuẩn, hợp quy làm vật liệu san lấp.",
};

const data = [
  {
    title: "Từ 1.7, tăng lương hưu cao nhất từ trước đến nay",
    description:
      "Từ ngày 1.7, lương hưu, trợ cấp bảo hiểm xã hội (BHXH) và trợ cấp hàng tháng sẽ tăng thêm 15%. Theo Bộ LĐ-TB-XH, 9 đối tượng được điều chỉnh tăng lương hưu, trợ cấp.",
  },
  {
    title: "Đà Lạt, 3 cháu be thiệt mạng do hoả hoạn",
    description:
      "Vụ hoả hoạn xảy ra khoảng 10 giờ hôm nay 24.6 tại TP. Đà Lạt làm 3 cháu bé thiệt mạng",
  },
  {
    title: "TP.HCM: Đã có điểm chuẩn lớp 10 chuyên, tích hợp, xem tại đây",
    description:
      "Sở GD-ĐT TP.HCM vừa công bố điểm chuẩn lớp 10 chuyên, tích hợp năm học 2024-2025. Học sinh trúng tuyển sử dụng tài khoản của mình truy cập vào trang ts10.hcm.edu.vn để xác nhận nhập học trực tuyến từ ngày 25.6 đến trước 16 giờ ngày 29.6.",
  },
];

const MainNews = (props) => {
  return (
    <div className="section-home">
      <div className="main-news">
        <div className="main-news-container">
          <div className="main-news-flex">
            <div className="top-news">
              <div className="top-news-img">
                <img src={main_data.image} alt={main_data.title} />
              </div>
              <div className="top-news-name">
                <div className="top-news-title">{main_data.title}</div>
                <div className="top-news-description font">
                  {main_data.description}
                </div>
              </div>
            </div>
            <div className="middle-news">
              <div className="middle-news-flex">
                {data.map((item, index) => (
                  <div key={index} className="middle-news-item">
                    <div className="title">{item.title}</div>
                    <div className="description">{item.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNews;
