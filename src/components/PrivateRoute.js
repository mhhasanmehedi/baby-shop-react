import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { currentUser } = useSelector((state) => state.users);

  return currentUser ? <Outlet /> : <Navigate to="/sign_in" />;
};

export default PrivateRoute;