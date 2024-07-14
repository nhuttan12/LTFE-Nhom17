import React, {useEffect, useState} from "react";
import './topNews.css';
import ItemThiTruong from "../tinthitruong/ItemThiTruong";
import ThreeBigNews from "./ThreeBigNews";
const TopNew = ({dataNews, numData}) => {
    const [data, setData] = useState(null);
    const [randomArticles, setRandomArticles] = useState([]);
    useEffect(() => {
        setData(dataNews);
    }, []);

    const getRandomElements = (arr) => {
        let shuffled = arr.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, numData);
    };

    useEffect(() => {
        if (data) {
            const storedShuffleTime = localStorage.getItem('lastShuffleTime');
            const currentTime = Date.now();

            if (!storedShuffleTime || currentTime - storedShuffleTime >= 30000) { // 30 seconds
                const newRandomArticles = getRandomElements(data.items);
                setRandomArticles(newRandomArticles);
                localStorage.setItem('lastShuffleTime', currentTime);
                localStorage.setItem('shuffledArticles', JSON.stringify(newRandomArticles));
            } else {
                const shuffledArticles = JSON.parse(localStorage.getItem('shuffledArticles'));
                setRandomArticles(shuffledArticles);
            }
        }
    }, [data]);
    const firstArticle = randomArticles[0];
    const nextTwoArticles = randomArticles.slice(1, 5);
    const nextFourArticles = randomArticles.slice(5, 9);
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
    return (
        <div className="top-new">
            {firstArticle && (
                <div className="firest">
                    <div className="news-left">
                        <a href={firstArticle.url} title={decodeHtmlEntities(firstArticle.title)}><p
                            className="top-new-title">
                            {decodeHtmlEntities(firstArticle.title)}</p></a>
                        <a href={firstArticle.url} title={decodeHtmlEntities(firstArticle.title)}><p
                            className="top-new-description">
                            {decodeHtmlEntities(extractContentAfterLinks(firstArticle.content_html))}</p></a>
                    </div>
                    <div className="news-right">
                        <a href={firstArticle.url} title={decodeHtmlEntities(firstArticle.title)}>
                            <img src={firstArticle.content_html.match(/<img src="([^"]*)"/)[1]}
                                 alt={decodeHtmlEntities(firstArticle.title)}></img>
                        </a>
                    </div>
                </div>)}
            <div className="news-grid">
                {nextTwoArticles.map((news, index) => (
                    <ItemThiTruong
                        key={index}
                        // category={getCategoryFromTitle(news.title)}
                        title={decodeHtmlEntities(news.title)}
                        description={decodeHtmlEntities(extractContentAfterLinks(news.content_html))}
                        image={news.content_html.match(/<img src="([^"]*)"/)[1]}
                        url={news.url}
                    />
                ))}
            </div>
            <div className="carousel-track">
                {nextFourArticles.map((item, index) => (
                    <article className="carousel-item" key={index}>
                        <img src={item.image} alt={item.title}/>
                        <div className="item-details">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
export default TopNew;