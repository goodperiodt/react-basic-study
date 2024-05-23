import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

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

  console.log("props: ", title, p, date);
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

  return (
    <div className="expense-item">
      {/* <div>{makeFormattedDate()}</div> --> ExpenseDate 컴포넌트로 생성*/}
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{formattedPrice}원</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
