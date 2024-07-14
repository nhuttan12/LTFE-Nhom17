import React, { useState} from 'react';
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './topNews.css';
const ThreeBigNews = (blueData) => {
    const decodeHtmlEntities = (str) => {
        const txt = document.createElement('textarea');
        txt.innerHTML = str;
        return txt.value;
    };
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleButtonClick = (city) => {
        setSearchTerm(city); // Thay đổi giá trị input thành tên thành phố
        console.log('Tìm kiếm:', city); // Thực hiện tìm kiếm với tên thành phố
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
                        TP.HCM
                    </button>
                    <button onClick={() => handleButtonClick('Trung Quốc')}>
                        Trung Quốc
                    </button>
                    <button onClick={() => handleButtonClick('TP. Hà Nội')}>
                        TP. Hà Nội
                    </button>
                </div>
            </div>
            <div className="blue-list">
                {blueData.blueData.map((article, index) => (
                    <div className="blue-item" key={index}>
                        <a href={article.url} title={decodeHtmlEntities(article.title)}>
                            <img
                                src={article.content_html.match(/<img src="([^"]*)"/)[1]}
                                alt={decodeHtmlEntities(article.title)}
                                className="blue-image"
                            />
                            <a href={article.url} title={decodeHtmlEntities(article.title)}>
                                <h4 className="blue-title">{decodeHtmlEntities(article.title)}</h4>
                            </a>
                        </a>
                    </div>
                ))}
            </div>
        </div>

    );
}
export default ThreeBigNews;