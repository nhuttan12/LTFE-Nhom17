// ItemThiTruong.js
import React from 'react';
import tonghop from './csstonghop.css';

const NewsItem = ({ category, title, description, image }) => {
    return (
        <div className={tonghop.newsItem}>
            <img src={image} alt={title} className={tonghop.newsItemImage} />
            <div className={tonghop.newsItemContent}>
                <p className={tonghop.newsItemCategory}>{category}</p>
                <h4 className={tonghop.newsItemTitle}>{title}</h4>
                <p className={tonghop.newsItemDescription}>{description}</p>
            </div>
        </div>
    );
};

export default NewsItem;
