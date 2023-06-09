
import * as React from 'react';
import Footer from 'shared/Footer/footer';
import { Box} from '@mui/material';
import Hero from './hero';
import About from './about';
import Map from './map';
import Details from './details';
import Applicants from './applicants';
import Recruiters from './recruiters';
import Guide from './guide';

const Home = () => {
    return (
    <Box>
      <Hero />
      <About />
      <Details />
      <Map />
      <Applicants/>
      <Guide />
      <Recruiters />
      <Footer/>
    </Box> 
    );
};

export default Home;





