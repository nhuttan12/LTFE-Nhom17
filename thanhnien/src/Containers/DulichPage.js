import React, {useState} from 'react';
import DataFetch from "../Components/fetchRSS/DataFetch";
import CategoryNavigation from "../Components/Category/CategoryNavagation/CategoryNavigation";
import Category from "../Components/Category/Category";
import ListTongHop from "../Components/tintonghop/ListTongHop";
import ListNewsTop from "../Components/dulich/ListNewsTop";

const DulichPage = () => {
    const serverLink = "http://localhost:4000/";
    const dulichSignal = {signal: "datafetch", datapage:"du-lich"};
    const data_dulich = DataFetch(serverLink,dulichSignal).data;
    const [tonghopstart, setTonghopstart] = useState(24); // Khởi tạo state
    const moreClick = () => {
        setTonghopstart(prevTonghopstart => prevTonghopstart + 10);
    };
    const dulich_Twenti = data_dulich.slice(5,tonghopstart);
    return (
        <div className="homeContainer">
            <CategoryNavigation/>
                    <ListNewsTop dataNews={data_dulich}/>
            <div className="home-flex">
                <div className="home-left">
                    <ListTongHop dataNews={dulich_Twenti}/>
                    {/*        /!* add button xemthem with script more data for tintonghop*!/*/}
                    <button onClick={moreClick} className="btn-xemthem">Xem thêm</button>
                </div>
                <div className="home-right">

                </div>
            </div>
        </div>
    );
};

export default DulichPage;