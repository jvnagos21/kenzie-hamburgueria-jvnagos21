import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import MainPage from "../pages/mainPage";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

export const RoutesHub = () => {
  return (
    <Routes>
      <Route path="" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/main_page" element={<MainPage />} />
      <Route path="*" element={<Navigate to="" />} />
    </Routes>
  );
};
