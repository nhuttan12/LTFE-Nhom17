import React, { useEffect, useState } from "react";
import "./MainNews.css";
import LatestNews from "./LatestNews";
import PopularNews from "./PopularNews";
import MiniNews from "./MiniNews/MiniNews";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import parse from "html-react-parser";
import DataFetch from "../fetchRSS/DataFetch";
import GetDetailArticle from "../fetchRSS/GetDetailArticle";

const serverLink = "http://localhost:4000/";

const MainNews = () => {
  
  //animation của tab
  const [value, setValue] = useState("1"); 
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  // Các biến chứa dữ liệu khi fetch
  const [data_tin, setData_tin] = useState([]);
  const [data_ngaymoi,setData_ngaymoi] = useState([]);
  const [data_phongvien,setData_phongvien] = useState([]);
  const [ngaymoiFirstData, setNgaymoiFirstData] = useState(null);
  const [phongvienFirstData, setPhongvienFirstData] = useState(null);
  
  // Sử dụng useState và useEffect để fetch data qua server nội bộ 
  useEffect(() => {
    // Khai báo hàm dùng để fetch
    const fetchData = async () => {
      try {
        // Chuẩn bị signal trong giao thức
        const homeSignal = { signal: "datafetch", datapage: "home" };
        const ngaymoiSignal = { signal: "datafetch", datapage: "chao-ngay-moi" };
        const blogphongvienSignal = { signal: "datafetch", datapage: "blog-phong-vien" };
        // Fetch data
        const homeData = await DataFetch(serverLink, homeSignal);
        const ngaymoiData = await DataFetch(serverLink, ngaymoiSignal);
        const phongvienData = await DataFetch(serverLink,blogphongvienSignal);
        // Gán data
        setData_tin(homeData);
        setData_ngaymoi(ngaymoiData);
        setData_phongvien(phongvienData);

        if (ngaymoiData.length > 0) {
          const detailRes1 = await GetDetailArticle(serverLink,ngaymoiData[0].item.guid);
          setNgaymoiFirstData(detailRes1);
          console.log('Đây nè', detailRes1);
        }

        if (phongvienData.length > 0) {
          const detailRes2 = await GetDetailArticle(serverLink,phongvienData[0].item.guid);
          setPhongvienFirstData(detailRes2);
          console.log('Lmao',detailRes2);
        }
      } catch (err) {
        console.log(err);
      }
    };
    // Sử dụng hàm
    fetchData();
  }, []);
  
  //

  // Lấy bức ảnh trong content
  const extractAnchorTag = (htmlString) => {
    const anchorTagRegex = /<a[^>]*>(.*?)<\/a>/;
    const match = htmlString.match(anchorTagRegex);
    return match ? match[0] : "";
  };

  // Data tin mới nhất (Xử lí bằng cách random dữ liệu)
  const latest_news = [...data_tin].sort(() => 0.5 - Math.random());

  return (
    <div className="section-home">
      <div className="main-news">
        <div className="main-news-container">
          <div className="main-news-flex">
            <div className="top-news">
              <div className="top-news-img">
                {data_tin.length > 0 &&
                  parse(extractAnchorTag(data_tin[0].item.content))}
              </div>
              <div className="top-news-name">
                <div className="top-news-title">
                  <a href={data_tin.length > 0 && data_tin[0].item.link}>
                    {data_tin.length > 0 && parse(data_tin[0].item.title)}
                  </a>
                </div>
                <div className="top-news-description font">
                  <a href={data_tin.length > 0 && data_tin[0].item.link}>
                    {data_tin.length > 0 && data_tin[0].item.contentSnippet}
                  </a>
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
        <div className="mini-news-container" style={{ width: "100%" }}>
          <MiniNews data={data_tin.slice(6, 14)} />
        </div>
      </div>
      <div className="sub-news">
        <div className="sub-news-container">
          <div className="sub-news-tab">
            <Box sx={{ width: "100%", typography: "body1" }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                  >
                    <Tab label="Tin mới" value="1" />
                    <Tab label="Đọc nhiều" value="2" />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  <div className="latest-news">
                    {latest_news.slice(0, 6).map((item, index) => (
                      <LatestNews key={index} data={item} />
                    ))}
                  </div>
                </TabPanel>
                <TabPanel value="2">
                  <div className="popular-news">
                    {latest_news.slice(6, 18).map((item, index) => (
                      <PopularNews key={index} data={item} />
                    ))}
                  </div>
                </TabPanel>
              </TabContext>
            </Box>
          </div>
        </div>
        <div className="sub-news-box-blog">
          <div className="box-blog-container">
            <div className="box-blog-flex">
              <div className="box-container">
                <div className="box-flex">
                  <div className="box-topic font">{ngaymoiFirstData !== null && ngaymoiFirstData.category}</div>
                  <div className="box-title">
                    {ngaymoiFirstData !== null && ngaymoiFirstData.title}
                  </div>
                  <div className="box-author">
                    <div className="author-image">
                      <img
                        src="https://static.thanhnien.com.vn/thanhnien.vn/image/ava_inter.png"
                        alt="Avatar"
                      />
                    </div>
                    <div className="author-flex">
                      <div className="author font">Tác giả</div>
                      <div className="author-name font">{ngaymoiFirstData !== null && ngaymoiFirstData.author}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog-container">
                <div className="blog-flex">
                  <div className="blog-topic font">{phongvienFirstData !== null && phongvienFirstData.category}</div>
                  <div className="blog-title">{phongvienFirstData !== null && phongvienFirstData.title}</div>
                  <div className="blog-author">
                    <div className="author-image">
                      <img
                        src="https://static.thanhnien.com.vn/thanhnien.vn/image/ava_inter.png"
                        alt="Avatar"
                      />
                    </div>
                    <div className="author-flex">
                      <div className="author font">Tác giả</div>
                      <div className="author-name font">{phongvienFirstData !== null && phongvienFirstData.author}</div>
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
