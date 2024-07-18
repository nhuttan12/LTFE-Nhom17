import React, {useState} from 'react';
import DataFetch from "../Components/fetchRSS/DataFetch";
import CategoryNavigation from "../Components/Category/CategoryNavagation/CategoryNavigation";
import Category from "../Components/Category/Category";
import MultiSide from "../Components/Multimedia/MultiSide";
import ListTongHop from "../Components/tintonghop/ListTongHop";

const GiaitriPage = () => {
    const serverLink = "http://localhost:4000/";
    const giaitriSignal = {signal: "datafetch", datapage:"giai-tri"};
    const data_giaitri = DataFetch(serverLink,giaitriSignal).data;
    const [tonghopstart, setTonghopstart] = useState(40); // Khởi tạo state
    const moreClick = () => {
        setTonghopstart(prevTonghopstart => prevTonghopstart + 10);
    };
    const giaitri_Twenti = data_giaitri.slice(20,tonghopstart);
    console.log(data_giaitri);
    return (
        <div className="homeContainer">
            <CategoryNavigation/>
            <div className="home-flex">
                <div className="home-left">
                    <Category main_news={data_giaitri.slice(0, 5)}/>
                </div>
            </div>
            <MultiSide dataComponent={data_giaitri.slice(5,20)}/>
            <div className="home-flex">
                <div className="home-left">
                    {/*<MultiSide latest_news={data_giaitri}/>*/}
                    <ListTongHop dataNews={giaitri_Twenti}/>
                    {/*        /!* add button xemthem with script more data for tintonghop*!/*/}
                    <button onClick={moreClick} className="btn-xemthem">Xem thêm</button>
                </div>
                <div className="home-right">
                </div>
            </div>
        </div>
    );
};
export default GiaitriPage;