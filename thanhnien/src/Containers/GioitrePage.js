import React, {useState} from 'react';
import DataFetch from "../Components/fetchRSS/DataFetch";
import shuffle from "./shuffle";
import CategoryNavigation from "../Components/Category/CategoryNavagation/CategoryNavigation";
import Category from "../Components/Category/Category";
import ListTongHop from "../Components/tintonghop/ListTongHop";

const GioitrePage = () => {
    const serverLink = "http://localhost:4000/";
    const gioitreSignal = {signal: "datafetch", datapage:"gioi-tre"};
    const data_gioitre = DataFetch(serverLink,gioitreSignal).data;
    const [tonghopstart, setTonghopstart] = useState(24); // Khởi tạo state
    const moreClick = () => {
        setTonghopstart(prevTonghopstart => prevTonghopstart + 10);
    };
    const gioitre_Twenti = data_gioitre.slice(5,tonghopstart);
    return (
        <div className="homeContainer">
            <CategoryNavigation/>
            <div className="home-flex">
                <div className="home-left">
                    <Category main_news={data_gioitre.slice(0, 5)}/>
                    <ListTongHop dataNews={gioitre_Twenti}/>
                    {/*        /!* add button xemthem with script more data for tintonghop*!/*/}
                    <button onClick={moreClick} className="btn-xemthem">Xem thêm</button>
                </div>
                <div className="home-right">

                </div>
            </div>
        </div>
    );
};

export default GioitrePage;