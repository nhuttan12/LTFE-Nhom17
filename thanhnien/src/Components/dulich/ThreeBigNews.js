import React from 'react';
import parse from "html-react-parser";

const ThreeBigNews = ({dataComponent}) => {
    return (
        <div className="big-track">
            {dataComponent.map((article, index) => (
                <div className="big-item" key={index}>
                    <a href={article.item.link} title={parse(article.item.title)}>
                        <img
                            src={article.item.content.match(/<img src="([^"]*)"/)[1]}
                            alt={parse(article.item.title)}
                            className="big-image"
                        />
                        <a href={article.item.link} title={parse(article.item.title)}>
                            <h4 className="big-title">{parse(article.item.title)}</h4>
                        </a>
                    </a>
                </div>
            ))}
        </div>

    );
}
export default ThreeBigNews;