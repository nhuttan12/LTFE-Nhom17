import React, { useEffect, useState } from "react";
import ItemTinNhanh360 from "./ItemTinNhanh360";
import "./tinhanh360.css";
import axios from "axios";
import DataFetch from "../fetchRSS/DataFetch";

const ListTinNhanh360 = ({dataComponent}) => {
  return (
    <div className="tinnhanh360">
      <div className="tinnhanh360-container">
        <div className="tinnhanh360-title">
          Tin nhanh
          <span>360</span>
        </div>
        <div className="tinnhanh360List">
          {dataComponent.slice(0,6).map((tinnhanh, index) => (
            <ItemTinNhanh360 key={index} stuff={tinnhanh.item}
                             spec={index % 2 !== 0 ? "yes" : undefined}
                             mar={index === 3 || index === 5 ? "yes" : undefined}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListTinNhanh360;
