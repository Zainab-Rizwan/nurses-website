import * as React from 'react';
import { Box} from "@mui/system";
import Navbar from "shared/NavBar/navbar";
import Footer from 'shared/Footer/footer';
import TopJobs from './jobs';
import StatesTable from './states-table';
import EmployersTable from './employers-table';
import Header from './header';
import Calculator from './calculator';
import Graph from './graph';
import Details from './details';

const Salaries = () => {
    return (
    <Box >
        <Navbar />
        <Header />
        <Calculator />
        <Details />
        <Graph />
        <StatesTable />
        <EmployersTable />
        <TopJobs />
        <Footer />  
    </Box> 
    );
};

export default Salaries;