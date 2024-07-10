import React from "react";

const ItemTinNhanh360 = ({image, category, description}) => {
    return (
        <div className='tinnhanh360-item'>
            <img src={image} alt={description} className='tinhanh360-item-image'/>
            <a className="categoryLink" src="">{category}</a>
            <a className='tinhanh360-item-description'>{description}</a>
        </div>
    )
}

export default ItemTinNhanh360;