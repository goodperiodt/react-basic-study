import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ onAddExpense }) => {
  const [expenseToggle, setExpenseToggle] = useState(false);

  const startInsertModeHandler = () => {
    setExpenseToggle(true);
  };

  const stopInsertModeHandler = () => {
    setExpenseToggle(false);
  };

  let newExpenseContent = (
    // JSX를 작성할 것이기 때문에 소괄호를 열어준다.
    <button onClick={startInsertModeHandler}>새로운 지출 추가하기</button>
  );

  // expenseToggle의 변수의 값이 true라면(새로운 지출 추가하기 버튼을 클릭했다면(onClick), startInsertModeHandler함수가 호출되고, startInsertModeHandler가 호출되면, form이 보이게 된다.) form이 보이게 하기
  if (expenseToggle) {
    // stopInsertModeHandler는 다시 form을 사라지게 하는 것,
    // stopInsertModeHandler는 ExpenseForm.js에서 처리하게 하기 위해
    // stopInsertModeHandler 이 함수를 props로 보내줄 것이다.
    newExpenseContent = (
      <ExpenseForm
        onSaveExpense={onAddExpense}
        onToggle={stopInsertModeHandler}
      />
    );
  }

  return (
    <div className="new-expense">
      {/* ExpenseForm은 조건부 렌더링이 아니다. 보이는 것이 고정된 */}
      {newExpenseContent}
    </div>
  );
};

export default NewExpense;
