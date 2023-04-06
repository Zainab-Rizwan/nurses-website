import { Box, styled, Typography, useMediaQuery } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Button from "shared/Button";
import { useNavigate } from "react-router-dom";
import { useTheme } from '@emotion/react';

const Header = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const white= theme.palette.background.default;
  const primaryDark = theme.palette.primary.dark;
  const h1 = theme.typography.h1;
  const h2 = theme.typography.h2;
  const h4bold = theme.typography.h4bold;
  const h6bold = theme.typography.h6bold;
  const isTabletScreens = useMediaQuery("(min-width: 720px)");
  const isDesktopScreens = useMediaQuery("(min-width: 1050px)");

  const CustomBox = styled(Box)(({ theme }) => ({
    maxWidth: "90%",
    marginTop: isDesktopScreens ? theme.spacing(10) : isTabletScreens ? theme.spacing(8) :theme.spacing(6),
    marginBottom:isDesktopScreens ? theme.spacing(10) : isTabletScreens ? theme.spacing(8) :theme.spacing(6),
  }));

  return (
    <Box sx={{ backgroundColor: white}}>
      <Container sx={{ display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center"}}>
        <CustomBox>
          <Typography sx={{fontSize: isDesktopScreens ? h1 : isTabletScreens ? h1 : h2,  color: primaryDark, }}>
            Discover Your Next Career Move: Browse Thousands of Jobs Today!             
            </Typography>
            <Typography sx={{   fontSize: isDesktopScreens ? h4bold : isTabletScreens ? h4bold : h6bold, color: "#5A6473", my: 4, mt: 2 }}>
                Explore tailored job listings that cater to your specific discipline, specialty, and desired location. 
            </Typography>
        </CustomBox>
      </Container>
      </Box>
  );
};

export default Header;



