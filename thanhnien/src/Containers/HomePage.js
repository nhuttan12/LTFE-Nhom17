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
import List24h from "../Components/tin24h/List24h";
import ListTinNhanh360 from "../Components/tinnhanh360/ListTinNhanh360";
import homeData from "../Json/home";
import ItemThiTruong from "../Components/tinthitruong/ItemThiTruong";
import '../Components/dulich/topNews.css';
import ListTongHop from "../Components/tintonghop/ListTongHop";
import Carousel from "../Components/carosel/Carousel";
import ListNineTitle from "../Components/carosel/ListNineTitle";
import KhungSuggest from "../Components/baibao/KhungSuggest";
const HomePage = () => {
    const [dataHome, setDataHome] = useState([]);
    const [dataThoiSu, setDataThoiSu] = useState([]);
    const [randomHomeArticles, setRandomHomeArticles] = useState([]);
    const [randomThoiSuArticles, setRandomThoiSuArticles] = useState([]);

    const fetchData = async (signal) => {
        try {
            const res = await axios.post("http://localhost:4000/", { signal });
            if (signal === "home") {
                setDataHome(res.data);
                shuffleAndStoreArticles(res.data, 'homeArticles', setRandomHomeArticles);
            } else if (signal === "thoi-su") {
                setDataThoiSu(res.data);
                shuffleAndStoreArticles(res.data, 'thoiSuArticles', setRandomThoiSuArticles);
            }
        } catch (error) {
            console.error(`Error loading data from API (${signal}):`, error);
        }
    };

    useEffect(() => {
        fetchData("home");
        fetchData("thoi-su");
    }, []);

    const getRandomElements = (arr, numElements) => {
        let shuffled = [...arr].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, numElements);
    };

    const shuffleAndStoreArticles = (articles, storageKey, setRandomArticlesFunc) => {
        const storedShuffleTime = localStorage.getItem(`lastShuffleTime_${storageKey}`);
        const currentTime = Date.now();
        const thirtySeconds = 30000;

        if (!storedShuffleTime || currentTime - storedShuffleTime >= thirtySeconds) {
            const newRandomArticles = getRandomElements(articles, articles.length);
            setRandomArticlesFunc(newRandomArticles);
            localStorage.setItem(`lastShuffleTime_${storageKey}`, currentTime);
            localStorage.setItem(storageKey, JSON.stringify(newRandomArticles));
        } else {
            const storedArticles = JSON.parse(localStorage.getItem(storageKey)) || [];
            setRandomArticlesFunc(storedArticles);
        }
    };
    const [tonghopstart, setTonghopstart] = useState(22); // Khởi tạo state

    const moreClick = () => {
        setTonghopstart(prevTonghopstart => prevTonghopstart + 10);
    };

    // Get the first 9 articles from the shuffled list
    const firstArticle = randomHomeArticles.slice(0, 8);


    const home_FourArticles = randomHomeArticles.slice(8, 11);
    const home_SixArticles = randomHomeArticles.slice(11, 17);
    const home_TwentiArticles = randomHomeArticles.slice(17, tonghopstart);
    const home_NineArticles = randomHomeArticles.slice(tonghopstart, tonghopstart+9);
    const thoisu_Eight = randomThoiSuArticles.slice(0, 8);
    const thoisu_Nine = randomThoiSuArticles.slice(8, 17);
    const thoisu_Seven = randomThoiSuArticles.slice(17, 24);
    // const BlueFourArticles = randomArticles.slice(8, 12);
    return (
        <div className="homeContainer">
            <div className="homeContent">
                {/*<MainNews/>*/}
            </div>
            <div className="home-flex">
                <div className="home-left">
                    {/*tin24h*/}
                    {/*<List24h/>*/}
                    <div className="top-new">
                    {/*<ListTinNhanh360/>*/}
                    {/*tinnhanh360*/}
                        <h2>Tin thị trường</h2>
                        {/*<ItemThiTruong dataComponent={firstArticle} cate="yes"/>*/}
                    </div>
                    {/*tinthitruong*/}
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
            {/*        <ListTongHop dataNews={home_FourArticles}/>*/}
            {/*        /!*6 carousel*!/*/}
            {/*        <Carousel dataNews={home_SixArticles} title="Xung đột Ukaraina"/>*/}
            {/*        /!* 20 tintonghop*!/*/}
            {/*        <ListTongHop dataNews={home_TwentiArticles}/>*/}
                    {/*        /!* add button xemthem with script more data for tintonghop*!/*/}
                    {/*<button onClick={moreClick} className="btn-xemthem">Xem thêm</button>*/}
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
                <DanhSachBaiBao dataNews={thoisu_Eight} title="Thời sự"/>
                <div className="line"></div>
                {/*    /!*8 data from thoisu*!/*/}
                {/*    <div className="ds-noi-dung">*/}
                <BaiBaoSingle dataComponent={thoisu_Nine} cate={["Pháp luật", "Thời luận", "Chống tin giả"]}/>
                <div className="line"></div>

                {/*        /!*9 data kem title from thoisu*!/*/}
                <KhungSuggest dataNews={thoisu_Seven} title="Văn hóa" noSuggest="no"/>
                <div className="line"></div>

                {/*    </div>*/}
                {/*    <DanhSachBaiBao/>*/}
                {/*    /!*8 data from thegioi*!/*/}

                {/*    /!*giao duc*!/*/}
                {/*    /!*van hoa*!/*/}
                {/*    /!*giai tri*!/*/}

                {/*    /!*bandoc*!/*/}
                {/*    /!*ban doc la 6 data get component Item1*!/*/}

                {/*    <div className="ds-noi-dung">*/}
                {/*        <BaiBaoSingle/>*/}
                {/*        /!*9 data kem title from thoisu*!/*/}
                <ListNineTitle dataNews={home_NineArticles} title="Tin tức mới nhất"/>
            </div>
        </div>
    );
};

export default HomePage;