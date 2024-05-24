import React from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  return (
    // react와 스프링부트는 완전히 분리되어 있고,
    // 리액트는 Single Page Application 이라 뭐든 요청이 fetch를 통해서 비동기 방식으로 전달된다. 그래서 form action="" 속성이 필요 없다.
    // ** form action으로 요청을 보내는 것은 동기 방식이다.
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" />
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input type="number" min="100" step="100" />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2025-12-31" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
