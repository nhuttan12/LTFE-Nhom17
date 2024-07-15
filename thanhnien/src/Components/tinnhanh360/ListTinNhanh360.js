import React, { useEffect, useState } from "react";
import ItemTinNhanh360 from "./ItemTinNhanh360";
import "./tinhanh360.css";
import axios from "axios";

const ListTinNhanh360 = () => {
  const [data_tinnhanh360, setData_tinnhanh360] = useState([]);

  console.log(data_tinnhanh360);

  // const getData_tinhnhanh360 = async () => {
  //     try {
  //      const res = await axios.get("http://localhost:4000/");
  //      setData_tinnhanh360(res.data);
  //  } catch (error) {
  //      console.log(error);
  //   }
  // }

  // Format khi gửi Post
  const getData_tinhnhanh360 = async () => {
    try {
      const go = {
        signal: "tin-nhanh-360",
      };
      const res = await axios.post("http://localhost:4000/", go);
      setData_tinnhanh360(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  // End format

  // Gọi sau khi render component để render lại lần nữa
  useEffect(() => {
    getData_tinhnhanh360();
  }, []);

  return (
    <div className="tinnhanh360">
      <div className="tinnhanh360-container">
        <div className="tinnhanh360-title">
          Tin nhanh
          <span>360</span>
        </div>
        <div className="tinnhanh360List">
          {data_tinnhanh360.map((tinnhanh, index) => (
            <ItemTinNhanh360 key={index} stuff={tinnhanh.item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListTinNhanh360;
