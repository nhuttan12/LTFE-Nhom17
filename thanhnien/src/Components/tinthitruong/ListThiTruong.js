// ListThiTruong.js
import React from 'react';
import ItemThiTruong from './ItemThiTruong';
import thitruong from './cssthitruong.css';

const newsData = [
    {
        category: "Tin tức công nghệ",
        title: "CMC đề xuất hợp tác Samsung thúc đẩy ngành công nghiệp bán dẫn tại Việt Nam",
        description: "CMC đề xuất hợp tác Samsung thúc đẩy ngành công nghiệp bán dẫn tại Việt Nam",
        image: "https://images2.thanhnien.vn/zoom/160_100/528068263637045248/2024/7/4/samsung-172008306930457738480-0-21-674-1099-crop-1720083185482249700679.png"
    },
    {
        category: "Kinh tế xanh",
        title: "Năng lượng xanh là con đường tất yếu Việt Nam phải đi",
        description: "Năng lượng xanh là con đường tất yếu Việt Nam phải đi",
        image: "https://images2.thanhnien.vn/zoom/160_100/528068263637045248/2024/7/4/2-gsm-1720066294086783917713-0-0-625-1000-crop-17200663409091032134179.jpg"
    },
    {
        category: "Kinh tế xanh",
        title: "Năng lượng xanh là con đường tất yếu Việt Nam phải đi",
        description: "Năng lượng xanh là con đường tất yếu Việt Nam phải đi",
        image: "https://images2.thanhnien.vn/zoom/160_100/528068263637045248/2024/7/4/2-gsm-1720066294086783917713-0-0-625-1000-crop-17200663409091032134179.jpg"
    },
    {
        category: "Kinh tế xanh",
        title: "Năng lượng xanh là con đường tất yếu Việt Nam phải đi",
        description: "Năng lượng xanh là con đường tất yếu Việt Nam phải đi",
        image: "https://images2.thanhnien.vn/zoom/160_100/528068263637045248/2024/7/4/2-gsm-1720066294086783917713-0-0-625-1000-crop-17200663409091032134179.jpg"
    }
    // Add more news items here
];

const ListThiTruong = () => {
    return (
        <div className="news-list">
            <h2>Tin thị trường</h2>
            <div className="news-grid">
                {newsData.map((news, index) => (
                    <ItemThiTruong
                        key={index}
                        category={news.category}
                        title={news.title}
                        description={news.description}
                        image={news.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default ListThiTruong;
