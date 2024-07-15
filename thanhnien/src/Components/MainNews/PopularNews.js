import React from "react";
import "./MainNews.css";
import parse from "html-react-parser";
function PopularNews(props) {
  return (
    <div className="popular-news">
      <div className="popular-news-item">
        <a className="item font" href={props.data.item.link}>
          &#9675; {parse(props.data.item.title)}
        </a>
      </div>
    </div>
  );
}

export default PopularNews;
