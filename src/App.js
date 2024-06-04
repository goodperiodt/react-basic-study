import React, { useState } from "react";
// import AddUsers from "./components/Users/AddUsers";
// import UserList from "./components/Users/UserList";
import "./App.css";
import MainHeader from "./components/SideEffect/MainHeader/MainHeader";
import Login from "./components/SideEffect/Login/Login";

const App = () => {
  // 로그인 상태를 관리하는 변수
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 서버로 로그인을 요청하는 함수. (나중에는 fetch를 통한 백엔드와의 연계가 필요.)
  const loginHandler = (email, password) => {
    // 로그인을 했다는 증거로 상태값 변경 및 브라우저에 로그인 값을 1로 표현해서 저장
    // (이전 프로젝트에서는 로그인 유지를 session을 사용함 -> 이제는 사용이 불가능)
    localStorage.setItem("login-flag", "1"); // localStorage: 브라우저에서 제공하는 저장소
    setIsLoggedIn(true);
  };
  return (
    <>
      <MainHeader />
      {/* 사용자가 login을 성공하면 Home.js를 보여주고,
      login을 성공하기전까지 Login 컴포넌트를 보여준다. */}
      <main>
        <Login onLogin={loginHandler} />
      </main>
    </>
  );
};

export default App;
