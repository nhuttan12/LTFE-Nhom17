// ItemThiTruong.js
import React, {useEffect, useState} from 'react';
import './cssthitruong.css';

const ItemThiTruong = ({dataComponent ,cate}) => {
    const decodeHtmlEntities = (str) => {
        const txt = document.createElement('textarea');
        txt.innerHTML = str;
        return txt.value;
    };
    const extractContentAfterLinks = (htmlString) => {
        const contentHtml = htmlString;
        const regex = /<\/a>(.*)/; // Tìm kiếm mọi thứ sau thẻ </a>
        const match = contentHtml.match(regex);

        if (match) {
            const textContent = match[1].trim(); // Lấy phần tử thứ 2 (nội dung) và loại bỏ khoảng trắng thừa
            console.log(textContent); // In ra nội dung
            return textContent;
        }
        return ' ';
    };
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
                    <a href={article.url} title={decodeHtmlEntities(article.title)}>
                        <img
                            src={article.content_html.match(/<img src="([^"]*)"/)[1]}
                            alt={decodeHtmlEntities(article.title)}
                            className="news-item-image"
                        />
                    </a>
                    <div className="news-item-content">
                        {cate === "yes" && ( // Kiểm tra điều kiện trực tiếp
                            <a href={article.urlCatelogy} title={decodeHtmlEntities(article.title)}>
                                <p className="news-item-category">{getCategoryFromTitle(article.title)}</p>
                            </a>
                        )}
                        <a href={article.url} title={decodeHtmlEntities(article.title)}>
                            <h4 className="news-item-title">{decodeHtmlEntities(article.title)}</h4>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemThiTruong;
