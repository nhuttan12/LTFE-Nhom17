// BaiBao.js
import React from 'react';
import './cssBaiBao.css';

const BaiBao = ({ url, tieuDe, moTa, moTaPhu, hinhAnh }) => {
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
            return textContent;
        }
        return ' ';
    };
    return (
        <div className="bai-bao">
            <a href={url}><img src={hinhAnh} title={tieuDe} className="bai-bao-hinh-anh" alt={tieuDe}/></a>
            <div className="bai-bao-noi-dung">
            <a href={url} title={tieuDe}><h4 className="bai-bao-tieu-de">{tieuDe}</h4></a>
                {moTa} {/* Hiển thị thẻ <a> chứa moTa */}
                {moTaPhu} {/* Hiển thị thẻ <a> chứa moTaPhu */}
            </div>
        </div>
    );
};

export default BaiBao;
