import React, { useRef, useState } from "react";
import styles from "./AddUsers.module.css";
import Button from "../UI/Button/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/Modal/ErrorModal";

const AddUsers = () => {
  /*
  const [userValue, setUserValue] = useState({
    userName: "",
    age: "",
  });
  */

  // 에러 상태 관리
  const [error, setError] = useState(null);

  // useRef로 기억된 input 요소 가져오기
  // ** 변수 nameInput은 요소를 기억하는 것,
  const nameInput = useRef();
  const ageInput = useRef();

  const userSubmitHandler = (e) => {
    e.preventDefault();

    // console.log(nameInput.current.value);
    // console.log(ageInput.current.value);

    // useRef()로 기억하는 요소의 현재 값을 가져오기
    const username = nameInput.current.value;
    const age = ageInput.current.value;

    // 입력 값 검증
    // 제출된 이름 또는 나이의 입력값이 비어있다면
    if (username.trim() === "" || age.trim() === "") {
      setError({
        title: "유효하지 않은 입력값입니다.",
        message: "입력값은 공백으로 작성하면 안됩니다.",
      });
      return;
    }

    // 제출된 나이의 입력 값을 숫자로 받은 다음,
    // 만약 1보다 작다면
    if (+age < 1) {
      setError({
        title: "유효하지 않은 나이의 범위",
        message: "나이는 1이상의 숫자로 작성해주세요",
      });
      return;
    }

    //youtu.be/Z7qwCYM63Ps?list=PLiqgNGl0CcSazWnIe8ld17GwRC70mQ8VD&t=1002

    // 서버에 입력값을 전송하고 난 뒤에
    // 화면상에 나타나는 input칸의 입력했던 값을 비워주기
    nameInput.current.value = "";
    ageInput.current.value = "";
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
    // <React.Fragment></React.Fragment> or <Fragment></Fragment> or <></>
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
            // onChange={userNameChangeHandler}
            // value={userValue.userName}

            // 이 인풋이라는 요소(id가 username)에 작성되는 값은
            // nameInput이라는 변수가 기억하겠다(참조하겠다.)
            // 그리고 그 기억된 값을 가져올 때, 작동하는 함수가 useRef()다.
            // 요소를 참조하고, 참조된 요소의 값을 땡겨오는 것만 쓰겠다하면
            // 해당 요소에 ref라는 속성을 주고, 변수를 준다. 그리고 그 변수는 useRef()라는
            // 함수를 참조하고 있고,
            ref={nameInput}
            type="text"
          />
          <label htmlFor="age">나이</label>
          <input
            id="age"
            // onChange={ageChangeHandler} value={userValue.age}
            ref={ageInput}
          />
          <Button type="submit">가입하기</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUsers;
