import React from 'react';
import Dashboard from 'scenes/employer-pages/dashboard';
import ResponsiveDrawer from "../widgets/side-bar";
import Disciplines from "../scenes/employer-pages/disciplines";
import Applicants from "../scenes/employer-pages/applicants";
import Account from "../scenes/employer-pages/account";
import Facilities from "../scenes/employer-pages/facilities";

export const MyRoutes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
        layout: ResponsiveDrawer,
    },
    {
        path: "/discipline",
        name: "Disciplines",
        component: Disciplines,
        layout: ResponsiveDrawer,
    },
    {
        path: "/applicants",
        name: "Applicants",
        component: Applicants,
        layout: ResponsiveDrawer,
    },
    {
        path: "/account",
        name: "Account",
        component: Account,
        layout: ResponsiveDrawer,
    },
    {
        path: "/facilities",
        name: "Facilities",
        component: Facilities,
        layout: ResponsiveDrawer,
    },

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