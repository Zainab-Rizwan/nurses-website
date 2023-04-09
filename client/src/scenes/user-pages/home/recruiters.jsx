import { Box, styled, Typography, useMediaQuery } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Button from "shared/Button";
import Images from "constants/ImgConstants";
import { useNavigate } from "react-router-dom";
import { useTheme } from '@emotion/react';


const Recruiters = () => {
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
    marginBottom: theme.spacing(8),
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

          <Box sx={{ flex: "1.75"}}>
            <Typography sx={{
                  fontSize: isDesktopScreens ? h4bold : h5,
                  color: primaryMain,
                  mb: isDesktopScreens ? 2 : 1,
            }}>For Recruiters</Typography>

            <Typography
              sx={{
                fontSize: isDesktopScreens ? h2 : h3bold,
                color: primaryDark,
                wordWrap: "break-word",
              }}
            >
              Simplify Your Hiring Process: Post Jobs and Source Candidates with Ease

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
                 <li style={{ marginBottom: "8px" }}>Post your job for applicants to see</li>
                 <li style={{ marginBottom: "8px" }}>Effortlessly find top candidates</li>
                 <li style={{ marginBottom: "8px" }}>Manage applications with less effort and time</li>
            </Typography>
            <Button
              value="Post Jobs"
              onClick={() => navigate("/browse-jobs")}
            />
            </Box>

            <Box sx={{ flex: "1.25" }}>
            <CustomImage src={Images.MORE_INFO_1}/>
         </Box>        
        </CustomBox>
      </Container>     
    </Box>   
  );
};

export default Recruiters;