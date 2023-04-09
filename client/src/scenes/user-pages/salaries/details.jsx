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
  const mainBlue = theme.palette.primary.main ;
  const darkGray = theme.palette.neutral.dark;
  const darkBlue = theme.palette.primary.dark;
  const primaryMain = theme. palette.primary.main;
  const white = theme. palette.neutral.default;
  const h1 = theme.typography.h1;  
  const h2 = theme.typography.h2;  
  const h5 = theme.typography.h5;
  const h7 = theme.typography.h7;
  const h3bold = theme.typography.h3bold;
  const h5bold = theme.typography.h5bold;
  const h6bold = theme.typography.h6bold;
  const isDesktopScreens = useMediaQuery("(min-width: 1050px)");
  const isTabletScreens = useMediaQuery("(min-width: 508px)");

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
    <CustomBox sx={{  marginLeft: "10%", marginRight:"10%", marginTop: theme.spacing(8) }}>
        <Box  component={Paper} elevation={9} sx={{ flex: "1.25", p:3 }} >
        <Typography
          sx={{ 
            fontSize: h3bold,
            color: darkBlue, 
          }}>
        Average Salary
        </Typography>
        <Typography
            sx={{
              fontSize: h5,
              color: darkGray,
              my: theme.spacing(8),
              mt: 1
            }}
          >
          Estimate based on Bureau of Labor Statistics data 
          </Typography>  
          <Typography
          sx={{ 
            fontSize: h1,
            color: primaryMain, 
          }}>
         $32.67/hour
        </Typography>     
        </Box>


        <Box component={Paper} elevation={9}  sx={{ flex: "1.25", p:3 }} >
        <Typography
          sx={{ 
            fontSize: h3bold,
            color: darkBlue, 
          }}>
        Average Salary
        </Typography>
        <Typography
            sx={{
              fontSize: h5,
              color: darkGray,
              my: theme.spacing(8),
              mt: 1
            }}
          >
          Estimate based on Bureau of Labor Statistics data 
          </Typography>  
          <Typography
          sx={{ 
            fontSize: h1,
            color: primaryMain, 
          }}>
         $32.67/hour
        </Typography>     
        </Box>

        <Box component={Paper} elevation={9} sx={{ flex: "1.25", p:3 }} >
        <Typography
          sx={{ 
            fontSize: h3bold,
            color: darkBlue, 
          }}>
        Average Salary
        </Typography>
        <Typography
            sx={{
              fontSize: h5,
              color: darkGray,
              my: theme.spacing(8),
              mt: 1
            }}
          >
          Estimate based on Bureau of Labor Statistics data 
          </Typography>  
          <Typography
          sx={{ 
            fontSize: h1,
            color: primaryMain, 
          }}>
         $32.67/hour
        </Typography>     
        </Box>
    </CustomBox>
  );
};

export default Details;
