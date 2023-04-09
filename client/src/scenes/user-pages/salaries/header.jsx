import { Box, styled, Typography, useMediaQuery } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Button from "shared/Button";
import Images from "constants/ImgConstants";
import { useNavigate } from "react-router-dom";
import { useTheme } from '@emotion/react';


const Header = () => {
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
  const isTabletScreens = useMediaQuery("(min-width: 720px)");
  const isDesktopScreens = useMediaQuery("(min-width: 1050px)");

  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "right",
    gap: theme.spacing(5),
    marginTop: isDesktopScreens ? theme.spacing(12) : isTabletScreens ? theme.spacing(12) :theme.spacing(3),
    marginBottom:isDesktopScreens ? theme.spacing(14) : isTabletScreens ? theme.spacing(14) :theme.spacing(5),
  }));

  const HeroContainer = styled(Box)(({ theme }) => ({
    background:  `url(${Images.HEADER_IMG}) no-repeat`,
    backgroundSize: "cover",
    maxWidth: "90%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }));

  return (
    <HeroContainer>
      <Container>
        <CustomBox>
          <Box sx={{ 
            flex: isDesktopScreens ? "0.25" : isTabletScreens ? "0.1" : "0.6", 
            marginRight: "-7%",
            textAlign: "left"
            }}>
          
            <Typography sx={{ 
                fontSize: isDesktopScreens ? h1 : isTabletScreens ? h1 : h3bold,
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

            <Button
            value="Create Your Profile"
            onClick={() => navigate("/profile")}       
            />

            <br></br>
          </Box>
        </CustomBox>
      </Container>
    </HeroContainer>
  );
};

export default Header;