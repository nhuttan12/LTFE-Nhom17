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

const ThegioiPage = () => {

    const [data_thegioi, setData_thegioi] = useState([]);
    const [tonghopstart, setTonghopstart] = useState(70); // Khởi tạo state

    useEffect(()=>{
        const fetchData = async () => {
            try{
                const thegioiSignal = {signal: "datafetch", datapage:"the-gioi"};
                const thegioidata = await DataFetch(serverLink,thegioiSignal);
                setData_thegioi(thegioidata);
            } catch (err) {
                console.log(err);
            }
            };
        fetchData();
    },[])


    const moreClick = () => {
        setTonghopstart(prevTonghopstart => prevTonghopstart + 10);
    };
    const thegioi_Twenti = data_thegioi.slice(40,tonghopstart);
    const defaultItems = [
        "Kinh tế thế giới",
        "Quân sự",
        "Góc nhìn",
        "Hồ sơ",
        "Người Việt năm châu",
        "Chuyện lạ"
    ];

    return (
        <div className="homeContainer">
            <CategoryNavigation title="Thế giới" data={defaultItems} />
            <div className="home-flex">
                <div className="home-left">
                    <Category main_news={data_thegioi.slice(0, 5)}/>
                    <ListTongHop dataNews={thegioi_Twenti}/>
                    {/*        /!* add button xemthem with script more data for tintonghop*!/*/}
                    <button onClick={moreClick} className="btn-xemthem">Xem thêm</button>
                </div>
                <div className="home-right sub">
                    <ComponentRight dataComponent={data_thegioi.slice(10,15)} title="Kinh tế thế giới"/>
                    <ComponentRight dataComponent={data_thegioi.slice(15,20)} title="Quân sự"/>
                    <ComponentRight dataComponent={data_thegioi.slice(20,25)} title="Góc nhìn"/>
                    <ComponentRight dataComponent={data_thegioi.slice(25,30)} title="Hồ sơ"/>
                    <ComponentRight dataComponent={data_thegioi.slice(30,35)} title="Người Việt năm châu"/>
                    <ComponentRight dataComponent={data_thegioi.slice(35,40)} title="Chuyện lạ"/>
                </div>
            </div>
        </div>
    );
};

export default ThegioiPage;