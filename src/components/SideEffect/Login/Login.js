import React, { useState, useEffect } from "react";
import styles from "./Login.module.css";
import Card from "../../ui/Card";
import Button from "../../ui/Button/Button";

// 사용자가 입력한 이메일과 비밀번호를 onLogin함수를 호출하면서 부모 컴포넌트에게 전달한다.
const Login = ({ onLogin }) => {
  // 이메일 입력값을 저장
  const [enteredEmail, setEnteredEmail] = useState("");
  // 이메일 입력이 정상적인지 확인
  const [emailIsValid, setEmailIsValid] = useState();
  // 패스워드 입력값을 저장
  const [enteredPassword, setEnteredPassword] = useState("");
  // 패스워드 입력이 정상적인지 확인
  const [passwordIsValid, setPasswordIsValid] = useState();
  // 이메일, 패스워드가 둘 다 동시에 정상적인 상태인지 확인
  const [formIsValid, setFormIsValid] = useState(false);

  // 입력란 ( 이메일, 비밀번호)을 모두 체크하여 form의 버튼 disabled를 해제하는
  // 상태변수 formIsValid의 사이드 이펙트를 처리하는 영역
  useEffect(() => {
    // 시간을 지연시키는 함수
    const timer = setTimeout(() => {
      // formIsValid의 유효성 검증을 일부러 1초 뒤에 실행하도록 setTimeout을 사용
      // 1초 이내에 새로운 입력값이 들어옴 -> 상태 변경 -> 재 렌더링이 진행되면서 useEffect가 또 호출됨.
      console.log("useEffect called in Login.js!");
      setFormIsValid(enteredEmail.includes("@") && enteredPassword.trim() > 6);
    }, 1000);
    // useEffect() 첫 번째 파라미터가 받는 함수에 return하면서 함수를 작성하면
    // 이 함수를 cleanup 함수라고 한다.
    // cleanup 함수 - 컴포넌트가 업데이트 되거나 없어지기 직전에 실행한다.

    // 사용자가 1초 이내에 추가 입력을 했다 --> 상태 변경
    // 위에 예약한 timer를 취소한다.
    return () => {
      console.log("clean up!");
      clearTimeout(timer);
    };
  }, [enteredEmail, enteredPassword]);
  // 의존성 배열에 상태변수를 넣어주면 그 상태변수가 바뀔 때마다 useEffect가 재실행됨. 둘 중의 하나의 값이 변화될 때마다 계속해서 리렌더링 된다.

  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);

    /*
    setFormIsValid(
      e.target.value.includes("@") && enteredPassword.trim().length > 6
    );
    */
  };

  const passwordChangeHandler = (e) => {
    setEnteredPassword(e.target.value);
    /*
    setFormIsValid(
      e.target.value.trim().length > 6 && enteredEmail.includes("@")
    );
    */
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    onLogin(enteredEmail, enteredPassword);
  };
  return (
    <Card className={styles.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${styles.control} ${
            !emailIsValid /* emailIsValid === false */ ? styles.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${styles.control} ${
            !passwordIsValid ? styles.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={styles.actions}>
          <Button type="submit" className={styles.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
