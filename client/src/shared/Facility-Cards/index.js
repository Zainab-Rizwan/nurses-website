import React from "react";
import PropTypes from "prop-types";
import { Card, CardMedia, CardContent, Typography, Grid, IconButton, styled, Box, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTheme } from '@emotion/react';
import LocalHotelRoundedIcon from '@mui/icons-material/LocalHotelRounded';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';

const FacilityCard = ({ facilities }) => {
 const navigate = useNavigate();
 const theme = useTheme();
 const mainBlue = theme.palette.primary.main ;
 const darkGray = theme.palette.neutral.dark;
 const lightGray = theme.palette.neutral.light;
 const lighterBlue = theme.palette.neutral.light;
 const darkBlue = theme.palette.primary.dark;
 const h4bold = theme.typography.h4bold;
 const h6bold = theme.typography.h6bold;
 const h5bold = theme.typography.h5bold;
 const h5 = theme.typography.h5;
 const { image, title, location, about, jobs, beds } = facilities;

 const truncatedAbout = about.split(' ').slice(0, 25).join(' ');
  const displayAbout = truncatedAbout.length < about.length ? truncatedAbout + '...' : truncatedAbout;

  const GuideBox = styled(Box)(({ theme }) => ({
    margin: theme.spacing(2, 0, 2, 0),
  }));

  return (
    <GuideBox>
    <Card elevation={0} sx={{ minWidth: 300, borderRadius:"20px"}}>
    <Grid container>
      <Grid item md={4}>
          <CardMedia
            component="img"
            height="100%"
            image={image}
          />
        </Grid>
        
        <Grid item md={8}>
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Box>
                <Typography
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: h4bold,
                    color: darkBlue,
                    my: 1,
                  }}
                >
                  {title}
                </Typography>
                <Typography sx={{ fontSize: h5bold, color: darkGray }}>{location}</Typography>
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'right' }}>
                <Box sx={{ p: 0.5 }}>
                  <IconButton onClick={() => navigate("/expanded-facility")} size="small" sx={{ color: mainBlue, backgroundColor: lighterBlue, borderRadius: '4px', '&:hover': {backgroundColor: lighterBlue, color: "#103d49",}, display: 'flex', justifyContent: 'center' }}>
                    <OpenInFullIcon/>
                  </IconButton>
                </Box>
                <Box sx={{ p: 0.5 }}>
                  <IconButton onClick={() => navigate("/edit-facility")} size="small" sx={{ color: mainBlue, backgroundColor: lighterBlue, borderRadius: '4px', '&:hover': {backgroundColor: lighterBlue, color: "#103d49",}, display: 'flex', justifyContent: 'center' }}>
                    <ModeEditIcon/>
                  </IconButton>
                </Box>
                <Box sx={{ p: 0.5 }}>
                  <IconButton size="small" sx={{ color: mainBlue, backgroundColor: lighterBlue, borderRadius: '4px', '&:hover': {backgroundColor: lighterBlue, color: "#103d49",}, display: 'flex', justifyContent: 'center' }}>
                    <DeleteRoundedIcon/>
                  </IconButton>
                </Box>
              </Box>
            </Box>

            <Typography sx={{ fontSize: h5, color: darkGray, mt: 2 }}>{displayAbout}</Typography>
            <Divider sx={{width: '100%', mt: 2, mb: 2, backgroundColor: lightGray}} />

            <Grid container alignItems="center" sx={{my:-0.5, mb: -1,  display: 'flex', justifyContent: 'left' }}>
              <Box>
                <Grid container alignItems="center">
                  <Grid item>
                    <IconButton size="small" sx={{color: mainBlue}}>
                      <BusinessCenterRoundedIcon />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <Typography sx={{ fontSize: h6bold, fontWeight:700, color: mainBlue, ml: 0.5 }}>{jobs} jobs</Typography>
                  </Grid>
                </Grid>
              </Box>
                  <Divider orientation="vertical" sx={{ height: 32, backgroundColor: lightGray, mr: 2, ml: 2}}/>
              <Box>
                <Grid container alignItems="center">
                  <Grid item>
                    <IconButton size="small" sx={{color: mainBlue}}>
                      <LocalHotelRoundedIcon />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <Typography sx={{ fontSize: h6bold, fontWeight:700, color: mainBlue, ml: 0.5 }}>{beds} beds</Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid> 
        </CardContent>
      </Grid>
    </Grid>
    </Card>
    </GuideBox>
  );
};

FacilityCard.propTypes = {
  facilities: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
    jobs: PropTypes.string.isRequired,
    beds: PropTypes.string.isRequired,
  }).isRequired,
};

export default FacilityCard;

