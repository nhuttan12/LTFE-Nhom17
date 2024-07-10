// ListThiTruong.js
import React, {useEffect, useState} from 'react';
import ItemThiTruong from './ItemThiTruong';
import homeData from "../../Json/home.json";

const ListThiTruong = () => {
    const [data, setData] = useState(null);
    const [randomArticles, setRandomArticles] = useState([]);

    useEffect(() => {
        setData(homeData);
    }, []);

    const getRandomElements = (arr, numElements) => {
        let shuffled = arr.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, numElements);
    };

    useEffect(() => {
        if (data) {
            const storedShuffleTime = localStorage.getItem('lastShuffleTime');
            const currentTime = Date.now();

            if (!storedShuffleTime || currentTime - storedShuffleTime >= 1000) { // 2 minutes 120000 // 30 seconds 30000
                const newRandomArticles = getRandomElements(data.items, 8);
                setRandomArticles(newRandomArticles);
                localStorage.setItem('lastShuffleTime', currentTime);
                localStorage.setItem('shuffledArticles', JSON.stringify(newRandomArticles));
            } else {
                const shuffledArticles = JSON.parse(localStorage.getItem('shuffledArticles'));
                setRandomArticles(shuffledArticles);
            }
        }
    }, [data]);
    if (!randomArticles.length) {
        return <div>Loading...</div>;
    }
    const decodeHtmlEntities = (str) => {
        const txt = document.createElement('textarea');
        txt.innerHTML = str;
        return txt.value;
    };

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

    return (
        <div className="news-list">
            <h2>Tin thị trường</h2>
            <div className="news-grid">
                {randomArticles.map((news, index) => (
                    <ItemThiTruong
                        key={index}
                        category={getCategoryFromTitle(news.title)}
                        title={decodeHtmlEntities(news.title)}
                        description={decodeHtmlEntities(extractContentAfterLinks(news.content_html))}
                        image={news.content_html.match(/<img src="([^"]*)"/)[1]}
                    />
                ))}
            </div>
        </div>
    );
};

export default ListThiTruong;
