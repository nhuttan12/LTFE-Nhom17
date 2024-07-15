// NewsList.js
import NewsArticle from './ItemTongHop';
import './csstonghop.css';
import React, {useEffect, useState} from 'react';
import homeData from '../../Json/home.json';
import thethaoData from '../../Json/thethao.json';
import parse from "html-react-parser";

const ArticleList = ({dataNews}) => {

    const firstThree = dataNews.slice(0, 3);
    const nextThree = dataNews.slice(3);

    const extractContentAfterLinks = (htmlString) => {
        const regex = /<\/a>(.*)/;
        const match = htmlString.match(regex);

        if (match) {
            return match[1].trim();
        }
        return '';
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

    const getImageSize = (title) => {
        const lowerCaseTitle = title.toLowerCase();
        const keywords = ["euro", "world cup", "bóng đá"]; // Mảng các từ khóa

        if (keywords.some(keyword => lowerCaseTitle.includes(keyword))) {
            return "425px";
        } else {
            return undefined;
        }
    };


    return (
        <div className="article-list">
            {firstThree.map((item, index) => (
                <NewsArticle
                    key={index}
                    category={getCategoryFromTitle(item.title)}
                    title={parse(item.title)}
                    image={item.content_html.match(/<img src="([^"]*)"/)[1]}
                    imgsize={getImageSize(item.title)}
                    description={parse(extractContentAfterLinks(item.content_html))}
                    url={item.url}
                    data={nextThree[index] ? nextThree.slice(index, index + 1) : []}
                />
            ))}
        </div>
    );
};

export default ArticleList;
