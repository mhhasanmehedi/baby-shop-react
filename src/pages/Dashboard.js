import React from "react";
import { useSelector } from "react-redux";
import DashboardLayout from "../components/Layout/DashboardLayout";

const Dashboard = () => {
  const { currentUser } = useSelector((state) => state.users);
  return (
    <DashboardLayout>
      <div className="border-b border-dashed text-xl font-semibold pb-2 mb-5">
        Dashboard
      </div>
      <p className="mb-2">
        Hello, <span className="font-medium">{currentUser.name}</span>
      </p>
      <p>
        From your account dashboard. you can easily check & view your recent
        orders, manage your shipping and billing addresses and edit your
        password and account details.
      </p>
    </DashboardLayout>
  );
};

export default Dashboard;
