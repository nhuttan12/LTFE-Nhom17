// BaiBao.js
import React from 'react';
import './cssBaiBao.css';
import Item1 from "./Item1";

const BaiBao = ({ chuDe, tieuDe, moTa, hinhAnh }) => {
    return (
        <div className="bai-bao">
            <img src={hinhAnh} alt={tieuDe} className="bai-bao-hinh-anh" />
            <div className="bai-bao-noi-dung">
                {/*<p className="bai-bao-chu-de">{chuDe}</p>*/}
                <h4 className="bai-bao-tieu-de">{tieuDe}</h4>
                <p className="bai-bao-mo-ta">{moTa}</p>
            </div>
        </div>
    );
};

export default BaiBao;
