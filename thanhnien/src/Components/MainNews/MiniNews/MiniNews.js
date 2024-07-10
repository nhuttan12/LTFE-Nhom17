import React from "react";
import "./MiniNews.css";

function MiniNews(props) {
  return (
    <div className="post">
      {props.data.map((item, index) => (
        <div key={index} className="post-container">
          {console.log(index)}
          {(index === 0 || index === 4) && <div className="slide"></div>}
          <div className="post-box">
            <a href={item.url}>
              <img className="post-img" src={item.img} alt={item.title} />
            </a>
            <h5>
              <a className="post-title" href={item.url}>
                {item.title}
              </a>
            </h5>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MiniNews;
