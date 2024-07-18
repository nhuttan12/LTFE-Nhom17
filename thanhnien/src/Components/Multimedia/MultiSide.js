import React, {useState} from 'react';
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import LatestNews from "../MainNews/LatestNews";
import PopularNews from "../MainNews/PopularNews";
import "../Multimedia/Multimedia.css";
import parse from "html-react-parser";
import './Multimedia.css'
const MultiSide = ({dataComponent}) => {
    const [value, setValue] = useState("1");

    if (!dataComponent || dataComponent.length < 7) {
        return null;
    }
    console.log(dataComponent);

    return (
        <div className="multimedia">
            <div className="multimedia-container">
                <div className="mulimedia-header">
                    <div className="middle">Multimedia</div>
                </div>
                <div className="multimedia-content ">
                    <div className="main-multimedia sub">
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
                    </div>
                    <div className="section-home sub">
                      <div className="sub-news">
                        <div className="sub-news-container">
                            <div className="sub-news-tab">
                                <Box sx={{width: "100%", typography: "body1"}}>
                                    <TabContext value={value}>
                                        <TabPanel value="1">
                                            <div className="latest-news">
                                                {dataComponent.slice(1).map((item, index) => (
                                                    <div className="flex-thumbs" key={index}>
                                                        <div className="img-thumbs">
                                                            <a href={item.item.link} title={parse(item.item.title)}>
                                                                <img
                                                                    src={item.item.content.match(/<img src="([^"]*)"/)[1]}
                                                                    alt={parse(item.item.title)}/>
                                                            </a>
                                                        </div>
                                                        <div className="tit-thumbs">
                                                            <a href={item.item.link} title={parse(item.item.title)}>
                                                                {parse(item.item.title)}
                                                            </a>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </TabPanel>
                                    </TabContext>
                                </Box>
                            </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MultiSide;