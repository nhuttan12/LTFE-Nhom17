import React from "react";
import "./CategoryPost.css";

function CategoryPost(props) {
  return (
    <div className="category-post">
      <div className="post-container">
        {props.data.map((item, index) => (
          <div key={index} className="post-category">
            <div className="post-flex">
              <div className="left-side">
                <div className="image">
                  <a href={item.link}>
                    <img src={item.image} alt={item.title} />
                  </a>
                </div>
              </div>
              <div className="right-side">
                <div className="category">
                  <h5>{item.category}</h5>
                </div>
                <div className="title">
                  <a href={item.link}>{item.title}</a>
                </div>
                <div className="description">
                  <ul>
                    <li>
                      <p>{item.description}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {(index !== props.data.length-1) && <div className="slide"></div>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryPost;
