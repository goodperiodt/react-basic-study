import React from "react";
import "./Card.css";
const Card = ({ children, className }) => {
  /*
  부모 컴포넌트로부터 전달될 데이터
  1. 요소를 담고 있는 변수: children
  2. 클래스 이름을 담고 있는 변수: className
  */

  const madeClass = "card " + className;

  console.log("children", children);
  console.log("className: ", className);
  return <div className={madeClass}>{children}</div>;
};

export default Card;
