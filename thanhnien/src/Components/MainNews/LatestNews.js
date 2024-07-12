import React from "react";
import RssCaller from "../rsscaller/RssCaller.mjs"

function LatestNews(props) {
  return (
    <div className="latest-news-container">
      <div className="latest-news-item">
        <a className="item font" href={props.data.url}>
          &#9675; {props.data.title}
        </a>
      </div>
    </div>
  );
}

export default LatestNews;
