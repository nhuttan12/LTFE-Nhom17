import React from 'react';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import './Carousel.css';

const ListNineTitle = ({ dataNews, title }) => {

    return (
        <div className="nine-container">
            <h2>{title}</h2>
            <div className="nine-box">
                {dataNews.map((item, index) => (
                    <div key={index} className="nine-item">
                        <span>{index + 1}</span>
                        <a href={item.item.link}>
                            {parse(item.item.title)}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

ListNineTitle.propTypes = {
    dataNews: PropTypes.arrayOf(
        PropTypes.shape({
            link: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired
        })
    ).isRequired,
    title: PropTypes.string.isRequired,
};

export default ListNineTitle;
