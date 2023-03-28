import React, { useMemo } from "react";
import RouterConfig from "routes/router";
import { createTheme } from "@mui/system";
import { ThemeProvider } from "@mui/system";
import { themeSettings } from "theme";
import Navbar from "shared/NavBar/navbar";
import "assets/scss/globalStyleSheet.scss";


function App() {
  return (
    <div className="App">   
    <ThemeProvider theme={themeSettings}>
      <RouterConfig/>
    </ThemeProvider> 
    </div>
  );
}

export default App;

