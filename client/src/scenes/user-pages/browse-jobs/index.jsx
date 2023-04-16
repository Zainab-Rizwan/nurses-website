
import * as React from 'react';
import Navbar from "shared/NavBar/navbar";
import Footer from 'shared/Footer/footer';
import { Box} from "@mui/material";
import Header from './header';
import Search from './filter';
import Carousel from './jobs';

const BrowseJobs = () => {
    return (
    <Box>
      <Navbar />
      <Header />
      <Search />
      <Carousel />
      <Footer/>
    </Box> 
    );
};

export default BrowseJobs;





