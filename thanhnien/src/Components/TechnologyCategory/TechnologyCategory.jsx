import React from "react";
import './TechnologyCategory.css'

function TechnologyCategory() {
  const main_news = [
    {
      title: "Chu kỳ thay thế iPhone và máy Mac đang chậm lại",
      image:
        "https://images2.thanhnien.vn/zoom/736_460/528068263637045248/2024/7/13/2-17208396586271470462587-0-0-600-960-crop-1720839678477972572963.jpg",
      url: "https://thanhnien.vn/chu-ky-thay-the-iphone-va-may-mac-dang-cham-lai-18524071310033734.htm",
      description:
        "Nghiên cứu gần đây của Consumer Intelligence Research Partners (CIRP) chỉ ra rằng người dùng iPhone và máy Mac đang dần giữ thiết bị của họ lâu hơn, dẫn đến chu kỳ thay thế đang chậm lại.",
    },
    {
      title: "AMD vượt qua Intel, Samsung, Xbox nhưng vẫn thua xa Apple",
      image:
        "https://images2.thanhnien.vn/zoom/351_219/528068263637045248/2024/7/10/ltpjk24h2fpuxlgc3atxp7pd6i-1720591767351-17205917679611881342664-0-0-1250-2000-crop-17205917770281823550874.jpg",
      url: "https://thanhnien.vn/amd-vuot-qua-intel-samsung-xbox-nhung-van-thua-xa-apple-185240710130725172.htm",
    },
    {
      title: "Vụ đánh cắp thông tin gây chấn động ngành viễn thông",
      image:
        "https://images2.thanhnien.vn/zoom/351_219/528068263637045248/2024/7/13/leak-17208452091241092206939-0-0-413-660-crop-1720845284626986911926.jpg",
      url: "https://thanhnien.vn/vu-danh-cap-thong-tin-gay-chan-dong-nganh-vien-thong-185240713113246237.htm",
    },
    {
      title: "Samsung nói gì khi bị tố Galaxy Buds3 sao chép AirPods?",
      image:
        "https://images2.thanhnien.vn/zoom/256_160/528068263637045248/2024/7/12/1-17207688622751918197235-0-58-540-922-crop-1720768878272784799513.jpg",
      url: "https://thanhnien.vn/samsung-noi-gi-khi-bi-to-galaxy-buds3-sao-chep-airpods-185240712142345979.htm",
    },
    {
      title:
        "Tại sao Google Maps hiển thị tốc độ thấp hơn đồng hồ tốc độ trên xe?",
      image:
        "https://images2.thanhnien.vn/zoom/256_160/528068263637045248/2024/7/12/1-17207840343341879487023-40-0-640-960-crop-1720784042692352364314.jpg",
      url: "https://thanhnien.vn/tai-sao-google-maps-hien-thi-toc-do-thap-hon-dong-ho-toc-do-tren-xe-185240712184756872.htm",
    },
    {
      title:
        "Apple nêu giải pháp thay thế khi smartphone bị cấm trong trường học",
      image:
        "https://images2.thanhnien.vn/zoom/256_160/528068263637045248/2024/7/13/1-17208353295791919807382-25-0-625-960-crop-17208354797572013900750.jpg",
      url: "https://thanhnien.vn/apple-neu-giai-phap-thay-the-khi-smartphone-bi-cam-trong-truong-hoc-185240713085401546.htm",
    },
    {
      title: "Bộ xử lý Intel liên tục gặp lỗi, AMD hưởng lợi",
      image:
        "https://images2.thanhnien.vn/zoom/256_160/528068263637045248/2024/7/13/1-17208291191281225925714-24-0-624-960-crop-1720829192353642251302.jpg",
      url: "https://thanhnien.vn/bo-xu-ly-intel-lien-tuc-gap-loi-amd-huong-loi-185240713070707383.htm",
    },
  ];

  return (
    <div className="technology">
      <div className="tech-container">
        <div className="tech-main-news">
          <div className="tech-top">
            <div className="tech-top-container">
              <div className="tech-left">
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
              <div className="tech-right">
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
          <div className="tech-middle">
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

export default TechnologyCategory;
