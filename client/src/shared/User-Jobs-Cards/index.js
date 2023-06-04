import React from "react";
import PropTypes from "prop-types";
import { Card, CardMedia, CardContent, Typography, Grid, IconButton, styled, Box, Divider, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTheme } from '@emotion/react';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import FlightIcon from '@mui/icons-material/Flight';
import MoonIcon from '@mui/icons-material/NightsStay';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const UserJobsCard = ({ userjobs }) => {
 const navigate = useNavigate();
 const theme = useTheme();
 const mainBlue = theme.palette.primary.main ;
 const darkGray = theme.palette.neutral.dark;
 const lightGray = theme.palette.neutral.light;
 const lighterBlue = theme.palette.neutral.light;
 const darkBlue = theme.palette.primary.dark;
 const h4bold = theme.typography.h4bold;
 const h6bolder = theme.typography.h6bolder;
 const h6bold = theme.typography.h6bold;
 const h5bold = theme.typography.h5bold;
 const h7bold = theme.typography.h7bold;
 const h5 = theme.typography.h5;
 const { image, title, location, pay, shifts, timings, duration, exclusive, travel, applicationstat } = userjobs;

  const GuideBox = styled(Box)(({ theme }) => ({
    margin: theme.spacing(2, 0, 2, 0),
  }));

  return (
    <GuideBox>
    <Card elevation={0} sx={{ minWidth: 300, borderRadius:"10px", border:"1px solid lightGray"}}>
    <Grid container>
      <Grid item md={4}>
          <CardMedia
            component="img"
            height="100%"
            image={image}/>
        </Grid>
        
        <Grid item md={8} >
          <CardContent sx={{p:-1}}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Box>
                <Typography
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: h5bold,
                    color: darkBlue,
                  }}>
                  {title}
                </Typography>
                <Typography sx={{ fontSize: h5bold, color: darkGray, mt: 1 }}>{location}</Typography>
                <Typography sx={{ fontSize: h6bolder, color: mainBlue, mt: 1 }}>{pay}</Typography>
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'right' }}>
              {exclusive && (
                <Box sx={{ p: 0.5 }}>
                    <Typography sx={{ backgroundColor: "#fff", color: mainBlue, fontSize:h6bold, p: 0.5, borderRadius: '4px', border:"1px solid #1A667A", paddingLeft: "1rem", paddingRight: "1rem"}}>Exclusive</Typography>
                </Box>
                )}
              {travel && (
                <Box sx={{ p: 0.5 }}>
                    <IconButton size="small" sx={{ color: mainBlue, backgroundColor: lighterBlue, cursor:"auto", borderRadius: '4px','&:hover': { backgroundColor: lighterBlue, color: mainBlue }, display: 'flex', justifyContent: 'center'}} >
                    <FlightIcon sx={{transform: 'rotate(45deg)'}}/>
                    </IconButton>
                </Box>
                )}
                <Box sx={{ p: 0.5 }}>
                  <IconButton onClick={() => navigate("/expanded-facility")} size="small" sx={{ color: mainBlue, backgroundColor: lighterBlue, borderRadius: '4px', '&:hover': {backgroundColor: lighterBlue, color: "#103d49",}, display: 'flex', justifyContent: 'center' }}>
                    <OpenInFullIcon/>
                  </IconButton>
                </Box>
              </Box>
            </Box>
            
            <Box sx={{mt:1}}>
                <Typography
                    sx={{
                    fontSize: h6bold,
                    color: applicationstat === "Rejected" ? "red" : applicationstat === "Accepted" ? "green" : darkGray
                    }} >
                    <span style={{ color: "#1A667A" }}>Application Status: </span>
                    <span style={{  color: applicationstat === "Rejected" ? "red" : applicationstat === "Accepted" ? "green" : darkGray}}>{applicationstat}</span>
                </Typography>
            </Box>

            <Divider sx={{width: '100%', mt: 2, mb: 2, backgroundColor: lightGray}} />

            <Grid container alignItems="center" sx={{my:-0.5, mb: -1,  display: 'flex', justifyContent: 'space-between', }}>
                <Box sx={{ display: 'flex', justifyContent: 'left' }}>
                    <Box>
                        <Grid container alignItems="center">
                        <Grid item>
                            <IconButton size="small" sx={{color: mainBlue}}>
                            <MoonIcon />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <Typography sx={{ fontSize: h7bold, fontWeight:700, color: mainBlue, ml: 0.25 }}>{shifts}</Typography>
                        </Grid>
                        </Grid>
                    </Box>
                    <Divider orientation="vertical" sx={{ height: 24, backgroundColor: lightGray, mr: 1, ml: 2}}/>
                    <Box>
                        <Grid container alignItems="center">
                        <Grid item>
                            <IconButton size="small" sx={{color: mainBlue}}>
                            <AccessTimeIcon />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <Typography sx={{ fontSize: h7bold, fontWeight:700, color: mainBlue, ml: 0.25 }}>{timings}</Typography>
                        </Grid>
                        </Grid>
                    </Box> 
                    <Divider orientation="vertical" sx={{ height: 32, backgroundColor: lightGray, mr: 1, ml: 2}}/>
                    <Box>
                        <Grid container alignItems="center">
                        <Grid item>
                            <IconButton size="small" sx={{color: mainBlue}}>
                            <CalendarMonthIcon />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <Typography sx={{ fontSize: h7bold, fontWeight:700, color: mainBlue, ml: 0.5 }}>{duration}</Typography>
                        </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Box>

                <Box sx={{ display: 'flex', justifyContent: 'right', }}>
                    <Button sx={{ backgroundColor: mainBlue, color: "#fff", textTransform:"none", paddingLeft:"1rem", paddingRight:"1rem", transition: 'all 0.4s', '&:hover': {backgroundColor: '#103d49',}}}>Withdraw Application</Button>
                </Box>
                </Box>
            </Grid> 
        </CardContent>
      </Grid>
    </Grid>
    </Card>
    </GuideBox>
  );
};

UserJobsCard.propTypes = {
    userjobs: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    pay: PropTypes.string.isRequired,
    shifts: PropTypes.string.isRequired,
    timings: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    applicationstat: PropTypes.string.isRequired,
    }).isRequired,
    exclusive: PropTypes.bool,
    tarvel: PropTypes.bool,
  };

export default UserJobsCard;

