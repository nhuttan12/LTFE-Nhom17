import React, {useState} from 'react';
import DataFetch from "../Components/fetchRSS/DataFetch";
import CategoryNavigation from "../Components/Category/CategoryNavagation/CategoryNavigation";
import Category from "../Components/Category/Category";
import ListTongHop from "../Components/tintonghop/ListTongHop";
import MultiSide from "../Components/Multimedia/MultiSide";
const DoisongPage = () => {
    const serverLink = "http://localhost:4000/";
    const doisongSignal = {signal: "datafetch", datapage:"doi-song"};
    const data_doisong = DataFetch(serverLink,doisongSignal).data;
    const [tonghopstart, setTonghopstart] = useState(40); // Khởi tạo state
    const moreClick = () => {
        setTonghopstart(prevTonghopstart => prevTonghopstart + 10);
    };
    const doisong_Twenti = data_doisong.slice(20,tonghopstart);
    console.log(data_doisong);
    return (
        <div className="homeContainer">
            <CategoryNavigation/>
            <div className="home-flex">
                <div className="home-left">
                    <Category main_news={data_doisong.slice(0, 5)}/>
                </div>
            </div>
            <MultiSide dataComponent={data_doisong.slice(5,20)}/>
            <div className="home-flex">
                <div className="home-left">
                    {/*<MultiSide latest_news={data_doisong}/>*/}
                    <ListTongHop dataNews={doisong_Twenti}/>
                    {/*        /!* add button xemthem with script more data for tintonghop*!/*/}
                    <button onClick={moreClick} className="btn-xemthem">Xem thêm</button>
                </div>
                <div className="home-right">
                </div>
            </div>
        </div>
    );
};
export default DoisongPage;