import Category from "../Components/Category/Category";
import CategoryNavigation from "../Components/Category/CategoryNavagation/CategoryNavigation";
import React, { useEffect, useState } from "react";
import '../Components/baibao/cssBaiBao.css';
import '../Containers/Page.css'
import '../Components/dulich/topNews.css';
import ListTongHop from "../Components/tintonghop/ListTongHop";
import DataFetch from "../Components/fetchRSS/DataFetch";
import ComponentRight from "../Components/tingioitrevadoisong/ComponentRight";

const serverLink = "http://localhost:4000/";

const ThoisuPage = () => {
    
    const [data_thoisu, setData_thoisu] = useState([]);
    const [tonghopstart, setTonghopstart] = useState(80); // Khởi tạo state

    useEffect(()=>{
        const fetchData = async () => {
            try{
                const thoisuSignal = {signal: "datafetch", datapage:"thoi-su"};
                const thoisudata = await DataFetch(serverLink,thoisuSignal);
                setData_thoisu(thoisudata);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData(); 
    },[])



    const moreClick = () => {
        setTonghopstart(prevTonghopstart => prevTonghopstart + 10);
    };
    const thoisu_Twenti = data_thoisu.slice(50,tonghopstart);
    const defaultItems = [
        "Chính trị",
        "Pháp luật",
        "Dân sinh",
        "Lao động - việc làm",
        "Quyền được biết",
        "Phóng sự / điều tra",
        "Quốc phòng",
        "Chống tin giả",
        "Thời luận",
    ];
    return (
        <div className="homeContainer">
            <CategoryNavigation title="Thời sự" data={defaultItems} />
            <div className="home-flex">
                <div className="home-left">
                <Category main_news={data_thoisu.slice(0, 5)}/>
                <ListTongHop dataNews={thoisu_Twenti}/>
                {/*        /!* add button xemthem with script more data for tintonghop*!/*/}
                <button onClick={moreClick} className="btn-xemthem">Xem thêm</button>
                </div>
                <div className="home-right sub">
                    <ComponentRight dataComponent={data_thoisu.slice(5,10)} title="Chính trị"/>
                    <ComponentRight dataComponent={data_thoisu.slice(10,15)} title="Pháp luật"/>
                    <ComponentRight dataComponent={data_thoisu.slice(15,20)} title="Dân sinh"/>
                    <ComponentRight dataComponent={data_thoisu.slice(20,25)} title="Lao động - việc làm"/>
                    <ComponentRight dataComponent={data_thoisu.slice(25,30)} title="Quyền được biết"/>
                    <ComponentRight dataComponent={data_thoisu.slice(30,35)} title="Phóng sự / điều tra"/>
                    <ComponentRight dataComponent={data_thoisu.slice(35,40)} title="Quốc phòng"/>
                    <ComponentRight dataComponent={data_thoisu.slice(40,45)} title="Chống tin giả"/>
                    <ComponentRight dataComponent={data_thoisu.slice(45,50)} title="Thời luận"/>
                </div>
            </div>
        </div>
    );
};

export default ThoisuPage;