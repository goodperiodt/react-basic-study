import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./ui/Card";

// 부모 컴포넌트(App.js)로부터 전달 받은 데이터 props,
// ExpenseItem 컴포넌트를 호출한 곳 --> App.js: 부모 컴포넌트
// App.js 파일에서 <ExpenseItem />, ExpenseItem 컴포넌트 호출
// --> ExpenseItem.js 파일에서 ExpenseItem() 함수가 호출하면서
// App.js(부모 컴포넌트)쪽에서 ExpenseItem.js(자식 컴포넌트)로 title변수에 데이터를 담아 전달,
// 자식 컴포넌트(ExpenseItem.js)에서 ExpenseItem() 함수의 매개 값으로 props(객체, {title})를 전달받고,
// 전달받은 객체가 ExpenseItem() 함수 내부에 사용되는 것
const ExpenseItem = ({ title, price: p, date }) => {
  // ** price(key) 변수를 다른 변수명으로 사용하고 싶다면,
  // price: p 이렇게 선언 후 함수 안에서 p라는 변수명으로 price값을 꺼내서 쓸 것

  // console.log("props: ", title, p, date);

  // date는 객체로 전달된다: Sat Jun 01 2024 00:00:00 GMT+0900 (한국 표준시)
  // 객체를 화면에서 바로 보여줄 수 없기에 객체를 문자열로 바꾸는 함수를 선언해준다.

  // 통화 기호 표기에 필요한 객체
  const krw = {
    style: "currency",
    currency: "KRW",
  };

  // 한자리 수를 두자리로 변환해주는 함수
  /** ExpenseDate 컴포넌트를 만들면서 날짜 관련 함수는 필요 없어짐
  function make2digit(text) {
    // padStart(2, '0'): 앞에다(Start) 붙이는데(pad) 기준은 2자리,
    // 2자리가 안되면 '0'을 붙인다.
    return text.toString().padStart(2, "0");

    // return text.toString().length === 1 ? "0" + text.toString() : text.toString();
  }

  // 날짜 포맷팅 변환 함수 정의
  const makeFormattedDate = () => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    return `${year}년 ${make2digit(month)}월 ${make2digit(day)}일`;
  };
  */

  // 숫자를 화표 표기법으로 바꾸기
  const formattedPrice = new Intl.NumberFormat(
    "ko-KR",
    krw /*{
    style: "currency",
    currency: "KRW",
  }*/
  ).format(p);

  /*
    값이 변경되어 화면에 반영되어야 하는 값들은
    useState 훅을 통해 상태변수로 관리해야 한다.

    훅은 리액트에서 직접 코드 작성없이 다양한 기능을 사용할 수 있게 도와주는 라이브러리
    리액트 자체에서 제공하는 라이브러리를 훅이라고 한다.


  */
  const [itemTitle, setTitle] = useState(title); // 1. useState의 매개 값으로 상태변수의 초기 값을 전달한다.
  // 2. useState() 는 배열을 반환하고, 배열의 첫 번째 요소는 관리할 상태 값(상태변수)
  // 배열의 두 번째 요소는 상태변수의 값을 변경하는 setter함수가 리턴된다.
  // 상태변수의 값을 변경할 때는 반드시 setter함수를 호출해서 변경해야 한다.
  // 대입으로는 상태변수의 값이 변경되지 않는다.

  const clickHandler = (e) => {
    console.log(itemTitle);
    // state로 관리하는 변수(상태변수)는 반드시 setter로만 변경해야 한다.
    setTitle("메롱메롱");
  };
  console.log(itemTitle);

  return (
    // Card 컴포넌트가 받게될 클래스명은 "circle" 이다.
    <Card className="circle">
      {/* Card 컴포넌트가 전달받게될 props.children은 아래부터 </Card> 닫힌 태그 전까지 모든 구조다. */}
      <div className="expense-item">
        {/* <div>{makeFormattedDate()}</div> --> ExpenseDate 컴포넌트로 생성*/}
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2 id="title">{itemTitle}</h2>
          <div className="expense-item__price">{formattedPrice}원</div>
        </div>
      </div>
      {/* 수정 버튼에 클릭이 발생했을 때, clickHandler 함수를 호출한다. */}
      <button id="btn1" onClick={clickHandler}>
        수정
      </button>
      <button id="btn2">삭제</button>
    </Card>
  );
};

export default ExpenseItem;
