import React, {useEffect, useState} from "react";
import './topNews.css';
import parse from "html-react-parser";

const TopNew = ({firstArticle}) => {
    const extractContentAfterLinks = (htmlString) => {
        const contentHtml = htmlString;
        const regex = /<\/a>(.*)/; // Tìm kiếm mọi thứ sau thẻ </a>
        const match = contentHtml.match(regex);
        if (match) {
            const textContent = match[1].trim(); // Lấy phần tử thứ 2 (nội dung) và loại bỏ khoảng trắng thừa
            return textContent;
        }
        return ' ';
    };
    return (
        <div className="top-new">
            {firstArticle && (
                <div className="firest">
                    <div className="news-left">
                        <a href={firstArticle.link} title={parse(firstArticle.title)}><p
                            className="top-new-title">
                            {parse(firstArticle.title)}</p></a>
                        <a href={firstArticle.link} title={parse(firstArticle.title)}><p
                            className="top-new-description">
                            {parse(extractContentAfterLinks(firstArticle.content))}</p></a>
                    </div>
                    <div className="news-right">
                        <a href={firstArticle.link} title={parse(firstArticle.title)}>
                            <img src={firstArticle.content.match(/<img src="([^"]*)"/)[1]}
                                 alt={parse(firstArticle.title)}></img>
                        </a>
                    </div>
                </div>)}
        </div>
    );
}
export default TopNew;