import React, { useState } from "react";
import styles from "./Login.module.css";
import Card from "../../UI/Card";
import Button from "../../UI/Button/Button";

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

  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);

    setFormIsValid(
      e.target.value.includes("@") && enteredPassword.trim().length > 6
    );
  };

  const passwordChangeHandler = (e) => {
    setEnteredPassword(e.target.value);

    setFormIsValid(
      e.target.value.trim().length > 6 && enteredEmail.includes("@")
    );
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
