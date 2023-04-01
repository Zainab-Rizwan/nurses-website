import React from 'react';
import Account from 'scenes/employer-pages/account';
import Applicants from 'scenes/employer-pages/applicants';
import Dashboard from 'scenes/employer-pages/dashboard';
import Disciplines from 'scenes/employer-pages/disciplines';
import Facilities from 'scenes/employer-pages/facilities';
import Jobs from 'scenes/employer-pages/jobs';

export const RoutesAdmin = [

    {path: "/dashboard", element: <Dashboard/>},
    {path: "/jobs", element: <Jobs/>},
    {path: "/applicants", element: <Applicants/>},

    {path: "/facilities", element: <Facilities/>},
    {path: "/disciplines", element: <Disciplines/>},
    {path: "/account", element: <Account/>},

]