import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export const ProtectedRoute = ({ permission = true, children }) => {
  const { isAdmin } = useContext(AuthContext);

  if (!permission) {
    return <Navigate to="/" replace />;
  }

  return children;
};
