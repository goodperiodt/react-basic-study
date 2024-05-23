import "./App.css";
import Hello from "./Hello";
import Expenses from "./components/Expenses";

function App() {
  // 지출 항목 객체 배열
  const expenses = [
    { title: "피자헛", price: "30000", date: new Date(2024, 5, 1) },
    { title: "bbq치킨", price: "20000", date: new Date(2024, 5, 2) },
    { title: "짜장면", price: "10000", date: new Date(2024, 5, 3) },
  ];

  return (
    <>
      <Expenses items={expenses} />
      <Hello>
        <ul>
          <li>사과</li>
          <li>복숭아</li>
          <li>포도</li>
        </ul>
      </Hello>
    </>
  );
}

export default App;
