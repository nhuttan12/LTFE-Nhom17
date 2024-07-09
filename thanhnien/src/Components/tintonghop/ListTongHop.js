// NewsList.js
import NewsArticle from './ItemTongHop';
import './csstonghop.css';
import React, {useEffect, useState} from 'react';
import homeData from '../../Json/home.json';
import thethaoData from '../../Json/thethao.json';

const ArticleList = () => {
    const [data, setData] = useState(null);
    const [randomArticles, setRandomArticles] = useState([]);
    function getRandomData() {
        const dataSources = ["Thời sự", "Tổng hợp"];
        const randomIndex = Math.floor(Math.random() * dataSources.length);
        return dataSources[randomIndex];
    }
    useEffect(() => {
        setData(thethaoData);
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
                const newRandomArticles = getRandomElements(data.items, 4);
                setRandomArticles(newRandomArticles);
                localStorage.setItem('lastShuffleTime', currentTime);
                localStorage.setItem('shuffledArticles', JSON.stringify(newRandomArticles));
            } else {
                const shuffledArticles = JSON.parse(localStorage.getItem('shuffledArticles'));
                setRandomArticles(shuffledArticles);
            }
        }
    }, [data]);

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
    function getCategoryFromTitle(title) {
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
    }
    function getImageSize(title) {
        const lowerCaseTitle = title.toLowerCase();
        const keywords = ["euro", "world cup", "bóng đá"]; // Mảng các từ khóa

        if (keywords.some(keyword => lowerCaseTitle.includes(keyword))) {
            return "400px";
        } else {
            return undefined;
        }
    }


    if (!randomArticles.length) {
        return <div>Loading...</div>;
    }

    const firstArticle = randomArticles[0];
    const nextThreeArticles = randomArticles.slice(1, 4);

    return (
        <div className="article-list">
            {nextThreeArticles.map((item, index) => (
                <NewsArticle
                    key={index}
                    category={getCategoryFromTitle(item.title)}
                    title={decodeHtmlEntities(item.title)}
                    image={item.content_html.match(/<img src="([^"]*)"/)[1]}
                    imgsize={getImageSize(item.title)} // Truyền imageSize vào props
                    description={decodeHtmlEntities(extractContentAfterLinks(item.content_html))}
                    url={item.url}
                />
            ))}
        </div>
    );
};

export default ArticleList;
