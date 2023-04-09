import * as React from 'react';
import { Box} from "@mui/system";
import Navbar from "shared/NavBar/navbar";
import Footer from 'shared/Footer/footer';
import TopJobs from './jobs';

const Salaries = () => {
    return (
    <Box >
        <Navbar />
        <TopJobs />
        <Footer />  
    </Box> 
    );
};

export default Salaries;