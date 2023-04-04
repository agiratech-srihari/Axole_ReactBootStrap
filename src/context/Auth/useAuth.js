import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("Token", null);
  const [userData,setUserData] = useLocalStorage("Details",null)
  const [role,setRole] = useLocalStorage("Role",null)
  const navigate = useNavigate();

  const login = async (data , details,role) => {
    setUser(data);
    setUserData(details)
    setRole(role)
    navigate("/", { replace: true });
  };

  const logout = () => {
    setUser(null);
    setUserData(null)
    setRole(null)
    navigate("/auth/login", { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      role,
      login,
      logout,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
export default useAuth;
