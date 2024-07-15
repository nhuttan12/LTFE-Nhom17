import React from "react";
import Header from "../Common/Header";
import "./Category.css";
import CategoryPost from "./Category Post/CategoryPost";
import ListGioiTreVaDoiSong from "../tingioitrevadoisong/ListGioiTreVaDoiSong";
import CategoryNavigation from "./CategoryNavagation/CategoryNavigation";

function Category(props) {
  const main_news = [
    {
      title:
        "Phát huy mối quan hệ 'có một không hai' Việt - Lào ngày càng bền vững",
      image:
        "https://images2.thanhnien.vn/zoom/462_288/528068263637045248/2024/7/11/1-onl-17207178396441542489894-98-0-738-1024-crop-17207178988152120856172.jpg",
      url: "https://thanhnien.vn/phat-huy-moi-quan-he-co-mot-khong-hai-viet-lao-ngay-cang-ben-vung-185240711233020944.htm",
      description:
        "Sáng 11.7, ngay sau lễ đón chính thức, Chủ tịch nước Tô Lâm và Tổng Bí thư, Chủ tịch nước Lào Thongloun Sisoulith đã chủ trì cuộc hội đàm giữa đoàn đại biểu cấp cao hai nước.",
    },
    {
      title: "Bất tử Vị Xuyên",
      image:
        "https://images2.thanhnien.vn/zoom/253_158/528068263637045248/2024/7/11/1-toan-canh-nghia-trang-liet-si-quoc-gia-vi-xuyen-nhin-tu-song-lodoc-lap-online-1720696623525739055770-127-0-767-1024-crop-17206971709491183046396.jpg",
      url: "https://thanhnien.vn/bat-tu-vi-xuyen-185240711193126784.htm",
    },
    {
      title: "Việt - Lào - Campuchia samaki!: Vun đắp tình hữu nghị vững bền",
      image:
        "https://images2.thanhnien.vn/zoom/253_158/528068263637045248/2024/7/11/ong-ngo-thanh-son-pho-chu-tich-uy-ban-mttq-vn-tphcmlt-onl-1720713397139142058405-43-0-683-1024-crop-17207139477341326036529.jpg",
      url: "https://thanhnien.vn/viet-lao-campuchia-samaki-vun-dap-tinh-huu-nghi-vung-ben-185240711225701954.htm",
    },
    {
      title: "TP.HCM cắt hơn 8.400 tỉ đồng loạt dự án không thể giải ngân",
      image:
        "https://images2.thanhnien.vn/zoom/146_91/528068263637045248/2024/7/11/duong-noi-tran-quoc-hoan-cong-hoa-17207151290401955753675-0-0-1600-2560-crop-17207151946581118363535.jpg",
      url: "https://thanhnien.vn/tphcm-cat-hon-8400-ti-dong-loat-du-an-khong-the-giai-ngan-185240711232726424.htm",
    },
    {
      title:
        "TP.HCM: Phong tỏa tỉnh lộ 10 trong đêm điều tra vụ người đàn ông tử vong",
      image:
        "https://images2.thanhnien.vn/zoom/146_91/528068263637045248/2024/7/11/base64-1720712952257203805210-43-0-494-722-crop-17207129629031208757506.png",
      url: "https://thanhnien.vn/tphcm-phong-toa-tinh-lo-10-trong-dem-dieu-tra-vu-nguoi-dan-ong-tu-vong-18524071122493538.htm",
    },
  ];

  const posts = [
    {
      category: "Chính trị",
      title:
        "Không thể chia tách mối quan hệ hữu nghị, truyền thống Việt Nam - Campuchia",
      image:
        "https://images2.thanhnien.vn/zoom/328_205/528068263637045248/2024/7/13/vna-potal-chu-tich-nuoc-to-lam-tiep-hoi-huu-nghi-campuchia-viet-nam-7480396-17208512448151038769387-113-0-1363-2000-crop-17208512625801630077250.jpg",
      url: "https://thanhnien.vn/khong-the-chia-tach-moi-quan-he-huu-nghi-truyen-thong-viet-nam-campuchia-185240713131014906.htm",
      description:
        "Không để các thế lực thù địch xuyên tạc, chia rẽ tình hữu nghị VN - Campuchia",
    },
    {
      category: "Thời sự",
      title:
        "Thủ tướng yêu cầu tập trung khắc phục sự cố sạt lở đất khiến 8 người chết",
      image:
        "https://images2.thanhnien.vn/zoom/328_205/528068263637045248/2024/7/13/thumb-img0988-17208474107191123564728-17208475142452085390215-98-87-489-712-crop-17208475267601913632987.jpg",
      url: "https://thanhnien.vn/thu-tuong-yeu-cau-tap-trung-khac-phuc-su-co-sat-lo-dat-khien-8-nguoi-chet-185240713121255758.htm",
      description:
        "Hiện trường sạt lở đất vùi lấp xe khách khiến 8 người tử vong",
    },
    {
      category: "Pháp luật",
      title:
        "Triệt phá băng trộm cắp thiết bị tại các dự án bất động sản ở Phan Thiết",
      image:
        "https://images2.thanhnien.vn/zoom/328_205/528068263637045248/2024/7/13/base64-17208460988881551321068-23-29-493-782-crop-1720846117961690089373.jpeg",
      url: "https://thanhnien.vn/triet-pha-bang-trom-cap-thiet-bi-tai-cac-du-an-bat-dong-san-o-phan-thiet-185240713095546179.htm",
      description: "Bắt nghi phạm đập kính hàng loạt ô tô trộm cắp tài sản",
    },
    {
      category: "Dân sinh",
      title: "Bình Dương: Hai trẻ sơ sinh bị bỏ rơi gần nghĩa địa",
      image:
        "https://images2.thanhnien.vn/zoom/328_205/528068263637045248/2024/7/13/anh-1-br-1720840822583181648112-0-0-869-1391-crop-1720840827468880701574.jpg",
      url: "https://thanhnien.vn/binh-duong-hai-tre-so-sinh-bi-bo-roi-gan-nghia-dia-185240713102118267.htm",
      description:
        "Bé gái bị bỏ rơi ở cổng chùa cùng mảnh giấy 'nhờ nuôi cháu thành người tốt' ",
    },
    {
      category: "Thời sự",
      title: "Hiện trường sạt lở đất vùi lấp xe khách khiến 8 người tử vong",
      image:
        "https://images2.thanhnien.vn/zoom/328_205/528068263637045248/2024/7/13/499bc3c2224d8013d95c-17208394386611944308242-42-64-602-960-crop-1720839955654233247417.jpg",
      url: "https://thanhnien.vn/hien-truong-sat-lo-dat-vui-lap-xe-khach-khien-7-nguoi-tu-vong-185240713100644808.htm",
      description: "Sạt lở đất ở Hà Giang vùi lấp xe khách, 8 người tử vong",
    },
    {
      category: "Thời sự",
      title:
        "Công an TP.HCM tìm chủ xe liên quan vụ án giết người ở Q.Phú Nhuận",
      image:
        "https://images2.thanhnien.vn/zoom/328_205/528068263637045248/2024/7/13/8d190d5ff0d0528e0bc1-1720838382032190750066-47-0-869-1316-crop-17208384314711368190295.jpg",
      url: "https://thanhnien.vn/cong-an-tphcm-tim-chu-xe-lien-quan-vu-an-giet-nguoi-o-qphu-nhuan-185240713094319526.htm",
      description: "TP.HCM: Người Hàn Quốc bị đồng hương đánh vỡ xương sọ",
    },
    {
      category: "Thời sự",
      title: "Phú Quốc: Tạm dừng các tuyến tàu, phà do biển động",
      image:
        "https://images2.thanhnien.vn/zoom/328_205/528068263637045248/2024/7/13/ben-tau-1720836185261427187618-0-0-1440-2304-crop-1720836306117604588101.jpg",
      url: "https://thanhnien.vn/phu-quoc-tam-dung-cac-tuyen-tau-pha-do-bien-dong-185240713090835692.htm",
      description:
        "Tin tức thời tiết hôm nay 12.1.2024: Biển Đông thời tiết xấu",
    },
    {
      category: "Thời sự",
      title:
        "Tạm giữ hơn 2.000 sản phẩm mỹ phẩm nghi nhập lậu rao bán trên Facebook",
      image:
        "https://images2.thanhnien.vn/zoom/328_205/528068263637045248/2024/7/13/my-pham-1720836287094427472410-65-0-503-700-crop-17208365240621777431653.jpg",
      url: "https://thanhnien.vn/tam-giu-hon-2000-san-pham-my-pham-nghi-nhap-lau-rao-ban-tren-facebook-185240713091337772.htm",
      description:
        "Quảng Ninh: Phát hiện cửa hàng bày bán hàng nghìn thực phẩm, mỹ phẩm nhập lậu",
    },
    {
      category: "Lao động - Việc làm",
      title:
        "Tuyển dụng ngành sản xuất tăng, giảm số công việc ngành công nghệ, tài chính",
      image:
        "https://images2.thanhnien.vn/zoom/328_205/528068263637045248/2024/7/5/lao-dong-viec-lam-dao-ngoc-thach-z5591117497832c15d4536506fd6f5d4cf60085ea590c0-1719840357355938180516-45-0-1645-2560-crop-1720166617940564795904.jpg",
      url: "https://thanhnien.vn/tuyen-dung-nganh-san-xuat-tang-giam-so-cong-viec-nganh-cong-nghe-tai-chinh-185240705141803139.htm",
      description:
        "Các công việc có nhu cầu tuyển dụng lớn ở TP.HCM nửa năm đầu 2024",
    },
  ];

  return (
    <div>
      <Header />
      <CategoryNavigation />
      <div className="category-container">
        <div className="category-left">
          <div className="category-main-news">
            <div className="category-top-container">
              <div className="category-top">
                <div className="category-left">
                  <div className="main-image">
                    <img src={main_news[0].image} alt={main_news[0].title} />
                  </div>
                  <div className="main-title">
                    <h5>{main_news[0].title}</h5>
                  </div>
                  <div className="main-description">
                    <p>{main_news[0].description}</p>
                  </div>
                </div>
                <div className="category-right">
                  <div className="top-post">
                    <div className="image">
                      <img src={main_news[1].image} alt={main_news[1].title} />
                    </div>
                    <div className="title">
                      <h5>{main_news[1].title}</h5>
                    </div>
                  </div>
                  <div className="middle-post">
                    <div className="image">
                      <img src={main_news[2].image} alt={main_news[2].title} />
                    </div>
                    <div className="title">
                      <h5>{main_news[2].title}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="category-middle">
              <div className="left-post">
                <div className="image">
                  <img src={main_news[3].image} alt={main_news[3].title} />
                </div>
                <div className="title">
                  <h5>{main_news[3].title}</h5>
                </div>
              </div>
              <div className="right-post">
                <div className="image">
                  <img src={main_news[4].image} alt={main_news[4].title} />
                </div>
                <div className="title">
                  <h5>{main_news[4].title}</h5>
                </div>
              </div>
            </div>
          </div>
          <CategoryPost data={posts} />
        </div>
        <div className="category-right">
          {/* tạm thời comment lại để sửa css, nếu sửa xong file chính thì  */}
          {/* <ListGioiTreVaDoiSong/> */}
        </div>
      </div>
    </div>
  );
}

export default Category;
