import { Box, Card, CardContent, CardActions, styled, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import Button from "shared/Button";
import { useNavigate } from "react-router-dom";
import { useTheme } from '@emotion/react';


const Guide = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const darkGray = theme.palette.neutral.dark;
  const darkBlue = theme.palette.primary.dark;
  const h2 = theme.typography.h2;
  const h3bold = theme.typography.h3bold;
  const h4bold = theme.typography.h4bold;
  const h6 = theme.typography.h6;
  const h5 = theme.typography.h5;
  const isDesktopScreens = useMediaQuery("(min-width: 1050px)");

  const CustomBox = styled(Box)(({ theme }) => ({
    maxWidth: "90%",
    [theme.breakpoints.down("md")]: {
      width: "95%",
    },
  }));

  const GuidesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    width: "85%",
    marginTop: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
      width: "80%",
      flexDirection: "column",
      justifyContent: "center",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  }));
  
  const GuideBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: theme.spacing(4, 2, 4, 2),
    flex: 1,
  
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
        marginTop: theme.spacing(6),
        marginBottom: "2em",    
      }}>
        
      <Typography
        sx={{ 
          fontSize: isDesktopScreens ? h2 : h3bold, 
          color: darkBlue, 
          my: 2,         
       }}>
        How it works
      </Typography>
       
      <CustomBox>
        <Typography
          sx={{
            marginLeft: "10%",
            marginRight: "10%",
            fontSize: h5,
            color: darkGray,
            textAlign: "center",
            my: 1,
            mt: 0
          }}
        >
        Whether you're a new grad or an experienced nurse, we have something for you. 
        Join our community today and take the first step towards your next career move!
        </Typography>
      </CustomBox>

      <GuidesBox>
      <GuideBox>
        <Card elevation={9} sx={{Width: isDesktopScreens ? 345 : 300 }}>
        <CardContent>
        <Typography
          sx={{
            fontSize: h4bold,
            color: darkBlue,
            my: 1,
          }}
        >
          Create Profile
        </Typography> 
        <Typography sx={{ fontSize: h6, color: darkGray}}>
        Create a personalized profile to showcase your skills and experiences. 
        This is your chance to highlight your ambitions and accomplishments.
        </Typography>       
        </CardContent>
        <CardActions>
          <Button value="Register"  onClick={() => navigate("/browse-jobs")}/>
        </CardActions>
        </Card> 
      </GuideBox>

      <GuideBox>
      <Card elevation={9} sx={{Width: isDesktopScreens ? 345 : 300 }}>
      <CardContent>
        <Typography
          sx={{
            display: 'flex',
            alignItems: 'center', 
            fontSize: h4bold,
            color: darkBlue,
            my: 1,
          }}>
          Find Job         
        </Typography>
        <Typography sx={{ fontSize: h6, color: darkGray}}>
          Explore a wide range of job openings from top facilities. 
          Use our advanced search filters to find job listings which meet your preferences.
        </Typography>       
      </CardContent>
      <CardActions>
        <Button value="Browse Jobs"  onClick={() => navigate("/browse-jobs")} />
      </CardActions>
     </Card>
    </GuideBox>

    <GuideBox>
    <Card elevation={9} sx={{Width: isDesktopScreens ? 345 : 300 }}>
      <CardContent>
      <Typography
        sx={{
          fontSize: h4bold,
          color: darkBlue,
          my: 1,
        }}>
        Apply For Jobs
      </Typography> 
      <Typography sx={{ fontSize: h6, color: darkGray}}>
      Apply for jobs with ease using our user-friendly application process. 
      With our platform, you can boost your chances of landing your dream job. 
      </Typography>       
      </CardContent>
      <CardActions>
        <Button value="Learn More"  onClick={() => navigate("/browse-jobs")}/>
        </CardActions>
        </Card> 
      </GuideBox>
      </GuidesBox>
    </Box>
  );
};

export default Guide;