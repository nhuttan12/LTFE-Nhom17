import React from 'react';
import BaiBao from './BaiBao';
import parse from "html-react-parser";
import './cssBaiBao.css';

const BaiBaoSingle = ({dataComponent, cate, noSuggest}) => {
    if(!noSuggest){
        var oneThird = Math.ceil(dataComponent.length / 3); // Tính chiều dài của 1/3 mảng (làm tròn lên)
        var mainArticles = dataComponent.slice(0, oneThird); // Lấy 1/3 đầu tiên

        var titleArticles = dataComponent.slice(oneThird); // Phần còn lại (2/3)

        var linkData = titleArticles.map(item => ({
            link: item.item.link,
            title: item.item.title,
        }));
    }else{
        console.log("dccd")
        mainArticles = dataComponent;
    }
    return (
        <div className="bao-single">
            {mainArticles.map((item, index) => (
                <BaiBao
                    key={index}
                    url={item.item.link}
                    chuDe={parse(item.item.title)}
                    tieuDe={parse(item.item.title)}
                    {...(cate && cate.length > 0 && { cate: cate[index % cate.length] })}
                    moTa={
                        !noSuggest && index < linkData.length ? (
                            <a href={linkData[index].link}
                               title={parse(linkData[index].title)} className="bai-bao-mo-ta">
                                {parse(linkData[index].title)}
                            </a>
                        ) : null
                    }
                    moTaPhu={
                        !noSuggest && index + 2 < linkData.length ? (
                            <a href={linkData[index + 2].link}
                               title={parse(linkData[index + 2].title)} className="bai-bao-mo-ta">
                                {parse(linkData[index + 2].title)}
                            </a>
                        ) : null
                    }
                    hinhAnh={item.item.content.match(/<img src="([^"]*)"/)[1]}
                />
            ))}
        </div>
    );
};

export default BaiBaoSingle;