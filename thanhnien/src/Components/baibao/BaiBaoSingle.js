import React from 'react';
import BaiBao from "./BaiBao";

const BaiBaoSingle = ({dataComponent}) => {
    const nextTwoArticles = dataComponent.slice(0, 2);
    const nextFourArticles = dataComponent.slice(2, 7);
    const linkData = nextFourArticles.map(item => ({
        url: item.url,
        title: item.title,
    }));
    const decodeHtmlEntities = (str) => {
        const txt = document.createElement('textarea');
        txt.innerHTML = str;
        return txt.value;
    };
    return (
        <div className="bao-single">
            {nextTwoArticles.map((item, index) => (
                <BaiBao
                    key={index}
                    url={item.url}
                    chuDe={decodeHtmlEntities(item.title)}
                    tieuDe={decodeHtmlEntities(item.title)}
                    moTa={
                        index < linkData.length ? (
                            <a href={linkData[index].url}
                               title={decodeHtmlEntities(linkData[index].title)} className="bai-bao-mo-ta">
                                {decodeHtmlEntities(linkData[index].title)}
                            </a>
                        ) : null
                    }
                    moTaPhu={
                        index + 2 < linkData.length ? (
                            <a href={linkData[index + 2].url}
                               title={decodeHtmlEntities(linkData[index + 2].title)} className="bai-bao-mo-ta">
                                {decodeHtmlEntities(linkData[index + 2].title)}
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