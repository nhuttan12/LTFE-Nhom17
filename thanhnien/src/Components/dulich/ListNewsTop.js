import React, {useEffect, useState} from 'react';
import TopNew from "./TopNew";
import ItemThiTruong from "../tinthitruong/ItemThiTruong";
import ThreeBigNews from "./ThreeBigNews";
import './topNews.css';
import ForNewsBlue from "./ForNewsBlue";

const ListNewsTop = ({dataNews}) => {
    const firstArticle = dataNews[0];
    const nextFourArticles = dataNews.slice(1, 5);
    const nextThreeArticles = dataNews.slice(5, 8);
    const BlueFourArticles = dataNews.slice(8, 12);
    return (
        <div className="Carousel">
            <TopNew firstArticle={firstArticle}/>
            <div className="top-new">
                {/*<h2>Tin thị trường</h2>*/}
                <ItemThiTruong dataComponent={nextFourArticles} title={" "} cate={"no"}/>

            </div>
            <div className="top-new border">
                <h2>Khám phá</h2>
                <ThreeBigNews dataComponent={nextThreeArticles}/>
            </div>
            <div className="top-new border">
                <h2>Chơi gì, ăn đâu, đi thế nào?</h2>
                <ForNewsBlue dataComponent={BlueFourArticles}/>
            </div>
        </div>
    );
};

export default ListNewsTop;
