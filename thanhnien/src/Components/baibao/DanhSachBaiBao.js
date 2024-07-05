// DanhSachBaiBao.js
import React, {useState} from 'react';
import BaiBao from './BaiBao';
import './cssBaiBao.css';
import Item1 from "./Item1";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const ItemData = [
    {
        image:
            'https://images2.thanhnien.vn/zoom/403_252/528068263637045248/2024/7/5/afp2024070136286f9v7highrestopshotfbleuro2024match42frabel-1720154988500755077330-54-0-1654-2560-crop-17201550502731927770722.jpg',
        detail:'Cầu thủ Mbappe kêu gọi cử tri Pháp bỏ phiếu chống phe cực hữu',
        category: 'Cầu thủ bóng đá Pháp Kylian Mbappe ngày 4.7 nói nước Pháp đã trải qua bầu cử vòng 1 với kết quả \'thê...',
        title: 'Pháp triển khai 30.000 cảnh sát vào đêm công bố kết quả bầu cử'
    }
];
const duLieuTinTuc = [
    {
        chuDe: "Thế giới",
        tieuDe: "Người thừa kế Disney nêu lý do dừng tài trợ đảng Dân chủ",
        moTa: "Liệu cựu đệ nhất phu nhân Michelle Obama có thay ông Biden tranh cử tổng thống Mỹ?",
        moTaPhu: "Liệu cựu đệ nhất phu nhân Michelle Obama có thay ông Biden tranh cử tổng thống Mỹ?",
        hinhAnh: "https://images2.thanhnien.vn/zoom/325_203/528068263637045248/2024/7/5/afp202209201425629408v1highresfirehousedctvscinemafordocumentaryfilmribbon-17201528606541789064766-49-0-1649-2560-crop-1720152921616303572658.jpg"
    },
    {
        chuDe: "Thế giới",
        tieuDe: "Tổng thống Biden nói cần ngủ thêm, không dự sự kiện sau 8 giờ tối",
        moTa: "Hai ông Biden - Trump gửi thông điệp gì trong ",
        moTaPhu: "Hai ông Biden - Trump gửi thông điệp gì trong ngày Quốc khánh Mỹ?",
        hinhAnh: "https://images2.thanhnien.vn/zoom/325_203/528068263637045248/2024/7/5/2024-07-04t224716z1430989369rc2mo8al9ba9rtrmadp3usa-biden-1720138163365241914805-0-0-1539-2463-crop-17201381924301412591537.jpg"
    }
];
const [isOpen, setIsOpen] = useState(false);

const DanhSachBaiBao = () => {
    return (
        <div className="ds-bai-bao">
            <div className="ds-tieu-de">
                <h2>Thế giới</h2>
                <div className="menuRight">
                    <p>Chính trị</p>
                    <p>Pháp luật</p>
                    <p>Dân sinh</p>
                    <div className="dropdown"
                        onMouseEnter={() => setIsOpen(true)}
                        onMouseLeave={() => setIsOpen(false)}>
                        <button className="dropdown-toggle">Menu</button>
                        {isOpen && (
                            <ul className="dropdown-menu">
                                <li>Item 1</li>
                                <li>Item 2</li>
                                <li>Item 3</li>
                            </ul>
                        )}
                    </div>
                    <FontAwesomeIcon icon={faAngleDown}/>
                    <div className="ItemTitle">
                        <p>Lao động - Việc làm</p>
                        <p>Quyền được biết</p>
                        <p>Phóng sự / Điều tra</p>
                        <p>Quốc phòng</p>
                        <p>Chống tin giả</p>
                        <p>Thời luận</p>
                    </div>
                </div>
            </div>
            <div className="ds-noi-dung">
                {ItemData.map((news, index) => (
                    <Item1 key={index} title={news.title} image={news.image} detail={news.detail}
                           category={news.category}/>
                ))}
                {duLieuTinTuc.map((baiBao, index) => (
                    <BaiBao
                        key={index}
                        chuDe={baiBao.chuDe}
                        tieuDe={baiBao.tieuDe}
                        moTa={baiBao.moTa}
                        moTaPhu={baiBao.moTaPhu}
                        hinhAnh={baiBao.hinhAnh}
                    />
                ))}
            </div>
        </div>
    );
};

export default DanhSachBaiBao;
