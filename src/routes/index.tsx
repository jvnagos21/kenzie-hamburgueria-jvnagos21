import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import ProtectedRoutes from "../components/ProtectedRoutes";

export const RoutesHub = () => {
  return (
    <Routes>
      <Route path="" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<ProtectedRoutes />}>
        <Route index element={<Dashboard />} />
      </Route>
      <Route path="*" element={<Navigate to="" />} />
    </Routes>
  );
};
