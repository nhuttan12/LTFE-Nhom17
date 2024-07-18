import React, {useState} from 'react';
import DataFetch from "../Components/fetchRSS/DataFetch";
import CategoryNavigation from "../Components/Category/CategoryNavagation/CategoryNavigation";
import Category from "../Components/Category/Category";
import ListTongHop from "../Components/tintonghop/ListTongHop";
import shuffle from "./shuffle";

const VanhoaPage = () => {
    const serverLink = "http://localhost:4000/";
    const vanhoaSignal = {signal: "datafetch", datapage:"van-hoa"};
    const data_vanhoa = DataFetch(serverLink,vanhoaSignal).data;
    const [tonghopstart, setTonghopstart] = useState(24); // Khởi tạo state
    const moreClick = () => {
        setTonghopstart(prevTonghopstart => prevTonghopstart + 10);
    };
    const vanhoa_Twenti = data_vanhoa.slice(5,tonghopstart);
    return (
        <div className="homeContainer">
            <CategoryNavigation/>
            <div className="home-flex">
                <div className="home-left">
                    <Category main_news={data_vanhoa.slice(0, 5)}/>
                    <ListTongHop dataNews={vanhoa_Twenti}/>
                    {/*        /!* add button xemthem with script more data for tintonghop*!/*/}
                    <button onClick={moreClick} className="btn-xemthem">Xem thêm</button>
                </div>
                <div className="home-right">

                </div>
            </div>
        </div>
    );
};

export default VanhoaPage;