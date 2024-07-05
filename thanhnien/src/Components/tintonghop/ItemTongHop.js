// NewsItem.js
import React from 'react';
import './csstonghop.css';

const NewsArticle = ({ category, title, description, image }) => {
    return (
        <div className="news-article">
            <img src={image} alt={title} className="news-article-image" />
            <div className="news-article-content">
                <p className="news-article-category">{category}</p>
                <h4 className="news-article-title">{title}</h4>
                <p className="news-article-description">{description}</p>
            </div>
        </div>
    );
};

export default NewsArticle;
