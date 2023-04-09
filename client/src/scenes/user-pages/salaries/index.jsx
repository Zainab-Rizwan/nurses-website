import * as React from 'react';
import { Box} from "@mui/system";
import Navbar from "shared/NavBar/navbar";
import Footer from 'shared/Footer/footer';
import TopJobs from './jobs';
import StatesTable from './states-table';
import Header from './header';

const Salaries = () => {
    return (
    <Box >
        <Navbar />
        <Header />
        <StatesTable />
        <TopJobs />
        <Footer />  
    </Box> 
    );
};

export default Salaries;