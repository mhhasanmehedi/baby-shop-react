import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const { currentUser } = useSelector((state) => state.users);

  return !currentUser ? children : <Navigate to="/" />;
};

export default PublicRoute;
