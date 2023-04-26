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

export const MyRoutes = [
    { path: "/", name: "Home", element: <Home />},
    { path: "/account", name: "Account", element: <Account />,},
    { path: "/applicants", name: "Applicants", element: <Applicants />,},
    { path: "/disciplines", name: "Disciplines", element: <Disciplines />,},
    { path: "/dashboard", name: "Dashboard", element: <Dashboard />,},

    { path: "/facilities", name: "Facilities", element: <Facilities />},
    { path: "/edit-facility", name: "Edit Facility", element: <EditFacility />,},
    { path: "/add-facility", name: "Add Facility", element: <AddFacility />,},
    { path: "/expanded-facility", name: "Expanded Facility", element: <ExpandedFacility />,},

    { path: "/jobs", name: "Jobs", element: <Jobs />},
    { path: "/view-jobs", name: "View Jobs", element: <ViewJobs />},
    { path: "/browse-jobs", name: "Browse Jobs", element: <BrowseJobs />},

    { path: "/profile", name: "Profile", element: <Profile />},
    { path: "/salaries", name: "Salaries", element: <Salaries />},

    { path: "/sign-up", name: "Sign Up", element: <SignUp />},
    { path: "/sign-in", name: "Sign In", element: <SignIn />},
    { path: "/forgot-password", name: "Forgot Password", element: <ForgotPassword />},
    { path: "/account-setup", name: "Account Setup", element: <AccoutSetUp />},
    { path: "/otp", name: "OTP", element: <OTP />},
    { path: "/check-email", name: "Check email", element: <CheckEmail />},
    { path: "/password-reset", name: "Password reset", element: <PasswordReset />},
    { path: "/set-new-password", name: "Set new password", element: <SetNewPassword />},
]


// { path: "/", name: "Home", component: Home, layout: Navbar },
// { path: "/view-jobs", name: "View Jobs", component: ViewJobs, layout: Navbar },
// { path: "/browse-jobs", name: "Browse Jobs", component: BrowseJobs, layout: Navbar },
// { path: "/profile", name: "Profile", component: Profile, layout: Navbar },
// { path: "/salaries", name: "Salaries", component: Salaries, layout: Navbar },

// { path: "/account", name: "Account", component: Account, layout: ResponsiveDrawer },
// { path: "/applicants", name: "Applicants", component: Applicants, layout: ResponsiveDrawer },
// { path: "/disciplines", name: "Disciplines", component: Disciplines, layout: ResponsiveDrawer },
// { path: "/dashboard", name: "Dashboard", component: Dashboard, layout: ResponsiveDrawer },
// { path: "/jobs", name: "Jobs", component: Jobs, layout: ResponsiveDrawer },

// { path: "/facilities", name: "Facilities", component: Facilities, layout: ResponsiveDrawer },
// { path: "/edit-facility", name: "Edit Facility", component: EditFacility, layout: ResponsiveDrawer },
// { path: "/add-facility", name: "Add Facility", component: AddFacility, layout: ResponsiveDrawer },
// { path: "/expanded-facility", name: "Expanded Facility", component: ExpandedFacility, layout: ResponsiveDrawer },

// { path: "/sign-up", name: "Sign Up", component: SignUp, layout: undefined },
// { path: "/sign-in", name: "Sign In", component: SignIn, layout: undefined },
// { path: "/forgot-password", name: "Forgot Password", component: ForgotPassword, layout: undefined },
// { path: "/account-setup", name: "Account Setup", component: AccoutSetUp, layout: undefined },
// { path: "/otp", name: "OTP", component: OTP, layout: undefined },
// { path: "/check-email", name: "Check email", component: CheckEmail, layout: undefined },
// { path: "/password-reset", name: "Password reset", component: PasswordReset, layout: undefined },
// { path: "/set-new-password", name: "Set new password", component: SetNewPassword, layout: undefined },