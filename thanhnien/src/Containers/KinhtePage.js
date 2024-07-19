import React, {useState} from 'react';
import DataFetch from "../Components/fetchRSS/DataFetch";
import shuffle from "./shuffle";
import CategoryNavigation from "../Components/Category/CategoryNavagation/CategoryNavigation";
import Category from "../Components/Category/Category";
import ListTongHop from "../Components/tintonghop/ListTongHop";
import ComponentRight from "../Components/tingioitrevadoisong/ComponentRight";

const KinhtePage = () => {
    const serverLink = "http://localhost:4000/";
    const kinhteSignal = {signal: "datafetch", datapage:"kinh-te"};
    const data_kinhte = DataFetch(serverLink,kinhteSignal).data;
    const [tonghopstart, setTonghopstart] = useState(80); // Khởi tạo state
    const moreClick = () => {
        setTonghopstart(prevTonghopstart => prevTonghopstart + 10);
    };
    const defaultItems = [
        "Kinh tế xanh",
        "Chính sách - Phát triển",
        "Ngân hàng",
        "Chứng khoán",
        "Doanh nghiệp",
        "Khát vọng Việt Nam",
        "Làm giàu",
        "Địa ốc"
    ];

    const kinhte_Twenti = data_kinhte.slice(50,tonghopstart);
    return (
        <div className="homeContainer">
            <CategoryNavigation title="Kinh tế" data={defaultItems}/>
            <div className="home-flex">
                <div className="home-left">
                    <Category main_news={data_kinhte.slice(0, 5)}/>
                    <ListTongHop dataNews={kinhte_Twenti}/>
                    {/*        /!* add button xemthem with script more data for tintonghop*!/*/}
                    <button onClick={moreClick} className="btn-xemthem">Xem thêm</button>
                </div>
                <div className="home-right sub">
                    <ComponentRight dataComponent={data_kinhte.slice(10,15)} title="Kinh tế xanh"/>
                    <ComponentRight dataComponent={data_kinhte.slice(15,20)} title="Chính sách - Phát triển"/>
                    <ComponentRight dataComponent={data_kinhte.slice(20,25)} title="Ngân hàng"/>
                    <ComponentRight dataComponent={data_kinhte.slice(25,30)} title="Chứng khoán"/>
                    <ComponentRight dataComponent={data_kinhte.slice(30,35)} title="Doanh nghiệp"/>
                    <ComponentRight dataComponent={data_kinhte.slice(35,40)} title="Khát vọng Việt Nam"/>
                    <ComponentRight dataComponent={data_kinhte.slice(40,45)} title="Làm giàu"/>
                    <ComponentRight dataComponent={data_kinhte.slice(45,50)} title="Địa ốc"/>
                </div>
            </div>
        </div>
    );
};

export default KinhtePage;