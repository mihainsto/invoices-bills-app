import "./App.css";
import Login from "./pages/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Invoices from "./pages/Invoices";
import Bills from "./pages/Bills";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

function App() {

  return(
      <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Router>
            <Routes>
              <Route exact path="/" element={<Login />}/>
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/home" element={<Home />} />
                <Route exact path="/invoices" element={<Invoices />} />
                <Route exact path="/bills" element={<Bills />} />
            </Routes>
          </Router>
      </ThemeProvider>
  )
}

export default App;
