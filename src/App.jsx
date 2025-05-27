import React from "react";
import "./App.css";
import AdminDashboard from "./pages/AdminDashboard";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<AdminDashboard />} />
      </Routes>
    </div>
  );
};

export default App;
