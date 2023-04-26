import { Box, styled, Typography, Grid, FormControl, Chip, Autocomplete, TextField  } from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer  } from 'recharts';
import React from "react";
import { useTheme } from '@emotion/react';
import { useState } from 'react';

const facilities = ['Facility 1', 'Facility 2', 'Facility 3', 'Facility 4'];
const location = ['Location 1', 'Location 2', 'Location 3', 'Location 4'];
const shifts = ['Full Time', 'Part Time'];

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
  const darkBlue = theme.palette.primary.main;
  const darkGray = theme.palette.neutral.dark;
  const h7 = theme.typography.h7;
  const h5 = theme.typography.h5bold;

  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    backgroundColor: white,
    marginTop: theme.spacing(4),
    gap: theme.spacing(2),
    
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
    
  }));

  const [selectedOptions1, setSelectedOptions1] = useState([]);
  const [selectedOptions2, setSelectedOptions2] = useState([]);
  const [selectedOptions3, setSelectedOptions3] = useState([]);

  const handleOptionSelect1 = (event, values) => {
    setSelectedOptions1(values);
  };

  const handleOptionSelect2 = (event, values) => {
    setSelectedOptions2(values);
  };
    
  const handleOptionSelect3 = (event, values) => {
    setSelectedOptions3(values);
  };

  return (
    <CustomBox>
    <Box >
      <Box sx={{ flexGrow: 1, p: 3, }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}> 
          <Typography sx={{ mt: 2, fontSize: h5, my: 2 }}>Facility Name</Typography>
           <FormControl variant="outlined" sx={{borderColor: 'darkGray', minWidth:"18rem",  position: "relative",}}>
            <Autocomplete
                ListboxProps={{
                  style: { maxHeight: '200px' },
                }}
                multiple
                options={facilities}
                value={selectedOptions1}
                onChange={handleOptionSelect1}
                limitTags={1}
                getLimitTagsText={(more) => `+${more}`}
                renderTags={(value, getTagProps) =>
                  value.map((option, index) => (
              <Chip
                key={option}
                label={option}
                sx={{ borderRadius:"2px",  }}
                onDelete={() => {
                  const newSelectedOptions1 = [...selectedOptions1];
                  newSelectedOptions1.splice(index, 1);
                  setSelectedOptions1(newSelectedOptions1);
                }}
                {...getTagProps({ index })}
              />
            ))
          }
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              label="Facilties"
              InputLabelProps={{
                style: { color: darkGray, fontWeight: 300, fontSize:"14px", maxHeight: "20px" }
              }}
            />
          )}
        />
        </FormControl>

          <Typography sx={{ mt: 2, fontSize: h5, my: 2 }}>Location Display</Typography>
          <FormControl variant="outlined" sx={{borderColor: 'darkGray', minWidth:"18rem",  position: "relative",}}>
            <Autocomplete
                ListboxProps={{
                  style: { maxHeight: '200px' },
                }}
                multiple
                options={location}
                value={selectedOptions2}
                onChange={handleOptionSelect2}
                limitTags={1}
                getLimitTagsText={(more) => `+${more}`}
                renderTags={(value, getTagProps) =>
                  value.map((option, index) => (
              <Chip
                key={option}
                label={option}
                sx={{ borderRadius:"2px",  }}
                onDelete={() => {
                  const newSelectedOptions2 = [...selectedOptions2];
                  newSelectedOptions2.splice(index, 1);
                  setSelectedOptions2(newSelectedOptions2);
                }}
                {...getTagProps({ index })}
              />
            ))
          }
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              label="Locations"
              InputLabelProps={{
                style: { color: darkGray, fontWeight: 300, fontSize:"14px", maxHeight: "20px" }
              }}
            />
          )}
        />
        </FormControl>
  
          <Typography sx={{ mt: 2, fontSize: h5, my: 2 }}>Shift Breakdown</Typography>
          <FormControl variant="outlined" sx={{borderColor: 'darkGray', minWidth:"18rem",  position: "relative", mb:6}}>
            <Autocomplete
                ListboxProps={{
                  style: { maxHeight: '200px' },
                }}
                multiple
                options={shifts}
                value={selectedOptions3}
                onChange={handleOptionSelect3}
                limitTags={1}
                getLimitTagsText={(more) => `+${more}`}
                renderTags={(value, getTagProps) =>
                  value.map((option, index) => (
              <Chip
                key={option}
                label={option}
                sx={{ borderRadius:"2px",  }}
                onDelete={() => {
                  const newSelectedOptions3 = [...selectedOptions3];
                  newSelectedOptions3.splice(index, 1);
                  setSelectedOptions3(newSelectedOptions3);
                }}
                {...getTagProps({ index })}
              />
            ))
          }
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              label="Shifts"
              InputLabelProps={{
                style: { color: darkGray, fontWeight: 300, fontSize:"14px", maxHeight: "20px" }
              }}
            />
          )}
        />
        </FormControl>
         
        </Grid>

        <Grid item xs={12} md={8}>
        <Typography sx={{fontSize: h5, ml:6}}>Lorem Ipsum Dolor Graph</Typography>
        <Box sx={{ flexGrow: 1, p: 2, fontSize: h7, display: "flex", justifyContent: "center", alignItems: "center", mr: "1%", ml: -1}}>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="2 2" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value1" stackId="a" fill= {darkBlue} />
              <Bar dataKey="value2" stackId="a" fill= {"#bad1d7"} />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </Grid>
        </Grid>
        </Box>
        </Box>
        </CustomBox>
  );
};

export default Details;