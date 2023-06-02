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
import Navbar from 'shared/NavBar/navbar';
import ResponsiveDrawer from 'shared/SideBar/sidebar';

export const MyRoutes = [
    { path: "/", name: "Home", component: Home, layout: Navbar },
    { path: "/view-jobs", name: "View Jobs", component: ViewJobs, layout: Navbar },
    { path: "/browse-jobs", name: "Browse Jobs", component: BrowseJobs, layout: Navbar },
    { path: "/profile", name: "Profile", component: Profile, layout: Navbar },
    { path: "/salaries", name: "Salaries", component: Salaries, layout: Navbar },
    
    { path: "/account", name: "Account", component: Account, layout: ResponsiveDrawer },
    { path: "/applicants", name: "Applicants", component: Applicants, layout: ResponsiveDrawer },
    { path: "/disciplines", name: "Disciplines", component: Disciplines, layout: ResponsiveDrawer },
    { path: "/dashboard", name: "Dashboard", component: Dashboard, layout: ResponsiveDrawer },
    { path: "/jobs", name: "Jobs", component: Jobs, layout: ResponsiveDrawer },
    
    { path: "/facilities", name: "Facilities", component: Facilities, layout: ResponsiveDrawer },
    { path: "/edit-facility", name: "Edit Facility", component: EditFacility, layout: ResponsiveDrawer },
    { path: "/add-facility", name: "Add Facility", component: AddFacility, layout: ResponsiveDrawer },
    { path: "/expanded-facility", name: "Expanded Facility", component: ExpandedFacility, layout: ResponsiveDrawer },
    
    { path: "/sign-up", name: "Sign Up", component: SignUp, layout: Navbar },
    { path: "/sign-in", name: "Sign In", component: SignIn, layout: Navbar },
    { path: "/forgot-password", name: "Forgot Password", component: ForgotPassword, layout: Navbar },
    { path: "/account-setup", name: "Account Setup", component: AccoutSetUp, layout: Navbar },
    { path: "/otp", name: "OTP", component: OTP, layout: Navbar },
    { path: "/check-email", name: "Check email", component: CheckEmail, layout: Navbar },
    { path: "/password-reset", name: "Password reset", component: PasswordReset, layout: Navbar },
    { path: "/set-new-password", name: "Set new password", component: SetNewPassword, layout: Navbar },
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