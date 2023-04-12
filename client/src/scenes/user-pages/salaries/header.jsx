import { Box, Typography, useMediaQuery, Grid, FormControl, InputLabel, MenuItem, Select, } from "@mui/material";
import React from "react";
import Button from "shared/Button";
import Images from "constants/ImgConstants";
import { useTheme } from '@emotion/react';
import { useState } from "react";

const disciplines = [
    {value: 'Monitor Technician', },
    {value: 'Surgical First Assistant',},
    {value: 'Paramedic',},
    { value: 'Histology Technician',},
  ];

const Header = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const theme = useTheme();
  const primaryDark = theme.palette.primary.dark;
  const h1 = theme.typography.h1;
  const h2 = theme.typography.h2;
  const h4bold = theme.typography.h4bold;
  const h5bold = theme.typography.h5bold;
  const isTabletScreens = useMediaQuery("(min-width: 900px)");
  const isDesktopScreens = useMediaQuery("(min-width: 1050px)");

  return (
    <Box sx={{ mb: 4}}>
         <Grid container spacing={2}>
      <Grid item xs={12} md={8}>
        <img
          src={Images.HEADER_IMG}
          alt="placeholder"
          style={{ width: "100%", height: "auto" }}
        />
      </Grid>
      <Grid item xs={12} md={3} 
      sx={{ 
        mt: isDesktopScreens ? 5 :  isTabletScreens ? 4 : 3, 
        marginLeft: isDesktopScreens ? "0%" : isTabletScreens ? "0%" : "10%",  
        marginRight:  isDesktopScreens ? "0%" : isTabletScreens ? "0%" : "10%",  
        textAlign: isDesktopScreens ? "left" : isTabletScreens ? "left" : "center"
        }}>
        <Typography sx={{ 
            fontSize: isDesktopScreens ? h1 : isTabletScreens ? h1 : h2, 
            color: primaryDark, 
            my: isDesktopScreens ? 2 : 1 }}>
            Compare Your Pay             
        </Typography>
        <Typography sx={{ 
            fontSize: isDesktopScreens ? h4bold : isTabletScreens ? h4bold : h5bold,
                color: "#5A6473", 
                my: isDesktopScreens ? 4 : 2,
               }}
        >
        Compare your pay with the most up-to-date job market data using our 
        comprehensive salary calculator
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'space-evenly', gap: isDesktopScreens ? 0.75 : 1, mt: isDesktopScreens ? theme.spacing(4) : theme.spacing(2)}}>
        <FormControl sx={{minWidth:"10rem"}} >
          <InputLabel>Select a discipline</InputLabel>
          <Select label="Select a discipline" value={selectedValue} onChange={handleChange} fullWidth>
            {disciplines.map((discipline) => (
              <MenuItem key={discipline.value} value={discipline.value}>
                {discipline.value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button value="Compare Pay" sx={{display: "flex", flexWrap:"no wrap"}} />
      </Box>
      </Grid>
    </Grid>
    </Box>
  );
};

export default Header;

