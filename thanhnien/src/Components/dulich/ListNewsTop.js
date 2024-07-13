import React from 'react';
import TopNew from "./TopNew";
import ItemThiTruong from "../tinthitruong/ItemThiTruong";
import homeData from "../../Json/home.json";
const ListNewsTop = () => {
    return (
        <div className="Carousel">
            <TopNew dataNews={homeData} numData={8}/>
        </div>
    );
};

export default ListNewsTop;
