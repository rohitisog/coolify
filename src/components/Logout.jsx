import React from "react";

const Logout = ({ handleLogout }) => {
  return (
    <button
      onClick={handleLogout}
      className="border mt-4 bg-gradient-to-r w-full from-orange-500 to-orange-800 px-4 rounded text-white py-2 hover:scale-105 transition-transform"
    >
      Logout
    </button>
  );
};

export default Logout;
