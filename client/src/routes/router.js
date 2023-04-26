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
  

// import {Component, React} from "react";
// import {BrowserRouter, Route, Routes} from "react-router-dom";
// import {MyRoutes} from "./routes";
// import {QueryClient, QueryClientProvider} from "react-query";

// const queryClient = new QueryClient({
//     defaultOptions: {queries: {staleTime: 1000 * 60 * 10}},
// });

// export default class RouterConfig extends Component {
//     render() {

//         return (
//             <QueryClientProvider client={queryClient}>
//                 <BrowserRouter>
//                 <Routes>
//                     {MyRoutes.map((route) => (
//                       <Route key={route.path} path={route.path} element={<route.layout><route.component/></route.layout>} />
//                     ))}
//                   </Routes>
//                 </BrowserRouter>
//             </QueryClientProvider>
//         );
//     }
// }
  