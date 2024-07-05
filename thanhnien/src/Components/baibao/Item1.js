// BaiBao.js
import React from 'react';
import './cssBaiBao.css';
import {faCircle} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Item1 = ({image,detail, title, category }) => {
    return (
        <div className="Bao">
            <img src={image} alt={detail} className="image1" />
            <div className="noidung1">
                <h4 className="tieude1">{detail}</h4>
                <p className="chitiet1">{category}</p>
                <a href="#" className="mota1"><FontAwesomeIcon icon={faCircle} size={"2xs"} style={{ marginRight: '10px' }}/>{title}</a>
            </div>
        </div>
    );
};

export default Item1;
