import React, { useEffect, useState } from "react";
import Header from "../Components/Common/Header";
import MainNews from "../Components/MainNews/MainNews";
import Multimedia from "../Components/Multimedia/Multimedia";
import DanhSachBaiBao from "../Components/baibao/DanhSachBaiBao";
import axios from "axios";
import BaiBaoSingle from "../Components/baibao/BaiBaoSingle";
import Footer from "../Components/Common/Footer";
import '../Components/baibao/cssBaiBao.css';
import '../Containers/Page.css'
import ListTinNhanh360 from "../Components/tinnhanh360/ListTinNhanh360";
import ItemThiTruong from "../Components/tinthitruong/ItemThiTruong";
import '../Components/dulich/topNews.css';
import ListTongHop from "../Components/tintonghop/ListTongHop";
import Carousel from "../Components/carosel/Carousel";
import ListNineTitle from "../Components/carosel/ListNineTitle";
import KhungSuggest from "../Components/baibao/KhungSuggest";
import DataFetch from "../Components/fetchRSS/DataFetch";
import shuffle from "./shuffle";
import Item1 from "../Components/baibao/Item1";

const HomePage = () => {
    const homeSignal = {signal: "datafetch", datapage:"home"};
    const serverLink = "http://localhost:4000/";
    const data_tin = DataFetch(serverLink,homeSignal).data;
    const randomHome = [...data_tin].sort(() => 0.5 - Math.random());

    const thoisuSignal = {signal: "datafetch", datapage:"thoi-su"};
    const data_thoisu = DataFetch(serverLink,thoisuSignal).data;
    const randomThoisu = shuffle(data_thoisu);

    const thegioiSignal = {signal: "datafetch", datapage:"the-gioi"};
    const data_thegioi = DataFetch(serverLink,thegioiSignal).data;

    const giaoDucSignal = { signal: "datafetch", datapage: "giao-duc" };
    const vanHoaSignal = { signal: "datafetch", datapage: "van-hoa" };
    const giaiTriSignal = { signal: "datafetch", datapage: "giai-tri" };
    const banDocSignal = { signal: "datafetch", datapage: "ban-doc" };
    const data_giao_duc = DataFetch(serverLink, giaoDucSignal).data;
    const data_van_hoa = DataFetch(serverLink, vanHoaSignal).data;
    const data_giai_tri = DataFetch(serverLink, giaiTriSignal).data;
    const data_ban_doc = DataFetch(serverLink, banDocSignal).data;

    const [tonghopstart, setTonghopstart] = useState(31); // Khởi tạo state
    const moreClick = () => {
        setTonghopstart(prevTonghopstart => prevTonghopstart + 10);
    };
    // Get the articles from the shuffled list
    const home_Nine = randomHome.slice(0, 9);
    const tin24h = randomHome.slice(9, 17);
    const tinthitruong = randomHome.slice(17, 25);
    
    const thoisu_Four = randomThoisu.slice(0, 4);
    const thoisu_Six = randomThoisu.slice(4, 10);
    const thoisu_Eight = randomThoisu.slice(10, 18);
    const thoisu_Nine = randomThoisu.slice(18, 26);
    const thoisu_Twenti = randomThoisu.slice(26,tonghopstart);
    // const BlueFour = random.slice(8, 12);
    return (
        <div className="homeContainer">
            <div className="homeContent">
                <MainNews/>
            </div>
            <div className="home-flex">
                <div className="home-left">
                    <div className="top-new">
                    {/*tin24h*/}
                    <h2>Tin 24h</h2>
                    <ItemThiTruong dataComponent={tin24h} cate="no"/>
                    {/*!*tinnhanh360*!/*/}
                    <ListTinNhanh360/>
                    {/*tinthitruong*/}
                    <h2>Tin thị trường</h2>
                    <ItemThiTruong dataComponent={tinthitruong} cate="yes"/>
                    </div>
                </div>
                <div className="home-right">
                    {/*5 gioitre*/}
                    {/*5 doisong*/}
                </div>
            </div>
                {/*<Multimedia/>*/}
            <div className="home-flex">
                <div className="home-left">
            {/*        /!*4 tintonghop*!/*/}
                    <ListTongHop dataNews={thoisu_Four}/>
            {/*        /!*6 carousel*!/*/}
                    <Carousel dataNews={thoisu_Six} title="Xung đột Ukaraina"/>
            {/*        /!* 20 tintonghop*!/*/}
                    <ListTongHop dataNews={thoisu_Twenti}/>
                    {/*        /!* add button xemthem with script more data for tintonghop*!/*/}
                    <button onClick={moreClick} className="btn-xemthem">Xem thêm</button>
                </div>
                <div className="home-right">
            {/*        /!*5 kinhte same gioitre*!/*/}
            {/*        /!*5 kinhtexanh*!/*/}
            {/*        /!*5 suckhoe*!/*/}
            {/*        /!*5 congnghe*!/*/}
            {/*        /!*5 dulich*!/*/}
            {/*        /!*5 xe*!/*/}
            {/*        /!*lamdep same kinhtexanh*!/*/}
                </div>
            </div>
            <div className="homeContent">
                {/*    /!*8 data from thoisu*!/*/}
                <DanhSachBaiBao dataNews={thoisu_Eight} title="Thời sự"/>
                <div className="line"></div>
                {/*        /!*9 data kem title from thoisu*!/*/}
                <BaiBaoSingle dataComponent={thoisu_Nine} cate={["Pháp luật", "Thời luận", "Chống tin giả"]}/>
                <div className="line"></div>

                {/*    /!*8 data from thegioi*!/*/}
                <DanhSachBaiBao dataNews={data_thegioi.slice(0, 8)} title="Thế giới"/>
                <div className="line"></div>
                {/*    /!*giao duc*!/*/}
                <KhungSuggest dataNews={data_giao_duc.slice(0, 7)} title="Giáo dục" noSuggest="no"/>
                <div className="line"></div>
                {/*    /!*van hoa*!/*/}
                <KhungSuggest dataNews={data_van_hoa.slice(0, 7)} title="Văn hóa" noSuggest="no"/>
                <div className="line"></div>
                {/*    /!*giai tri*!/*/}
                <KhungSuggest dataNews={data_giai_tri.slice(0, 7)} title="Giải trí" noSuggest="no"/>
                <div className="line"></div>
                {/*    /!*bandoc*!/*/}
                <div className="ds-noi-dung" >
                <Item1 firstArticle={data_ban_doc[0]} haveDes="no" title="Bạn đọc" wid={351}/>
                <Item1 firstArticle={data_ban_doc[1]} haveDes="no" title="Bạn đọc" wid={351}/>
                <Item1 firstArticle={data_ban_doc[2]} haveDes="no" title="Bạn đọc" wid={351}/>
                </div>
                <div className="line"></div>
                {/*    /!*ban doc la 6 data get component Item1*!/*/}

                {/*    <div className="ds-noi-dung">*/}
                {/*        <BaiBaoSingle/>*/}
                {/*        /!*9 data kem title from thoisu*!/*/}
                <ListNineTitle dataNews={home_Nine} title="Tin tức mới nhất"/>
            </div>
        </div>
    );
};

export default HomePage;