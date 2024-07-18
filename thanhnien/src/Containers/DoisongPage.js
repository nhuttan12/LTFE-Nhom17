import React, {useState} from 'react';
import DataFetch from "../Components/fetchRSS/DataFetch";
import CategoryNavigation from "../Components/Category/CategoryNavagation/CategoryNavigation";
import Category from "../Components/Category/Category";
import ListTongHop from "../Components/tintonghop/ListTongHop";
import MultiSide from "../Components/Multimedia/MultiSide";
import ComponentRight from "../Components/tingioitrevadoisong/ComponentRight";
const DoisongPage = () => {
    const serverLink = "http://localhost:4000/";
    const doisongSignal = {signal: "datafetch", datapage:"doi-song"};
    const data_doisong = DataFetch(serverLink,doisongSignal).data;
    const [tonghopstart, setTonghopstart] = useState(75); // Khởi tạo state
    const moreClick = () => {
        setTonghopstart(prevTonghopstart => prevTonghopstart + 10);
    };
    const defaultItems = [
        "Đời sống",
        "Tết",
        "Người sống quanh ta",
        "Gia đình",
        "Ẩm thực",
        "Cộng đồng",
        "Một nửa thế giới",
        "Khát vọng năm rồng"
    ];
    const doisong_Twenti = data_doisong.slice(45,tonghopstart);
    return (
        <div className="homeContainer">
            <CategoryNavigation title="Đời sống" data={defaultItems}/>
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
                <div className="home-right subit">
                    <ComponentRight dataComponent={data_doisong.slice(5,10)} title="Đời sống"/>
                    <ComponentRight dataComponent={data_doisong.slice(10,15)} title="Tết"/>
                    <ComponentRight dataComponent={data_doisong.slice(15,20)} title="Người sống quanh ta"/>
                    <ComponentRight dataComponent={data_doisong.slice(20,25)} title="Gia đình"/>
                    <ComponentRight dataComponent={data_doisong.slice(25,30)} title="Ẩm thực"/>
                    <ComponentRight dataComponent={data_doisong.slice(30,35)} title="Cộng đồng"/>
                    <ComponentRight dataComponent={data_doisong.slice(35,40)} title="Một nửa thế giới"/>
                    <ComponentRight dataComponent={data_doisong.slice(40,45)} title="Khát vọng năm rồng"/>
                </div>
            </div>
        </div>
    );
};
export default DoisongPage;