import {
  FunctionComponent,
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { logInUser } from "../services/AuthenticationService";
import { globalAlertContext } from "../context/GlobalAlertContext";

interface User {
  user_id: number;
  email: string;
  username: string;
  token: string | undefined;
}

const AuthContext = createContext<{
  user: null | User;
  login: Function;
  logout: Function;
}>({
  user: null,
  login: () => {},
  logout: () => {},
});

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider: FunctionComponent<AuthProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<null | User>(null);
  const navigate = useNavigate();
  const { setAlertInfo } = useContext(globalAlertContext);

  const login = (username: string, password: string) => {
    logInUser(username, password)
      .then((response) => {
        if (response.data.token) {
          const decoded = jwt_decode(response.data.token) as User;
          decoded.token = response.data.token;
          setUser(decoded);
          navigate("/");
        }
      })
      .catch((err) =>
        setAlertInfo({
          title: "Error",
          subtitle: err.message,
          type: "error",
          show: true,
        })
      );
  };

  const logout = () => {
    setUser(null);
    navigate("/login", { replace: true });
  };

  const value = {
    user,
    login,
    logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
