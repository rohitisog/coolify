import React from "react";
import { useAuth } from "../context/AuthContext";
import Logout from "../components/Logout";

const Dashboard = () => {
  const { userData, logout } = useAuth();

  return (
    <div className="h-screen flex justify-center items-center bg-black text-white">
      <div className="w-1/2 border rounded p-6 bg-white text-black text-center">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-lg">Welcome, {userData.email}!</p>
        <p className="text-lg">Your password: {userData.password}</p>
        <Logout handleLogout={logout} />
      </div>
    </div>
  );
};

export default Dashboard;
