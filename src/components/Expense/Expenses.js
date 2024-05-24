import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../ui/Card";

const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState(
    new Date().getFullYear().toString()
  );

  /* 1. 배열 요소를 전부 ExpenseItem 컴포넌트로 전달한다.
  // ExpenseItem을 동적으로 렌더링하기
  const iterateExpenseItem = () => {
    
    // 콜백 함수의 매개값으로 배열의 요소가 하나씩 전달됨.
    // 콜백 함수는 배열 요소만큼 반복된다.
    // map의 리턴 값: 함수가 적용된 각 요소가 담긴 새로운 배열이 리턴됨.
    return items.map((item) => {
      return (
        <ExpenseItem title={item.title} price={item.price} date={item.date} />
      );
    });
    


  };
  */

  // 자식 컴포넌트 ExpenseFilter에 있는 선택 연도 데이터를 반환해주는 함수다.

  const filterChangeHandler = (selectedYear) => {
    console.log("Expenses.js", selectedYear);
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter onChangeFilter={filterChangeHandler} />
      {/* 지출 내역 여러 개를 갖고 있는 items(배열)가 있다. */}
      {items
        .filter((item) => item.date.getFullYear().toString() === filteredYear)
        .map((item) => {
          return (
            <ExpenseItem
              key={item.id} // key값은 DB연동시 primary key로 처리한다.
              title={item.title}
              price={item.price}
              date={item.date}
            />
          );
        })}
    </Card>
  );
};

export default Expenses;
