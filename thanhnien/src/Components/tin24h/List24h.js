import React, { useEffect,useState } from "react";
import Item24h from "./Item24h";
import tin24hcss from "./csstin24h.css"
import axios from "axios";
import DataFetch from "../fetchRSS/DataFetch";

const List24h = () =>{

    const tin24hSignal = {signal: "datafetch", datapage:"tin-24h"};
    const serverLink = "http://localhost:4000/";
    const data_24h = DataFetch(serverLink,tin24hSignal).data;
    return (
        <div className="container-24h">
            <h2>Tin 24h</h2>
            <div className="list24h">
                {data_24h.slice(0,8).map((item24h, index)=>(
                    <Item24h
                        key={index}
                        stuff={item24h.item.content}
                    />
                ))}
            </div>
        </div>
    )
}

export default List24h;