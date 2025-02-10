import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { isLoggedIn, userData, login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (email && password) {
      login(email, password);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-black">
      <div className="w-1/2 border rounded p-6 bg-white">
        <h1 className="text-3xl font-bold text-center p-2 bg-gradient-to-r from-orange-500 to-orange-700 text-transparent bg-clip-text">
          Login, Coolify
        </h1>
        {!isLoggedIn ? (
          <>
            <input
              type="email"
              className="border rounded block w-full py-2 mb-4 px-2 focus:outline-none"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="border rounded block w-full py-2 mb-4 px-2 focus:outline-none"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              onClick={handleSubmit}
              className="border bg-gradient-to-r w-full from-orange-500 to-orange-800 px-4 rounded text-white py-2 hover:scale-105 transition-transform"
            >
              Login
            </button>
          </>
        ) : (
          <p className="text-lg font-semibold">Welcome, {userData.email}!</p>
        )}
      </div>
    </div>
  );
};

export default Login;
