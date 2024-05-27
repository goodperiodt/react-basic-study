import React from "react";
import "./CourseItem.css";

// CoureseItem은 <ul>에 들어가는 <li>
// 목표 하나당 li 요소(<li></li>) 한 개
const CourseItem = ({ item, onDelete }) => {
  return (
    <li className="goal-item" onClick={() => onDelete(item.id)}>
      {item.text}
    </li>
  );
};

export default CourseItem;
