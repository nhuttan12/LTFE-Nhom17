import React from 'react'
import './right.css'
const ItemDoiSong = ({image, title, description, className,url}) =>{
    return (
        <div className={`life-item ${className}`}>
            <a href={url}><img src={image} alt={title} className='life-item-image' title={title}/></a>
            <a href={url} className='life-item-description'>{title}</a>
        </div>
    );
};

export default ItemDoiSong;
