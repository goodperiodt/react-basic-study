import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = ({ dataPoints }) => {
  // 1년치 지출 총액이 필요하다! (그래야 비율 기준을 설정할 수 있으니까)

  // value만 들어있는 배열로 추출
  const dataPointsValue = dataPoints.map((dp) => dp.value);

  // 1년치 총액을 구하는 새로운 함수 --> 배열내부의 값을 하나씩 꺼내서 더하는 reduce() (누산)함수
  // a는 리턴결과에 대한 누적 값, b는 배열에서 하나씩 꺼낸 값
  const totalValue = dataPointsValue.reduce((a, b) => a + b, 0);
  // const totalValue = dataPointsValue.reduce((a,b) => {}, 초기 인덱스 값) 초기 인덱스 값에 0을 작성했다면, value값을 배열로 갖고있는 dataPointsValue의 0인덱스 부터 (누산함수) reduce()가 실행되는데, 실행 명령어는 a+b고, a는 (a+b)의 리턴결과에 대한 누적 값, b는 배열에서 하나씩 꺼낸 값이다.
  // -> dataPointsValue(value값들을 갖고 있는 배열)의 인덱스0부터 누산함수 시작, dataPointsValue[0]의 값을 b에 대입하고, 반복문 첫 바퀴니까 a는 0, a+b의 연산을 하고, 리턴된 값을 a에 대입한다.

  /* 구버전: 1년치 총액을 배열로 갖고 있는 각 value 값을
  변수 value에 누적 합산한다.

  let total = 0;

  for (let value of dataPointsValue) {
    total += value;
  }
  */

  /* 구버전2: forEach() 문으로 배열의 값들을 누적하여 더함
  dataPointsValue.forEach((v) => (total += v));
  */

  return (
    <div className="chart">
      {dataPoints.map(({ label, value }) => {
        return (
          <ChartBar
            key={label}
            label={label}
            currentValue={value /* 이 달에 대한 현재 값*/}
            totalValue={totalValue}
          />
        );
      })}
    </div>
  );
};

export default Chart;
