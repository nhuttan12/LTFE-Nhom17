// ListThiTruong.js
import React from 'react';
import NewsItem from './ItemTongHop';
import tonghop from './csstonghop.css';

const newsData = [
    {
        category: "Pháp luật",
        title: "Sự thật về người phụ nữ nước ngoài xin tiền giữa đường vì 'bị bỏ lại'",
        description: "Trục xuất 3 người Pakistan chiếm đoạt tài sản các cửa hàng ở Đà Nẵng",
        image: "https://images2.thanhnien.vn/zoom/328_205/528068263637045248/2024/7/4/a-17200590718341607077244-19-0-694-1080-crop-17200591070231276018696.jpg"
    },
    {
        category: "Dân sinh",
        title: "Xe của Bộ Công an xuất hiện trước nhà Bí thư huyện đảo Phú Quý",
        description: "Khởi tố vụ án hình sự liên quan Khu đô thị du lịch biển của Tập đoàn Rạng Đông",
        image: "https://images2.thanhnien.vn/zoom/328_205/528068263637045248/2024/7/4/xe-bca-172006345395264925784-0-0-1440-2304-crop-1720063529133898854689.jpg"
    },
    {
        category: "Thế giới",
        title: "Tổng thống Biden cân nhắc rời đường đua tranh cử?",
        description: "Reuters: Tỷ lệ ủng hộ hai ông Biden - Trump ngang nhau",
        image: "https://images2.thanhnien.vn/zoom/328_205/528068263637045248/2024/7/3/biden-172002265386397265920-27-0-1627-2560-crop-1720023365141372047404.jpg"
    }
];

const NewsList = () => {
    return (
        <div className={tonghop.newsList}>
            <h2>Tin thị trường</h2>
            {newsData.map((news, index) => (
                <NewsItem
                    key={index}
                    category={news.category}
                    title={news.title}
                    description={news.description}
                    image={news.image}
                />
            ))}
        </div>
    );
};

export default NewsList;
