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
  const { alertInfo, setAlertInfo } = useContext(globalAlertContext);
  return (
    <div className="App">
      <AuthProvider>
        <ThemeProvider theme={defaultTheme}>
          <CssBaseline />
          {alertInfo.show ? (
            <Alert
              onClose={() => {
                setAlertInfo({
                  show: false,
                  title: "Success",
                  subtitle: "",
                  type: "success",
                });
              }}
              severity={
                alertInfo.type === "success"
                  ? "success"
                  : alertInfo.type === "error"
                  ? "error"
                  : alertInfo.type === "info"
                  ? "info"
                  : "warning"
              }
            >
              <AlertTitle>{alertInfo.title}</AlertTitle>
              {alertInfo.subtitle}
            </Alert>
          ) : (
            <></>
          )}
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
