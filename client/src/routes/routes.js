import React from 'react';
import Account from 'scenes/employer-pages/account';
import Applicants from 'scenes/employer-pages/applicants';
import Dashboard from 'scenes/employer-pages/dashboard';
import Disciplines from 'scenes/employer-pages/disciplines';
import Facilities from 'scenes/employer-pages/facilities';
import Jobs from 'scenes/employer-pages/jobs';
import Home from 'scenes/user-pages/home';
import Profile from 'scenes/user-pages/profile';
import Salaries from 'scenes/user-pages/salaries'; 
import SignUp from 'scenes/auth-pages/signup';
import SignIn from 'scenes/auth-pages/signin';
import BrowseJobs from 'scenes/user-pages/browse-jobs';
import AccoutSetUp from 'scenes/auth-pages/account-setup';
import OTP from 'scenes/auth-pages/otp';
import ForgotPassword from 'scenes/auth-pages/forgot-password';
import ViewJobs from 'scenes/user-pages/view-jobs';
import CheckEmail from 'scenes/auth-pages/check-email';
import PasswordReset from 'scenes/auth-pages/password-reset';
import SetNewPassword from 'scenes/auth-pages/set-new-password';
import ResponsiveDrawer from 'shared/SideBar/sidebar';

export const MyRoutes = [
    { path: "/", element: <Home />},
    { path: "/account", element: <Account />},
    { path: "/applicants", element: <Applicants />},
    { path: "/dashboard", element: <Dashboard />},
    { path: "/disciplines", element: <Disciplines />},
    { path: "/facilities", element: <Facilities />},
    { path: "/jobs", element: <Jobs />},
    { path: "/profile", element: <Profile />},
    { path: "/salaries", element: <Salaries />},
    { path: "/browse-jobs", element: <BrowseJobs />},
    { path: "/sign-up", element: <SignUp />},
    { path: "/sign-in", element: <SignIn />},
    { path: "/forgot-password", element: <ForgotPassword />},
    { path: "/account-setup", element: <AccoutSetUp />},
    { path: "/otp", element: <OTP />},
    { path: "/view-jobs", element: <ViewJobs />},
    { path: "/check-email", element: <CheckEmail />},
    { path: "/password-reset", element: <PasswordReset />},
    { path: "/set-new-password", element: <SetNewPassword />},
    { path: "/sidebar", element: <ResponsiveDrawer />},

]