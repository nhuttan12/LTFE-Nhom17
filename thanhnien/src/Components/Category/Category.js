import React from 'react';
import CategoryNavigation from "./CategoryNavagation/CategoryNavigation";
import './Category.css';
import parse from "html-react-parser";

const Category = ({ main_news }) => {
  if (!main_news || main_news.length < 5) {
    return null; // hoặc hiển thị thông báo lỗi hoặc trạng thái tải
  }

  return (
      <div>
        <div className="category-container">
          <div className="category-left">
            <div className="category-main-news">
              <div className="category-top-container">
                <div className="category-top">
                  <div className="category-left">
                    <div className="main-image">
                      <a href={main_news[0].item.link}><img src={main_news[0].item.content.match(/<img src="([^"]*)"/)[1]} alt={parse(main_news[0].item.title)} /></a>
                    </div>
                    <div className="main-title">
                      <a href={main_news[0].item.link}><h5>{parse(main_news[0].item.title)}</h5></a>
                    </div>
                    <div className="main-description">
                      <a href={main_news[0].item.link}><p>{parse(main_news[0].item.contentSnippet)}</p></a>
                    </div>
                  </div>
                  <div className="category-right">
                    <div className="top-post">
                      <div className="image">
                        <a href={main_news[1].item.link}><img
                            src={main_news[1].item.content.match(/<img src="([^"]*)"/)[1]}
                            alt={parse(main_news[1].item.title)}/></a>
                      </div>
                      <div className="title">
                        <a href={main_news[1].item.link}><h5>{parse(main_news[1].item.title)}</h5></a>
                      </div>
                    </div>
                    <div className="middle-post">
                      <div className="image">
                        <a href={main_news[2].item.link}><img
                            src={main_news[2].item.content.match(/<img src="([^"]*)"/)[1]}
                            alt={parse(main_news[2].item.title)}/></a>
                      </div>
                      <div className="title">
                        <a href={main_news[2].item.link}><h5>{parse(main_news[2].item.title)}</h5></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="category-middle">
                <div className="left-post">
                  <div className="image">
                    <a href={main_news[3].item.link}><img src={main_news[3].item.content.match(/<img src="([^"]*)"/)[1]}
                                                          alt={parse(main_news[3].item.title)}/></a>
                  </div>
                  <div className="title">
                    <a href={main_news[3].item.link}><h5>{parse(main_news[3].item.title)}</h5></a>
                  </div>
                </div>
                <div className="right-post">
                  <div className="image">
                    <a href={main_news[4].item.link}><img src={main_news[4].item.content.match(/<img src="([^"]*)"/)[1]}
                                                          alt={parse(main_news[4].item.title)}/></a>
                  </div>
                  <div className="title">
                    <a href={main_news[4].item.link}><h5>{parse(main_news[4].item.title)}</h5></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="category-right">
            {/* tạm thời comment lại để sửa css, nếu sửa xong file chính thì  */}
            {/* <ListGioiTreVaDoiSong/> */}
          </div>
        </div>
      </div>
  );
};

export default Category;
