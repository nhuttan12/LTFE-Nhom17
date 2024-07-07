import React from 'react'

const ItemDoiSong = ({image, title, description}) =>{
    return (
        <div className='life-item'>
            <img src={image} alt={title} className='life-item-image'/>
            <p className='life-item-description'>{description}</p>
        </div>
    );
};

export default ItemDoiSong;
