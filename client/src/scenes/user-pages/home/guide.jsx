import { Box, styled, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Button from "shared/Button";
import { Container } from "@mui/system";
import Images from "constants/ImgConstants";
import { useNavigate } from "react-router-dom";
import { useTheme } from '@emotion/react';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';

const Guide = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const white = theme.palette.background.default;
  const lightGray = theme.palette.background.alt;
  const darkGray = theme.palette.neutral.dark;
  const mainBlue = theme.palette.neutral.main;
  const cyanBlue = theme.palette.primary.main;
  const lightBlue = theme.palette.neutral.light;
  const darkBlue = theme.palette.primary.dark;
  const h1 = theme.typography.h1;
  const h2 = theme.typography.h2;
  const h3 = theme.typography.h3;
  const h3bold = theme.typography.h3bold;
  const h4 = theme.typography.h4;
  const h4bold = theme.typography.h4bold;
  const h4light = theme.typography.h4light;
  const h5 = theme.typography.h5;
  const h5bold = theme.typography.h5bold;
  const h6 = theme.typography.h6;
  const h6bold = theme.typography.h6bold;
  const isTabletScreens = useMediaQuery("(min-width: 720px)");
  const isDesktopScreens = useMediaQuery("(min-width: 1050px)");

  const CustomBox = styled(Box)(({ theme }) => ({
    width: "30%",
    [theme.breakpoints.down("md")]: {
      width: "85%",
    },
  }));

  const GuidesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    width: "70%",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(20),
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "0",
      flexDirection: "column",
    },
  }));

  const GuideBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    marginTop: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(2, 0, 2, 0),
    },
  }));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        mt: 0,
        marginTop: 0
      }}>

      <Typography
        sx={{ 
          fontSize: isDesktopScreens ? h2 : h3bold, 
          color: darkBlue, 
          my: 3,
         
       }}
      >
        How it works?
      </Typography>

      <CustomBox>
        <Typography
          sx={{
            font: h5bold,
            color: darkGray,
            textAlign: "center",
          }}
        >
          Everything you need to know when you want to buy, rent or sell - All
          in one place
        </Typography>
      </CustomBox>

      <GuidesBox>
      <GuideBox>
        <Typography
            sx={{
              fontWeight: "700",
              fontSize: "75px",
              color: darkBlue,
              my: 1,
            }}
          >
            1
          </Typography>
          <Typography
            sx={{
              fontWeight: "500",
              fontSize: "20px",
              color: darkBlue,
              my: 1,
            }}
          >
            Register Account
          </Typography>
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{ fontWeight: "bold", fontSize: "14px", color:cyanBlue }}
            >
              Create Profile
            </Typography>
            <ArrowRightAltIcon style={{ color:cyanBlue }} />
          </Box>
        </GuideBox>

        <GuideBox>
        <Typography
            sx={{
              fontWeight: "700",
              fontSize: "75px",
              color: darkBlue,
              my: 1,
            }}
          >
            2
          </Typography>
          <Typography
            sx={{
              fontWeight: "500",
              fontSize: "20px",
              color: darkBlue,
              my: 1,
            }}
          >
            Find Job
          </Typography>
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{ fontWeight: "bold", fontSize: "14px", color:cyanBlue }}
            >
              Browse Jobs
            </Typography>
            <ArrowRightAltIcon style={{ color:cyanBlue }} />
          </Box>
        </GuideBox>

        <GuideBox>
        <Typography
            sx={{
              fontWeight: "700",
              fontSize: "75px",
              color: darkBlue,
              my: 1,
            }}
          >
            3
          </Typography>
          <Typography
            sx={{
              fontWeight: "500",
              fontSize: "20px",
              color: darkBlue,
              my: 1,
            }}
          >
            Apply For Job
          </Typography>
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{ fontWeight: "bold", fontSize: "14px", color: cyanBlue }}
            >
              Learn More
            </Typography>
            <ArrowRightAltIcon style={{ color: cyanBlue }} />
          </Box>
        </GuideBox>
      </GuidesBox>

    </Box>
  );
};

export default Guide;