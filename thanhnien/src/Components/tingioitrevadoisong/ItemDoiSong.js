import React from 'react'

const ItemDoiSong = ({image, title, description, className}) =>{
    return (
        <div className={`life-item ${className}`}>
            <img src={image} alt={title} className='life-item-image'/>
            <p className='life-item-description'>{description}</p>
        </div>
    );
};

export default ItemDoiSong;
