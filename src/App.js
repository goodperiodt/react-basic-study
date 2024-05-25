import React, { useState } from "react";
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

  // 지출 객체배열을 상태변수로 관리
  const [expenseList, setExpenseList] = useState(expenses);

  // ExpenseForm에게 내려보낼 함수
  // ExpenseForm에서 addExpenseHandler가 저장하고 있는 함수(의 주소값)를 호출하면서
  // 매개 값으로 데이터를 전달하고, 함수를 통해 자식 컴포넌트가 부모 컴포넌트에게 전달한 데이터는
  // newExpense에 담겨 App.js로 전달한다.
  const addExpenseHandler = (newExpense) => {
    console.log("App 컴포넌트에서 응답함!");
    console.log("newExpense: ", newExpense);
    // 자식 컴포넌트로부터 전달받은 데이터를 배열에 추가하는 것은 쉽다.
    // expenses.push(newExpense); expenses(배열)에 newExpense(객체) 더하기(추가하기)

    const modifyExpense = {
      // addExpenseHandler 함수를 통해 자식 컴포넌트로부터 전달받은 새로운 객체(newExpense)의 모든 (기존의: 받아온)것을 셋팅하고,
      ...newExpense,
      // id는 기존 지출 객체배열의 마지막 객체의 id에 1을 더한 값을 추가한다.
      id: expenseList[expenseList.length - 1].id + 1,
    };
    console.log(modifyExpense);

    // 기존의 배열을 복사하고, 복사된 배열에 추가하고자 하는 modifyExpense(객체)를 작성해준다.
    setExpenseList([...expenseList, modifyExpense]);
  };

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenseList} />
    </>
  );
}

export default App;
