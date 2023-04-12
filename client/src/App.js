import React from "react";
import RouterConfig from "./routes/Router";
import { ThemeProvider } from "@mui/system";
import { themeSettings } from "theme";
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

