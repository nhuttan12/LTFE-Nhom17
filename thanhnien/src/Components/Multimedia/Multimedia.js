import React from "react";
import "./Multimedia.css";
import parse from "html-react-parser";

function Multimedia({dataComponent}) {
  if (!dataComponent || dataComponent.length < 7) {
    return null; // hoặc hiển thị thông báo lỗi hoặc trạng thái tải
  }
  return (
    <div className="multimedia">
      <div className="multimedia-container">
        <div className="mulimedia-header">
          <div className="category">Multimedia</div>
          <div className="other-category">
            <div className="podcast">
              <a href="https://example.com/">Podcast</a>
            </div>
            <div className="seperate" />
            <div className="video">
              <a href="https://example.com/">Video</a>
            </div>
            <div className="seperate" />
            <div className="magazine">
              <a href="https://example.com/">Magazine</a>
            </div>
          </div>
        </div>
        <div className="multimedia-content">
          <div className="main-multimedia">
            <div className="main-post">
              <div className="img">
                <a href={dataComponent[0].item.link} title={parse(dataComponent[0].item.title)}>
                  <img src={dataComponent[0].item.content.match(/<img src="([^"]*)"/)[1]}
                       alt={parse(dataComponent[0].item.title)}/>
                </a>
              </div>
              <div className="title">
                <a href={dataComponent[0].item.link} title={dataComponent[0].item.title}>
                  {parse(dataComponent[0].item.title)}</a>
              </div>
            </div>
            <div className="multimedia-welcome">
              <div className="welcome">
                <a href={dataComponent[0].item.link} title={dataComponent[0].item.contentSnippet}>
                  {parse(dataComponent[0].item.contentSnippet)}</a>
              </div>
            </div>
          </div>
          <div className="sub-multimedia">
            {dataComponent.slice(1,7).map((item, index) => (
                <div key={index} className="sub-post">
                <div className="img">
                  <a href={item.item.link} title={parse(item.item.title)}>
                    <img src={item.item.content.match(/<img src="([^"]*)"/)[1]} alt={parse(item.item.title)} />
                  </a>
                </div>
                <div className="title">
                  <a href={item.item.link} title={parse(item.item.title)}>
                    {parse(item.item.title)}
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

export default Multimedia;
