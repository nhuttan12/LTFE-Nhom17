import React, {useState} from 'react';
import DataFetch from "../Components/fetchRSS/DataFetch";
import shuffle from "./shuffle";
import CategoryNavigation from "../Components/Category/CategoryNavagation/CategoryNavigation";
import Category from "../Components/Category/Category";
import ListTongHop from "../Components/tintonghop/ListTongHop";

const KinhtePage = () => {
    const serverLink = "http://localhost:4000/";
    const kinhteSignal = {signal: "datafetch", datapage:"kinh-te"};
    const data_kinhte = DataFetch(serverLink,kinhteSignal).data;
    const [tonghopstart, setTonghopstart] = useState(24); // Khởi tạo state
    const moreClick = () => {
        setTonghopstart(prevTonghopstart => prevTonghopstart + 10);
    };
    const kinhte_Twenti = data_kinhte.slice(5,tonghopstart);
    return (
        <div className="homeContainer">
            <CategoryNavigation/>
            <div className="home-flex">
                <div className="home-left">
                    <Category main_news={data_kinhte.slice(0, 5)}/>
                    <ListTongHop dataNews={kinhte_Twenti}/>
                    {/*        /!* add button xemthem with script more data for tintonghop*!/*/}
                    <button onClick={moreClick} className="btn-xemthem">Xem thêm</button>
                </div>
                <div className="home-right">

                </div>
            </div>
        </div>
    );
};

export default KinhtePage;