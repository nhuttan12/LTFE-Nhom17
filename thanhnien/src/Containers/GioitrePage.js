import React, {useState, useEffect} from 'react';
import DataFetch from "../Components/fetchRSS/DataFetch";
import shuffle from "./shuffle";
import CategoryNavigation from "../Components/Category/CategoryNavagation/CategoryNavigation";
import Category from "../Components/Category/Category";
import ListTongHop from "../Components/tintonghop/ListTongHop";
import ComponentRight from "../Components/tingioitrevadoisong/ComponentRight";

const serverLink = "http://localhost:4000/";

const GioitrePage = () => {

    const [data_gioitre, setData_gioitre] = useState([]);
    const [tonghopstart, setTonghopstart] = useState(75); // Khởi tạo state

    useEffect(()=>{
        const fetchData = async () => {
          try{
            const gioitreSignal = {signal: "datafetch", datapage:"gioi-tre"};
            const gioitredata = await DataFetch(serverLink,gioitreSignal);
            setData_gioitre(gioitredata);
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
        "Sống - Yêu - Ăn - Chơi",
        "Tiếp sức gen Z mùa thi",
        "Cơ hội nghề nghiệp",
        "Đoàn - Hội",
        "Kết nối",
        "Khởi nghiệp",
        "Thế giới mạng",
        "Gương mặt trẻ"
    ];

    const gioitre_Twenti = data_gioitre.slice(45,tonghopstart);
    return (
        <div className="homeContainer">
            <CategoryNavigation data={defaultItems} title="Giới trẻ"/>
            <div className="home-flex">
                <div className="home-left">
                    <Category main_news={data_gioitre.slice(0, 5)}/>
                    <ListTongHop dataNews={gioitre_Twenti}/>
                    {/*        /!* add button xemthem with script more data for tintonghop*!/*/}
                    <button onClick={moreClick} className="btn-xemthem">Xem thêm</button>
                </div>
                <div className="home-right sub">
                    <ComponentRight dataComponent={data_gioitre.slice(5,10)} title="Sống - Yêu - Ăn - Chơi"/>
                    <ComponentRight dataComponent={data_gioitre.slice(10,15)} title="Tiếp sức gen Z mùa thi"/>
                    <ComponentRight dataComponent={data_gioitre.slice(15,20)} title="Cơ hội nghề nghiệp"/>
                    <ComponentRight dataComponent={data_gioitre.slice(20,25)} title="Đoàn - Hội"/>
                    <ComponentRight dataComponent={data_gioitre.slice(25,30)} title= "Kết nối"/>
                    <ComponentRight dataComponent={data_gioitre.slice(30,35)} title="Khởi nghiệp"/>
                    <ComponentRight dataComponent={data_gioitre.slice(35,40)} title="Thế giới mạng"/>
                    <ComponentRight dataComponent={data_gioitre.slice(40,45)} title="Gương mặt trẻ"/>
                </div>
            </div>
        </div>
    );
};

export default GioitrePage;