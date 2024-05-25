import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ onSaveExpense, onToggle }) => {
  const [userInput, setUserInput] = useState({
    title: "",
    price: "",
    date: "",
  });

  const titleChangeHandler = (e) => {
    // title이 변화가 있을 때 작동하는 함수
    // price와 date의 값은 그대로 유지한다.

    // 변경되기전의 값이 콜백함수의 매개변수로 전달되고 ---> (prevUserInput) --> { title: '', price: '', date: ''}

    // userInput이 객체 형태이기 때문에 기존값을 유지하면서, 이벤트가 발생한 입력창의 값만 변경하는 로직
    setUserInput((prevUserInput) => {
      // 변경하고자 하는 값을 변경해준다.
      return {
        ...prevUserInput, // 기존의 값은 유지하되 ( 기존의 값을 그대로 복사 )
        title: e.target.value, // title의 값만 변경하는데, 지금 이벤트가 발생한 곳의 값으로(e.target.value)
      };
    });
  };

  const priceChangeHandler = (e) => {
    /*
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        price: e.target.value,
      };
    });
    */
    setUserInput({
      ...userInput,
      price: e.target.value,
    });
  };

  const dateChangeHandler = (e) => {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        date: e.target.value,
      };
    });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault(); // submit을 차단

    // 새로운 지출 내역을 객체로 선언
    const newExpense = {
      title: userInput.title,
      price: +userInput.price,
      date: new Date(userInput.date),
    };

    onSaveExpense(newExpense); // App.js가 내려준 함수를 호출하면서 올리고자 하는 데이터를 매개 값으로 전달

    // 입력창을 리셋하기
    setUserInput({
      title: "",
      price: "",
      date: "",
    });
  };

  // 부모가 props로 보내준 onToggle이라는 함수를 호출하면
  // 부모쪽에 있는 함수가 호출되면서 부모가 관리하고 있는 상태변수의 값이 false로 변하고, 리액트는 해당 상태변화를 감지하고, form을 다시 숨겨줄 것이다.
  const cancelInsertHandler = () => onToggle();

  return (
    // react와 스프링부트는 완전히 분리되어 있고,
    // 리액트는 Single Page Application 이라 뭐든 요청이 fetch를 통해서 비동기 방식으로 전달된다. 그래서 form action="" 속성이 필요 없다.
    // ** form action으로 요청을 보내는 것은 동기 방식이다.

    // form 태그안 button 태그(type="submit"),
    // button 태그에 이벤트 핸들러를 작성해도 되지만,
    // form 태그안에 버튼이 있는 경우, form 태그 자체에 이벤트 핸들러를 작성해도 된다.
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          {/* input태그에 변화가 발생한다면(onChange) titleChangeHandler 함수를 호출하겠다. */}
          <input
            type="text"
            onChange={titleChangeHandler}
            // 사용자가 입력한 값을 App.js에게 보내고, 입력창을 리셋하기 위해서 value 속성을 작성
            value={userInput.title}
          />
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input
            type="number"
            min="100"
            step="100"
            onChange={priceChangeHandler}
            value={userInput.price}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2025-12-31"
            onChange={dateChangeHandler}
            value={userInput.date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={cancelInsertHandler}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
