import React, {useEffect, useState} from "react";
import './topNews.css';
import parse from "html-react-parser";

const TopNew = ({firstArticle}) => {
    return (
        <div className="top-new">
            {firstArticle && (
                <div className="firest">
                    <div className="news-left">
                        <a href={firstArticle.item.link} title={parse(firstArticle.item.title)}><p
                            className="top-new-title">
                            {parse(firstArticle.item.title)}</p></a>
                        <a href={firstArticle.item.link} title={parse(firstArticle.item.title)}><p
                            className="top-new-description">
                            {parse((firstArticle.item.contentSnippet))}</p></a>
                    </div>
                    <div className="news-right">
                        <a href={firstArticle.item.link} title={parse(firstArticle.item.title)}>
                            <img src={firstArticle.item.content.match(/<img src="([^"]*)"/)[1]}
                                 alt={parse(firstArticle.item.title)}></img>
                        </a>
                    </div>
                </div>)}
        </div>
    );
}
export default TopNew;