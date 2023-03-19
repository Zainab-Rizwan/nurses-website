import { routerType } from "../types/router.types";

import Account from "./employer-pages/account";
import Applicants from "./employer-pages/applicants";
import Disciplines from "./employer-pages/disciplines";
import Facilities from "./employer-pages/facilities";
import Jobs from "./employer-pages/jobs";
import Dashboard from "./employer-pages/dashboard";
import React from "react";

const pagesData: routerType[] = [
    {
      path: "",
      element: <Dashboard />,
      title: "Dashboard"
    },
    {
      path: "account",
      element: <Account />,
      title: "Account"
    },
    {
      path: "disciplines",
      element: <Disciplines />,
      title: "Disciplines"
    },
    {
      path: "facilities",
      element: <Facilities />,
      title: "Facilities"
    },
    {
      path: "jobs",
      element: <Jobs />,
      title: "Jobs"
    },
  ];
  
  export default pagesData;