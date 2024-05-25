import React from "react";
import Chart from "../Chart/Chart";

const ExpenseChart = ({ expenses }) => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  // 선택년도의 모든 지출데이터를 꺼내서 월을 추출하면서
  // 해당 월의 지출총액을 chartDataPoints의 월 value에 누적.
  expenses.forEach((exp) => {
    // 이 월 정보는 실제 월에서 1이 감소되어 있다.
    // 오히려 인덱스를 지목하기가 좋아짐.
    const expenseMonth = exp.date.getMonth();
    const expensePrice = exp.price;

    chartDataPoints[expenseMonth].value += expensePrice;
  });

  console.log(chartDataPoints);

  // 필터링된 값(사용자가 선택한 년도를 기준으로 속성 label과 value를 가진 객체(1월부터 12월까지)들이 dataPoints변수에 담겨서 Chart컴포넌트에게 전달됨)
  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpenseChart;
