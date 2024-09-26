import { createContext, useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({
    id: localStorage.getItem("id"),
    email: localStorage.getItem("email"),
    role: localStorage.getItem("role"),
  });

  useEffect(() => {
    if (user.id && user.email && user.role) {
      localStorage.setItem("id", user.id);
      localStorage.setItem("email", user.email);
      localStorage.setItem("role", user.role);
      setIsAuthenticated(true);
    }
  }, [user]);

  const value = useMemo(
    () => ({ isAuthenticated, setIsAuthenticated, user, setUser }),
    [isAuthenticated, setIsAuthenticated, user, setUser]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContext;

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
