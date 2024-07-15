import React from "react";
import "./MainNews.css";
import parse from "html-react-parser";
function LatestNews(props) {
  return (
    <div className="latest-news-container">
      <div className="latest-news-item">
        <a className="item font" href={props.data.item.link}>
          &#9675; {parse(props.data.item.title)}
        </a>
      </div>
    </div>
  );
}

export default LatestNews;
