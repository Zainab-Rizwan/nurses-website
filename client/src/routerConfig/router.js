import { React, Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MyRoutes } from "./routes";

export default class RouterConfig extends Component {
    render() {
      return (
        <BrowserRouter>
          <Routes>
            {MyRoutes.map((elem, index) => {
              return <Route path={elem.path} element={elem.element} />;
            })}
          </Routes>
        </BrowserRouter>
      );
    }
  }
  