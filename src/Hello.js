import React from "react";
import Card from "./components/ui/Card";

// Hello.js(<Hello /> 컴포넌트) 파일을 호출한 부모 컴포넌트에서 데이터를 전달하면,
// Hello.js 파일에 있는 Hello() 함수가 호출되면서 매개 값으로 부모 컴포넌트에서 전달한
// 데이터(props)를 받아 Hello() 함수 내부에서 사용된다.
const Hello = (props) => {
  console.log("Hello Component!");
  console.log(props.children);

  return (
    <>
      <div>{props.children}</div>
      <p>Hello React</p>
    </>
  );
};

export default Hello;
