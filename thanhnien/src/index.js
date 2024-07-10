import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ListThiTruong from "./Components/tinthitruong/./ListThiTruong";
import ListTongHop from "./Components/tintonghop/ListTongHop";
import DanhSachBaiBao from "./Components/baibao/DanhSachBaiBao";
import Footer from "./Components/common/Footer";
import ListGioiTreVaDoiSong from "./Components/tingioitrevadoisong/ListGioiTreVaDoiSong";
import List24h from "./Components/tin24h/List24h";
import ListTinNhanh360 from "./Components/tinnhanh360/ListTinNhanh360";
import Header from "./Components/Header/Header";
import MainNews from "./Components/MainNews/MainNews";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/*<ListThiTruong/>*/}
    {/* <ListTongHop/> */}
    <Header />
    {/*  <ListTongHop/>*/}
    {/* <DanhSachBaiBao/>
      <Footer/> */}
    <MainNews />
    {/* <Header/> */}
    {/* <ListGioiTreVaDoiSong/> */}
    {/* <ListTinNhanh360/> */}
    {/* <List24h/> */}
    {/* <DanhSachBaiBao/> */}
    {/* <Footer/> */}
    {/* <App/> */}
    {/* <DanhSachBaiBao/> */}
    {/* <Footer/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
