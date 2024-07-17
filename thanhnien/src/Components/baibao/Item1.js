// BaiBao.js
import React from 'react';
import './cssBaiBao.css';
import {faCircle} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import parse from "html-react-parser";

const Item1 = ({firstArticle, nextArticles, haveDes, wid}) => {
    return (
        <>
            {firstArticle && (
                <div className="Bao" >
                <a href={firstArticle.item.link}><img src={firstArticle.item.content.match(/<img src="([^"]*)"/)[1]}
                title={parse(firstArticle.item.title)} className="image1" alt={parse(firstArticle.item.title)} style={{width:wid}}/></a>
                <div className="noidung1">
                    <a href={firstArticle.item.link} title={parse(firstArticle.item.title)}><h4
                        className="bai-bao-tieu-de">{parse(firstArticle.item.title)}</h4></a>
                    <a href={firstArticle.item.link} title={(firstArticle.item.contentSnippet)}><p
                        className="chitiet1" style={{width:wid}}>{(firstArticle.item.contentSnippet)}</p></a>
                    {!haveDes &&
                        <a href={nextArticles.item.link} title={parse(nextArticles.item.title)}
                           className="mota1">
                            <FontAwesomeIcon
                                icon={faCircle}
                                size="2xs"
                                style={{marginRight: '10px'}}
                            />
                            {parse(nextArticles.item.title)}
                        </a>

                    }
                </div>
                </div>
            )}
        </>
    );
};

export default Item1;
