import React from "react";
import ItemDoiSong from "./ItemDoiSong";
import "./right.css"
import parse from "html-react-parser";

const ComponentRight = ({dataComponent, title}) => {
    return (
        <div className="young_life_container">
            <div className="youngContainer">
                <h2>{title}</h2>
                <div className="youngList">
                    {dataComponent.map((item, index)=>(
                        <ItemDoiSong
                            key={index}
                            url={item.item.link}
                            title={parse(item.item.title)}
                            image={item.item.content.match(/<img src="([^"]*)"/)[1]}
                            description={parse(item.item.contentSnippet)}
                            className={index===0 ? 'firstImage' : ''}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
};

export default ComponentRight;