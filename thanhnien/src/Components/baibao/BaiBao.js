// BaiBao.js
import React from 'react';
import './cssBaiBao.css';
import Item1 from "./Item1";

const BaiBao = ({ chuDe, tieuDe, moTa,moTaPhu, hinhAnh }) => {
    return (
        <div className="bai-bao">
            <img src={hinhAnh} alt={tieuDe} className="bai-bao-hinh-anh" />
            <div className="bai-bao-noi-dung">
                {/*<p className="bai-bao-chu-de">{chuDe}</p>*/}
                <h4 className="bai-bao-tieu-de">{tieuDe}</h4>
                <a href="#" className="bai-bao-mo-ta">{moTa}</a>
                <a  href="#" className="bai-bao-mo-ta">{moTaPhu}</a>
            </div>
        </div>
    );
};

export default BaiBao;
