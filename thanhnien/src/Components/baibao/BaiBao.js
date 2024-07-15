// BaiBao.js
import React from 'react';
import './cssBaiBao.css';

const BaiBao = ({ url, tieuDe, moTa, moTaPhu, hinhAnh }) => {
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
