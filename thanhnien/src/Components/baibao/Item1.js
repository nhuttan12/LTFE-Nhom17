// BaiBao.js
import React from 'react';
import './cssBaiBao.css';

const Item1 = ({image,detail, title, category }) => {
    return (
        <div className="Bao">
            <img src={image} alt={detail} className="image1" />
            <div className="noidung1">
                <h4 className="tieude1">{detail}</h4>
                <p className="chitiet1">{category}</p>
                <p className="mota1">{title}</p>
            </div>
        </div>
    );
};

export default Item1;
