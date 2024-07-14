import React, {useEffect, useState} from "react";
import './topNews.css';
const TopNew = ({firstArticle}) => {

    const decodeHtmlEntities = (str) => {
        const txt = document.createElement('textarea');
        txt.innerHTML = str;
        return txt.value;
    };
    const extractContentAfterLinks = (htmlString) => {
        const contentHtml = htmlString;
        const regex = /<\/a>(.*)/; // Tìm kiếm mọi thứ sau thẻ </a>
        const match = contentHtml.match(regex);

        if (match) {
            const textContent = match[1].trim(); // Lấy phần tử thứ 2 (nội dung) và loại bỏ khoảng trắng thừa
            console.log(textContent); // In ra nội dung
            return textContent;
        }
        return ' ';
    };
    return (
        <div className="top-new">
            {firstArticle && (
                <div className="firest">
                    <div className="news-left">
                        <a href={firstArticle.url} title={decodeHtmlEntities(firstArticle.title)}><p
                            className="top-new-title">
                            {decodeHtmlEntities(firstArticle.title)}</p></a>
                        <a href={firstArticle.url} title={decodeHtmlEntities(firstArticle.title)}><p
                            className="top-new-description">
                            {decodeHtmlEntities(extractContentAfterLinks(firstArticle.content_html))}</p></a>
                    </div>
                    <div className="news-right">
                        <a href={firstArticle.url} title={decodeHtmlEntities(firstArticle.title)}>
                            <img src={firstArticle.content_html.match(/<img src="([^"]*)"/)[1]}
                                 alt={decodeHtmlEntities(firstArticle.title)}></img>
                        </a>
                    </div>
                </div>)}
        </div>
    );
}
export default TopNew;