import { Box, Typography, useMediaQuery, Grid, FormControl, Chip, Autocomplete, TextField } from "@mui/material";
import React from "react";
import SharedButton from "shared/Button";
import Images from "constants/ImgConstants";
import { useTheme } from '@emotion/react';
import { useState } from "react";

const disciplines = ['Monitor Technician', 'Surgical First Assistant', 'Paramedic', 'Histology Technician'];

const Header = () => {
  const theme = useTheme();
  const primaryDark = theme.palette.primary.dark;
  const h1 = theme.typography.h1;
  const h2 = theme.typography.h2;
  const darkGray = theme.palette.neutral.dark;
  const h4bold = theme.typography.h4bold;
  const h5bold = theme.typography.h5bold;
  const isTabletScreens = useMediaQuery("(min-width: 990px)");
  const isDesktopScreens = useMediaQuery("(min-width: 1050px)");

  const [selectedOptions1, setSelectedOptions1] = useState([]);
  const handleOptionSelect1 = (event, values) => {
    setSelectedOptions1(values);
  };

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
        mt: isDesktopScreens ? 5 :  isTabletScreens ? 3 : 3, 
        marginLeft: isDesktopScreens ? "0%" : isTabletScreens ? "10%" : "10%",  
        marginRight:  isDesktopScreens ? "0%" : isTabletScreens ? "10%" : "10%",  
        textAlign: isDesktopScreens ? "left" : isTabletScreens ? "center" : "center"
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

        <FormControl fullWidth variant="outlined" sx={{borderColor: 'darkGray',  position: "relative", mb:2}}>
         <Autocomplete
          ListboxProps={{
            style: { maxHeight: '200px' },
          }}
          multiple
          options={disciplines}
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
              label="Disciplines"
              InputLabelProps={{
                style: { color: darkGray, fontWeight: 500, fontSize:"16px", maxHeight: "20px" }
              }}
            />
          )}
        />
        </FormControl>
       
      <SharedButton value="Compare Pay" onClick="" />
      </Grid>
    </Grid>
    </Box>
  );
};

export default Header;

