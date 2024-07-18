import React from "react";
import './CategoryNavigation.css'
import {Link} from "react-router-dom";

function CategoryNavigation({title,data}) {
  return (
    <div className="category-nav-bar">
      <div className="category-nav-container">
        <div className="category-nav-title">
          <a href="#"><h5>{title}</h5></a>
        </div>
        <div className="category-nav-flex">
          <ul>
            {data.map((item, index) => (
                <a href="#">
                  <li key={index}>{item}</li>
                </a>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CategoryNavigation;
