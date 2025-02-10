import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("userInfo");
    if (storedUser) {
      setIsLoggedIn(true);
      setUserData(JSON.parse(storedUser));
    }
  }, []);

  const login = (email, password) => {
    const userInfo = { email, password };
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    setIsLoggedIn(true);
    setUserData(userInfo);
    navigate("/dashboard");
  };

  const logout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    setUserData({ email: "", password: "" });
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
