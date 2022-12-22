import React, { useState } from "react";
import Layout from "../../Source/Layout";
import Card from "./card";
import Graphs from "./Graphs";
import Tables from "./Tables";

const Dashboard = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Revenue",
      amount: "30,000",
    },
    {
      id: 2,
      name: "Sales Return",
      amount: "30,000",
    },
    {
      id: 3,
      name: "Purchase",
      amount: "30,000",
    },
    {
      id: 4,
      name: "Income",
      amount: "30,000",
    },
  ]);
  return (
    <Layout>
      <div className=" ml-[96px] p-[25px] bg-[#e8e8e8] mt-[60px]">
        <div className="flex gap-4">
          {data.map((element) => (
            <Card cardData={element} />
          ))}
        </div>

        <div>
          <Graphs />
        </div>

        <div className="mt-[50px]">
          <Tables/>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
