// DanhSachBaiBao.js
import React, {useEffect, useState} from 'react';
import BaiBao from './BaiBao';
import './cssBaiBao.css';
import Item1 from "./Item1";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import thoisuData from '../../Json/thoisu.json';
import homeData from '../../Json/home.json';
import {faCircle} from "@fortawesome/free-regular-svg-icons"; // Import dữ liệu từ file JSON

const DanhSachBaiBao = () => {
    function getRandomData() {
        const dataSources = [homeData, thoisuData];
        const randomIndex = Math.floor(Math.random() * dataSources.length);
        return dataSources[randomIndex];
    }
    const [data, setData] = useState(null);
    const [randomArticles, setRandomArticles] = useState([]);
    useEffect(() => {
        const randomData = getRandomData();
        setData(randomData);
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
            console.log(textContent); // In ra nội dung
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
                {nextTwoArticles.map((item, index) => (
                    <BaiBao
                        key={index}
                        url={item.url}
                        chuDe={decodeHtmlEntities(item.title)}
                        tieuDe={decodeHtmlEntities(item.title)}
                        moTa={
                            index < linkData.length ? (
                                <a href={linkData[index].url}
                                    title={decodeHtmlEntities(linkData[index].title)} className="bai-bao-mo-ta">
                                    {decodeHtmlEntities(linkData[index].title)}
                                </a>
                            ) : null
                        }
                        moTaPhu={
                            index + 2 < linkData.length ? (
                                <a href={linkData[index + 2].url}
                                    title={decodeHtmlEntities(linkData[index + 2].title)} className="bai-bao-mo-ta">
                                    {decodeHtmlEntities(linkData[index + 2].title)}
                                </a>
                            ) : null
                        }
                        hinhAnh={item.content_html.match(/<img src="([^"]*)"/)[1]}
                    />
                ))}
            </div>
        </div>
    );
};

export default DanhSachBaiBao;
