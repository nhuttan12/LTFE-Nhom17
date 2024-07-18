// DanhSachBaiBao.js
import React, {useEffect, useState} from 'react';
import BaiBao from './BaiBao';
import './cssBaiBao.css';
import Item1 from "./Item1";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {faCircle} from "@fortawesome/free-regular-svg-icons";
import BaiBaoSingle from "./BaiBaoSingle";
import parse from "html-react-parser"; // Import dữ liệu từ file JSON

const KhungSuggest = ({dataNews, title,noSuggest}) => {
    const twoArticle = dataNews.slice(0,2);
    const Article = dataNews.slice(2);
    return (
        <div className="ds-bai-bao">
            <div className="ds-tieu-de">
                <h2>{title}</h2>
                <div className="menuRight">
                    <a href="#">Chính trị</a>
                    <a href="#">Pháp luật</a>
                    <a href="#">Dân sinh</a>
                    <div className="iconMenu">
                        <FontAwesomeIcon icon={faAngleDown}/>
                        <div className="ItemTitle">
                            <a href="#">Lao động - Việc làm</a>
                            <a href="#">Quyền được biết</a>
                            <a href="#">Phóng sự / Điều tra</a>
                            <a href="#">Quốc phòng</a>
                            <a href="#">Chống tin giả</a>
                            <a href="#">Thời luận</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ds-noi-dung">
                <BaiBaoSingle dataComponent={twoArticle} noSuggest={noSuggest}/>
                <div className="ds-tit">
                    {Article.map((item, index) => (
                        <a href={item.item.link}>{parse(item.item.title)}</a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default KhungSuggest;
