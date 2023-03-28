
import * as React from 'react';
import Navbar from "shared/NavBar/navbar";
import { ThemeProvider } from '@mui/system';
import { themeSettings } from 'theme';
import { useTheme } from '@emotion/react';
import Footer from 'shared/Footer/footer';
import { Typography, Box, Stack, Grid,   useMediaQuery, } from '@mui/material';
import styled from '@emotion/styled';
import FlexBetween from 'shared/FlexBetween/FlexBetween';
import Images from 'constants/ImgConstants';
import SharedButton from 'shared/Button/Button';
const Home = () => {
    const theme = useTheme();
    const neutralLight = theme.palette.background.alt;
    const primaryDefault = theme.palette.primary.Main;
    const h1= theme.typography.h1;
    const h5bold= theme.typography.h5bold;
    const primaryMain = theme.palette.primary.main;
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
    return (
    <Box sx={{backgroundColor: neutralLight,}}>
    <Navbar />

    {/* DESKTOP NAV */}
    {/* <Box
    sx={{
        component: "div",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "right",
        minHeight: "475px",
        width: "100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${Images.HERO_IMG})`,
        backgroundPosition: "center center",
        [theme.breakpoints.up("md")]: {
        backgroundPosition: "center right",
        },
    }}
    >
  <Box component="div" maxWidth="800px" padding="50px" >
    <Typography style={{ color: primaryDefault, ...h1 }}>
      Elevate Your Nursing Career Today
    </Typography >
    <Typography style={{ color: primaryDefault, ...h5bold }} sx={{maxWidth:"650px" }}>
      We provide a comprehensive platform for nurses to find the most relevant and
      rewarding job opportunities in the industry
    </Typography>
  </Box>
</Box> */}

    <div>Hello</div>
    <div>Hello</div>
    <div>Hello</div>
    <SharedButton>   Apply Now </SharedButton>
    <div>Hello</div>

    <Footer />
    </Box> 
    );
};

export default Home;





