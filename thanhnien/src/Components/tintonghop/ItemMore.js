import React from 'react';
import './csstonghop.css';
const ArticalMore = ({title, image }) => {
    return (
        <div className="more-news">
            <div className="more-content">
                <div className="more-category">Xem Thêm</div>
                <div className="img_title">
                    <div className="more-img">
                        <img src={image} alt={title}/>
                    </div>
                    <h3 className="more-title">
                        {title}
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default ArticalMore;