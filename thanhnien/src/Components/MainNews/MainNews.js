import React, { useState } from "react";
import "./MainNews.css";
import LatestNews from "./LatestNews";
import PopularNews from "./PopularNews";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import MiniNews from "./MiniNews/MiniNews";

const main_data = {
  image:
    "https://images2.thanhnien.vn/thumb_w/640/528068263637045248/2024/6/24/tro-xi-nhiet-dien-1a-171921031585163605971.jpg",
  title:
    "Chính phủ yêu cầu báo cáo về 3,8 triệu tấn tro xỉ tồn đọng ở trà vinh",
  description:
    "Phó thủ tướng Trần Hồng Hà yêu cầu các bên liên quan báo cáo về hàng triệu tấn tro xỉ tại Trà Vinh đang khó tiêu thụ, dù đã được chứng nhận hợp chuẩn, hợp quy làm vật liệu san lấp.",
  url: "https://thanhnien.vn/9-nhom-doi-tuong-duoc-tang-luong-huu-tro-cap-tu-17-185240628184739934.htm",
};

const data = [
  {
    title: "Từ 1.7, tăng lương hưu cao nhất từ trước đến nay",
    description:
      "Từ ngày 1.7, lương hưu, trợ cấp bảo hiểm xã hội (BHXH) và trợ cấp hàng tháng sẽ tăng thêm 15%. Theo Bộ LĐ-TB-XH, 9 đối tượng được điều chỉnh tăng lương hưu, trợ cấp.",
    url: "https://thanhnien.vn/9-nhom-doi-tuong-duoc-tang-luong-huu-tro-cap-tu-17-185240628184739934.htm#:~:text=M%E1%BB%A9c%20%C4%91i%E1%BB%81u%20ch%E1%BB%89nh%20t%C4%83ng%20l%C6%B0%C6%A1ng,nh%E1%BA%A5t%20t%E1%BB%AB%20tr%C6%B0%E1%BB%9Bc%20%C4%91%E1%BA%BFn%20nay.",
  },
  {
    title: "Đà Lạt, 3 cháu be thiệt mạng do hoả hoạn",
    description:
      "Vụ hoả hoạn xảy ra khoảng 10 giờ hôm nay 24.6 tại TP. Đà Lạt làm 3 cháu bé thiệt mạng",
    url: "https://thanhnien.vn/da-lat-3-chau-be-thiet-mang-do-hoa-hoan-185240624120226796.htm",
  },
  {
    title: "TP.HCM: Đã có điểm chuẩn lớp 10 chuyên, tích hợp, xem tại đây",
    description:
      "Sở GD-ĐT TP.HCM vừa công bố điểm chuẩn lớp 10 chuyên, tích hợp năm học 2024-2025. Học sinh trúng tuyển sử dụng tài khoản của mình truy cập vào trang ts10.hcm.edu.vn để xác nhận nhập học trực tuyến từ ngày 25.6 đến trước 16 giờ ngày 29.6.",
    url: "https://thanhnien.vn/tphcm-da-co-diem-chuan-lop-10-chuyen-tich-hop-xem-tai-day-185240623175553642.htm",
  },
];

const latest_news = [
  {
    title: "Thế giới vừa trải qua tháng 6 nóng chưa từng thấy trong lịch sử",
    url: "https://thanhnien.vn/the-gioi-vua-trai-qua-thang-6-nong-chua-tung-thay-trong-lich-su-185240708161837793.htm",
  },
  {
    title: "Huawei sẽ trang bị chip 5nm cho Mate70 series",
    url: "https://thanhnien.vn/huawei-se-trang-bi-chip-5nm-cho-mate70-series-185240708162030137.htm",
  },
  {
    title:
      "'Anh trai say hi' vào top trending, đạt 3 triệu lượt xem trong 24 giờ",
    url: "https://thanhnien.vn/anh-trai-say-hi-vao-top-trending-dat-3-trieu-luot-xem-trong-24-gio-185240708161944543.htm",
  },
  {
    title: "Những nơi không nên cất giữ smartphone",
    url: "https://thanhnien.vn/nhung-noi-khong-nen-cat-giu-smartphone-185240630190309241.htm",
  },
  {
    title:
      "Phía sau những tấm ảnh đẹp của VĐV giải Pickleball Thanh Niên Cúp VINFAST",
    url: "https://thanhnien.vn/phia-sau-nhung-tam-anh-dep-cua-vdv-giai-pickleball-thanh-nien-cup-vinfast-185240708163923112.htm",
  },
  {
    title: "Cùng chung tay bảo vệ môi trường biển",
    url: "https://thanhnien.vn/cung-chung-tay-bao-ve-moi-truong-bien-185240708113516832.htm",
  },
];

const popular_news = [
  {
    title: "Từ ngày 1.8, tặng cho và mua bán đất trồng lúa như thế nào?",
    url: "https://thanhnien.vn/tu-ngay-18-tang-cho-va-mua-ban-dat-trong-lua-nhu-the-nao-185240707174544548.htm",
  },
  {
    title: "Vụ cô ruột dùng xyanua đầu độc cháu: Lời khai ban đầu của bị can",
    url: "https://thanhnien.vn/vu-co-ruot-dung-xyanua-dau-doc-chau-loi-khai-ban-dau-cua-bi-can-185240707193213079.htm",
  },
  {
    title:
      "Đội trưởng Thanh Thúy nghẹn ngào sau kỳ tích thắng Bỉ, giành HCĐ Cúp thế giới: Thật sung sướng!",
    url: "https://thanhnien.vn/chan-dai-thanh-thuy-nghen-ngao-sau-ky-tich-thang-bi-gianh-hcd-cup-the-gioi-that-sung-suong-185240707172906209.htm",
  },
  {
    title: "‘Kỵ binh’ xe máy giúp Nga đẩy nhanh tốc độ tấn công ở vùng Donbass",
    url: "https://thanhnien.vn/ky-binh-xe-may-giup-nga-day-nhanh-toc-do-tan-cong-o-vung-donbass-185240703162900556.htm",
  },
  {
    title:
      "Trái mít khổng lồ ở Việt Nam đã được bổ: 'Múi to bằng cái điện thoại!'",
    url: "https://thanhnien.vn/trai-mit-khong-lo-o-viet-nam-da-duoc-bo-mui-to-bang-cai-dien-thoai-185240707215350159.htm",
  },
  {
    title: "Ốc Thanh Vân: Sang Úc nghèo hẳn, ở Việt Nam giàu hơn",
    url: "https://thanhnien.vn/oc-thanh-van-sang-uc-ngheo-han-o-viet-nam-giau-hon-185240708010201283.htm",
  },
  {
    title:
      "Cảnh giác kẻ gian treo thẻ có mã QR trên xe, trước cửa nhà để ăn chặn tiền",
    url: "https://thanhnien.vn/canh-giac-ke-gian-treo-the-co-ma-qr-tren-xe-truoc-cua-nha-de-chan-tien-185240707140426332.htm",
  },
  {
    title:
      "Có nên cho phép thành lập văn phòng công chứng một công chứng viên?",
    url: "https://thanhnien.vn/co-nen-cho-phep-thanh-lap-van-phong-cong-chung-mot-cong-chung-vien-18524070721572803.htm",
  },
  {
    title:
      "Hơn 30.000 CĐV kiện lên UEFA, đòi Đức và Tây Ban Nha… đá lại: Trọng tài Taylor im lặng",
    url: "https://thanhnien.vn/hon-30000-cdv-kien-len-uefa-doi-duc-va-tay-ban-nha-da-lai-trong-tai-taylor-im-lang-185240708070929876.htm",
  },
  {
    title: "Ủng hộ bỏ quy định nộp giấy xác nhận tình trạng hôn nhân",
    url: "https://thanhnien.vn/ung-ho-bo-quy-dinh-nop-giay-xac-nhan-tinh-trang-hon-nhan-185240707184115766.htm",
  },
];

const miniData = [
  {
    title:
      "Vụ án Tịnh thất Bồng Lai: Khởi tố Lê Thanh Nhất Nguyên về hành vi lừa đảo",
    img: "https://images2.thanhnien.vn/zoom/160_100/528068263637045248/2024/7/9/le-thanh-nhat-nguyen-1720520908907136874990-0-0-597-955-crop-1720521071924919976996.jpg",
    url: "https://thanhnien.vn/vu-an-tinh-that-bong-lai-khoi-to-le-thanh-nhat-nguyen-ve-hanh-vi-lua-dao-185240709173256463.htm",
  },
  {
    title: "Bệnh bạch hầu: Bộ Y tế thông tin mới nhất về các ổ dịch",
    img: "https://images2.thanhnien.vn/zoom/160_100/528068263637045248/2024/7/9/tno-1-17204314766521070633582-0-0-705-1128-crop-1720524301491771571008.jpg",
    url: "https://thanhnien.vn/benh-bach-hau-bo-y-te-thong-tin-moi-nhat-ve-cac-o-dich-18524070917525874.htm",
  },
  {
    title: "Đề xuất thu phí 12 cao tốc do ngân sách đầu tư từ 2025",
    img: "https://images2.thanhnien.vn/zoom/160_100/528068263637045248/2024/7/9/anh-cao-toc-1-17143700706091341477426-320-0-1920-2560-crop-1720520881264559483423.jpg",
    url: "https://thanhnien.vn/de-xuat-thu-phi-12-cao-toc-do-ngan-sach-dau-tu-tu-2025-18524070917294572.htm",
  },
  {
    title:
      "Các đường dây xuyên quốc gia lập doanh nghiệp ở Việt Nam để trung chuyển ma túy",
    img: "https://images2.thanhnien.vn/zoom/160_100/528068263637045248/2024/7/9/base64-1720517793265106002982-23-0-623-960-crop-1720517838371596416469.jpeg",
    url: "https://thanhnien.vn/cac-duong-day-xuyen-quoc-gia-lap-doanh-nghiep-o-viet-nam-de-trung-chuyen-ma-tuy-185240709164508342.htm",
  },
  {
    title:
      "Xót lòng cảnh vợ chồng U.80 héo mòn chăm con cháu mắc bệnh động kinh",
    img: "https://images2.thanhnien.vn/zoom/160_100/528068263637045248/2024/6/20/edit-hoan-canh-kho-khan-1718856239054619542550-259-0-1463-1926-crop-1718856264987873192296.jpeg",
    url: "https://thanhnien.vn/xot-long-canh-vo-chong-u80-heo-mon-cham-con-chau-mac-benh-dong-kinh-185240620110809161.htm",
  },
  {
    title:
      "8 giờ ngày mai 10.7, công bố điểm khảo sát lớp 6 Trường THCS-THPT Trần Đại Nghĩa",
    img: "https://images2.thanhnien.vn/zoom/160_100/528068263637045248/2024/7/9/khao-sat-lop-6-17200874828461583394934-106-0-1706-2560-crop-17205232213911097158717.jpg",
    url: "https://thanhnien.vn/8-gio-ngay-mai-107-cong-bo-diem-khao-sat-lop-6-truong-thcs-thpt-tran-dai-nghia-185240709181104124.htm",
  },
  {
    title:
      "Chuyển hồ sơ vụ chồng tử vong, vợ bị thương sang cơ quan điều tra quân đội",
    img: "https://images2.thanhnien.vn/zoom/160_100/528068263637045248/2024/7/9/dfc7c8d0-b30a-4ae8-b49f-9c0a0066a94f-17205266155121957417414-41-0-647-970-crop-17205266272061111522434.jpg",
    url: "https://thanhnien.vn/chuyen-ho-so-vu-chong-tu-vong-vo-bi-thuong-sang-co-quan-dieu-tra-quan-doi-185240709191139455.htm",
  },
  {
    title:
      "Vụ người phụ nữ bị con rể cũ sát hại: Vợ cũ của nghi phạm đã tử vong",
    img: "https://images2.thanhnien.vn/thumb_w/640/528068263637045248/2024/6/24/sat-hai-me-vo-va-vo-cu-17192098238881874327499.jpg",
    url: "https://thanhnien.vn/vu-nguoi-phu-nu-bi-con-re-cu-sat-hai-vo-cu-cua-nghi-pham-da-tu-vong-185240624131956421.htm",
  },
];

const MainNews = ({dataNews}) => {
  return (
    <div className="section-home">
      <div className="main-news">
        <div className="main-news-container">
          <div className="main-news-flex">
            <div className="top-news">
              <div className="top-news-img">
                <a href={main_data.url}>
                  <img src={main_data.image} alt={main_data.title} />
                </a>
              </div>
              <div className="top-news-name">
                <div className="top-news-title">
                  <a href={main_data.url}>{main_data.title}</a>
                </div>
                <div className="top-news-description font">
                  <a href={main_data.url}>{main_data.description}</a>
                </div>
              </div>
            </div>
            <div className="middle-news">
              <div className="middle-news-container">
                <div className="middle-news-grid">
                  {data.map((item, index) => (
                    <div key={index} className="middle-news-item">
                      <div className="title">
                        <a href={item.url}>{item.title}</a>
                      </div>
                      <div className="description font">
                        <a href={item.url}>{item.description}</a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mini-news-container" style={{width: '100%'}}>
          <MiniNews data={miniData}/>
        </div>
      </div>
      <div className="sub-news">
        <div className="sub-news-container">
          <div className="sub-news-tab">
            <Tabs
              defaultActiveKey="latest"
              id="fill-tab-example"
              className="mb-3 subs-tab"
              fill
            >
              <Tab eventKey="latest" title="Tin mới">
                <div className="latest-news">
                  {latest_news.map((item, index) => (
                    <LatestNews key={index} data={item} />
                  ))}
                </div>
              </Tab>
              <Tab eventKey="popular" title="Đọc nhiều">
                <div className="popular-news tab">
                  {popular_news.map((item, index) => (
                    <PopularNews key={index} data={item} />
                  ))}
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
        <div className="sub-news-box-blog">
          <div className="box-blog-container">
            <div className="box-blog-flex">
              <div className="box-container">
                <div className="box-flex">
                  <div className="box-topic font">Chào ngày mới</div>
                  <div className="box-title">
                    Để không gian được văn minh, tử tế
                  </div>
                  <div className="box-author">
                    <div className="author-image">
                      <img
                        src="https://static.thanhnien.com.vn/thanhnien.vn/image/ava_inter.png"
                        alt="Nữ Vương"
                      />
                    </div>
                    <div className="author-flex">
                      <div className="author font">Tác giả</div>
                      <div className="author-name font">Nữ Vương</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog-container">
                <div className="blog-flex">
                  <div className="blog-topic font">Blog phóng viên</div>
                  <div className="blog-title">Xử lý triệt để thẩm mỹ chui</div>
                  <div className="blog-author">
                    <div className="author-image">
                      <img
                        src="https://static.thanhnien.com.vn/thanhnien.vn/image/ava_inter.png"
                        alt="Nữ Vương"
                      />
                    </div>
                    <div className="author-flex">
                      <div className="author font">Tác giả</div>
                      <div className="author-name font">Nữ Vương</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNews;
