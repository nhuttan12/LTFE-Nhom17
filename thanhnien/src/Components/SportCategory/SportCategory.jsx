import React from "react";
import "./SportCategory.css";

function SportCategory() {
  const main_news = [
    {
      title:
        "Tây Ban Nha - Anh (2 giờ ngày 15.7): Chiến thắng trong tay những người công nhân",
      image:
        "https://images2.thanhnien.vn/zoom/736_460/528068263637045248/2024/7/13/mainoo-17208781844691428017622-72-0-712-1024-crop-17208834647311065334609.jpg",
      url: "https://thanhnien.vn/tay-ban-nha-anh-2-gio-ngay-157-chien-thang-trong-tay-nhung-nguoi-cong-nhan-185240713205617864.htm",
      description:
        "Có một thực tế khó có thể chối cãi đối với các cầu thủ Anh là trận chung kết EURO thất bại trước Ý 3 năm trước vẫn còn là một nỗi ám ảnh.",
    },
    {
      title:
        "Võ sĩ nổi tiếng Conor McGregor gây sốc với dự đoán chung kết: Anh thua 1-3!",
      image:
        "https://images2.thanhnien.vn/zoom/351_219/528068263637045248/2024/7/14/mcgregor-1720935223752615499470-57-0-1607-2480-crop-1720935349455859964449.jpg",
      url: "https://thanhnien.vn/vo-si-noi-tieng-conor-mcgregor-gay-soc-voi-du-doan-chung-ket-anh-thua-1-3-185240714123708328.htm",
    },
    {
      title:
        "Tình cảm đặc biệt của HLV Park Hang-seo với trò cũ ở đội tuyển Việt Nam",
      image:
        "https://images2.thanhnien.vn/zoom/351_219/528068263637045248/2024/7/13/05-lan-toa-yeu-thuong-khang-nguyen5-17207883713942112353207-152-0-1752-2560-crop-1720882825997762029481.jpg",
      url: "https://thanhnien.vn/tinh-cam-dac-biet-cua-hlv-park-hang-seo-voi-tro-cu-o-doi-tuyen-viet-nam-185240713220520616.htm",
    },
    {
      title:
        "Lịch thi đấu chung kết Copa America: Cơ hội lớn cho Messi và Argentina hay Colombia gây sốc?",
      image:
        "https://images2.thanhnien.vn/zoom/256_160/528068263637045248/2024/7/14/copa-america-2024-17209294373352004370466-110-0-785-1080-crop-17209300555241107193019.jpeg",
      url: "https://thanhnien.vn/lich-thi-dau-chung-ket-copa-america-co-hoi-lon-cho-messi-va-argentina-hay-colombia-gay-soc-18524071411085495.htm",
    },
    {
      title: "Tây Ban Nha thành công nhờ dám từ bỏ vũ khí 'tối thượng'",
      image:
        "https://images2.thanhnien.vn/zoom/256_160/528068263637045248/2024/7/14/000363j87g-17205621347821056055584-0-0-1600-2560-crop-1720919143800116155081.jpg",
      url: "https://thanhnien.vn/tay-ban-nha-thanh-cong-nho-dam-tu-bo-vu-khi-toi-thuong-185240713212715179.htm",
    },
    {
      title:
        "Dự đoán chung kết EURO 2024, Tây Ban Nha đấu tuyển Anh: Dễ bùng nổ bàn thắng",
      image:
        "https://images2.thanhnien.vn/zoom/256_160/528068263637045248/2024/7/13/z56310454825898baaf3382fcc582aa2061d7cce1fdaf2-1720907568948782143802-0-143-1458-2476-crop-1720907720875273182266.jpg",
      url: "https://thanhnien.vn/du-doan-chung-ket-euro-2024-tay-ban-nha-dau-tuyen-anh-de-bung-no-ban-thang-185240714045831823.htm",
    },
    {
      title:
        "Billiards: Trần Quyết Chiến mất ngôi số 1 thế giới, thiên tài Caudron thăng tiến thần tốc",
      image:
        "https://images2.thanhnien.vn/zoom/256_160/528068263637045248/2024/7/13/quyet-chien-16884040138391023469984-1695895667404972272933-27-54-633-1024-crop-1720915114979389827702.png",
      url: "https://thanhnien.vn/billiards-tran-quyet-chien-mat-ngoi-so-1-the-gioi-thien-tai-caudron-thang-tien-than-toc-18524071407041384.htm",
    },
  ];

  return (
    <div>
      <div className="sport-container">
        <div className="sport-main-news">
          <div className="sport-top">
            <div className="sport-top-container">
              <div className="sport-left">
                <div className="main-image">
                  <a href={main_news[0].url}>
                    <img src={main_news[0].image} alt={main_news[0].title} />
                  </a>
                </div>
                <div className="main-title">
                  <a href={main_news[0].url}>
                    <h2>{main_news[0].title}</h2>
                  </a>
                </div>
                <div className="main-description">
                  <a href={main_news[0].url}>{main_news[0].description}</a>
                </div>
              </div>
              <div className="sport-right">
                <div className="top-post">
                  <div className="image">
                    <a href={main_news[1].url}>
                      <img src={main_news[1].image} alt={main_news[1].title} />
                    </a>
                  </div>
                  <div className="title">
                    <a href={main_news[1].url}>
                      <h5>{main_news[1].title}</h5>
                    </a>
                  </div>
                </div>
                <div className="middle-post">
                  <div className="image">
                    <a href={main_news[2].url}>
                      <img src={main_news[2].image} alt={main_news[2].title} />
                    </a>
                  </div>
                  <div className="title">
                    <a href={main_news[2].url}>
                      <h5>{main_news[2].title}</h5>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sport-middle">
            {main_news.slice(3).map((item, index) => (
              <div className="post">
                <div className="image">
                  <a href={item.url}>
                    <img src={item.image} alt={item.title} />
                  </a>
                </div>
                <div className="title">
                  <a href={item.url}>
                    <h5>{item.title}</h5>
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

export default SportCategory;
