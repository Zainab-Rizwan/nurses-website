import { Box, styled, Typography, useMediaQuery, Grid, FormControl, CssBaseline, Paper, TextField, InputLabel, Select, MenuItem} from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import React from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from '@emotion/react';
import Images from "constants/ImgConstants";
import JobCard from "shared/Job-Cards";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect, useRef } from 'react';
import './index.scss';
import Button from "shared/Button";


const Details = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const mainBlue = theme.palette.primary.light ;
  const darkGray = theme.palette.neutral.dark;
  const darkBlue = theme.palette.primary.dark;
  const primaryMain = theme.palette.primary.main;
  const white = theme. palette.neutral.default;
  const h1 = theme.typography.h1;  
  const h2 = theme.typography.h2;  
  const h5 = theme.typography.h5;
  const h7 = theme.typography.h7;
  const h4bold = theme.typography.h4bold;
  const h3bold = theme.typography.h3bold;
  const h5bold = theme.typography.h5bold;
  const h6bold = theme.typography.h6bold;
  const isDesktopScreens = useMediaQuery("(min-width: 800px)");
  const isTabletScreens = useMediaQuery("(min-width: 650px)");

  const CustomImage = styled('img')(({ theme }) => ({
    maxWidth: "100%",
  }));

  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(8),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));
  

  return (
    <Box sx={{  marginLeft: "10%", marginRight:"10%", marginTop: theme.spacing(8), p:3,  border: `15px solid ${mainBlue}`, textAlign:"center" }}>
    <CustomBox>
        <Box  sx={{ flex: "1.25", p:3, }} >
        <Typography
          sx={{ 
            fontSize: h5bold,
            mb: 1,
            color: darkBlue, 
          }}>
        Weekly Pay
        </Typography> 
          <Typography
          sx={{ 
            fontSize: isTabletScreens ? h3bold : isDesktopScreens ? h2 : h2,
            color: primaryMain, 
          }}>
         $52/hour
        </Typography>     
        </Box>

        <Box  sx={{ flex: "1.25", p:3 }} >
        <Typography
          sx={{ 
            fontSize: h5bold,
            mb: 1,
            color: darkBlue, 
          }}>
        Burden
        </Typography> 
          <Typography
          sx={{ 
            fontSize: isTabletScreens ? h3bold : isDesktopScreens ? h2 : h2,
            color: primaryMain, 
          }}>
         $1265/hour
        </Typography>     
        </Box>

        <Box  sx={{ flex: "1.25", p:3 }} >
        <Typography
          sx={{ 
            fontSize: h5bold,
            mb: 1,
            color: darkBlue, 
          }}>
        Mark Up
        </Typography> 
          <Typography
          sx={{ 
            fontSize: isTabletScreens ? h3bold : isDesktopScreens ? h2 : h2,
            color: primaryMain, 
          }}>
         $32.67/hour
        </Typography>     
        </Box>
    </CustomBox>
    </Box>  
  );
};

export default Details;
