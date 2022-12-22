import React, { useState } from "react";
import Chart from "react-apexcharts";

const Graphs = () => {
  const [data, setData] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  });

  const [data1, setData1] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
      },
    },
    series: [44, 55, 41, 17, 15],
    chartOptions: {
      labels: ["Apple", "Mango", "Orange", "Watermelon"],
    },
  });
  return (
    <div>
      <div className="flex gap-5 mt-[30px]">
        <Chart
          className="bg-white rounded-lg p-[50px] shadow-2xl grow-[2] flex justify-center"
          options={data.options}
          series={data.series}
          type="bar"
        //   width="100%"
        />

        <Chart
          className="bg-white rounded-lg p-[50px] flex items-center justify-center shadow-2xl grow-[1] "
          options={data1.options}
          series={data1.series}
          type="donut"
            width="100%"
        />
      </div>
    </div>
  );
};

export default Graphs;
