import React, { useEffect, useRef, useState } from "react";
import DataFetch from "../Components/fetchRSS/DataFetch";
import parse from "html-react-parser";
import ReactPlayer from "react-player";
import { useLocation } from 'react-router-dom';
import GetDetailArticle from "../Components/fetchRSS/GetDetailArticle";

const serverLink = "http://localhost:4000/";

function NewsDetail() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const link = params.get('link');

  const [detailArticleData, setDetailArticleData] = useState(null);
  const [videoProps, setVideoProps] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const articleData = await GetDetailArticle(serverLink, link);
        setDetailArticleData(articleData);

        // Extract video properties from test_data.content
        const parser = new DOMParser();
        const doc = parser.parseFromString(articleData.content, "text/html");
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

    if (link) {
      fetchData();
    }

  }, [link]);

  console.log(detailArticleData);

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
              {detailArticleData ? parse(detailArticleData.category) : "Loading..."}
            </div>
          </div>
          <div className="title">
            <div className="title">
              {detailArticleData ? parse(detailArticleData.title) : "Loading..."}
            </div>
          </div>
          <div className="author">
            <div className="author-name">
              {detailArticleData ? parse(detailArticleData.author) : "Loading..."}
            </div>
          </div>
          <div className="content">
            <div className="content-box">
              {detailArticleData ? parse(detailArticleData.content) : "Loading..."}
              <br />
              {videoProps ? (
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
