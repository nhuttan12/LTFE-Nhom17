import React from "react";
import "./MiniNews.css";
import parse from "html-react-parser";

function MiniNews(props) {
  const extractAnchorTag = (htmlString) => {
    const anchorTagRegex = /<a[^>]*>(.*?)<\/a>/;
    const match = htmlString.match(anchorTagRegex);
    return match ? match[0] : "";
  };
  return (
    <div className="post">
      {props.data.map((item, index) => (
        <div key={index} className="post-container">
          {(index === 0 || index === 4) && <div className="slide"></div>}
          <div className="post-box">
            {parse(extractAnchorTag(item.item.content))}
            <h5>
              <a className="post-title" href={item.item.link}>
                {parse(item.item.title)}
              </a>
            </h5>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MiniNews;
