// ItemThiTruong.js
import React from 'react';
import './cssthitruong.css';

const ItemThiTruong = ({ category, title, image, url, urlCatelogy }) => {
    return (
        <div className="news-item">
            <a href={url} title={title}><img src={image} alt={title} className="news-item-image"/></a>
            <div className="news-item-content">
                <a href={urlCatelogy} title={title}><p className="news-item-category">{category}</p></a>
                    <a href={url} title={title}><h4 className="news-item-title">{title}</h4></a>
            </div>
        </div>
    );
};

export default ItemThiTruong;
