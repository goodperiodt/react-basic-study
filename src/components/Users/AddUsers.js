import React, { useState } from "react";
import styles from "./AddUsers.module.css";
import Button from "../UI/Button/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/Modal/ErrorModal";

const AddUsers = () => {
  const [userValue, setUserValue] = useState({
    userName: "",
    age: "",
  });

  // 에러 상태 관리
  const [error, setError] = useState(null);
  // 변수 error에게 ErrorModal에 띄워야할 제목(title)과 메시지(message)를 담을 것이다.

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

    // 입력 값 검증
    // 제출된 이름 또는 나이의 입력값이 비어있다면
    if (userValue.userName.trim() === "" || userValue.age.trim() === "") {
      setError({
        title: "유효하지 않은 입력값입니다.",
        message: "입력값은 공백으로 작성하면 안됩니다.",
      });
      return;
    }

    // 제출된 나이의 입력 값을 숫자로 받은 다음,
    // 만약 1보다 작다면
    if (+userValue.age < 1) {
      setError({
        title: "유효하지 않은 나이의 범위",
        message: "나이는 1이상의 숫자로 작성해주세요",
      });
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

  // 기존에 사용했던 방식
  // 조건에 부합할 경우, 에러 모달을 띄운다.
  /*
  let modalContent;
  if (error != null) {
    modalContent = <ErrorModal title={error.title} message={error.message} />;
  }
  */

  return (
    <>
      {/* &&: and 연산자: 좌항과 우항이 모두 true여야만 전체 결과가 true가 된다. */}
      {/* error의 초기값은 null, null은 자바스크립트에서 논리값 false로 표현할 수 있다.
      flase일 경우 우항을 아예 실행하지 않는다. error라는 변수에 데이터가 들어가게 되면,
      true가 되고, 우측의 연산이 실행되면서 ErrorModal이 실행되게 된다. 좌항의 결과에 따라
      우항의 컴포넌트를 보여줄지 말지가 결정된다. null과 0, undefined, 빈문자열 모두 false한 값을 띈다. */}
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={() => setError(null)}
        />
      )}
      {/* <ErrorModal title={error.title} message={error.message} /> */}
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
    </>
  );
};

export default AddUsers;
