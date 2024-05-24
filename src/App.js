import React from "react";
import "./App.css";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense.js";

function App() {
  // 지출 항목 객체 배열
  const expenses = [
    { id: 1, title: "피자헛", price: 30000, date: new Date(2024, 5, 1) },
    { id: 2, title: "bbq치킨", price: 20000, date: new Date(2024, 5, 2) },
    { id: 3, title: "짜장면", price: 10000, date: new Date(2024, 5, 3) },
    { id: 4, title: "엽기떡볶이", price: 18000, date: new Date(2024, 5, 4) },
  ];

  // ExpenseForm에게 내려보낼 함수
  // ExpenseForm에서 addExpenseHandler가 저장하고 있는 함수(의 주소값)를 호출하면서
  // 매개 값으로 데이터를 전달하고, 함수를 통해 자식 컴포넌트가 부모 컴포넌트에게 전달한 데이터는
  // newExpense에 담겨 App.js로 전달한다.
  const addExpenseHandler = (newExpense) => {
    console.log("App 컴포넌트에서 응답함!");
    console.log("newExpense: ", newExpense);
    // 자식 컴포넌트로부터 전달받은 데이터를 배열에 추가하는 것은 쉽다.
    expenses.push(newExpense);
  };

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </>
  );
}

export default App;
