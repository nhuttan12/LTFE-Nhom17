// ItemThiTruong.js
import React from 'react';
import './cssthitruong.css';

const ItemThiTruong = ({ category, title, description, image }) => {
    return (
        <div className="news-item">
            <img src={image} alt={title} className="news-item-image"/>
            <div className="news-item-content">
                <p className="news-item-category">{category}</p>
                <h4 className="news-item-title">{title}</h4>
            </div>
        </div>
    );
};

export default ItemThiTruong;
