import React, {useState} from 'react';
import DataFetch from "../Components/fetchRSS/DataFetch";
import CategoryNavigation from "../Components/Category/CategoryNavagation/CategoryNavigation";
import SportCategory from "../Components/SportCategory/SportCategory";
import MultiSide from "../Components/Multimedia/MultiSide";
import ListTongHop from "../Components/tintonghop/ListTongHop";
import ComponentRight from "../Components/tingioitrevadoisong/ComponentRight";

const CongnghePage = () => {
    const serverLink = "http://localhost:4000/";
    const congngheSignal = {signal: "datafetch", datapage:"cong-nghe"};
    const data_congnghe = DataFetch(serverLink,congngheSignal).data;
    const [tonghopstart, setTonghopstart] = useState(65); // Khởi tạo state
    const moreClick = () => {
        setTonghopstart(prevTonghopstart => prevTonghopstart + 10);
    };
    const congnghe_Twenti = data_congnghe.slice(48,tonghopstart);
    const defaultItems = [
        "Tin tức công nghệ",
        "Blockchain",
        "Sản phẩm",
        "Xu hướng - Chuyển đổi số",
        "Thủ thuật",
        "Game"
    ];

    return (
        <div className="homeContainer">
            <div className="full">
            <CategoryNavigation title="Công nghệ" data={defaultItems}/>
            <SportCategory data_sport={data_congnghe.slice(0,6)}/>
            </div>
            <div className="home-flex">
                <div className="home-left">
                    {/*<MultiSide latest_news={data_congnghe}/>*/}
                    <ListTongHop dataNews={congnghe_Twenti}/>
                    {/*        /!* add button xemthem with script more data for tintonghop*!/*/}
                    <button onClick={moreClick} className="btn-xemthem">Xem thêm</button>
                </div>
                <div className="home-right subit">
                    <ComponentRight dataComponent={data_congnghe.slice(6,1)} title="Tin tức công nghệ"/>
                    <ComponentRight dataComponent={data_congnghe.slice(12,16)} title="Blockchain"/>
                    <ComponentRight dataComponent={data_congnghe.slice(16,20)} title="Sản phẩm"/>
                    <ComponentRight dataComponent={data_congnghe.slice(20,24)} title="Xu hướng - Chuyển đổi số"/>
                    <ComponentRight dataComponent={data_congnghe.slice(24,28)} title="Thủ thuật"/>
                    <ComponentRight dataComponent={data_congnghe.slice(28,32)} title="Game"/>
                </div>
            </div>
        </div>
    );
};

export default CongnghePage;