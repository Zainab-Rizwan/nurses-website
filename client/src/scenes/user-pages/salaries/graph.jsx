import { Box, styled, Typography, Paper, Grid } from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import React from "react";
import { useTheme } from '@emotion/react';
import './index.scss';
const data = [
  {
    name: 'Category 1',
    value1: 4000,
    value2: 3000
  },
  {
    name: 'Category 2',
    value1: 3000,
    value2: 5000
  },
  {
    name: 'Category 3',
    value1: 2000,
    value2: 4000
  },
  {
    name: 'Category 4',
    value1: 2780,
    value2: 3900
  },
  {
    name: 'Category 5',
    value1: 1890,
    value2: 3000
  },
];

const Graph = () => {
  const theme = useTheme();
  const mainBlue = theme.palette.primary.main ;
  const darkGray = theme.palette.neutral.dark;
  const darkBlue = theme.palette.primary.dark;
  const primaryMain = theme.palette.primary.main;
  const h1 = theme.typography.h1;  
  const h5 = theme.typography.h5;
  const h7 = theme.typography.h7;
  const h3bold = theme.typography.h3bold;

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
    <Box  component={Paper} elevation={9} sx={{  marginLeft: "10%", marginRight:"10%", marginTop: theme.spacing(4), p:3 }}>
    <CustomBox>
    <Grid container spacing={3}>
        <Grid item xs={12} md={5}> 
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
            mb: "4rem"
          }}>
         $32.67/hour
        </Typography>     
         </Grid>

        <Grid item xs={12} md={7} >
        <Typography sx={{fontSize: h5}}>Lorem Ipsum Dolor Graph</Typography>
        <Box sx={{ flexGrow: 1, p: 2, fontSize: h7, display: "flex", justifyContent: "center", alignItems: "center"}}>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="2 2" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value1" stackId="a" fill= {mainBlue} />
              <Bar dataKey="value2" stackId="a" fill= {"#bad1d7"} />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </Grid>   
      </Grid>   
    </CustomBox>
    </Box>  
  );
};

export default Graph;
