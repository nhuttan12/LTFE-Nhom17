import React, {useState, useEffect} from 'react';
import DataFetch from "../Components/fetchRSS/DataFetch";
import CategoryNavigation from "../Components/Category/CategoryNavagation/CategoryNavigation";
import ListNewsTop from "../Components/dulich/ListNewsTop";
import ListTongHop from "../Components/tintonghop/ListTongHop";
import ComponentRight from "../Components/tingioitrevadoisong/ComponentRight";

const serverLink = "http://localhost:4000/";

const SuckhoePage = () => {
    
    const [data_suckhoe, setData_suckhoe] = useState([]);
    const [tonghopstart, setTonghopstart] = useState(40); // Khởi tạo state

    useEffect(()=>{
        const fetchData = async () => {
            try{
              const suckhoeSignal = {signal: "datafetch", datapage:"suc-khoe"};
              const suckhoedata = await DataFetch(serverLink,suckhoeSignal);
              setData_suckhoe(suckhoedata);
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
        "Khỏe đẹp mỗi ngày",
        "Làm đẹp",
        "Giới tính"
    ];

    const suckhoe_Twenti = data_suckhoe.slice(20,tonghopstart);
    return (
        <div className="homeContainer">
            <CategoryNavigation data={defaultItems} title="Sức khỏe"/>
            <ListNewsTop dataNews={data_suckhoe}/>
            <div className="home-flex">
                <div className="home-left">
                    <ListTongHop dataNews={suckhoe_Twenti}/>
                    {/*        /!* add button xemthem with script more data for tintonghop*!/*/}
                    <button onClick={moreClick} className="btn-xemthem">Xem thêm</button>
                </div>
                <div className="home-right">
                    <ComponentRight dataComponent={data_suckhoe.slice(5,10)} title="Khỏe đẹp mỗi ngày"/>
                    <ComponentRight dataComponent={data_suckhoe.slice(10,15)} title="Làm đẹp"/>
                    <ComponentRight dataComponent={data_suckhoe.slice(15,20)} title="Giới tính"/>
                </div>
            </div>
        </div>
    );
};

export default SuckhoePage;