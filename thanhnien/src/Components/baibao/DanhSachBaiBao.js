// DanhSachBaiBao.js
import React, {useEffect, useState} from 'react';
import BaiBao from './BaiBao';
import './cssBaiBao.css';
import Item1 from "./Item1";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import thoisuData from '../../Json/thoisu';
import homeData from '../../Json/home';
import {faCircle} from "@fortawesome/free-regular-svg-icons";
import BaiBaoSingle from "./BaiBaoSingle"; // Import dữ liệu từ file JSON

const DanhSachBaiBao = ({dataNews}) => {
    function getRandomData() {
        const dataSources = [homeData, thoisuData];
        const randomIndex = Math.floor(Math.random() * dataSources.length);
        return dataSources[randomIndex];
    }
    const [data, setData] = useState(null);
    const [randomArticles, setRandomArticles] = useState([]);
    useEffect(() => {
        setData(dataNews);
    }, []);

    const getRandomElements = (arr) => {
        let shuffled = arr.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 8);
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
    const nextArticles = randomArticles[1];
    const nextTwoArticles = randomArticles.slice(2, 4);
    const nextFourArticles = randomArticles.slice(4, 9);
    const linkData = nextFourArticles.map(item => ({
        url: item.url,
        title: item.title,
    }));
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
            return textContent;
        }
        return ' ';
    };
    return (
        <div className="ds-bai-bao">
            <div className="ds-tieu-de">
                <h2>{getRandomData().title}</h2>
                <div className="menuRight">
                    <a href="#">Chính trị</a>
                    <a href="#">Pháp luật</a>
                    <a href="#">Dân sinh</a>
                    <div className="iconMenu">
                        <FontAwesomeIcon icon={faAngleDown}/>
                        <div className="ItemTitle">
                            <a href="#">Lao động - Việc làm</a>
                            <a href="#">Quyền được biết</a>
                            <a href="#">Phóng sự / Điều tra</a>
                            <a href="#">Quốc phòng</a>
                            <a href="#">Chống tin giả</a>
                            <a href="#">Thời luận</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ds-noi-dung">
                {firstArticle && (
                    <Item1
                        title={decodeHtmlEntities(firstArticle.title)}
                        image={firstArticle.content_html.match(/<img src="([^"]*)"/)[1]}
                        detail={<a href={nextArticles.url} title={decodeHtmlEntities(nextArticles.title)}
                                   className="mota1">
                            <FontAwesomeIcon
                                icon={faCircle}
                                size="2xs"
                                style={{marginRight: '10px'}}
                            />
                            {decodeHtmlEntities(nextArticles.title)}
                        </a>}
                        category={decodeHtmlEntities(firstArticle.description)}
                        url={firstArticle.url}
                        description={decodeHtmlEntities(extractContentAfterLinks(firstArticle.content_html))}
                    />
                )}
                <BaiBaoSingle dataComponent={nextTwoArticles}/>
            </div>
        </div>
    );
};

export default DanhSachBaiBao;
