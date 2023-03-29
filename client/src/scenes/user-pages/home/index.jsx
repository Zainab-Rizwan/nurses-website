
import * as React from 'react';
import Navbar from "shared/NavBar/navbar";
import Footer from 'shared/Footer/footer';
import { Box} from '@mui/material';
import Hero from './hero';
import About from './about';
import Guide from './guide';

const Home = () => {

    return (
    <Box>
    <Navbar />
    <Hero />
    <About />
    <Guide />
    </Box> 
    );
};

export default Home;





