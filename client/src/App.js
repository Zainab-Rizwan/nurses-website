import React, { useMemo } from "react";
import RouterConfig from "routerConfig/router";
import { createTheme } from "@mui/system";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { themeSettings } from "theme";


function App() {
  return (
    <div className="App">   
    <ThemeProvider theme={themeSettings}>
      <CssBaseline/>
      <RouterConfig/>
    </ThemeProvider> 
    </div>
  );
}

export default App;

