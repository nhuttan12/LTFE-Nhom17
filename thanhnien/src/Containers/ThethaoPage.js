import React, {useState} from 'react';
import DataFetch from "../Components/fetchRSS/DataFetch";
import CategoryNavigation from "../Components/Category/CategoryNavagation/CategoryNavigation";
import Category from "../Components/Category/Category";
import MultiSide from "../Components/Multimedia/MultiSide";
import ListTongHop from "../Components/tintonghop/ListTongHop";
import ComponentRight from "../Components/tingioitrevadoisong/ComponentRight";
import SportCategory from "../Components/SportCategory/SportCategory";

const ThethaoPage = () => {
    const serverLink = "http://localhost:4000/";
    const thethaoSignal = {signal: "datafetch", datapage:"the-thao"};
    const data_thethao = DataFetch(serverLink,thethaoSignal).data;
    const [tonghopstart, setTonghopstart] = useState(70); // Khởi tạo state
    const moreClick = () => {
        setTonghopstart(prevTonghopstart => prevTonghopstart + 10);
    };
    const thethao_Twenti = data_thethao.slice(48,tonghopstart);
    const defaultItems = [
        "Euro 2024",
        "Bóng đá sinh viên",
        "Bóng đá Việt Nam",
        "Bóng đá Quốc tế",
        "Thể thao & Cộng đồng",
        "Thể thao khác",
        "Bóng rổ"
    ];

    return (
        <div className="homeContainer">
            <CategoryNavigation title="Thể thao" data={defaultItems}/>
            <div className="home-flex">
                <div className="home-left">
                    <SportCategory data_sport={data_thethao.slice(0,6)}/>
                </div>
            </div>
            <MultiSide dataComponent={data_thethao.slice(6,20)}/>
            <div className="home-flex">
                <div className="home-left">
                    {/*<MultiSide latest_news={data_thethao}/>*/}
                    <ListTongHop dataNews={thethao_Twenti}/>
                    {/*        /!* add button xemthem with script more data for tintonghop*!/*/}
                    <button onClick={moreClick} className="btn-xemthem">Xem thêm</button>
                </div>
                <div className="home-right subit">
                    <ComponentRight dataComponent={data_thethao.slice(20,24)} title="Euro 2024"/>
                    <ComponentRight dataComponent={data_thethao.slice(24,28)} title="Bóng đá sinh viên"/>
                    <ComponentRight dataComponent={data_thethao.slice(28,32)} title="Bóng đá Việt Nam"/>
                    <ComponentRight dataComponent={data_thethao.slice(32,36)} title="Bóng đá Quốc tế"/>
                    <ComponentRight dataComponent={data_thethao.slice(36,40)} title="Thể thao & Cộng đồng"/>
                    <ComponentRight dataComponent={data_thethao.slice(40,44)} title="Thể thao khác"/>
                    <ComponentRight dataComponent={data_thethao.slice(44,48)} title="Bóng rổ"/>
                </div>
            </div>
        </div>
    );
};

export default ThethaoPage;