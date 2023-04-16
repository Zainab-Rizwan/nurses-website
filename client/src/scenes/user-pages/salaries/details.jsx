import { Box, styled, Typography, useMediaQuery} from "@mui/material";
import React from "react";
import { useTheme } from '@emotion/react';
import './index.scss';


const Details = () => {
  const theme = useTheme();
  const mainBlue = theme.palette.primary.main ;
  const darkBlue = theme.palette.primary.dark;
  const primaryMain = theme.palette.primary.main;
  const h3bold = theme.typography.h3bold;
  const h5bold = theme.typography.h5bold;
  const isDesktopScreens = useMediaQuery("(min-width: 800px)");

  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: isDesktopScreens ? theme.spacing(8) : theme.spacing(2),
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
            fontSize: h3bold,
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
            fontSize: h3bold,
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
            fontSize: h3bold,
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
