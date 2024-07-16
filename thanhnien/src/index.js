import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ListThiTruong from "./Components/tinthitruong/./ListThiTruong";
import ListTongHop from "./Components/tintonghop/ListTongHop";
import DanhSachBaiBao from "./Components/baibao/DanhSachBaiBao";
import Footer from "./Components/Common/Footer";
import MainNews from "./Components/MainNews/MainNews";
import Header from "./Components/Common/Header";
import ListGioiTreVaDoiSong from "./Components/tingioitrevadoisong/ListGioiTreVaDoiSong";
import List24h from "./Components/tin24h/List24h";
import ListTinNhanh360 from "./Components/tinnhanh360/ListTinNhanh360";
import Multimedia from "./Components/Multimedia/Multimedia";
import Category from "./Components/Category/Category";
import SportCategory from "./Components/SportCategory/SportCategory";
import TechnologyCategory from "./Components/TechnologyCategory/TechnologyCategory";
import Carousel from "./Components/carosel/Carousel";
import ListNewsTop from "./Components/dulich/ListNewsTop";
import homeData from "./Json/home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <ListThiTruong /> */}
    {/* <ListTongHop/> */}
    {/* <Header /> */}
    <MainNews />
    {/* <ListTinNhanh360 /> */}
    {/* <List24h/> */}
    {/* <Multimedia /> */}
    {/* <DanhSachBaiBao/> */}
    {/* <ListGioiTreVaDoiSong/> */}
    {/* <List24h/> */}
    {/* <App/> */}
    {/* <Category/> */}
    {/* <Carousel title="Xung đột Ukaraina" />*/}
    {/* <ListNewsTop/> */}
    {/* <SportCategory /> */}
    {/* <TechnologyCategory /> */}
    {/* <ListNewsTop dataNewsTop={homeData} /> */}
    {/* <Footer/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
