import React from 'react'

const Item24h = ({image, title, description}) =>{
    return (
        <div className='item-24h'>
            <img src={image} alt={title} className='item-24h-image'/>
            <p className='item-24h-description'>{description}</p>
        </div>
    );
};

export default Item24h;