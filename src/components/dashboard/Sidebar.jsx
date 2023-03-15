import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AiFillDashboard, AiFillSetting } from "react-icons/ai";
import { BsBagCheckFill } from "react-icons/bs";
import { FaAddressCard } from "react-icons/fa";
import { RiLogoutBoxFill } from "react-icons/ri";
import { signOut } from "../../features/auth/authSlice";
import { useDispatch } from "react-redux";

const sidebarData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <AiFillDashboard />,
  },
  {
    title: "Orders",
    path: "/dashboard/orders",
    icon: <BsBagCheckFill />,
  },
  {
    title: "Profile",
    path: "/dashboard/profile",
    icon: <FaAddressCard />,
  },
  {
    title: "Settings",
    path: "/dashboard/settings",
    icon: <AiFillSetting />,
  },
];

const Sidebar = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  return (
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

      <div
        onClick={() => dispatch(signOut())}
        className="flex items-center gap-2 text-md font-medium text-gray-700 hover:bg-pink-700 hover:text-white py-2 px-4 uppercase border-b last:border-b-transparent cursor-pointer"
      >
        <RiLogoutBoxFill />
        Logout
      </div>
    </div>
  );
};

export default Sidebar;
