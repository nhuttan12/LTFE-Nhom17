import React from 'react';
import parse from "html-react-parser";

const ThreeBigNews = ({dataComponent}) => {
    return (
        <div className="big-track">
            {dataComponent.map((article, index) => (
                <div className="big-item" key={index}>
                    <a href={article.link} title={parse(article.title)}>
                        <img
                            src={article.content.match(/<img src="([^"]*)"/)[1]}
                            alt={parse(article.title)}
                            className="big-image"
                        />
                        <a href={article.link} title={parse(article.title)}>
                            <h4 className="big-title">{parse(article.title)}</h4>
                        </a>
                    </a>
                </div>
            ))}
        </div>

    );
}
export default ThreeBigNews;