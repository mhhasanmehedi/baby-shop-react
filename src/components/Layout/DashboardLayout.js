import React from "react";
import Sidebar from "../dashboard/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="container mx-auto px-4 py-14">
      <div className="flex gap-8 items-start">
        <Sidebar />
        <div className="flex-[9] border p-5">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
