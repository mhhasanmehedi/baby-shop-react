import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BsBagCheckFill } from "react-icons/bs";

const sidebarData = [
  {
    title: "Add Product",
    path: "/admin/add_product",
    icon: <BsBagCheckFill />,
  },
  {
    title: "All Product",
    path: "/admin/all_product",
    icon: <BsBagCheckFill />,
  },
];

const AdminDashboardLayout = ({ children }) => {
  const { pathname } = useLocation();
  return (
    <div className="container mx-auto px-4 py-14">
      <div className="flex gap-8 items-start">
        <div className="flex-[3] border border-gray-200">
          {sidebarData.map((item, index) => (
            <Link
              key={index}
              className={`flex items-center gap-2 text-md font-medium text-gray-700 ${
                pathname === item.path && "bg-pink-700 text-white"
              } hover:bg-pink-700 hover:text-white py-2 px-4 uppercase border-b last:border-b-transparent tracking-[1px]`}
              to={item.path}
            >
              {item.icon}
              {item.title}
            </Link>
          ))}
        </div>
        <div className="flex-[9] border p-5">{children}</div>
      </div>
    </div>
  );
};

export default AdminDashboardLayout;
