import React, { useState} from 'react';
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './topNews.css';
import parse from "html-react-parser";

const ThreeBigNews = ({dataComponent}) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleButtonClick = (city) => {
        setSearchTerm(city); // Thay đổi giá trị input thành tên thành phố
        // console.log('Tìm kiếm:', city); // Thực hiện tìm kiếm với tên thành phố
    };
    return (
        <div className="blue-track">
            <div className="blue-search">
                <input
                    type="text"
                    placeholder="Bạn muốn đi đâu"
                    value={searchTerm}
                    onChange={handleChange}
                />
                <FontAwesomeIcon icon={faMagnifyingGlass} className="icon"/>
                <div>
                    <button onClick={() => handleButtonClick('TP.HCM')}>
                        <a href="https://thanhnien.vn/tphcm.html">TP.HCM</a>
                    </button>
                    <button onClick={() => handleButtonClick('Trung Quốc')}>
                        <a href="https://thanhnien.vn/trung-quoc.html">Trung Quốc</a>
                    </button>
                    <button onClick={() => handleButtonClick('TP. Hà Nội')}>
                        <a href="https://thanhnien.vn/tpha-noi.html">TP. Hà Nội</a>
                    </button>
                </div>
            </div>
            <div className="blue-list">
                {dataComponent.map((article, index) => (
                    <div className="blue-item" key={index}>
                        <a href={article.item.link} title={parse(article.item.title)}>
                            <img
                                src={article.item.content.match(/<img src="([^"]*)"/)[1]}
                                alt={parse(article.item.title)}
                                className="blue-image"
                            />
                            <a href={article.item.link} title={parse(article.item.title)}>
                                <h4 className="blue-title">{parse(article.item.title)}</h4>
                            </a>
                        </a>
                    </div>
                ))}
            </div>
        </div>

    );
}
export default ThreeBigNews;