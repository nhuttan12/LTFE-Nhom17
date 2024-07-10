import React from 'react'

const Item24h = ({image, title, description}) =>{
    return (
        <div className='item-24h'>
            <img src={image} alt={title} className='item-24h-image'/>
            <a className='item-24h-description'>{description}</a>
        </div>
    );
};

export default Item24h;