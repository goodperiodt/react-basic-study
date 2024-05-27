import React, { useState } from "react";
import "./App.css";
import CourseInput from "./components/CourseGoals/CourseInput";
import CourseList from "./components/CourseGoals/CourseList";

// 하나의 할 일은 id와 text로 구성된 하나의 객체고, 여러 객체들이 모여 배열(DUMMY_DATA)을 이룬다.
const DUMMY_DATA = [
  {
    id: "g1",
    text: "리액트 컴포넌트 스타일 마스터하기",
  },
  {
    id: "g2",
    text: "UI 프로그래밍 삽고수 되기",
  },
];

const App = () => {
  const [goals, setGoals] = useState(DUMMY_DATA);

  // Input에게 전달할 함수
  const addGoalHandler = (text) => {
    console.log("전달받은 텍스트는 " + text);

    // 1. 전달받은 text와 함께 id 값을 설정해서 리스트에 추가할 객체를 만들고,
    const newGoal = {
      id: Math.random().toString(),
      text: text,
    };

    // DUMMY_DATA.push() ---> 이렇게 직접적으로 push하면 변화한 상태를 리액트가 감지하지 못한다.

    // 2. 기존 배열(상태변수)에 새로운 객체를 추가해서 상태변수의 값을 수정하기
    // 상태변수(배열) 수정
    setGoals([...goals, newGoal]);
    // setGoals((prevGoals) => [...prevGoals, newGoal])
  };

  // CourseList 조건부 렌더링
  let listContent = (
    <p style={{ color: "red", fontSize: "2em", textAlign: "center" }}>
      목표를 등록해 주세요!
    </p>
  );

  const deleteHandler = (id) => {
    // console.log("전달된 id: ", id);
    // --- 1차적으로 내가 작성한 것
    // setGoals(goals.filter((item) => item.id !== id));

    // --- 선생님 풀이 1번
    // 상태 배열 그대로 복사해서 가져옴
    // --- const updateGoals = [...goals];
    // updateGoals에서 객체(goal)를 하나씩 받아서
    // 객체가 지닌 id와 사용자가 클릭한 id가 같다면
    // 해당 객체의 index를 변수 index에 저장한다.
    // --- const index = updateGoals.findIndex((goal) => goal.id === id);
    // updateGoals(복사한 배열)에서 splice함수를 사용
    // updateGoals의 객체들중 index에 해당하는 객체부터 하나(자기자신)를 삭제하고,
    // --- updateGoals.splice(index, 1);
    // --- setGoals(updateGoals);

    // --- 선생님 풀이 2번
    // id가 일치하지 않는 객체들만 몽땅 받아서 updateGoals(새로운 배열)에 세팅하겠다.
    // --- const updateGoals = goals.filter((goal) => goal.id !== id);
    // --- setGoals(updateGoals);
    // 2번의 더 간다한 버전
    setGoals(goals.filter((goal) => goal.id !== id));
  };

  if (goals.length > 0) {
    listContent = <CourseList items={goals} onDelete={deleteHandler} />;
  }

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAdd={addGoalHandler} />
      </section>
      <section id="goals">{listContent}</section>
    </div>
  );
};

export default App;
