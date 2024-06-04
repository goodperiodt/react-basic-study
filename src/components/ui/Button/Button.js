import React from "react";
// import styled from "styled-components";
import styles from "./Button.module.css";

// 'styled-components' 라이브러리에서 제공되는 객체 styled 사용하기
// 객체 styled를 통해 button을 만들겠다. ``백틱안에 css를 작성하면된다.

// 버튼을 만들고, const Button
// styled(styled-components).클래스명(.button)`css 적용하기`

/*
const Button = styled.button`
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

  // &는 .button을 의미한다.
  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`;
*/

// Button에 작성된 type이 다르고, 이벤트핸들러가 다르고, Button 컴포넌트에 감싸진 children이 다르기 때문에 Button의 1. type을 넘겨받고,
// 2. onClick이 발생한다면 실행될 함수를 넘겨받고,
// 3. 열린 Button태그와 닫힌 Button 태그 사이에 감싸진 텍스트(children)를 전달받는 Button 컴포넌트

// Button 컴포넌트를 구성한 이유: 버튼의 크기, 버튼에 작성된 텍스트 등의 디자인이 같아야 하는 경우,
// 해당 컴포넌트에 동일한 디자인을 주기 위해 이와 같이 작성한다.

const Button = ({ type, onClick, children, className, disabled }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
