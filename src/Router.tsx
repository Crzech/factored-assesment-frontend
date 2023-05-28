import React, { FunctionComponent } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";

const Router: FunctionComponent = () => (
  <Routes>
    {/* <Route path="/" element={<HomePage />} /> */}
    <Route path="/login" element={<LoginPage />} />
  </Routes>
);

export default Router;
