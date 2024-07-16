// ItemTongHop.js
import React, { useState, useRef, useEffect } from 'react';
import './csstonghop.css';
import ItemMore from './ItemMore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import parse from "html-react-parser";

const NewsArticle = ({ category, title, description, image, imgsize, url, data }) => {
    const [showMoreItems, setShowMoreItems] = useState(false);
    const articleRef = useRef(null);

    useEffect(() => {
        const checkArticleHeight = () => {
            if (articleRef.current && articleRef.current.offsetHeight > 300) {
                setShowMoreItems(true);
            } else {
                setShowMoreItems(false);
            }
        };
        checkArticleHeight();

        const observer = new ResizeObserver(checkArticleHeight);
        if (articleRef.current) {
            observer.observe(articleRef.current);
        }

        return () => {
            if (articleRef.current) {
                observer.unobserve(articleRef.current);
            }
        };
    }, [description]);
    return (
        <div className="news-article" ref={articleRef}>
            <a href={url}>
                <img src={image} title={title} style={{ height: imgsize }} className="news-article-image" alt={title} />
            </a>
            <div className="news-article-content">
                <div className="flexdl">
                    <a href={url} title={title}>
                        <p className="news-article-category">{category}</p>
                    </a>
                    <a href={url} title={title}>
                        <h4 className="news-article-title">{title}</h4>
                    </a>
                    <a href={url} title={description}>
                        <p className="news-article-description">
                            <FontAwesomeIcon icon={faCircle} size={"2xs"} style={{ marginRight: '10px' }} />
                            {description}
                        </p>
                    </a>
                </div>
                {showMoreItems && data && data.length > 0 && (
                    <div className="more-items">
                        {data.map((news, index) => (
                            <ItemMore key={index} title={parse(news.item.title)} image={news.item.content.match(/<img src="([^"]*)"/)[1]} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default NewsArticle;
