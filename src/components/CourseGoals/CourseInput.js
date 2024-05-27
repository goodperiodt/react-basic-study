import React, { useState } from "react";
import "./CourseInput.css";
import Button from "../UI/Button/Button";

const CourseInput = ({ onAdd }) => {
  const [enteredText, setEnteredText] = useState("");

  // 입력 값을 검증하는 상태 변수
  const [isValid, setIsValid] = useState(true);

  // 사용자가 버튼(type="submit")을 누르면, formSubmitHandler가 동작을 할 것이고,
  // formSubmitHandler가 동작을 하면 부모가 전달해주는 onAdd라는 함수를 호출할 것이다.
  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (enteredText.trim().length === 0) {
      setIsValid(false);
      return;
    }

    // onAdd라는 함수를 호출하면서 상태변수인 enteredText를
    // (부모 컴포넌트에게) 전달하고, enteredText의 값을 비워준다.
    onAdd(enteredText);
    setEnteredText("");
  };

  // input태그에 변화가 일어날 때마다 textChangeHandler 함수가 호출된다.
  const textChangeHandler = (e) => {
    if (e.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredText(e.target.value);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>나의 목표</label>
        {/* input태그에 무언가를 작성할 때마다 (onChange),
        사용자가 입력한 이 목표 값을 app.js로 끌어올려야 한다. */}
        <input
          style={{
            // input 요소에 입력할 때마다 입력 값 검증이 실행되고,
            // 검증시 값이 유효하다면, isValid의 값은 true,
            // 유효하지 않다면, isValid의 값은 false,
            // isValid의 값이 true라면 input태그의 background 색깔을 'transparent'로
            // false라면 salmon으로 변하게 한다.
            // 동적으로 style을 적용하기
            background: isValid ? "transparent" : "salmon",
            borderColor: isValid ? "black" : "red",
          }}
          type="text"
          onChange={textChangeHandler}
          value={enteredText}
        />
      </div>
      <Button type="submit">목표 추가하기</Button>
    </form>
  );
};

export default CourseInput;
