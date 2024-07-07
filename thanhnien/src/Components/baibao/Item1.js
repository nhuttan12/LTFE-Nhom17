// BaiBao.js
import React from 'react';
import './cssBaiBao.css';
import {faCircle} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Item1 = ({image,detail, title, description,url }) => {
    return (
        <div className="Bao">
            <a href={url}><img src={image} alt={detail} className="image1"/></a>
            <div className="noidung1">
            <h4 className="tieude1">{title}</h4>
                <a href={url}><p className="chitiet1">{description}</p></a>
                <a href={url} title={title} className="mota1"><FontAwesomeIcon icon={faCircle} size={"2xs"} style={{ marginRight: '10px' }}/>{title}</a>
            </div>
        </div>
    );
};

export default Item1;
