import React, { useState } from "react";
import styles from "./AddUsers.module.css";
import Button from "../UI/Button/Button";
import Card from "../UI/Card";

const AddUsers = () => {
  const [userValue, setUserValue] = useState({
    userName: "",
    age: "",
  });

  const userNameChangeHandler = (e) => {
    setUserValue((prevUserValue) => {
      return {
        ...prevUserValue,
        userName: e.target.value,
      };
    });
  };

  const ageChangeHandler = (e) => {
    setUserValue((prevUserValue) => {
      return {
        ...prevUserValue,
        age: e.target.value,
      };
    });
  };

  const userSubmitHandler = (e) => {
    e.preventDefault();

    // 제출된 이름 또는 나이의 입력값이 비어있다면
    if (userValue.userName.trim() === "" || userValue.age.trim() === "") {
      alert("입력값에 문제가 있습니다.");
    }

    // 제출된 나이의 입력 값을 숫자로 받은 다음,
    // 만약 1보다 작다면
    if (+userValue.age < 1) {
      return;
    }

    console.log(userValue);

    // 서버에 입력값을 전송하고 난 뒤에
    // 화면상에 나타나는 input칸의 입력했던 값을 비워주기
    setUserValue({
      userName: "",
      age: "",
    });
  };

  return (
    // className명을 styles.input
    // styles: AddUsers.module.css
    <Card className={styles.input}>
      <form onSubmit={userSubmitHandler}>
        {/* label 태그의 for라는 속성: htmlFor */}
        <label htmlFor="username">이름</label>
        <input
          id="username"
          onChange={userNameChangeHandler}
          value={userValue.userName}
        />
        <label htmlFor="age">나이</label>
        <input id="age" onChange={ageChangeHandler} value={userValue.age} />
        <Button>가입하기</Button>
      </form>
    </Card>
  );
};

export default AddUsers;
