import { Box, styled, Typography, useMediaQuery } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Button from "shared/Button";
import Images from "constants/ImgConstants";
import { useNavigate } from "react-router-dom";
import { useTheme } from '@emotion/react';


const Applicants = () => {
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
  const isTabletScreens = useMediaQuery("(min-width: 508px)");
  const isDesktopScreens = useMediaQuery("(min-width: 1050px)");

  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(4),
    marginTop: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  
  }));

  const CustomImage = styled('img')(({ theme }) => ({
    maxWidth: isDesktopScreens ? "90%" : isTabletScreens ? "95%" : "100%",
    marginTop: isDesktopScreens ? "4rem" : isTabletScreens ?  "2rem" : "4rem",
  }));

  
  return (
    <Box >
      <Container>
        <CustomBox>
        

        <Box sx={{ flex: "1.25" }}>
            <CustomImage src={Images.MORE_INFO_2} />
          </Box>

          <Box sx={{ flex: "1.75", marginTop: isDesktopScreens ? "4rem": "2rem" }}>
            <Typography sx={{
                  fontSize: isDesktopScreens ? h4bold : h5,
                  color: primaryMain,
                  mb: isDesktopScreens ? 2 : 1,
            }}>For Applicants</Typography>

            <Typography
              sx={{
                fontSize: isDesktopScreens ? h2 : h3bold,
                color: primaryDark,
              }}
            >
            Find Your Next Opportunity: Browse Thousands of Jobs on Our Portal
            </Typography>
            
            <Typography
                sx={{
                    fontSize: isDesktopScreens ? h4light : h5,
                    color: neutralDark,
                    my: 2,
                    pl: 2,
                }}
                component="ul"
                >
                 <li style={{ marginBottom: "8px" }}>Browse thousands of job opportunitie to find the perfect fit for your career goals</li>
                 <li style={{ marginBottom: "8px" }}>Apply easily with our user-friendly application process</li>
                 <li style={{ marginBottom: "8px" }}>Get noticed by top employers</li>
                 <li style={{ marginBottom: "8px" }}>Use our advanced search filters to find jobs tailored to your preferences</li>


            </Typography>
            <Button
              value="Explore Featured Jobs"
              onClick={() => navigate("/browse-jobs")}
            />
            </Box>
         
        </CustomBox>
      </Container>      
    </Box>
    
  );
};

export default Applicants;