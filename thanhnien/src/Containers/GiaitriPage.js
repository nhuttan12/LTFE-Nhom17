import React, {useState, useEffect} from 'react';
import DataFetch from "../Components/fetchRSS/DataFetch";
import CategoryNavigation from "../Components/Category/CategoryNavagation/CategoryNavigation";
import Category from "../Components/Category/Category";
import MultiSide from "../Components/Multimedia/MultiSide";
import ListTongHop from "../Components/tintonghop/ListTongHop";
import ComponentRight from "../Components/tingioitrevadoisong/ComponentRight";

const serverLink = "http://localhost:4000/";

const GiaitriPage = () => {

    const [data_giaitri, setData_giaitri] = useState([]);
    const [tonghopstart, setTonghopstart] = useState(66); // Khởi tạo state

    useEffect(()=>{
        const fetchData = async () => {
          try{
            const giaitriSignal = {signal: "datafetch", datapage:"giai-tri"};
            const giaitridata = await DataFetch(serverLink,giaitriSignal);
            setData_giaitri(giaitridata);
          } catch (err) {
            console.log(err);
          }
        };
        fetchData();     
    },[])

    const moreClick = () => {
        setTonghopstart(prevTonghopstart => prevTonghopstart + 10);
    };
    const giaitri_Twenti = data_giaitri.slice(36,tonghopstart);
    const defaultItems = [
        "Kết nối",
        "Phim",
        "Truyền hình",
        "Đời nghệ sĩ"
    ];
    return (
        <div className="homeContainer">
            <CategoryNavigation title="Giải trí" data={defaultItems}/>
            <div className="home-flex">
                <div className="home-left">
                    <Category main_news={data_giaitri.slice(0, 5)}/>
                </div>
            </div>
            <MultiSide dataComponent={data_giaitri.slice(5,20)}/>
            <div className="home-flex">
                <div className="home-left">
                    {/*<MultiSide latest_news={data_giaitri}/>*/}
                    <ListTongHop dataNews={giaitri_Twenti}/>
                    {/*        /!* add button xemthem with script more data for tintonghop*!/*/}
                    <button onClick={moreClick} className="btn-xemthem">Xem thêm</button>
                </div>
                <div className="home-right">
                    <ComponentRight dataComponent={data_giaitri.slice(20,24)} title="Kết nối"/>
                    <ComponentRight dataComponent={data_giaitri.slice(24,28)} title="Phim"/>
                    <ComponentRight dataComponent={data_giaitri.slice(28,32)} title="Truyền hình"/>
                    <ComponentRight dataComponent={data_giaitri.slice(32,36)} title="Đời nghệ sĩ"/>
                </div>
            </div>
        </div>
    );
};
export default GiaitriPage;