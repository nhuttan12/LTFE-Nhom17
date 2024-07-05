import React, { useState, useRef, useEffect } from 'react';
import './csstonghop.css';
import ItemMore from './ItemMore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-regular-svg-icons'

const moreData = [
    {
        title: 'Đông Nam Á sở hữu tranh cổ nhất thế giới, ít nhất 51.000 năm tuổi',
        image:
            'https://images2.thanhnien.vn/zoom/320_427/528068263637045248/2024/7/4/tay-tang-17200671803771825746926-0-420-826-1040-crop-17200762417642021561101.png',
    },
];

const NewsArticle = ({ category, title, description, image }) => {
    const [showMoreItems, setShowMoreItems] = useState(false);
    const articleRef = useRef(null);

    useEffect(() => {
        if (articleRef.current && articleRef.current.offsetHeight > 300) {
            setShowMoreItems(true);
        } else {
            setShowMoreItems(false); // Ẩn lại nếu chiều cao nhỏ hơn 300
        }
    }, [description, moreData]);

    return (
        <div className="news-article" ref={articleRef}>
            <img src={image} alt={title} className="news-article-image" />
            <div className="news-article-content">
                <p className="news-article-category">{category}</p>
                <h4 className="news-article-title">{title}</h4>
                <p className="news-article-description"><FontAwesomeIcon icon={faCircle} size={"2xs"} style={{ marginRight: '10px' }}/>{description}</p>
                {showMoreItems && (
                    <div className="more-items">
                        {moreData.map((news, index) => (
                            <ItemMore key={index} title={news.title} image={news.image} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default NewsArticle;
