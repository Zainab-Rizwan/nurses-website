
import * as React from 'react';
import Navbar from "shared/NavBar/navbar";
import Footer from 'shared/Footer/footer';
import { Box} from '@mui/material';
import Hero from './hero';
import MoreInfo from './moreinfo';
import About from './about';
import Map from './map';
import Details from './details';

const Home = () => {
    return (
    <Box>
      <Navbar />
      <Hero />
      <About />
      <Map />
      <MoreInfo />
      <Details />
      <Footer/>
    </Box> 
    );
};

export default Home;





