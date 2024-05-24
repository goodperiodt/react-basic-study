import "./App.css";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  // 지출 항목 객체 배열
  const expenses = [
    { title: "피자헛", price: "30000", date: new Date(2024, 5, 1) },
    { title: "bbq치킨", price: "20000", date: new Date(2024, 5, 2) },
    { title: "짜장면", price: "10000", date: new Date(2024, 5, 3) },
  ];

  return (
    <>
      <NewExpense />
      <Expenses items={expenses} />
    </>
  );
}

export default App;
