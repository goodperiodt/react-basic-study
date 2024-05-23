import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

// App.js 파일에 NoName.js를 import하여
// (App.js) App() 함수가 리턴하는 값에 NoName 컴포넌트를 호출한다.
import NoName from "./NoName";

function App() {
  // 지출 항목 객체 배열
  const expenses = [
    { title: "피자헛", price: "30000", date: new Date(2024, 5, 1) },
    { title: "bbq치킨", price: "20000", date: new Date(2024, 5, 2) },
    { title: "짜장면", price: "10000", date: new Date(2024, 5, 3) },
  ];

  return (
    <>
      <ExpenseItem
        title={expenses[0].title}
        price={expenses[0].price}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        price={expenses[1].price}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        price={expenses[2].price}
        date={expenses[2].date}
      />
    </>
  );
}

export default App;
