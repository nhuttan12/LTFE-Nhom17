// BaiBao.js
import React from 'react';
import './cssBaiBao.css';
import {faCircle} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Item1 = ({image,detail, title, description,url }) => {
    return (
        <div className="Bao">
            <a href={url}><img src={image} title={title} className="image1" alt={title}/></a>
            <div className="noidung1">
                <a href={url} title={title}><h4 className="bai-bao-tieu-de">{title}</h4></a>
                <a href={url} title={description}><p className="chitiet1">{description}</p></a>
                {detail}
            </div>
        </div>
    );
};

export default Item1;
