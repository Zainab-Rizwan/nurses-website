import React from 'react';
import Dashboard from 'scenes/employer-pages/dashboard';
import ResponsiveDrawer from "../widgets/side-bar";
import Disciplines from "../scenes/employer-pages/disciplines";

export const MyRoutes = [
    {
        path: "/",
        name: "Dashboard",
        component: Dashboard,
        layout: ResponsiveDrawer,
    },
    // { path: "/disciplines", element: <Disciplines />},
    {
        path: "/disciplines",
        name: "Disciplines",
        component: Disciplines,
        layout: ResponsiveDrawer,
    }
    // { path: "/", element: <Home />},
    // { path: "/account", element: <Account />},
    // { path: "/applicants", element: <Applicants />},
    // { path: "/dashboard", element: <Dashboard />},
    // { path: "/disciplines", element: <Disciplines />},
    // { path: "/facilities", element: <Facilities />},
    // { path: "/jobs", element: <Jobs />},
    // { path: "/profile", element: <Profile />},
    // { path: "/salaries", element: <Salaries />},
    // { path: "/browse-jobs", element: <BrowseJobs />},
]