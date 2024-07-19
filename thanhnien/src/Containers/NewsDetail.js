import React, { useEffect, useRef, useState } from "react";
import DataFetch from "../Components/fetchRSS/DataFetch";
import parse from "html-react-parser";
import ReactDOM from "react-dom";
import Header from "../Components/Common/Header";
import Footer from "../Components/Common/Footer";
import ReactPlayer from "react-player";

const serverLink = "http://localhost:4000/";

function NewsDetail() {
  const [test_data, setTest_data] = useState(null);
  const [videoProps, setVideoProps] = useState(null);
  const videoDivRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ngaymoidadenSignal = {
          signal: "detailarticle",
          articlepage:
            "https://thanhnien.vn/dam-vinh-hung-bi-cam-dien-9-thang-185240716132440871.htm",
        };
        const testData = await DataFetch(serverLink, ngaymoidadenSignal);
        setTest_data(testData);

        // Extract video properties from test_data.content
        const parser = new DOMParser();
        const doc = parser.parseFromString(testData.content, "text/html");
        const videoDiv = doc.querySelector("div.VCSortableInPreviewMode");

        if (videoDiv) {
          setVideoProps({
            type: videoDiv.getAttribute("type"),
            embedType: videoDiv.getAttribute("embed-type"),
            dataWidth: videoDiv.getAttribute("data-width"),
            dataHeight: videoDiv.getAttribute("data-height"),
            dataVid: videoDiv.getAttribute("data-vid"),
            dataInfo: videoDiv.getAttribute("data-info"),
            dataAutoplay: videoDiv.getAttribute("data-autoplay") === "true",
            dataRemovedLogo: videoDiv.getAttribute("data-removedlogo"),
            dataLocation: videoDiv.getAttribute("data-location"),
            dataDisplayMode: videoDiv.getAttribute("data-displaymode"),
            dataThumb: videoDiv.getAttribute("data-thumb"),
            dataContentId: videoDiv.getAttribute("data-contentid"),
            dataNamespace: videoDiv.getAttribute("data-namespace"),
            dataOriginalId: videoDiv.getAttribute("data-originalid"),
            videoId: videoDiv.getAttribute("videoid"),
          });
        }
        doc.querySelector("div.VCSortableInPreviewMode").remove();
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);
  console.log(test_data);

  // Lấy src của bức ảnh trong content
  const extractAnchorTag = (htmlString) => {
    const anchorTagRegex = /<a[^>]*>(.*?)<\/a>/;
    const match = htmlString.match(anchorTagRegex);
    return match ? match[0] : "";
  };

  const addProtocol = (url) => {
    if (!url) return "";
    if (url.startsWith("http://") || url.startsWith("https://")) {
      return url;
    }
    return `https://${url}`;
  };

  return (
    <div>
      <div className="component">
        <div className="component-flex">
          <div className="category">
            <div className="category-name">
              {test_data ? parse(test_data.category) : "Loading..."}
            </div>
          </div>
          <div className="title">
            <div className="title">
              {test_data ? parse(test_data.title) : "Loading..."}
            </div>
          </div>
          <div className="author">
            <div className="author-name">
              {test_data ? parse(test_data.author) : "Loading..."}
            </div>
          </div>
          <div className="content">
            <div className="content-box">
              {test_data ? parse(test_data.content) : "Loading..."}
              <br></br>
              {test_data ? (
                <ReactPlayer
                  url={addProtocol(videoProps.dataVid)}
                  playing={true}
                  controls={true}
                  width={videoProps.dataWidth}
                  height={videoProps.dataHeight}
                />
              ) : (
                "Loading..."
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsDetail;
