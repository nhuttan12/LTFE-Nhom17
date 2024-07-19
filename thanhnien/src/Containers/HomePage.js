import React, { useEffect, useState } from "react";
import Header from "../Components/Common/Header";
import MainNews from "../Components/MainNews/MainNews";
import Multimedia from "../Components/Multimedia/Multimedia";
import DanhSachBaiBao from "../Components/baibao/DanhSachBaiBao";
import axios from "axios";
import BaiBaoSingle from "../Components/baibao/BaiBaoSingle";
import Footer from "../Components/Common/Footer";
import '../Components/baibao/cssBaiBao.css';
import '../Containers/Page.css'
import ListTinNhanh360 from "../Components/tinnhanh360/ListTinNhanh360";
import ItemThiTruong from "../Components/tinthitruong/ItemThiTruong";
import '../Components/dulich/topNews.css';
import ListTongHop from "../Components/tintonghop/ListTongHop";
import Carousel from "../Components/carosel/Carousel";
import ListNineTitle from "../Components/carosel/ListNineTitle";
import KhungSuggest from "../Components/baibao/KhungSuggest";
import DataFetch from "../Components/fetchRSS/DataFetch";
import shuffle from "./shuffle";
import Item1 from "../Components/baibao/Item1";
import ComponentRight from "../Components/tingioitrevadoisong/ComponentRight";
import MultiSide from "../Components/Multimedia/MultiSide";

const serverLink = "http://localhost:4000/";

const HomePage = () => {
    

    // Các biến chứa data khi fetch về
    const [data_tin, setData_tin] = useState([]); // trang chủ
    const [data_thoisu, setData_thoisu] = useState([]); // thời sự
    const [data_thegioi, setData_thegioi] = useState([]); // thế giới
    const [data_giao_duc, setData_giao_duc] = useState([]); // giáo dục
    const [data_van_hoa, setData_van_hoa] = useState([]); // văn hóa
    const [data_giai_tri, setData_giai_tri] = useState([]); // giải trí
    const [data_ban_doc, setData_ban_doc] = useState([]); // bạn đọc
    const [data_gioi_tre, setData_gioi_tre] = useState([]); // giới trẻ
    const [data_doi_song, setData_doi_song] = useState([]); // đời sống
    const [data_kinh_te, setData_kinh_te] = useState([]); // kinh tế
    const [data_cong_nghe, setData_cong_nghe] = useState([]); // công nghệ
    const [data_suc_khoe, setData_suc_khoe] = useState([]); // sức khỏe
    const [data_du_lich, setData_du_lich] = useState([]); // du lịch
    const [data_xe, setData_xe] = useState([]); // xe

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const homeSignal = {signal: "datafetch", datapage:"home"};
                const thoisuSignal = {signal: "datafetch", datapage:"thoi-su"};
                const thegioiSignal = {signal: "datafetch", datapage:"the-gioi"};
                const giaoDucSignal = { signal: "datafetch", datapage: "giao-duc" };
                const vanHoaSignal = { signal: "datafetch", datapage: "van-hoa" };
                const giaiTriSignal = { signal: "datafetch", datapage: "giai-tri" };
                const banDocSignal = { signal: "datafetch", datapage: "ban-doc" };
                const gioiTreSignal = { signal: "datafetch", datapage: "gioi-tre" };
                const doiSongSignal = { signal: "datafetch", datapage: "doi-song" };
                const kinhTeSignal = { signal: "datafetch", datapage: "kinh-te" };
                const congNgheSignal = { signal: "datafetch", datapage: "cong-nghe" };
                const sucKhoeSignal = { signal: "datafetch", datapage: "suc-khoe" };
                const duLichSignal = { signal: "datafetch", datapage: "du-lich" };
                const xeSignal = { signal: "datafetch", datapage: "xe" };

                const dataTin = await DataFetch(serverLink,homeSignal);
                const dataThoisu = await DataFetch(serverLink,thoisuSignal) ;
                const dataThegioi = await DataFetch(serverLink,thegioiSignal);
                const dataGiaoduc = await DataFetch(serverLink, giaoDucSignal);
                const dataVanhoa = await DataFetch(serverLink, vanHoaSignal);
                const dataGiaitri = await DataFetch(serverLink, giaiTriSignal);
                const dataBandoc = await DataFetch(serverLink, banDocSignal);
                const dataGioitre = await DataFetch(serverLink, gioiTreSignal);
                const dataDoisong = await DataFetch(serverLink, doiSongSignal);
                const dataKinhte = await DataFetch(serverLink, kinhTeSignal);
                const dataCongnghe = await DataFetch(serverLink, congNgheSignal);
                const dataSuckhoe = await DataFetch(serverLink, sucKhoeSignal);
                const dataDulich = await DataFetch(serverLink, duLichSignal);
                const dataXe = await DataFetch(serverLink, xeSignal);

                setData_tin(dataTin);
                setData_thoisu(dataThoisu);
                setData_thegioi(dataThegioi);
                setData_giao_duc(dataGiaoduc);
                setData_van_hoa(dataVanhoa);
                setData_giai_tri(dataGiaitri);
                setData_ban_doc(dataBandoc);
                setData_gioi_tre(dataGioitre);
                setData_doi_song(dataDoisong);
                setData_kinh_te(dataKinhte);
                setData_cong_nghe(dataCongnghe);
                setData_suc_khoe(dataSuckhoe);
                setData_du_lich(dataDulich);
                setData_xe(dataXe);
            }catch (err) {
                console.log(err);
            }
        };
        fetchData();
    },[])

    //

    const randomThoisu = shuffle(data_thoisu);
    const randomHome = [...data_tin].sort(() => 0.5 - Math.random());

    //
    const [tonghopstart, setTonghopstart] = useState(40); // Khởi tạo state
    const moreClick = () => {
        setTonghopstart(prevTonghopstart => prevTonghopstart + 10);
    };
    // Get the articles from the shuffled list
    const home_Nine = randomHome.slice(0, 9);
    const tin24h = randomHome.slice(9, 17);
    const tinthitruong = randomHome.slice(17, 25);
    const tin360 = randomHome.slice(25, 31);
    const thoisu_Four = randomThoisu.slice(0, 4);
    const thoisu_Six = randomThoisu.slice(4, 10);
    const thoisu_Eight = randomThoisu.slice(10, 18);
    const thoisu_Nine = randomThoisu.slice(18, 26);
    const thoisu_Twenti = randomThoisu.slice(26,tonghopstart);
    // const BlueFour = random.slice(8, 12);
    return (
        <div className="homeContainer">
            <div className="homeContent">
                <MainNews/>
            </div>
            <div className="home-flex">
                <div className="home-left">
                    <div className="top-new">
                    {/*tin24h*/}
                    <h2>Tin 24h</h2>
                    <ItemThiTruong dataComponent={tin24h} cate="no"/>
                    {/*!*tinnhanh360*!/*/}
                    <ListTinNhanh360 dataComponent={tin360}/>
                    {/*tinthitruong*/}
                    <h2>Tin thị trường</h2>
                    <ItemThiTruong dataComponent={tinthitruong} cate="yes"/>
                    </div>
                </div>
                <div className="home-right">
                    {/*5 gioitre*/}
                    <ComponentRight dataComponent={data_gioi_tre.slice(0,5)} title="Giới trẻ"/>
                    <ComponentRight dataComponent={data_doi_song.slice(0,5)} title="Đời sống"/>
                    {/*5 doisong*/}
                </div>
            </div>
              <Multimedia dataComponent={data_giao_duc.slice(0,20)}/>
            <div className="home-flex">
                <div className="home-left">
            {/*        /!*4 tintonghop*!/*/}
                    <ListTongHop dataNews={thoisu_Four}/>
            {/*        /!*6 carousel*!/*/}
                    <Carousel dataNews={thoisu_Six} title="Xung đột Ukaraina"/>
            {/*        /!* 20 tintonghop*!/*/}
                    <ListTongHop dataNews={thoisu_Twenti}/>
                    {/*        /!* add button xemthem with script more data for tintonghop*!/*/}
                    <button onClick={moreClick} className="btn-xemthem">Xem thêm</button>
                </div>
                <div className="home-right">
                    <ComponentRight dataComponent={data_kinh_te.slice(0,5)} title="Kinh tế"/>
                    {/*        /!*5 kinhte same gioitre*!/*/}
                    <ComponentRight dataComponent={data_kinh_te.slice(5,8)} title="Kinh tế xanh"/>
                    {/*        /!*5 kinhtexanh*!/*/}
                    <ComponentRight dataComponent={data_suc_khoe.slice(0,5)} title="Sức khỏe"/>
                    {/*        /!*5 suckhoe*!/*/}
                    <ComponentRight dataComponent={data_cong_nghe.slice(0,5)} title="Công nghệ"/>
                    {/*        /!*5 congnghe*!/*/}
                    <ComponentRight dataComponent={data_du_lich.slice(0,5)} title="Du lịch"/>
                    {/*        /!*5 dulich*!/*/}
                    <ComponentRight dataComponent={data_xe.slice(0,5)} title="Xe"/>
                    {/*        /!*5 xe*!/*/}
                </div>
            </div>
            <div className="homeContent">
                {/*    /!*8 data from thoisu*!/*/}
                <DanhSachBaiBao dataNews={thoisu_Eight} title="Thời sự"/>
                <div className="line"></div>
                {/*        /!*9 data kem title from thoisu*!/*/}
                <BaiBaoSingle dataComponent={thoisu_Nine} cate={["Pháp luật", "Thời luận", "Chống tin giả"]}/>
                <div className="line"></div>

                {/*    /!*8 data from thegioi*!/*/}
                <DanhSachBaiBao dataNews={data_thegioi.slice(0, 8)} title="Thế giới"/>
                <div className="line"></div>
                {/*    /!*giao duc*!/*/}
                <KhungSuggest dataNews={data_giao_duc.slice(0, 7)} title="Giáo dục" noSuggest="no"/>
                <div className="line"></div>
                {/*    /!*van hoa*!/*/}
                <KhungSuggest dataNews={data_van_hoa.slice(0, 7)} title="Văn hóa" noSuggest="no"/>
                <div className="line"></div>
                {/*    /!*giai tri*!/*/}
                <KhungSuggest dataNews={data_giai_tri.slice(0, 7)} title="Giải trí" noSuggest="no"/>
                <div className="line"></div>
                {/*    /!*bandoc*!/*/}
                <div className="ds-noi-dung" >
                <Item1 firstArticle={data_ban_doc[0]} haveDes="no" title="Bạn đọc" wid={351}/>
                <Item1 firstArticle={data_ban_doc[1]} haveDes="no" title="Bạn đọc" wid={351}/>
                <Item1 firstArticle={data_ban_doc[2]} haveDes="no" title="Bạn đọc" wid={351}/>
                </div>
                <div className="line"></div>
                {/*    /!*ban doc la 6 data get component Item1*!/*/}

                {/*    <div className="ds-noi-dung">*/}
                {/*        <BaiBaoSingle/>*/}
                {/*        /!*9 data kem title from thoisu*!/*/}
                <ListNineTitle dataNews={home_Nine} title="Tin tức mới nhất"/>
            </div>
        </div>
    );
};

export default HomePage;