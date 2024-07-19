import React, {useState, useEffect} from 'react';
import DataFetch from "../Components/fetchRSS/DataFetch";
import CategoryNavigation from "../Components/Category/CategoryNavagation/CategoryNavigation";
import ListNewsTop from "../Components/dulich/ListNewsTop";
import ListTongHop from "../Components/tintonghop/ListTongHop";
import ComponentRight from "../Components/tingioitrevadoisong/ComponentRight";
import KhungSuggest from "../Components/baibao/KhungSuggest";
import DanhSachBaiBao from "../Components/baibao/DanhSachBaiBao";
import TopNew from "../Components/dulich/TopNew";
import ItemThiTruong from "../Components/tinthitruong/ItemThiTruong";

const serverLink = "http://localhost:4000/";

const VideoPage = () => {
    
    const [data_video, setData_video] = useState([]);
    const [tonghopstart, setTonghopstart] = useState(68); // Khởi tạo state

    useEffect(()=>{
        const fetchData = async () => {
            try{
                const videoSignal = {signal: "datafetch", datapage:"du-lich"};
                const videodata = await DataFetch(serverLink,videoSignal);
                setData_video(videodata);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();   
    },[])

    const moreClick = () => {
        setTonghopstart(prevTonghopstart => prevTonghopstart + 10);
    };
    const video_Twenti = data_video.slice(38,tonghopstart);
    const defaultItems = [
        "Thời sự",
        "Đời sống",
        "Giải trí",
        "Giáo dục",
        "Sức khỏe",
        "Thể thao",
        "Thế giới",
        "Trực tuyến",
        "Phim ngắn Vietnamese",
        "Bí quyết ôn thi",
        "Bóng đá Sinh viên"
    ];

    return (
        <div className="homeContainer">
            <CategoryNavigation title="Video" data={defaultItems}/>
            <TopNew firstArticle={data_video[0]}/>
            <div className="top-new">
                {/*<h2>Tin thị trường</h2>*/}
                <ItemThiTruong dataComponent={data_video.slice(1,5)} title={" "} cate={"no"}/>

            </div>
            <KhungSuggest dataNews={data_video.slice(5, 12)} title="Giáo dục" noSuggest="no" />
            <KhungSuggest dataNews={data_video.slice(12, 19)} title="Thời sự" noSuggest="no" />
            <KhungSuggest dataNews={data_video.slice(19, 26)} title="Đời sống" noSuggest="no" />
            <KhungSuggest dataNews={data_video.slice(26, 33)} title="Giải trí" noSuggest="no" />
            <KhungSuggest dataNews={data_video.slice(33, 40)} title="Giáo dục" noSuggest="no" />
            <KhungSuggest dataNews={data_video.slice(40, 47)} title="Sức khỏe" noSuggest="no" />
            <KhungSuggest dataNews={data_video.slice(47, 54)} title="Thể thao" noSuggest="no" />
            <KhungSuggest dataNews={data_video.slice(54, 61)} title="Thế giới" noSuggest="no" />
            <KhungSuggest dataNews={data_video.slice(61, 68)} title="Trực tuyến" noSuggest="no" />
            <KhungSuggest dataNews={data_video.slice(68, 75)} title="Phim ngắn Vietnamese" noSuggest="no" />
            <KhungSuggest dataNews={data_video.slice(75, 82)} title="Bí quyết ôn thi" noSuggest="no" />
            <KhungSuggest dataNews={data_video.slice(82, 89)} title="Bóng đá Sinh viên" noSuggest="no" />

        </div>
    );
};

export default VideoPage;