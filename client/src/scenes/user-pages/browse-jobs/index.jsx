
import * as React from 'react';
import Navbar from "shared/NavBar/navbar";
import Footer from 'shared/Footer/footer';
import { Box} from "@mui/material";
import Guide from './guide';
import Header from './header';
import Search from './filter';
import Jobs from './jobs';

const BrowseJobs = () => {
    return (
    <Box>
      <Navbar />
      <Header />
      <Search />
      <Guide />
      <Jobs />
      <Footer/>
    </Box> 
    );
};

export default BrowseJobs;





