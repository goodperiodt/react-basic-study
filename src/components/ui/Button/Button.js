import React from "react";
import "./Button.css";

// Button에 작성된 type이 다르고, 이벤트핸들러가 다르고, Button 컴포넌트에 감싸진 children이 다르기 때문에 Button의 1. type을 넘겨받고,
// 2. onClick이 발생한다면 실행될 함수를 넘겨받고,
// 3. 열린 Button태그와 닫힌 Button 태그 사이에 감싸진 텍스트(children)를 전달받는 Button 컴포넌트

// Button 컴포넌트를 구성한 이유: 버튼의 크기, 버튼에 작성된 텍스트 등의 디자인이 같아야 하는 경우,
// 해당 컴포넌트에 동일한 디자인을 주기 위해 이와 같이 작성한다.
const Button = ({ type, onClick, children }) => {
  return (
    <button type={type} onClick={onClick} className="button">
      {children}
    </button>
  );
};

export default Button;
