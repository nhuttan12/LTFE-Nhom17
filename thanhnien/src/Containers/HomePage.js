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
const HomePage = () => {
    const [data_home, setData_home] = useState([]);
    const [randomArticles, setRandomArticles] = useState([]);

    // Fetch data from the server
    const getData_home = async () => {
        try {
            const go = { signal: "home" };
            const res = await axios.post("http://localhost:4000/", go);
            setData_home(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    // Shuffle array and get random elements
    const getRandomElements = (arr, numElements) => {
        let shuffled = arr.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, numElements);
    };

    // Fetch data on component mount
    useEffect(() => {
        getData_home();
    }, []);

    // Shuffle and store articles on data_home update
    useEffect(() => {
        if (data_home.length > 0) {
            const storedShuffleTime = localStorage.getItem('lastShuffleTime');
            const currentTime = Date.now();

            if (!storedShuffleTime || currentTime - storedShuffleTime >= 30000) { // 30 seconds
                const newRandomArticles = getRandomElements(data_home, 30);
                setRandomArticles(newRandomArticles);
                localStorage.setItem('lastShuffleTime', currentTime);
                localStorage.setItem('shuffledArticles', JSON.stringify(newRandomArticles));
            } else {
                const shuffledArticles = JSON.parse(localStorage.getItem('shuffledArticles'));
                setRandomArticles(shuffledArticles);
            }
        }
    }, [data_home]);

    // Get the first 9 articles from the shuffled list
    const firstArticle = randomArticles.slice(0, 8);


    const nextFourArticles = randomArticles.slice(8, 11);
    const nextThreeArticles = randomArticles.slice(5, 8);
    const BlueFourArticles = randomArticles.slice(8, 12);
    return (
        <div className="homeContainer">

            <div className="homeContent">
                <MainNews/>
            </div>
            <div className="home-flex">
                <div className="home-left">
                    {/*tin24h*/}
                    {/*<List24h/>*/}
                    <div className="top-new">
                    <ListTinNhanh360/>
                    {/*tinnhanh360*/}
                        <h2>Tin thị trường</h2>
                        <ItemThiTruong dataComponent={firstArticle} cate="yes"/>
                    </div>
                    {/*tinthitruong*/}
                </div>
                <div className="home-right">
                    {/*5 gioitre*/}
                    {/*5 doisong*/}
                </div>
            </div>
                <Multimedia/>
            <div className="home-flex">
                <div className="home-left">
            {/*        /!*4 tintonghop*!/*/}
                    <ListTongHop dataNews={nextFourArticles}/>
            {/*        /!*6 carousel*!/*/}
            {/*        /!* 20 tintonghop*!/*/}
            {/*        /!* add button xemthem with script more data for tintonghop*!/*/}
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
            {/*<div className="homeContent">*/}
            {/*    <DanhSachBaiBao/>*/}
            {/*    /!*8 data from thoisu*!/*/}
            {/*    <div className="ds-noi-dung">*/}
            {/*        <BaiBaoSingle/>*/}
            {/*        /!*9 data kem title from thoisu*!/*/}
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
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
};

export default HomePage;