import React from "react";
import DashboardLayout from "../components/Layout/DashboardLayout";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="border-b border-dashed text-xl font-semibold pb-2 mb-5">
        Dashboard
      </div>
      <p className="mb-2">
        Hello, <span className="font-medium">Mehedi Hasan Rahat</span>
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
