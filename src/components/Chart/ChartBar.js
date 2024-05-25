import React from "react";
import "./ChartBar.css";

const ChartBar = ({ label, currentValue /* 현재 값*/, totalValue }) => {
  let barFillHeight = "0%";

  if (totalValue > 0) {
    const percentage = (currentValue / totalValue) * 100;
    barFillHeight = percentage + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>

      <div className="chart-bar__label">
        {/* 월 의 값이 들어가야 한다. */}
        {label}
      </div>
    </div>
  );
};

export default ChartBar;
