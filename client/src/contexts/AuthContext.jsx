import { createContext, useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import Cookies from "js-cookie";
import { getAuth } from "../services/request";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const token = Cookies.get("auth");
      if (token) {
        try {
          const user = await getAuth();
          setIsAuthenticated(true);
          setUserId(user.data.id);
        } catch (err) {
          setIsAuthenticated(false);
        }
      } else {
        setIsAuthenticated(false);
      }
      setLoading(false);
    };
    checkAuth();
  }, []);

  const value = useMemo(
    () => ({ isAuthenticated, setIsAuthenticated, userId, setUserId, loading }),
    [isAuthenticated, setIsAuthenticated, userId, setUserId, loading]
  );

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export default AuthContext;

AuthProvider.propTypes = {
  children: PropTypes.shape().isRequired,
};
