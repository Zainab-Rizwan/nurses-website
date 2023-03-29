import { Box, styled, Typography, useMediaQuery } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Button from "shared/Button";
import Images from "constants/ImgConstants";
import { useNavigate } from "react-router-dom";
import { useTheme } from '@emotion/react';


const About = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const neutralDark = theme.palette.neutral.dark;
  const primaryDark = theme.palette.primary.dark;
  const primaryMain = theme.palette.primary.main;
  const h2 = theme.typography.h2;
  const h3bold = theme.typography.h3bold;
  const h4bold = theme.typography.h4bold;
  const h4light = theme.typography.h4light;
  const h5 = theme.typography.h5bold;
  const isTabletScreens = useMediaQuery("(min-width: 768px)");
  const isDesktopScreens = useMediaQuery("(min-width: 1050px)");

  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(2),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
    "& > div:last-of-type": {
      [theme.breakpoints.down("md")]: {
        width: "80%",
        maxWidth: "100%",
        marginTop: "0rem"
      },
    },
  }));

  const CustomImage = styled('img')(({ theme }) => ({
    maxWidth: isDesktopScreens ? "90%" : isTabletScreens ? "95%" : "100%",
    marginBottom: "1rem",
    marginTop: isDesktopScreens ? "2rem" : "1rem",
    [theme.breakpoints.down("md")]: {
      maxWidth: isDesktopScreens ? "65%" : "80%",
    },
  }));


  const CustomButton = styled(Button)(({ theme }) => ({
    [theme.breakpoints.up("md")]: {
      fontSize: "1.25rem",
      padding: "1rem 2.5rem",
    },
  }));

  
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Container>
        <CustomBox>
          <Box sx={{ flex: "1.25" }}>
            <CustomImage src={Images.IMG} alt="heroImg" />
          </Box>

          <Box sx={{ flex: "1.75" }}>
            <Typography sx={{
                  fontSize: isDesktopScreens ? h4bold : h5,
                  color: primaryMain,
                  mt: isDesktopScreens ? 6 : 2,
                  mb: isDesktopScreens ? 2 : 1,
            }}>About Us</Typography>

            <Typography
              sx={{
                fontSize: isDesktopScreens ? h2 : h3bold,
                color: primaryDark,
              }}
            >
              Connecting Nurses to Top Job Opportunities
            </Typography>
            
            <Typography
              sx={{ 
                fontSize: isDesktopScreens ? h4light : h5,
                color:neutralDark, 
                my: isDesktopScreens ? 4 : 2,
            }}
            >
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
            <Button
              value="Browse Jobs"
              onClick={() => navigate("/browse-jobs")}
            />
          </Box>
         
        </CustomBox>
      </Container>
    </Box>
  );
};

export default About;