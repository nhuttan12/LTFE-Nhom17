import React, {useState, useEffect} from 'react';
import DataFetch from "../Components/fetchRSS/DataFetch";
import CategoryNavigation from "../Components/Category/CategoryNavagation/CategoryNavigation";
import Category from "../Components/Category/Category";
import ListTongHop from "../Components/tintonghop/ListTongHop";
import ComponentRight from "../Components/tingioitrevadoisong/ComponentRight";

const serverLink = "http://localhost:4000/";

const VanhoaPage = () => {
    
    const [data_vanhoa, setData_vanhoa] = useState([]);
    const [tonghopstart, setTonghopstart] = useState(70); // Khởi tạo state

    useEffect(()=>{
        const fetchData = async () => {
            try{
                const vanhoaSignal = {signal: "datafetch", datapage:"van-hoa"};
                const vanhoadata = await DataFetch(serverLink,vanhoaSignal);
                setData_vanhoa(vanhoadata);
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
        "Sống đẹp",
        "Câu chuyện văn hóa",
        "Khảo cứu",
        "Xem - Nghe",
        "Sách hay",
        "Món ngon Hà Nội",
        "Nghĩa tình miền Tây",
        "Hào khí miền Đông"
    ];
    const vanhoa_Twenti = data_vanhoa.slice(44,tonghopstart);
    return (
        <div className="homeContainer">
            <CategoryNavigation data={defaultItems} title="Văn hóa"/>
            <div className="home-flex">
                <div className="home-left">
                    <Category main_news={data_vanhoa.slice(0, 5)}/>
                    <ListTongHop dataNews={vanhoa_Twenti}/>
                    {/*        /!* add button xemthem with script more data for tintonghop*!/*/}
                    <button onClick={moreClick} className="btn-xemthem">Xem thêm</button>
                </div>
                <div className="home-right sub">
                    <ComponentRight dataComponent={data_vanhoa.slice(5,10)} title="Sống đẹp"/>
                    <ComponentRight dataComponent={data_vanhoa.slice(10,15)} title="Câu chuyện văn hóa"/>
                    <ComponentRight dataComponent={data_vanhoa.slice(15,20)} title="Khảo cứu"/>
                    <ComponentRight dataComponent={data_vanhoa.slice(20,24)} title="Xem - Nghe"/>
                    <ComponentRight dataComponent={data_vanhoa.slice(24,29)} title="Sách hay"/>
                    <ComponentRight dataComponent={data_vanhoa.slice(29,34)} title="Món ngon Hà Nội"/>
                    <ComponentRight dataComponent={data_vanhoa.slice(34,39)} title="Nghĩa tình miền Tây"/>
                    <ComponentRight dataComponent={data_vanhoa.slice(39,44)} title="Hào khí miền Đông"/>
                </div>
            </div>
        </div>
    );
};

export default VanhoaPage;