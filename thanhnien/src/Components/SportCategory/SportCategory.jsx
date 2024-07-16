import React, { useEffect, useState } from "react";
import "./SportCategory.css";
import axios from "axios";
import parse from "html-react-parser";
import DataFetch from "../fetchRSS/DataFetch";

function SportCategory() {

  const theThaoSignal = {signal: "datafetch", datapage:"the-thao"};
  const serverLink = "http://localhost:4000/";
  const data_sport = DataFetch(serverLink,theThaoSignal).data;

  const extractAnchorTag = (htmlString) => {
    const anchorTagRegex = /<a[^>]*>(.*?)<\/a>/;
    const match = htmlString.match(anchorTagRegex);
    return match ? match[0] : "";
  };

  return (
    <div>
      <div className="sport-container">
        <div className="sport-main-news">
          <div className="sport-top">
            <div className="sport-top-container">
              <div className="sport-left">
                <div className="main-image">
                  {data_sport.length > 0 && parse(extractAnchorTag(data_sport[0].item.content))}
                </div>
                <div className="main-title">
                  <a href={data_sport.length > 0 && data_sport[0].item.link}>
                    <h2>{data_sport.length > 0 && parse(data_sport[0].item.title)}</h2>
                  </a>
                </div>
                <div className="main-description">
                  <a href={data_sport.length > 0 && data_sport[0].item.link}>{data_sport.length > 0 && data_sport[0].item.contentSnippet}</a>
                </div>
              </div>
              <div className="sport-right">
                <div className="top-post">
                  <div className="image">
                  {data_sport.length > 0 && parse(extractAnchorTag(data_sport[1].item.content))}
                  </div>
                  <div className="title">
                    <a href={data_sport.length > 0 && data_sport[1].item.link}>
                      <h5>{data_sport.length > 0 && parse(data_sport[1].item.title)}</h5>
                    </a>
                  </div>
                </div>
                <div className="middle-post">
                  <div className="image">
                  {data_sport.length > 0 && parse(extractAnchorTag(data_sport[2].item.content))}
                  </div>
                  <div className="title">
                    <a href={data_sport.length > 0 && data_sport[2].item.link}>
                      <h5>{data_sport.length > 0 &&  parse(data_sport[2].item.title)}</h5>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sport-middle">
            {data_sport.slice(2,5).map((item) => (
              <div className="post">
                <div className="image">
                  {parse(extractAnchorTag(item.item.content))}
                </div>
                <div className="title">
                  <a href={item.item.link}>
                    <h5>{parse(item.item.title)}</h5>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SportCategory;
