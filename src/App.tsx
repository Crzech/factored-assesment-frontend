import Router from "./Router";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const defaultTheme = createTheme({
  palette: {
    mode: 'dark',
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
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <Router />
      </ThemeProvider>
    </div>
  );
}

export default App;
