import React, {useState, useEffect} from 'react';
import DataFetch from "../Components/fetchRSS/DataFetch";
import CategoryNavigation from "../Components/Category/CategoryNavagation/CategoryNavigation";
import Category from "../Components/Category/Category";
import ListTongHop from "../Components/tintonghop/ListTongHop";
import ComponentRight from "../Components/tingioitrevadoisong/ComponentRight";

const serverLink = "http://localhost:4000/";

const XePage = () => {
    
    const [data_xe, setData_xe] = useState([]);
    const [tonghopstart, setTonghopstart] = useState(74); // Khởi tạo state

    useEffect(()=>{
        const fetchData = async () => {
            try{
                const xeSignal = {signal: "datafetch", datapage:"xe"};
                const xedata = await DataFetch(serverLink,xeSignal);
                setData_xe(xedata);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();   
    },[])

    const moreClick = () => {
        setTonghopstart(prevTonghopstart => prevTonghopstart + 10);
    };
    const defaultItems = [
        "Thị trường xe",
        "Xe điện",
        "Đánh giá xe",
        "Tư vấn xe",
        "Video",
        "Diễn đàn xe",
        "Luật giao thông",
        "Xe & Đời sống"
    ];

    const xe_Twenti = data_xe.slice(44,tonghopstart);
    return (
        <div className="homeContainer">
            <CategoryNavigation title="Xe" data={defaultItems}/>
            <div className="home-flex">
                <div className="home-left">
                    <Category main_news={data_xe.slice(0, 5)}/>
                    <ListTongHop dataNews={xe_Twenti}/>
                    {/*        /!* add button xemthem with script more data for tintonghop*!/*/}
                    <button onClick={moreClick} className="btn-xemthem">Xem thêm</button>
                </div>
                <div className="home-right sub">
                    <ComponentRight dataComponent={data_xe.slice(5,10)} title="Thị trường xe"/>
                    <ComponentRight dataComponent={data_xe.slice(10,15)} title="Xe điện"/>
                    <ComponentRight dataComponent={data_xe.slice(15,20)} title="Đánh giá xe"/>
                    <ComponentRight dataComponent={data_xe.slice(20,24)} title="Tư vấn xe"/>
                    <ComponentRight dataComponent={data_xe.slice(24,29)} title="Video"/>
                    <ComponentRight dataComponent={data_xe.slice(29,34)} title="Diễn đàn xe"/>
                    <ComponentRight dataComponent={data_xe.slice(34,39)} title="Luật giao thông"/>
                    <ComponentRight dataComponent={data_xe.slice(39,44)} title="Xe & Đời sống"/>
                </div>
            </div>
        </div>
    );
};

export default XePage;