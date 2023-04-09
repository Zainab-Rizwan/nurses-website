import { Box, styled, Typography, useMediaQuery, Grid, FormControl, InputLabel, Select, MenuItem, Chip  } from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import React from "react";
import { useTheme } from '@emotion/react';
import { useState } from 'react';

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

const Details = () => {
  const theme = useTheme();
  const white = theme.palette.background.default;
  const lightBlue = theme.palette.neutral.light;
  const darkBlue = theme.palette.primary.main;
  const h7 = theme.typography.h7;
  const h5 = theme.typography.h5bold;
  const isTabletScreens = useMediaQuery("(min-width: 768px)");
  const isDesktopScreens = useMediaQuery("(min-width: 800px)");

  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    backgroundColor: white,
    marginTop: "4rem",
    gap: theme.spacing(2),
    
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
    
  }));

  const [selectedValues1, setSelectedValues1] = useState([]);
  const [selectedValues2, setSelectedValues2] = useState([]);
  const [selectedValues3, setSelectedValues3, ] = useState([]);


  const handleChange1 = (event) => {
    const { value } = event.target;
    setSelectedValues1(value);
  };

  const handleChange2 = (event) => {
    const { value } = event.target;
    setSelectedValues2(value);
  };

  const handleChange3 = (event) => {
    const { value } = event.target;
    setSelectedValues3(value);
  };
 
  return (
    <CustomBox>
    <Box >
      <Box sx={{ flexGrow: 1, p: 3, }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}> 
          <Typography sx={{ mt: 2, fontSize: h5, my: 2 }}>Facility Name</Typography>
          <FormControl sx={{ minWidth: "18rem"}}>
          <InputLabel>Select a facility</InputLabel>
          <Select
            label="Select a facility"
            multiple
            value={selectedValues1}
            onChange={handleChange1}
            renderValue={(selected) => (
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} style={{ marginRight: 5, backgroundColor: lightBlue }} />
                ))}
              </div>
            )}
            autoWidth
          >
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
            <MenuItem value="option3">Option 3</MenuItem>
          </Select>
        </FormControl>

          <Typography sx={{ mt: 2, fontSize: h5, my: 2 }}>Location Display</Typography>
          <FormControl sx={{ minWidth: "18rem"}}>
            <InputLabel>Select a location</InputLabel>
            <Select
            label="Select an option"
            multiple
            value={selectedValues2}
            onChange={handleChange2}
            renderValue={(selected) => (
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} style={{ marginRight: 5, backgroundColor: lightBlue }} />
                ))}
              </div>
            )}
          >
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
            <MenuItem value="option3">Option 3</MenuItem>
          </Select>
          </FormControl>

          <Typography sx={{ mt: 2, fontSize: h5, my: 2 }}>Shift Breakdown</Typography>
          <FormControl sx={{ minWidth: "18rem"}}>
            <InputLabel>Select a shift</InputLabel>
            <Select
            label="Select an option"
            multiple
            value={selectedValues3}
            onChange={handleChange3}
            renderValue={(selected) => (
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} style={{ marginRight: 5, backgroundColor: lightBlue }} />
                ))}
              </div>
            )}
            autoWidth
          >
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
            <MenuItem value="option3">Option 3</MenuItem>
          </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={8}>
        <Typography sx={{fontSize: h5}}>Lorem Ipsum Dolor Graph</Typography>
        <Box sx={{ flexGrow: 1, p: 2, fontSize: h7, display: "flex", justifyContent: "center", alignItems: "center"}}>
          <BarChart width={isTabletScreens ? 550 : isDesktopScreens ? 750 : 400} height={400} data={data} >
            <CartesianGrid strokeDasharray="2 2" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value1" stackId="a" fill= {darkBlue} />
            <Bar dataKey="value2" stackId="a" fill= {"#bad1d7"}/>
          </BarChart>
        </Box>
        </Grid>

        </Grid>
        </Box>
        </Box>
        </CustomBox>
  );
};

export default Details;