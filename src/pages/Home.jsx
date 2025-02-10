import React from "react";
import { Link } from "react-router";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-6">Welcome to Our App</h1>
      <div className="space-x-4">
        <Link to="/login">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
            Login
          </button>
        </Link>
        <Link to="/signup">
          <button className="px-4 py-2 bg-green-500 text-white rounded-md">
            Signup
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
