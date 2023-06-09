import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { currentUser } = useSelector((state) => state.users);

  return currentUser ? children : <Navigate to="/sign_in" />;
};

export default PrivateRoute;
