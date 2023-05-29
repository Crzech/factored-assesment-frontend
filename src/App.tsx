import Router from "./Router";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { AuthProvider } from "./hooks/useAuth";
import GlobarAlertContext, {
  globalAlertContext,
} from "./context/GlobalAlertContext";
import { Alert, AlertTitle } from "@mui/material";
import { useContext } from "react";

const defaultTheme = createTheme({
  palette: {
    mode: "dark",
    // background: {
    //   default: "#66ada4",
    // },
    text: {
      primary: "#ffffff",
    },
  },
});
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <ThemeProvider theme={defaultTheme}>
          <CssBaseline />
          <Router />
        </ThemeProvider>
      </AuthProvider>
    </div>
  );
}

const AppGlobalAlert = () => (
  <GlobarAlertContext>
    <App />
  </GlobarAlertContext>
);
export default AppGlobalAlert;
