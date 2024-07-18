// ItemThiTruong.js
import React, {useEffect, useState} from 'react';
import './cssthitruong.css';
import parse from "html-react-parser";

const ItemThiTruong = ({dataComponent ,cate}) => {
    const getCategoryFromTitle = (title) => {
        const lowerCaseTitle = title.toLowerCase();
        const keywordsAndCategories = {
            "euro": "Thể thao",
            "world cup": "Thể thao",
            "Messi": "Thể thao",
            "covid": "Sức khỏe",
            "vaccine": "Sức khỏe",
            "quần": "Thời trang 24/7",
            "áo": "Thời trang 24/7",
            "thủ tướng": "Chính trị",
            "lãnh sự quán": "Chính trị",
            "pháp": "Thế giới",
            "mỹ": "Thế giới",
            "ukraine": "Thế giới",
            "nga": "Thế giới",
            "dân": "Dân sinh",
            "vneid": "Thời sự",
            "bồn": "Pháp luật",
            "sinh viên": "Giới trẻ",
            "nha khoa": "Y tế",
            "đh": "Giáo dục",
            "samsung": "Công nghệ",
            "xiaomi": "Công nghệ",
            "iphone": "Công nghệ",
            // ... thêm các cặp từ khóa và danh mục khác
        };

        for (const keyword in keywordsAndCategories) {
            if (lowerCaseTitle.includes(keyword)) {
                return keywordsAndCategories[keyword];
            }
        }

        return "Tổng hợp"; // Hoặc trả về một giá trị mặc định khác nếu không tìm thấy
    };

    return (
            <div className="news-grid">
            {dataComponent.map((article, index) => (
                <div className="news-item" key={index}>
                    <a href={article.item.link} title={(article.item.title)}>
                        {article.item.content &&
                        article.item.content.match(/<img src="([^"]*)"/) &&
                        article.item.content.match(/<img src="([^"]*)"/)[1] ? (
                            <img src={article.item.content.match(/<img src="([^"]*)"/)[1]} alt={article.item.title} className="news-item-image"/> // or suitable alt text
                        ) : (
                            <div className="placeholder-image">Placeholder Image</div> // Hoặc nội dung thay thế
                        )}
                    </a>
                    <div className="news-item-content">
                        {cate === "yes" && ( // Kiểm tra điều kiện trực tiếp
                            <a href={article.item.linkCatelogy} title={(article.item.title)}>
                                <p className="news-item-category">{getCategoryFromTitle(article.item.title)}</p>
                            </a>
                        )}
                        <a href={article.item.link} title={parse(article.item.title)}>
                            <h4 className="news-item-title">{parse(article.item.title)}</h4>
                        </a>
                    </div>
                </div>
            ))}
            </div>
    );
};

export default ItemThiTruong;
