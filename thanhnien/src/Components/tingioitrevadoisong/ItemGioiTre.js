import React from 'react'

const ItemGioiTre = ({image, title, description,className}) =>{
    return (
        <div className={`young-item ${className}`}>
            <img src={image} alt={title} className='young-item-image'/>
            <p className='young-item-description'>{description}</p>
        </div>
    );
};

export default ItemGioiTre;