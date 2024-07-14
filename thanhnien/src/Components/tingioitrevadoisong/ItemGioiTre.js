import React from 'react'
import './cssgioitrevadoisong.css'
const ItemGioiTre = ({image, title, description,className}) =>{
    return (
        <div className={`young-item ${className}`}>
            <img src={image} alt={title} className='young-item-image'/>
            <a className='young-item-description'>{description}</a>
        </div>
    );
};

export default ItemGioiTre;