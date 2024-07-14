import React from 'react';
const ThreeBigNews = (bigData) => {
    return (
            <div className="carousel-track">
                {bigData.map((item, index) => (
                    <article className="carousel-item" key={index}>
                        <img src={item.image} alt={item.title} />
                        <div className="item-details">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    </article>
                ))}
            </div>
);
}
export default ThreeBigNews;