import React from "react";
import Login from "./pages/Login";
import { AuthProvider } from "./context/AuthContext";
import { Route, Routes } from "react-router";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </AuthProvider>
    </>
  );
};

export default App;
