import React from "react";
import { Chart } from "react-google-charts";

const BarChart = ({ allergyData }) => {
  const chartData = [
    ["Allergy", "Count"],
    ...Object.entries(allergyData).map(([key, value]) => [key, value]),
  ];

  return (
    <div className="bar-chart ">
      <Chart 
        chartType="BarChart" 
        data={chartData} 
       
        options={{ title: "Allergy Distribution" }} 
      />
    </div>
  );
};

export default BarChart;