import React, { useState } from "react";
import vector from "./../assets/icons/Vector.png";
import SidebarTabs from "./sideBarTabs";

const SideBar = () => {
  const [data, setData] = useState([
    {
      id: "Dashboard",
      icon: vector,
    },
    {
      id: "Purchases",
      icon: vector,
    },
    {
      id: "Products",
      icon: vector,
    },
    {
      id: "Sales",
      icon: vector,
    },
    {
      id: "Orders",
      icon: vector,
    },
    {
      id: "Users",
      icon: vector,
    },
  ]);

  return (
    <div>
      <div className="w-[96px] h-[931px] bg-[#101540] fixed">
        {data?.map((element, index) => (
          <SidebarTabs key={index} data={element} />
        ))}
      </div>
    </div>
  );
};

export default SideBar;
