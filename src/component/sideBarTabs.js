import React from "react";
import { NavLink } from "react-router-dom";

const SidebarTabs = ({ data }) => {
  return (
    <NavLink to={`/${data.id}`}>
      <div className="flex flex-col gap-1 py-4 justify-center items-center text-white text-sm">
        <img src={data.icon} alt="img" />
        <p>{data.id}</p>
      </div>
    </NavLink>
  );
};

export default SidebarTabs;
