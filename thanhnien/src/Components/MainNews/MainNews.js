import React, { useEffect, useState } from "react";
import "./MainNews.css";
import LatestNews from "./LatestNews";
import PopularNews from "./PopularNews";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import MiniNews from "./MiniNews/MiniNews";

import axios from "axios";
import parse from "html-react-parser";

const MainNews = () => {
  const [data_tin, setData_tin] = useState([]);
  // Format khi gửi Post

  const getData_tin = async () => {
    try {
      const go = {
        signal: "home",
      };
      const res = await axios.post("http://localhost:4000/", go);
      setData_tin(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  // End format

  // Gọi sau khi render component để render lại lần nữa
  useEffect(() => {
    getData_tin();
  }, []);

  // Lấy src của bức ảnh trong content
  const extractAnchorTag = (htmlString) => {
    const anchorTagRegex = /<a[^>]*>(.*?)<\/a>/;
    const match = htmlString.match(anchorTagRegex);
    return match ? match[0] : "";
  };
  console.log(data_tin);

  const latest_news = [...data_tin].sort(() => 0.5 - Math.random());
    return (
        <div className="section-home">
          <div className="main-news">
            <div className="main-news-container">
              <div className="main-news-flex">
                <div className="top-news">
                  <div className="top-news-img">
                    {data_tin.length > 0 && parse(extractAnchorTag(data_tin[0].item.content))}
                  </div>
                  <div className="top-news-name">
                    <div className="top-news-title">
                      <a href={data_tin.length > 0 && data_tin[0].item.link}>{data_tin.length > 0 && parse(data_tin[0].item.title)}</a>
                    </div>
                    <div className="top-news-description font">
                      <a href={data_tin.length > 0 && data_tin[0].item.link}>{data_tin.length > 0 && data_tin[0].item.contentSnippet}</a>
                    </div>
                  </div>
                </div>
                <div className="middle-news">
                  <div className="middle-news-container">
                    <div className="middle-news-grid">
                      {data_tin.slice(1, 4).map((item) => (
                          <div className="middle-news-item">
                            <div className="title">
                              <a href={item.item.link}>{parse(item.item.title)}</a>
                            </div>
                            <div className="description font">
                              <a href={item.item.link}>{item.item.contentSnippet}</a>
                            </div>
                          </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mini-news-container" style={{width: '100%'}}>
              <MiniNews data={data_tin.slice(6, 14)}/>
            </div>
          </div>
          <div className="sub-news">
            <div className="sub-news-container">
              <div className="sub-news-tab">
                <Tabs
                    defaultActiveKey="latest"
                    id="fill-tab-example"
                    className="mb-3 subs-tab"
                    fill
                >
                  <Tab eventKey="latest" title="Tin mới">
                    <div className="latest-news">
                      {latest_news.slice(0, 6).map((item, index) => (
                          <LatestNews key={index} data={item}/>
                      ))}
                    </div>
                  </Tab>
                  <Tab eventKey="popular" title="Đọc nhiều">
                    <div className="popular-news tab">
                      {latest_news.slice(6, 18).map((item, index) => (
                          <PopularNews key={index} data={item}/>
                      ))}
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </div>
            <div className="sub-news-box-blog">
              <div className="box-blog-container">
                <div className="box-blog-flex">
                  <div className="box-container">
                    <div className="box-flex">
                      <div className="box-topic font">Chào ngày mới</div>
                      <div className="box-title">
                        Để không gian được văn minh, tử tế
                      </div>
                      <div className="box-author">
                        <div className="author-image">
                          <img
                              src="https://static.thanhnien.com.vn/thanhnien.vn/image/ava_inter.png"
                              alt="Nữ Vương"
                          />
                        </div>
                        <div className="author-flex">
                          <div className="author font">Tác giả</div>
                          <div className="author-name font">Nữ Vương</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="blog-container">
                    <div className="blog-flex">
                      <div className="blog-topic font">Blog phóng viên</div>
                      <div className="blog-title">Xử lý triệt để thẩm mỹ chui</div>
                      <div className="blog-author">
                        <div className="author-image">
                          <img
                              src="https://static.thanhnien.com.vn/thanhnien.vn/image/ava_inter.png"
                              alt="Nữ Vương"
                          />
                        </div>
                        <div className="author-flex">
                          <div className="author font">Tác giả</div>
                          <div className="author-name font">Nữ Vương</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  };
export default MainNews;
