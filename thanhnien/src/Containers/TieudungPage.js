import React, {useState, useEffect} from 'react';
import DataFetch from "../Components/fetchRSS/DataFetch";
import CategoryNavigation from "../Components/Category/CategoryNavagation/CategoryNavigation";
import ListNewsTop from "../Components/dulich/ListNewsTop";
import ListTongHop from "../Components/tintonghop/ListTongHop";

const serverLink = "http://localhost:4000/";

const TieudungPage = () => {

    const [data_tieudung, setData_tieudung] = useState([]);
    const [tonghopstart, setTonghopstart] = useState(24); // Khởi tạo state

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



    const moreClick = () => {
        setTonghopstart(prevTonghopstart => prevTonghopstart + 10);
    };
    const tieudung_Twenti = data_tieudung.slice(5,tonghopstart);
    return (
        <div className="homeContainer">
            <CategoryNavigation/>
            <ListNewsTop dataNews={data_tieudung}/>
            <div className="home-flex">
                <div className="home-left">
                    <ListTongHop dataNews={tieudung_Twenti}/>
                    {/*        /!* add button xemthem with script more data for tintonghop*!/*/}
                    <button onClick={moreClick} className="btn-xemthem">Xem thêm</button>
                </div>
                <div className="home-right">

                </div>
            </div>
        </div>
    );
};

export default TieudungPage;