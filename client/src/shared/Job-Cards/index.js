import React from "react";
import PropTypes from "prop-types";
import { Card, CardActionArea, CardMedia, CardContent, Typography, Grid, IconButton, CardActions, styled, Box, Button } from "@mui/material";
import FlightIcon from '@mui/icons-material/Flight';
import MoonIcon from '@mui/icons-material/NightsStay';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useNavigate } from "react-router-dom";
import { useTheme } from '@emotion/react';

const JobCard = ({ job, exclusive, travel }) => {
 const navigate = useNavigate();
 const theme = useTheme();
 const mainBlue = theme.palette.primary.main ;
 const white = theme.palette.background.default ;
 const darkGray = theme.palette.neutral.dark;
 const darkBlue = theme.palette.primary.dark;
 const lightBlue = theme.palette.neutral.main;
 const h3 = theme.typography.h3;
 const h4bold = theme.typography.h4bold;
 const h6bold = theme.typography.h6bold;
 const h7bold = theme.typography.h7bold;
 const h6bolder = theme.typography.h6bolder;
 const { image, title, text, textone, texttwo, textthree, textfour } = job;

  const GuideBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(4)
  }));

  return (
    <GuideBox>
    <Card sx={{ minWidth: 320, borderBottomLeftRadius:"0px", borderTopLeftRadius:"20px", borderTopRightRadius:"20px", borderBottomRightRadius:"20px"}} elevation={9}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={image} />
        {exclusive && (
            <Typography
              sx={{
                position: "absolute",
                top: "0",
                backgroundColor: lightBlue,
                color: "white",
                padding: "0.25rem",
                paddingRight: "0.75rem",
                paddingLeft: "0.75rem",
                borderRadius: "40px",
                margin: "0.75rem",
                fontSize: h6bold,
                zIndex: "1",
              }}
            >
              Exclusive
            </Typography>
          )}
      <CardContent>
        <Typography
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: h4bold,
            color: darkBlue,
            my: 0.5,
          }}
        >
          {title}
          {travel && <FlightIcon sx={{ fontSize: h3, color: darkGray, transform: 'rotate(45deg)' }} />}
        </Typography>
        <Box>
          <Typography sx={{ fontSize: h6bolder, color: mainBlue }}>{text}</Typography>
        </Box>
        <Typography sx={{ fontSize: h6bold, color: darkGray }}>{textone}</Typography>
      </CardContent>
      </CardActionArea>
      <Grid container alignItems="center" sx={{ ml: 1, mt: 3 }}>
        <Grid item xs={4}>
          <Grid container alignItems="center">
            <Grid item>
              <IconButton size="small">
                <MoonIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <Typography sx={{ fontSize: h7bold, color: darkGray, ml: -0.5 }}>{texttwo}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4} sx={{ ml: -0.5, mr: 0.5 }}>
          <Grid container alignItems="center">
            <Grid item>
              <IconButton size="small">
                <AccessTimeIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <Typography sx={{ fontSize: h7bold, color: darkGray }}>{textthree}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid container alignItems="center">
            <Grid item>
              <IconButton size="small">
                <CalendarMonthIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <Typography sx={{ fontSize: h7bold, color: darkGray }}>{textfour}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <CardActions sx={{ margin:-1, mt: 1 }}>
        <Button 
        fullWidth
        variant="contained"
        sx={{
          padding: "10px 30px",
          border: "none",
          borderColor : darkBlue,
          color: white,
          transition: "all 0.4s",
          cursor: "pointer",
          backgroundColor: mainBlue,
          fontSize: h6bold,
          wordSpacing: "2px",
          "&:hover": {
            backgroundColor:"#103d49",
          },
        }}
        onClick={() => navigate("/browse-jobs")}>
          Apply Now
        </Button>
      </CardActions>
    </Card>
    </GuideBox>
  );
};

JobCard.propTypes = {
  job: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    textone: PropTypes.string.isRequired,
    texttwo: PropTypes.string.isRequired,
    textthree: PropTypes.string.isRequired,
    textfour: PropTypes.string.isRequired,
  }).isRequired,
  exclusive: PropTypes.bool,
  tarvel: PropTypes.bool,
};

export default JobCard;
