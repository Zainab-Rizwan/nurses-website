import { Box, styled, Typography, useMediaQuery, Grid, FormControl, InputLabel, MenuItem, Select, } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Button from "shared/Button";
import Images from "constants/ImgConstants";
import { useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();
  const theme = useTheme();
  const neutralDark = theme.palette.neutral.dark;
  const primaryDark = theme.palette.primary.dark;
  const h1 = theme.typography.h1;
  const h2 = theme.typography.h2;
  const h3bold = theme.typography.h3bold;
  const h4bold = theme.typography.h4bold;
  const h4light = theme.typography.h4light;
  const h5bold = theme.typography.h5bold;
  const h6bold = theme.typography.h6bold;
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
            fontSize: isDesktopScreens ? h4bold : isTabletScreens ? h4bold : h6bold,
                color: "#5A6473", 
                my: isDesktopScreens ? 4 : 2 }}
        >
        Compare your pay with the most up-to-date job market data using our 
        comprehensive salary calculator
        </Typography>

        <Box  sx={{ display: 'flex', justifyContent: "space-evenly", gap: isDesktopScreens ? 0.75  :  1, }}>
        <FormControl sx={{ minWidth: '10rem',}}>
            <InputLabel>Select a discipline</InputLabel>
            <Select
            label="Select a discipline"
            value={selectedValue}
            onChange={handleChange}
            autoWidth
            >
            {disciplines.map((discipline) => (
                <MenuItem key={discipline.value} value={discipline.value}>
                {discipline.value}
                </MenuItem>
            ))}
            </Select>
        </FormControl>
        <Button value="Compare Pay" />
        </Box>

      </Grid>
    </Grid>
    </Box>
  );
};

export default Header;

