import { Box, Typography, useMediaQuery, Grid, FormControl, Chip, Autocomplete, TextField, CssBaseline } from "@mui/material";
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
  const darkGray = theme.palette.neutral.dark;
  const white = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const h4bold = theme.typography.h4bold;
  const isTabletScreens = useMediaQuery("(min-width: 600px)");
  const isDesktopScreens = useMediaQuery("(min-width: 900px)");

  const [selectedOptions1, setSelectedOptions1] = useState([]);
  const handleOptionSelect1 = (event, values) => {
    setSelectedOptions1(values);
  };

  return (
    <Box sx={{ mb: 4}}>
      <Grid container>
        <CssBaseline />
         <Grid
              item
              xs={false}
              sm={ isTabletScreens ? false : 4}
              md={8}
              textAlign="left"
              sx={{
                backgroundImage: `url(${Images.HEADER_IMG})`,
                backgroundRepeat: 'no-repeat',
                backgroundColor: (t) =>
                  t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          <Grid item xs={12} sm={ isTabletScreens ? 12 : 8} md={4} square sx={{ backgroundColor: isDesktopScreens ? white : primaryLight }}> 
            <Box 
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Typography sx={{ 
                    fontSize: h1,
                    color: primaryDark, 
                    my: isDesktopScreens ? 2 : 1,
                    textAlign: isDesktopScreens ? "left" : isTabletScreens ? "center" : "center", }}>
                    Compare Your Pay             
                </Typography>

                <Typography sx={{ 
                    fontSize: h4bold,
                    textAlign: isDesktopScreens ? "left" : isTabletScreens ? "center" : "center",
                    color: "#5A6473", 
                    my: isDesktopScreens ? 4 : 2 }}
                >
                  Compare your pay with the most up-to-date job market data using our 
                  comprehensive salary calculator
                </Typography>

                <FormControl autoWidth variant="outlined" sx={{ backgroundColor: white, borderColor: isDesktopScreens ? darkGray : white,  position: "relative", mb:2}}>
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
                <Box sx={{ display:'flex', justifyContent:  isDesktopScreens ? 'left' : "center"}}>
                  <SharedButton value="Compare Pay" onClick="" />
                </Box>  
            </Box>
          </Grid>
       </Grid>
    </Box>
  );
};

export default Header;
