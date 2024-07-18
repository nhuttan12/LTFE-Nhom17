import React, {useState} from 'react';
import DataFetch from "../Components/fetchRSS/DataFetch";
import CategoryNavigation from "../Components/Category/CategoryNavagation/CategoryNavigation";
import Category from "../Components/Category/Category";
import ListTongHop from "../Components/tintonghop/ListTongHop";
import ListNewsTop from "../Components/dulich/ListNewsTop";
import ComponentRight from "../Components/tingioitrevadoisong/ComponentRight";

const DulichPage = () => {
    const serverLink = "http://localhost:4000/";
    const dulichSignal = {signal: "datafetch", datapage:"du-lich"};
    const data_dulich = DataFetch(serverLink,dulichSignal).data;
    const [tonghopstart, setTonghopstart] = useState(68); // Khởi tạo state
    const moreClick = () => {
        setTonghopstart(prevTonghopstart => prevTonghopstart + 10);
    };
    const dulich_Twenti = data_dulich.slice(38,tonghopstart);
    const defaultItems = [
        "Khám phá",
        "Tin tức - Sự kiện",
        "Chơi gì, ăn đâu, đi thế nào?",
        "Bất động sản du lịch",
        "Câu chuyện du lịch"
    ];

    return (
        <div className="homeContainer">
            <CategoryNavigation title="Du lịch" data={defaultItems}/>
                    <ListNewsTop dataNews={data_dulich}/>
            <div className="home-flex">
                <div className="home-left">
                    <ListTongHop dataNews={dulich_Twenti}/>
                    {/*        /!* add button xemthem with script more data for tintonghop*!/*/}
                    <button onClick={moreClick} className="btn-xemthem">Xem thêm</button>
                </div>
                <div className="home-right subit">
                    <ComponentRight dataComponent={data_dulich.slice(13,18)} title= "Khám phá"/>
                    <ComponentRight dataComponent={data_dulich.slice(18,23)} title="Tin tức - Sự kiện"/>
                    <ComponentRight dataComponent={data_dulich.slice(23,28)} title="Chơi gì, ăn đâu, đi thế nào?"/>
                    <ComponentRight dataComponent={data_dulich.slice(28,33)} title="Bất động sản du lịch"/>
                    <ComponentRight dataComponent={data_dulich.slice(33,38)} title="Câu chuyện du lịch"/>
                </div>
            </div>
        </div>
    );
};

export default DulichPage;