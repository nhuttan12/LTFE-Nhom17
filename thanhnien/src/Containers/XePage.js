import React, {useState} from 'react';
import DataFetch from "../Components/fetchRSS/DataFetch";
import CategoryNavigation from "../Components/Category/CategoryNavagation/CategoryNavigation";
import Category from "../Components/Category/Category";
import ListTongHop from "../Components/tintonghop/ListTongHop";

const XePage = () => {
    const serverLink = "http://localhost:4000/";
    const xeSignal = {signal: "datafetch", datapage:"xe"};
    const data_xe = DataFetch(serverLink,xeSignal).data;
    const [tonghopstart, setTonghopstart] = useState(24); // Khởi tạo state
    const moreClick = () => {
        setTonghopstart(prevTonghopstart => prevTonghopstart + 10);
    };
    const xe_Twenti = data_xe.slice(5,tonghopstart);
    return (
        <div className="homeContainer">
            <CategoryNavigation/>
            <div className="home-flex">
                <div className="home-left">
                    <Category main_news={data_xe.slice(0, 5)}/>
                    <ListTongHop dataNews={xe_Twenti}/>
                    {/*        /!* add button xemthem with script more data for tintonghop*!/*/}
                    <button onClick={moreClick} className="btn-xemthem">Xem thêm</button>
                </div>
                <div className="home-right">

                </div>
            </div>
        </div>
    );
};

export default XePage;