import React, {useState,useEffect} from 'react';
import DataFetch from "../Components/fetchRSS/DataFetch";
import CategoryNavigation from "../Components/Category/CategoryNavagation/CategoryNavigation";
import Category from "../Components/Category/Category";
import ListTongHop from "../Components/tintonghop/ListTongHop";
import MultiSide from "../Components/Multimedia/MultiSide";
import ComponentRight from "../Components/tingioitrevadoisong/ComponentRight";

const serverLink = "http://localhost:4000/";

const GiaoducPage = () => {

    const [data_giaoduc, setData_giaoduc] = useState([]);
    const [tonghopstart, setTonghopstart] = useState(90); // Khởi tạo state

    useEffect(()=>{
        const fetchData = async () => {
          try{
            const giaoducSignal = {signal: "datafetch", datapage:"giao-duc"};
            const giaoducdata = await DataFetch(serverLink,giaoducSignal);
            setData_giaoduc(giaoducdata);
          } catch (err) {
            console.log(err);
          }
        };
        fetchData();  
      },[])

    const moreClick = () => {
        setTonghopstart(prevTonghopstart => prevTonghopstart + 10);
    };
    const giaoduc_Twenti = data_giaoduc.slice(60,tonghopstart);
    const defaultItems = [
        "Tuyển sinh",
        "Chọn nghề - Chọn trường",
        "Du học",
        "Nhà trường",
        "Phụ huynh",
        "Tra cứu điểm thi",
        "Cẩm nang tuyển sinh 2024",
        "Ôn thi tốt nghiệp"
    ];

    return (
        <div className="homeContainer">
            <CategoryNavigation data={defaultItems} title="Giáo dục"/>
            <div className="home-flex">
                <div className="home-left">
                    <Category main_news={data_giaoduc.slice(0, 5)}/>
            </div>
            </div>
            <MultiSide dataComponent={data_giaoduc.slice(5,20)}/>
            <div className="home-flex">
                <div className="home-left">
                    {/*<MultiSide latest_news={data_giaoduc}/>*/}
                    <ListTongHop dataNews={giaoduc_Twenti}/>
                    {/*        /!* add button xemthem with script more data for tintonghop*!/*/}
                    <button onClick={moreClick} className="btn-xemthem">Xem thêm</button>
                </div>
                <div className="home-right subit">
                    <ComponentRight dataComponent={data_giaoduc.slice(20,25)} title="Tuyển sinh"/>
                    <ComponentRight dataComponent={data_giaoduc.slice(25,30)} title="Chọn nghề - Chọn trường"/>
                    <ComponentRight dataComponent={data_giaoduc.slice(30,35)} title="Du học"/>
                    <ComponentRight dataComponent={data_giaoduc.slice(35,40)} title="Nhà trường"/>
                    <ComponentRight dataComponent={data_giaoduc.slice(40,45)} title="Phụ huynh"/>
                    <ComponentRight dataComponent={data_giaoduc.slice(45,50)} title="Tra cứu điểm thi"/>
                    <ComponentRight dataComponent={data_giaoduc.slice(50,55)} title="Cẩm nang tuyển sinh 2024"/>
                    <ComponentRight dataComponent={data_giaoduc.slice(55,60)} title="Ôn thi tốt nghiệp"/>
                </div>
            </div>
        </div>
    );
};

export default GiaoducPage;