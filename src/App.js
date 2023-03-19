import './App.css';
import Sidenav from './Sidenav';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Dashboard from './employer-pages/dashboard';
import Account from './employer-pages/account';
import Applicants from './employer-pages/applicants';
import Disciplines from './employer-pages/disciplines';
import Facilities from './employer-pages/facilities';
import Jobs from './employer-pages/jobs';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Dashboard />}></Route>
      <Route path="/account" exact element={<Account />}></Route>
      <Route path="/applicants" exact element={<Applicants />}></Route>
      <Route path="/disciplines" exact element={<Disciplines />}></Route>
      <Route path="/facilities" exact element={<Facilities />}></Route>
      <Route path="/jobs" exact element={<Jobs />}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
