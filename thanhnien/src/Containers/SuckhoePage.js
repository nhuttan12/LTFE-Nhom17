import React, {useState} from 'react';
import DataFetch from "../Components/fetchRSS/DataFetch";
import CategoryNavigation from "../Components/Category/CategoryNavagation/CategoryNavigation";
import ListNewsTop from "../Components/dulich/ListNewsTop";
import ListTongHop from "../Components/tintonghop/ListTongHop";
const SuckhoePage = () => {
    const serverLink = "http://localhost:4000/";
    const suckhoeSignal = {signal: "datafetch", datapage:"suc-khoe"};
    const data_suckhoe = DataFetch(serverLink,suckhoeSignal).data;
    const [tonghopstart, setTonghopstart] = useState(24); // Khởi tạo state
    const moreClick = () => {
        setTonghopstart(prevTonghopstart => prevTonghopstart + 10);
    };
    const suckhoe_Twenti = data_suckhoe.slice(5,tonghopstart);
    return (
        <div className="homeContainer">
            <CategoryNavigation/>
            <ListNewsTop dataNews={data_suckhoe}/>
            <div className="home-flex">
                <div className="home-left">
                    <ListTongHop dataNews={suckhoe_Twenti}/>
                    {/*        /!* add button xemthem with script more data for tintonghop*!/*/}
                    <button onClick={moreClick} className="btn-xemthem">Xem thêm</button>
                </div>
                <div className="home-right">

                </div>
            </div>
        </div>
    );
};

export default SuckhoePage;