import React, { useEffect, useState } from "react";
import ItemTinNhanh360 from "./ItemTinNhanh360";
import "./tinhanh360.css";
import DataFetch from "../fetchRSS/DataFetch";

const serverLink = "http://localhost:4000/";

const ListTinNhanh360 = () => {
  
  const [data_tinnhanh360, setData_tinnhanh360] = useState([]);

  useEffect(()=>{
    const fetchData = async () => {
      try{
        const tinnhanh360Signal = {signal: "datafetch", datapage:"tin-nhanh-360"};
        const tinnhanh360data = await DataFetch(serverLink,tinnhanh360Signal);
        setData_tinnhanh360(tinnhanh360data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
      
  },[])
  
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
