import React, { useEffect, useState } from "react";
import ItemTinNhanh360 from "./ItemTinNhanh360";
import "./tinhanh360.css";
import axios from "axios";
import DataFetch from "../fetchRSS/DataFetch";

const ListTinNhanh360 = () => {
  
  const tinnhanh360Signal = {signal: "datafetch", datapage:"tin-nhanh-360"};
  const serverLink = "http://localhost:4000/";
  const data_tinnhanh360 = DataFetch(serverLink,tinnhanh360Signal).data;
  return (
    <div className="tinnhanh360">
      <div className="tinnhanh360-container">
        <div className="tinnhanh360-title">
          Tin nhanh
          <span>360</span>
        </div>
        <div className="tinnhanh360List">
          {data_tinnhanh360.slice(0,6).map((tinnhanh, index) => (
            <ItemTinNhanh360 key={index} stuff={tinnhanh.item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListTinNhanh360;
