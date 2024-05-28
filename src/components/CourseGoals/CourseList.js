import React from "react";
// import "./CourseList.css";
import CourseItem from "./CourseItem";
import styled from "styled-components";

// 간단한 ul 하나를 만들고, 만들 ul에 디자인 주고 싶을 때,
// styled-components 라이브러리를 사용해서
// 스타일 전용 컴포넌트를 만드는 것이 좋다.
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
