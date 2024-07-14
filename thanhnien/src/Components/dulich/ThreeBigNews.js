import React from 'react';
const ThreeBigNews = (bigData) => {
    const decodeHtmlEntities = (str) => {
        const txt = document.createElement('textarea');
        txt.innerHTML = str;
        return txt.value;
    };
    return (
        <div className="big-track">
            {bigData.bigData.map((article, index) => (
                <div className="big-item" key={index}>
                    <a href={article.url} title={decodeHtmlEntities(article.title)}>
                        <img
                            src={article.content_html.match(/<img src="([^"]*)"/)[1]}
                            alt={decodeHtmlEntities(article.title)}
                            className="big-image"
                        />
                        <a href={article.url} title={decodeHtmlEntities(article.title)}>
                            <h4 className="big-title">{decodeHtmlEntities(article.title)}</h4>
                        </a>
                    </a>
                </div>
            ))}
        </div>

    );
}
export default ThreeBigNews;