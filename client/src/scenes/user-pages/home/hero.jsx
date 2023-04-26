import { Box, Typography, useMediaQuery, Grid, CssBaseline } from "@mui/material";
import React from "react";
import SharedButton from "shared/Button";
import Images from "constants/ImgConstants";
import { useNavigate } from "react-router-dom";
import { useTheme } from '@emotion/react';

const Hero = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const primaryDark = theme.palette.primary.dark;
  const h1 = theme.typography.h1;
  const h4bold = theme.typography.h4bold;
  const isTabletScreens = useMediaQuery("(min-width: 590px)");
  const isDesktopScreens = useMediaQuery("(min-width: 900px)");
  const primaryLight = theme.palette.primary.light;
  const white = theme.palette.background.default;

  return (
    <Box>
      <Grid container>
         <CssBaseline />
          <Grid item xs={12} sm={ isTabletScreens ? 12 : 8} md={4} square sx={{  backgroundColor: isDesktopScreens ? white : primaryLight }}> 
            <Box 
              sx={{
                my: 8,
                mx: 6,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'left',
              }}
            >
              <Typography sx={{ 
                    fontSize: h1,
                    color: primaryDark, 
                    my: isDesktopScreens ? 2 : 1,
                    textAlign: isDesktopScreens ? "left" : isTabletScreens ? "center" : "center", }}>
                    Elevate Your Nursing Career Today               
                </Typography>

                <Typography sx={{ 
                    fontSize: h4bold,
                    textAlign: isDesktopScreens ? "left" : isTabletScreens ? "center" : "center",
                    color: "#5A6473", 
                    my: isDesktopScreens ? 4 : 2 }}
                >
                  We provide a comprehensive platform for nurses to find the most relevant
                  and rewarding job opportunities in the industry
                </Typography>
              </Box>
              <Box sx={{ display:'flex', justifyContent:  isDesktopScreens ? 'left' : "center", my: 8,  mx: 6, mt: isDesktopScreens ? -8 : -6}}>
                  <SharedButton value="Create Your Profile" onClick={() => navigate("/profile")}  />
              </Box> 
          </Grid>
          <Grid
              item
              xs={false}
              sm={ isTabletScreens ? false : 4}
              md={8}
              textAlign="left"
              sx={{
                backgroundImage: `url(${Images.HERO_IMG})`,
                backgroundRepeat: 'no-repeat',
                backgroundColor: (t) =>
                  t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
       </Grid>
    </Box>
  );
};

export default Hero;