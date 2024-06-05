import React, { useEffect, useState } from "react";
// import AddUsers from "./components/Users/AddUsers";
// import UserList from "./components/Users/UserList";
import "./App.css";
import MainHeader from "./components/SideEffect/MainHeader/MainHeader";
import Login from "./components/SideEffect/Login/Login";
import Home from "./components/SideEffect/Home/Home";

const App = () => {
  console.log("App 컴포넌트 수행");
  // 로그인 상태를 관리하는 변수
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 화면이 리렌더링될 때 LocalStorage를 확인해서
  // 현재 Login-flag가 존재하는지 검사
  console.log("로그인 검사 수행!");

  /* 무한 리렌더링되는 문제가 되는 코드
  const storedLoginFlag = localStorage.getItem("login-flag");
  if (storedLoginFlag === "1") {
    setIsLoggedIn(true);
  }
  */
  // 기존에 로그인 한 사람인지 확인하는 코드는
  // 리렌더링될 때마다 실행하면 안됨! (한 번만 확인하면 됨)
  useEffect(() => {
    console.log("useEffect 실행! - 최초 단 한번만 실행");
    const storedLoginFlag = localStorage.getItem("login-flag");
    if (storedLoginFlag === "1") {
      setIsLoggedIn(true);
    }
  }, []);
  // useEffect() 함수의 두 번째 파라미터로 받는 배열은 의존성 배열이다. 배열 안에 변수를 지정하면, 해당 변수의 값이 변할 때마다 useEffect()가 실행된다. 만약 배열을 비워놓으면, 렌더링 과정에서 단 한 번만 실행된다.

  // 서버로 로그인을 요청하는 함수. (나중에는 fetch를 통한 백엔드와의 연계가 필요.)
  const loginHandler = (email, password) => {
    // 로그인을 했다는 증거로 상태값 변경 및 브라우저에 로그인 값을 1로 표현해서 저장
    // (이전 프로젝트에서는 로그인 유지를 session을 사용함 -> 이제는 사용이 불가능)
    localStorage.setItem("login-flag", "1"); // localStorage: 브라우저에서 제공하는 저장소
    // 상태변수(isLoggedIn)에 변화가 있다면 리액트는 다시 렌더링을 한다.
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("login-flag");
    setIsLoggedIn(false);
  };
  console.log("App 컴포넌트의 끝");
  return (
    <>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      {/* 사용자가 login을 성공하면 Home.js를 보여주고,
      login을 성공하기전까지 Login 컴포넌트를 보여준다. */}
      <main>
        {isLoggedIn && <Home />}
        {!isLoggedIn && <Login onLogin={loginHandler} />}
      </main>
    </>
  );
};

export default App;
