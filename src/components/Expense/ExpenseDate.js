import React from "react";
import "./ExpenseDate.css";

// ExpenseItem.js에서 <div>{makeFormattedDate()}</div> 이 부분을
// ExpenseDate 컴포넌트로 만들기
const ExpenseDate = ({ date }) => {
  const year = date.getFullYear();

  // 현재 접속중인 지역의 월(month) 만 뽑아내는
  const month = date.toLocaleString("ko-KR", { month: "long" });
  const day = date.getDate();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
