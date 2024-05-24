import React from "react";
import "./ExpenseFilter.css";

const ExpenseFilter = ({ onChangeFilter }) => {
  const dropdownChangeHandler = (e) => {
    // selected된 year의 값을 Expense.js에서 사용할 수 있도록 올려보내기

    // 사용자가 선택한 년도의 값을 부모 컴포넌트(Expense.js) 에게 전달하려고 하는데,
    // 부모 컴포넌트에서 전달한 함수를 사용해서 함수에 데이터를 담아 전달(리턴, 반환)
    const selectedYear = e.target.value;
    onChangeFilter(selectedYear);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={dropdownChangeHandler}>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
