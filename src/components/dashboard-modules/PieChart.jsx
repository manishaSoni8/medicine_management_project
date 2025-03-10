import React from "react";
import { Chart } from "react-google-charts";

const PieChart = ({ departmentData }) => {
  const chartData = [
    ["Department", "Count"],
    ...Object.entries(departmentData).map(([key, value]) => [key, value]),
  ];

  return (
    
    <div className="pie-chart ">
      <Chart 
        chartType="PieChart" 
        data={chartData} 
      
        options={{ title: "Employee Department Data", is3D: true, pieStartAngle: 100 }} 
      />
    </div>
    
  );
};

export default PieChart;
