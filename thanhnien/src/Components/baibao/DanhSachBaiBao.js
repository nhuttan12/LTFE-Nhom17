// DanhSachBaiBao.js
import React, {useEffect, useState} from 'react';
import BaiBao from './BaiBao';
import './cssBaiBao.css';
import Item1 from "./Item1";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import thoisuData from '../../Json/thoisu.json'; // Import dữ liệu từ file JSON

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

const DanhSachBaiBao = () => {
    const [data, setData] = useState(null);
    const [randomArticles, setRandomArticles] = useState([]);

    useEffect(() => {
        setData(thoisuData);
    }, []);

    const getRandomElements = (arr) => {
        let shuffled = arr.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 7);
    };

    useEffect(() => {
        if (data) {
            const storedShuffleTime = localStorage.getItem('lastShuffleTime');
            const currentTime = Date.now();

            if (!storedShuffleTime || currentTime - storedShuffleTime >= 30000) { // 2 minutes
                const newRandomArticles = getRandomElements(data.items);
                setRandomArticles(newRandomArticles);
                localStorage.setItem('lastShuffleTime', currentTime);
                localStorage.setItem('shuffledArticles', JSON.stringify(newRandomArticles));
            } else {
                const shuffledArticles = JSON.parse(localStorage.getItem('shuffledArticles'));
                setRandomArticles(shuffledArticles);
            }
        }
    }, [data]);
    const firstArticle = randomArticles[0];
    const nextTwoArticles = randomArticles.slice(1, 3);
    const nextFourArticles = randomArticles.slice(3, 7);

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
            console.log(textContent); // In ra nội dung
            return textContent;
        }
        return ' ';
    };
    return (
        <div className="ds-bai-bao">
            <div className="ds-tieu-de">
                <h2>Thế giới</h2>
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
                    <Item1
                        title={decodeHtmlEntities(firstArticle.title)}
                        image={firstArticle.content_html.match(/<img src="([^"]*)"/)[1]}
                        detail={decodeHtmlEntities(firstArticle.summary)}
                        category={decodeHtmlEntities(firstArticle.description)}
                        url={firstArticle.url}
                        description={decodeHtmlEntities(extractContentAfterLinks(firstArticle.content_html))}
                    />
                )}
                {nextTwoArticles.map((item, index) => (
                    <BaiBao
                        key={index}
                        chuDe={decodeHtmlEntities(item.title)}
                        tieuDe={decodeHtmlEntities(item.title)}
                        moTa={decodeHtmlEntities(extractContentAfterLinks(firstArticle.content_html))}
                        moTaPhu={decodeHtmlEntities(extractContentAfterLinks(firstArticle.content_html))}
                        hinhAnh={item.content_html.match(/<img src="([^"]*)"/)[1]}
                    />
                ))}
                </div>
                    </div>
                    );
                };

export default DanhSachBaiBao;
