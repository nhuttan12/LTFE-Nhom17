import { useState, useEffect } from 'react';

const useShuffle = (data_tin) => {
    const [randomArticles, setRandomArticles] = useState([]);

    const getRandomElements = (arr, numElements) => {
        let shuffled = [...arr].sort(() => 0.5 - Math.random()); // Create a copy of the array before sorting
        return shuffled.slice(0, numElements);
    };

    useEffect(() => {
        if (data_tin && data_tin.length > 0) {
            console.log('Data is available:', data_tin);
            const storedShuffleTime = localStorage.getItem('lastShuffleTime');
            const currentTime = Date.now();

            if (!storedShuffleTime || currentTime - storedShuffleTime >= 60000) { // 30 seconds
                const newRandomArticles = getRandomElements(data_tin, data_tin.length);
                console.log('New random articles:', newRandomArticles);
                setRandomArticles(newRandomArticles);
                localStorage.setItem('lastShuffleTime', currentTime);
                localStorage.setItem('shuffledArticles', JSON.stringify(newRandomArticles));
            } else {
                const shuffledArticles = JSON.parse(localStorage.getItem('shuffledArticles'));
                console.log('Retrieved shuffled articles from localStorage:', shuffledArticles);
                setRandomArticles(shuffledArticles);
            }
        } else {
            console.log('Data is empty or undefined');
        }
    }, [data_tin]);

    return randomArticles;
};

export default useShuffle;
