import React from 'react';
import BaiBao from './BaiBao';
import parse from "html-react-parser";
import './cssBaiBao.css';

const BaiBaoSingle = ({dataComponent}) => {
    console.log(dataComponent);
    const nextTwoArticles = dataComponent.slice(0, 2);
    const nextFourArticles = dataComponent.slice(2);
    const linkData = nextFourArticles.map(item => ({
        url: item.url,
        title: item.title,
    }));
    return (
        <div className="bao-single">
            {nextTwoArticles.map((item, index) => (
                <BaiBao
                    key={index}
                    url={item.url}
                    chuDe={parse(item.title)}
                    tieuDe={parse(item.title)}
                    moTa={
                        index < linkData.length ? (
                            <a href={linkData[index].url}
                               title={parse(linkData[index].title)} className="bai-bao-mo-ta">
                                {parse(linkData[index].title)}
                            </a>
                        ) : null
                    }
                    moTaPhu={
                        index + 2 < linkData.length ? (
                            <a href={linkData[index + 2].url}
                               title={parse(linkData[index + 2].title)} className="bai-bao-mo-ta">
                                {parse(linkData[index + 2].title)}
                            </a>
                        ) : null
                    }
                    hinhAnh={item.content_html.match(/<img src="([^"]*)"/)[1]}
                />
            ))}
        </div>
    );
};

export default BaiBaoSingle;