import parse from "html-react-parser";
import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import ReactPlayer from "react-player";
import { useLocation } from 'react-router-dom';
import GetDetailArticle from "../fetchRSS/GetDetailArticle";
import "./NewsDetail.css";
const serverLink = "http://localhost:4000/";

function NewsDetail() {

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const link = params.get('link');
  const [detailArticleData, setDetailArticleData] = useState(null);

  const [videoProps, setVideoProps] = useState(null);
  const [imageProps, setImageProps] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const articleData = await GetDetailArticle(serverLink, link);
        setDetailArticleData(articleData);
        // Extract video properties from test_data.content
        const parser = new DOMParser();
        const doc = parser.parseFromString(articleData, "text/html");
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
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

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
              {detailArticleData ? parse(detailArticleData.category) : "Loading..."}
            </div>
          </div>
          <div className="title">
            <div className="title">
              {detailArticleData ? parse(detailArticleData.title) : "Loading..."}
            </div>
          </div>
          <div className="content">
            <div className="top-content">
              <div className="author">
                <div className="img">
                  <FaUserCircle size={35} />
                </div>
                <div className="author-name">
                  {detailArticleData ? parse(detailArticleData.author) : "Loading..."}
                </div>
              </div>
              <div className="date">
                {detailArticleData ? parse(detailArticleData.date) : "Loading..."}
              </div>
            </div>
            <div className="middle-content">
              {detailArticleData ? parse(detailArticleData.content) : "Loading..."}
              {detailArticleData && videoProps && videoProps.type === "VideoStream" && (
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
