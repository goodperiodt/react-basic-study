import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../ui/Card";
import ExpenseChart from "./ExpenseChart";

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
    // console.log('Expenses: ', selectedYear);
    setFilteredYear(selectedYear);
  };

  const filteredItems = items.filter((item) => {
    console.log(item);
    return item.date.getFullYear().toString() === filteredYear;
  });

  console.log(filteredItems);

  // 조건부 렌더링을 위한 변수
  let expenseContent = <p>아직 등록된 지출이 없습니다.</p>;

  if (filteredItems.length > 0) {
    expenseContent = filteredItems.map((item) => (
      <ExpenseItem
        key={item.id}
        title={item.title}
        price={item.price}
        date={item.date}
      />
    ));
  }

  return (
    <Card className="expenses">
      {/* 연도를 선택하는 select창 */}
      <ExpenseFilter onChangeFilter={filterChangeHandler} />
      {/* 연도별로 필터링된 배열을 ExpenseChart 컴포넌트에 전달 */}
      <ExpenseChart expenses={filteredItems} />
      {/* 지출 내역 여러 개를 갖고 있는 items(배열)가 있다. */}
      {/* 사용자가 선택한(filter) 연도에 따라 expense item들이 반복문에 의해 여러 개가 나온다. */}
      {expenseContent}
    </Card>
  );
};

export default Expenses;
