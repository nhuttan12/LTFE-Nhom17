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

const NewsArticle = ({ category, title, description, image,imgsize, url }) => {
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
            <a href={url}><img src={image} title={title} style={{ height: imgsize }} className="news-article-image" alt={title}/></a>
            <div className="news-article-content">
                <div className="flexdl">
                    <a href={url} title={title}><p className="news-article-category">{category}</p></a>
                    <a href={url} title={title}><h4 className="news-article-title">{title}</h4></a>
                    <a href={url} title={description}><p className="news-article-description"><FontAwesomeIcon
                        icon={faCircle} size={"2xs"}
                        style={{marginRight: '10px'}}/>{description}</p></a>
                </div>
                    {showMoreItems && (
                        <div className="more-items">
                            {moreData.map((news, index) => (
                                <ItemMore key={index} title={news.title} image={news.image}/>
                            ))}
                        </div>
                    )}
            </div>
        </div>
    );
};

export default NewsArticle;
