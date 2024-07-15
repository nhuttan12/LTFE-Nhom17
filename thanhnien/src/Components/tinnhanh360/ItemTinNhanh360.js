import React from "react";
import parse from "html-react-parser";

const ItemTinNhanh360 = (props) => {
  const extractAnchorTag = (htmlString) => {
    const anchorTagRegex = /<a[^>]*>(.*?)<\/a>/;
    const match = htmlString.match(anchorTagRegex);
    return match ? match[0] : "";
  };
  return (
    <div className="tinnhanh360-item">
      <div className="tinnhanh360-img">
        {parse(extractAnchorTag(props.stuff.content))}
      </div>
      <div className="tinnhanh360-url">
        <a href={parse(props.stuff.link)}>{parse(props.stuff.title)}</a>
      </div>
    </div>
  );
};

export default ItemTinNhanh360;
