import React from "react";
import './CategoryNavigation.css'

function CategoryNavigation() {
  return (
    <div className="category-nav-bar">
      <div className="category-nav-container">
        <div className="category-nav-title">
          <h5>Thời sự</h5>
        </div>
        <div className="category-nav-flex">
          <ul>
            <li>Chính trị</li>
            <li>Pháp luật</li>
            <li>Dân sinh</li>
            <li>Lao động - việc làm</li>
            <li>Quyền được biết</li>
            <li>Phóng sự / điều tra</li>
            <li>Quốc phòng</li>
            <li>Chống tin giả</li>
            <li>Thời luận</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CategoryNavigation;
