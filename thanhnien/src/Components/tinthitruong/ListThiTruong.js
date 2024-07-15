// ListThiTruong.js
import React, {useEffect, useState} from 'react';
import ItemThiTruong from './ItemThiTruong';
import TopNew from "../dulich/TopNew";

const ListThiTruong = ({dataThiTruong}) => {
    const [data, setData] = useState(null);
    const [randomArticles, setRandomArticles] = useState([]);

    useEffect(() => {
        setData(dataThiTruong);
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

    return (
        <ItemThiTruong dataArticles={randomArticles}/>
    );
};

export default ListThiTruong;
