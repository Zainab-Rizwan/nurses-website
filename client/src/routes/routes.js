import React from 'react';
import Account from 'scenes/employer-pages/account';
import Applicants from 'scenes/employer-pages/applicants';
import Dashboard from 'scenes/employer-pages/dashboard';
import Disciplines from 'scenes/employer-pages/disciplines';
import Facilities from 'scenes/employer-pages/facilities/view-facility';
import AddFacility from 'scenes/employer-pages/facilities/add-facility';
import EditFacility from 'scenes/employer-pages/facilities/edit-facility';
import ExpandedFacility from 'scenes/employer-pages/facilities/expand-facility';
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
    { path: "/edit-facility", element: <EditFacility />},   
    { path: "/add-facility", element: <AddFacility />},    
    { path: "/expanded-facility", element: <ExpandedFacility />},

    { path: "/jobs", element: <Jobs />},
    { path: "/view-jobs", element: <ViewJobs />},
    { path: "/browse-jobs", element: <BrowseJobs />},

    { path: "/profile", element: <Profile />},
    { path: "/salaries", element: <Salaries />},

    { path: "/sign-up", element: <SignUp />},
    { path: "/sign-in", element: <SignIn />},
    { path: "/forgot-password", element: <ForgotPassword />},
    { path: "/account-setup", element: <AccoutSetUp />},
    { path: "/otp", element: <OTP />},
    { path: "/check-email", element: <CheckEmail />},
    { path: "/password-reset", element: <PasswordReset />},
    { path: "/set-new-password", element: <SetNewPassword />},

    { path: "/sidebar", element: <ResponsiveDrawer />},

]