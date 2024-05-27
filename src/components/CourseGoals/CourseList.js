import React from "react";
// import "./CourseList.css";
import CourseItem from "./CourseItem";
import styled from "styled-components";

const CourseUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const CourseList = ({ items, onDelete }) => {
  return (
    <CourseUl>
      {items.map((item) => {
        // key(item.id) 데이터는 구분을 위해 사용되는 것이라 CourseItem 컴포넌트로 전달하지 않는다.
        return <CourseItem key={item.id} item={item} onDelete={onDelete} />;
      })}
    </CourseUl>
  );
};

export default CourseList;
