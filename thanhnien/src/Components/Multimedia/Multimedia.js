import React from "react";
import "./Multimedia.css";

const multimedia = [
  {
    title: "Xem khoảnh khắc UAV tấn công của Houthi bị bắn hạ trên vịnh Aden",
    img: "https://images2.thanhnien.vn/zoom/181_113/528068263637045248/2024/7/11/avatar1720676529767-17206765339601581457793.jpeg",
    url: "https://thanhnien.vn/xem-khoanh-khac-uav-tan-cong-cua-houthi-bi-ban-ha-tren-vinh-aden-185240710184815168.htm",
  },
  {
    title: "Bãi thả diều 'cực chill' giữa đồng cỏ xanh ở TP.HCM",
    img: "https://images2.thanhnien.vn/zoom/181_113/528068263637045248/2024/7/7/193c64b86d82cfdc9693-1720349733472972642044-177-0-1777-2560-crop-1720349880229358665864.jpg",
    url: "https://thanhnien.vn/bai-tha-dieu-cuc-chill-giua-dong-co-xanh-o-tphcm-185240707181819225.htm",
  },
  {
    title: "Lỗi phần mềm lậu trong livestream sự kiện của Samsung là gì?",
    img: "https://images2.thanhnien.vn/zoom/181_113/528068263637045248/2024/7/11/avatar1720678317873-17206783182441686843210.png",
    url: "https://thanhnien.vn/loi-phan-mem-lau-trong-livestream-su-kien-cua-samsung-la-gi-185240711130237637.htm",
  },
  {
    title: "Thời trang denim là 'chìa khóa' để tạo nên vẻ cuốn hút khó cưỡng",
    img: "https://images2.thanhnien.vn/zoom/181_113/528068263637045248/2024/7/8/anh-8-17204488800781168634053-85-0-659-919-crop-17204489928371022176512.jpg",
    url: "https://thanhnien.vn/thoi-trang-tre/thoi-trang-denim-la-chia-khoa-de-tao-nen-ve-cuon-hut-kho-cuong-185240708213503288.htm",
  },
  {
    title: "Hari Won sang Hàn đóng phim, tiết lộ lý do giấu Trấn Thành",
    img: "https://images2.thanhnien.vn/zoom/181_113/528068263637045248/2024/7/10/avatar1720624233197-172062423962569694654.jpeg",
    url: "https://thanhnien.vn/hari-won-sang-han-dong-phim-tiet-lo-ly-do-giau-tran-thanh-185240710203753041.htm",
  },
  {
    title: "Các quán bún thịt nướng tấp nập thực khách tại TP.HCM",
    img: "https://images2.thanhnien.vn/zoom/181_113/528068263637045248/2024/7/8/h1-17204071944781617274764-0-0-696-1114-crop-17204072672912141475891.jpg",
    url: "https://thanhnien.vn/thoi-trang-tre/cac-quan-bun-thit-nuong-tap-nap-thuc-khach-tai-tphcm-185240708101455374.htm",
  },
];

function Multimedia() {
  return (
    <div className="multimedia">
      <div className="multimedia-container">
        <div className="mulimedia-header">
          <div className="category">Multimedia</div>
          <div className="other-category">
            <div className="podcast">
              <a href="https://example.com/">Podcast</a>
            </div>
            <div className="seperate" />
            <div className="video">
              <a href="https://example.com/">Video</a>
            </div>
            <div className="seperate" />
            <div className="magazine">
              <a href="https://example.com/">Magazine</a>
            </div>
          </div>
        </div>
        <div className="multimedia-content">
          <div className="main-multimedia">
            <div className="main-post">
              <div className="img">
                <a href="https://thanhnien.vn/xem-nhanh-12h-moi-quan-he-le-thanh-van-luu-binh-nhuong-benh-bach-hau-dien-bien-phuc-tap-18524071111482191.htm">
                  <img
                    src="https://thanhnien.mediacdn.vn/zoom/480_300/325084952045817856/2024/7/11/base64-17206740649911860802122.jpeg"
                    alt="Xem nhanh 12h: Mối quan hệ Lê Thanh Vân - Lưu Bình Nhưỡng | Bệnh bạch hầu diễn biến phức tạp"
                  />
                </a>
              </div>
              <div className="title">
                <a href="https://thanhnien.vn/xem-nhanh-12h-moi-quan-he-le-thanh-van-luu-binh-nhuong-benh-bach-hau-dien-bien-phuc-tap-18524071111482191.htm">
                  Mối quan hệ Lê Thanh Vân - Lưu Bình Nhưỡng | Bệnh bạch hầu
                  diễn biến phức tạp
                </a>
              </div>
            </div>
            <div className="multimedia-welcome">
              <div className="welcome">
                <a
                  href="https://thanhnien.vn/xem-nhanh-12h-moi-quan-he-le-thanh-van-luu-binh-nhuong-benh-bach-hau-dien-bien-phuc-tap-18524071111482191.htm"
                  title="Kính mời quý vị theo dõi Bản tin ‘Xem nhanh 12h’ ngày 11.7.2024 của Báo Thanh Niên với nhiều thông tin đáng chú ý."
                >
                  Kính mời quý vị theo dõi Bản tin ‘Xem nhanh 12h’ ngày
                  11.7.2024 của Báo Thanh Niên với nhiều thông tin đáng chú ý.
                </a>
              </div>
            </div>
          </div>
          <div className="sub-multimedia">
            {multimedia.map((item, index) => (
              <div key={index} className="sub-post">
                <div className="img">
                  <a href={item.url} title={item.title}>
                    <img src={item.img} alt={item.title} />
                  </a>
                </div>
                <div className="title">
                  <a href={item.url} title={item.title}>
                    {item.title}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Multimedia;
