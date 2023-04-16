import { Box, styled, Typography, useMediaQuery } from "@mui/material";
import { Container } from "@mui/system";
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
  const h3bold = theme.typography.h3bold;
  const h4bold = theme.typography.h4bold;
  const h6bold = theme.typography.h6bold;
  const isTabletScreens = useMediaQuery("(min-width: 720px)");
  const isDesktopScreens = useMediaQuery("(min-width: 1050px)");

  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "left",
    gap: theme.spacing(5),
    marginTop: isDesktopScreens ? theme.spacing(12) : isTabletScreens ? theme.spacing(12) :theme.spacing(3),
    marginBottom:isDesktopScreens ? theme.spacing(14) : isTabletScreens ? theme.spacing(14) :theme.spacing(5),
  }));

  const HeroContainer = styled(Box)(({ theme }) => ({
    background:  `url(${Images.HERO_IMG}) no-repeat`,
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }));

  return (
    <HeroContainer>
      <Container>
        <CustomBox>
          <Box sx={{ flex: isDesktopScreens ? "0.5" : isTabletScreens ? "0.6" : "0.6"}}>
          
            <Typography sx={{ 
                fontSize: isDesktopScreens ? h1 : isTabletScreens ? h1 : h3bold,
                textAlign: "left",
                color: primaryDark, 
                my: isDesktopScreens ? 2 : 1 }}>
                Elevate Your Nursing Career Today               
            </Typography>

            <Typography sx={{ 
                fontSize: isDesktopScreens ? h4bold : isTabletScreens ? h4bold : h6bold,
                textAlign: "left",
                 color: "#5A6473", 
                 my: isDesktopScreens ? 4 : 2 }}
            >
              We provide a comprehensive platform for nurses to find the most relevant
               and rewarding job opportunities in the industry
            </Typography>

            <SharedButton
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

export default Hero;