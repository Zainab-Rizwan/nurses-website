import * as React from 'react';
import { Box} from "@mui/system";
import Navbar from "shared/NavBar/navbar";
import Footer from 'shared/Footer/footer';
import AllJobs from './jobs';
import Header from './header';
import Search from './search';

const ViewJobs = () => {
    return (
    <Box>
        <Navbar />
        <Header />
        <Search />
        <AllJobs />
        <Footer />   
    </Box> 
    );
};

export default ViewJobs;