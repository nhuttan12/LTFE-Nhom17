import Category from "../Components/Category/Category";
import CategoryNavigation from "../Components/Category/CategoryNavagation/CategoryNavigation";
import React, { useEffect, useState } from "react";
import '../Components/baibao/cssBaiBao.css';
import '../Containers/Page.css'
import '../Components/dulich/topNews.css';
import ListTongHop from "../Components/tintonghop/ListTongHop";
import DataFetch from "../Components/fetchRSS/DataFetch";
import shuffle from "./shuffle";
const ThoisuPage = () => {
    const serverLink = "http://localhost:4000/";
    const thoisuSignal = {signal: "datafetch", datapage:"thoi-su"};
    const data_thoisu = DataFetch(serverLink,thoisuSignal).data;
    const randomThoisu = shuffle(data_thoisu);
    const [tonghopstart, setTonghopstart] = useState(24); // Khởi tạo state
    const moreClick = () => {
        setTonghopstart(prevTonghopstart => prevTonghopstart + 10);
    };
    const thoisu_Twenti = randomThoisu.slice(5,tonghopstart);
    return (
        <div className="homeContainer">
            <CategoryNavigation/>
            <div className="home-flex">
                <div className="home-left">
                <Category main_news={data_thoisu.slice(0, 5)}/>
                <ListTongHop dataNews={thoisu_Twenti}/>
                {/*        /!* add button xemthem with script more data for tintonghop*!/*/}
                <button onClick={moreClick} className="btn-xemthem">Xem thêm</button>
                </div>
                <div className="home-right">

                </div>
            </div>
        </div>
    );
};

export default ThoisuPage;