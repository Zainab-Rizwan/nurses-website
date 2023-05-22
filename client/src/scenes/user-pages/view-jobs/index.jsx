import * as React from 'react';
import { Box} from "@mui/system";
import Footer from 'shared/Footer/footer';
import AllJobs from './jobs';
import Header from './header';
import Search from './search';

const ViewJobs = () => {
    return (
    <Box>
        <Header />
        <Search />
        <AllJobs />
        <Footer />   
    </Box> 
    );
};

export default ViewJobs;