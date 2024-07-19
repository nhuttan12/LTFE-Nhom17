import parse from "html-react-parser";
import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import ReactPlayer from "react-player";
import DataFetch from "../fetchRSS/DataFetch";
import "./NewsDetail.css";

const serverLink = "http://localhost:4000/";

function NewsDetail() {
  const [test_data, setTest_data] = useState(null);
  const [videoProps, setVideoProps] = useState(null);
  const [imageProps, setImageProps] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ngaymoidadenSignal = {
          signal: "detailarticle",
          articlepage:
            "https://thanhnien.vn/dam-vinh-hung-bi-cam-dien-9-thang-185240716132440871.htm",
            // "https://thanhnien.vn/tphcm-se-thu-ve-khoang-120000-ti-dong-tu-ban-quy-dat-metro-va-vanh-dai-3-185240719153204625.htm",
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
          // }
            // const photoDiv = doc.querySelector("div.VCSortableInPreviewMode");
            // setImageProps({
            //   type: videoDiv.getAttribute("type"),
            //   src: photoDiv.getAttribute("src"),
            //   width: photoDiv.getAttribute("w"),
            //   height: photoDiv.getAttribute("h"),
            //   alt: photoDiv.getAttribute("alt"),
            //   title: photoDiv.getAttribute("title"),
            // });
        }
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
    <div className="news-details">
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
          <div className="content">
            <div className="top-content">
              <div className="author">
                <div className="img">
                  <FaUserCircle size={35} />
                </div>
                <div className="author-name">
                  {test_data ? parse(test_data.author) : "Loading..."}
                </div>
              </div>
              <div className="date">
                {test_data ? parse(test_data.date) : "Loading..."}
              </div>
            </div>
            <div className="middle-content">
              {test_data ? parse(test_data.content) : "Loading..."}
              {test_data && videoProps && videoProps.type === "VideoStream" && (
                <ReactPlayer
                  url={addProtocol(videoProps.dataVid)}
                  playing={true}
                  controls={true}
                  width={videoProps.dataWidth}
                  height={videoProps.dataHeight}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsDetail;
