import React, {useState, useEffect} from 'react';
import DataFetch from "../Components/fetchRSS/DataFetch";
import CategoryNavigation from "../Components/Category/CategoryNavagation/CategoryNavigation";
import ListNewsTop from "../Components/dulich/ListNewsTop";
import ListTongHop from "../Components/tintonghop/ListTongHop";
import ComponentRight from "../Components/tingioitrevadoisong/ComponentRight";

const serverLink = "http://localhost:4000/";

const TieudungPage = () => {

    const [data_tieudung, setData_tieudung] = useState([]);
    const [tonghopstart, setTonghopstart] = useState(50); // Khởi tạo state

    useEffect(()=>{
        const fetchData = async () => {
            try{
                const tieudungSignal = {signal: "datafetch", datapage:"tieu-dung-thong-minh"};
                const tieudungdata = await DataFetch(serverLink,tieudungSignal);
                setData_tieudung(tieudungdata);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();    
    },[])
    const defaultItems = [
        "Mới- Mới- Mới",
        "Mua một chạm",
        "Ở đâu rẻ?",
        "Góc người tiêu dùng",
    ];


    const moreClick = () => {
        setTonghopstart(prevTonghopstart => prevTonghopstart + 10);
    };
    const tieudung_Twenti = data_tieudung.slice(30,tonghopstart);
    return (
        <div className="homeContainer">
            <CategoryNavigation data={defaultItems} title="TIêu dùng thông minh"/>
            <ListNewsTop dataNews={data_tieudung}/>
            <div className="home-flex">
                <div className="home-left">
                    <ListTongHop dataNews={tieudung_Twenti}/>
                    {/*        /!* add button xemthem with script more data for tintonghop*!/*/}
                    <button onClick={moreClick} className="btn-xemthem">Xem thêm</button>
                </div>
                <div className="home-right">
                    <ComponentRight dataComponent={data_tieudung.slice(5, 10)} title="Tiêu dùng thông minh" />
                    <ComponentRight dataComponent={data_tieudung.slice(10, 15)} title="Mới- Mới- Mới" />
                    <ComponentRight dataComponent={data_tieudung.slice(15, 20)} title="Mua một chạm" />
                    <ComponentRight dataComponent={data_tieudung.slice(20, 25)} title="Ở đâu rẻ?" />
                    <ComponentRight dataComponent={data_tieudung.slice(25, 30)} title="Góc người tiêu dùng" />

                </div>
            </div>
        </div>
    );
};

export default TieudungPage;