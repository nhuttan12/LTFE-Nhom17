// DanhSachBaiBao.js
import React, {useEffect, useState} from 'react';
import BaiBao from './BaiBao';
import './cssBaiBao.css';
import Item1 from "./Item1";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import thoisuData from '../../Json/thoisu';
import homeData from '../../Json/home';
import {faCircle} from "@fortawesome/free-regular-svg-icons";
import BaiBaoSingle from "./BaiBaoSingle"; // Import dữ liệu từ file JSON
import parse from "html-react-parser";
const DanhSachBaiBao = ({dataNews, title}) => {
    const firstArticle = dataNews[0];
    const nextArticles = dataNews[1];
    const nextTwoArticles = dataNews.slice(2);
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
                {firstArticle && (
                    <Item1 firstArticle={firstArticle} nextArticles={nextArticles}/>
                )}
                <BaiBaoSingle dataComponent={nextTwoArticles}/>
            </div>
        </div>
    );
};

export default DanhSachBaiBao;
