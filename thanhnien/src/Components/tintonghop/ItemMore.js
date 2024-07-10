import React from 'react';
import './csstonghop.css';
const ArticalMore = ({title, image , url}) => {
    return (
        <div className="more-news">
            <div className="more-content">
                <a href={url} title={title}><div className="more-category">Xem Thêm</div></a>
                <div className="img_title">
                    <div className="more-img">
                        <a href={url} title={title}><img src={image} alt={title}/></a>
                    </div>
                    <a href={url} title={title}>
                        <h3 className="more-title">
                            {title}
                        </h3>
                    </a>

                </div>
            </div>
        </div>
    );
};

export default ArticalMore;