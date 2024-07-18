import React, {useState} from 'react';
import DataFetch from "../Components/fetchRSS/DataFetch";
import CategoryNavigation from "../Components/Category/CategoryNavagation/CategoryNavigation";
import ListNewsTop from "../Components/dulich/ListNewsTop";
import ListTongHop from "../Components/tintonghop/ListTongHop";

const TieudungPage = () => {
    const serverLink = "http://localhost:4000/";
    const tieudungSignal = {signal: "datafetch", datapage:"tieu-dung-thong-minh"};
    const data_tieudung = DataFetch(serverLink,tieudungSignal).data;
    const [tonghopstart, setTonghopstart] = useState(24); // Khởi tạo state
    const moreClick = () => {
        setTonghopstart(prevTonghopstart => prevTonghopstart + 10);
    };
    const tieudung_Twenti = data_tieudung.slice(5,tonghopstart);
    return (
        <div className="homeContainer">
            <CategoryNavigation/>
            <ListNewsTop dataNews={data_tieudung}/>
            <div className="home-flex">
                <div className="home-left">
                    <ListTongHop dataNews={tieudung_Twenti}/>
                    {/*        /!* add button xemthem with script more data for tintonghop*!/*/}
                    <button onClick={moreClick} className="btn-xemthem">Xem thêm</button>
                </div>
                <div className="home-right">

                </div>
            </div>
        </div>
    );
};

export default TieudungPage;