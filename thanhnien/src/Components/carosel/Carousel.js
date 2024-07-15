import React, {useEffect, useRef, useState} from 'react';
import './Carousel.css';
import parse from "html-react-parser";

const Carousel = ({dataNews, title }) => {
    const [data, setData] = useState(null);
    const [randomArticles, setRandomArticles] = useState([]);
    useEffect(() => {
        setData(dataNews);
    }, []);

    const getRandomElements = (arr) => {
        let shuffled = arr.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 6);
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

    const fiveArticles = randomArticles.slice(0, 5);

    const [current, setCurrent] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [translateX, setTranslateX] = useState(0);
    const carouselRef = useRef(null);

    const handleNext = () => {
        setCurrent((prevCurrent) => (prevCurrent + 1) % randomArticles.length);
    };

    const handlePrev = () => {
        setCurrent((prevCurrent) => (prevCurrent - 1 + randomArticles.length) % randomArticles.length);
    };

    const handleMouseDown = (e) => {
        setTimeout(() => {
            if (Math.abs(e.pageX - startX) > 5) { // Kiểm tra khoảng cách di chuyển
                setIsDragging(true);
                setStartX(e.pageX);
                setTranslateX(current * -50);
            }
        }, 50);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const currentX = e.pageX;
        const diff = currentX - startX;
        setTranslateX(current * -50 + (diff / carouselRef.current.clientWidth) * 50); // Cập nhật liên tục
    };


    const handleMouseUp = (e) => {
        if (!isDragging) return;
        setIsDragging(false);
        const diff = e.pageX - startX;
        const threshold = carouselRef.current.clientWidth / 4; // Minimum pixels to consider it a swipe
        if (diff > threshold) {
            handlePrev();
        } else if (diff < -threshold) {
            handleNext();
        } else {
            setTranslateX(current * -50); // Reset to current position
        }
    };
    const handleItemClick = (url) => {
        window.location.href = url; // Điều hướng tới URL khi click vào carousel-item
    };
    useEffect(() => {
        if (!isDragging) {
            setTranslateX(current * -50);
        }
    }, [current, isDragging]);

    return (
        <div className="carousel-container">
            <a href="#" className="titleCarou">{title}</a>
            <div
                className="carousel"
                ref={carouselRef}
                style={{
                    transform: `translate3d(${translateX}%, 0, 0)`,
                    transition: isDragging ? 'none' : 'transform 0.3s ease'
                }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
            >
                <div className="carousel-items">
                    {randomArticles.map((item, index) => (
                        <div
                            className="carousel-item"
                            key={index}
                            onClick={() => handleItemClick(item.url)}
                        >
                            <a href={item.url} title={parse(item.title)}><img
                                src={item.content_html.match(/<img src="([^"]*)"/)[1]}
                                alt={parse(item.title)}/></a>
                            <a href={item.url} title={parse(item.title)}>
                                <h3>{parse(item.title)}</h3></a>
                        </div>
                    ))}
                </div>
            </div>
            <div className="carousel-navigation">
                {fiveArticles.map((_, index) => (
                    <button
                        key={index}
                        className={`${index === current ? 'active' : ''} ${index === current && !isDragging ? 'btnActive' : ''}`}
                        onClick={() => setCurrent(index)}
                        onAnimationEnd={() => { // Xóa btnActive sau khi animation kết thúc
                            if (index === current) {
                                carouselRef.current.querySelectorAll('.btnActive').forEach(btn => {
                                    btn.classList.remove('btnActive');
                                });
                            }
                        }}
                    >
                    </button>
                ))}
            </div>

        </div>
    );
};

export default Carousel;
