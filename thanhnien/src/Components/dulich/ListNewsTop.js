import React, {useEffect, useState} from 'react';
import TopNew from "./TopNew";
import ItemThiTruong from "../tinthitruong/ItemThiTruong";
import ThreeBigNews from "./ThreeBigNews";
import './topNews.css';

const ListNewsTop = ({dataNewsTop}) => {
    const [data, setData] = useState(null);
    const [randomArticles, setRandomArticles] = useState([]);
    useEffect(() => {
        setData(dataNewsTop);
    }, []);

    const getRandomElements = (arr, numElements) => {
        let shuffled = arr.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, numElements);
    };

    useEffect(() => {
        if (data) {
            const storedShuffleTime = localStorage.getItem('lastShuffleTime');
            const currentTime = Date.now();

            if (!storedShuffleTime || currentTime - storedShuffleTime >= 30000) { // 30 seconds
                const newRandomArticles = getRandomElements(data.items, 20);
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
    const nextFourArticles = randomArticles.slice(1, 5);
    const nextThreeArticles = randomArticles.slice(5, 8);
    return (
        <div className="Carousel">
            <TopNew firstArticle={firstArticle}/>
            <div className="top-new">
                {/*<h2>Tin thị trường</h2>*/}
                <ItemThiTruong dataArticles={nextFourArticles} title={" "} cate={"no"}/>
                <h2>Khám phá</h2>
            <ThreeBigNews bigData={nextThreeArticles}/>
            </div>
        </div>
    );
};

export default ListNewsTop;
