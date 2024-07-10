import React from "react";

function PopularNews(props) {
  return (
    <div className="popular-news">
      <div className="popular-news-item">
        <a className="item font" href={props.data.url}>
          &#9675; {props.data.title}
        </a>
      </div>
    </div>
  );
}

export default PopularNews;
