// ItemThiTruong.js
import React from 'react';
import thitruong from './cssthitruong.css';

const ItemThiTruong = ({ category, title, description, image }) => {
    return (
        <div className={thitruong.newsItem}>
            <img src={image} alt={title} className={thitruong.newsItemImage} />
            <div className={thitruong.newsItemContent}>
                <p className={thitruong.newsItemCategory}>{category}</p>
                <h4 className={thitruong.newsItemTitle}>{title}</h4>
                {/*<p className="news-item-description">{description}</p>*/}
            </div>
        </div>
    );
};

export default ItemThiTruong;
