import React from "react";
import PropTypes from "prop-types";
import { Card, CardActionArea, CardMedia, CardContent, Typography, Grid, IconButton, CardActions, styled, Box, Button } from "@mui/material";
import FlightIcon from '@mui/icons-material/Flight';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useNavigate } from "react-router-dom";
import { useTheme } from '@emotion/react';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import OpenInFullRoundedIcon from '@mui/icons-material/OpenInFullRounded';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import SharedButton from "shared/Button";
import LocalHotelRoundedIcon from '@mui/icons-material/LocalHotelRounded';

const FacilityInfoCard = ({ facility }) => {
 const navigate = useNavigate();
 const theme = useTheme();
 const mainBlue = theme.palette.primary.main ;
 const white = theme.palette.background.default ;
 const darkGray = theme.palette.neutral.dark;
 const darkBlue = theme.palette.primary.dark;
 const h3 = theme.typography.h3;
 const h4bold = theme.typography.h4bold;
 const h5bold = theme.typography.h5bold;
 const h6bold = theme.typography.h6bold;
 const h7bold = theme.typography.h7bold;
 const h6bolder = theme.typography.h6bolder;
 const { image, title, textone, texttwo, textthree, textfour } = facility;


  return (
    <Card sx={{ borderRadius:"20px", width: "100%"}} elevation={9}>
      <Box position="relative">
        <CardMedia component="img" height="200" image={image} />
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          justifyContent="left"
          alignItems="left"
          sx={{ p: 2}}
          elevation={9}
        >
          <IconButton size="medium" sx={{ color: white, backgroundColor: mainBlue, }}>
            <ArrowBackRoundedIcon />
          </IconButton>
        </Box>
        
        <Box
           position="absolute"
           top={0}
           left={0}
           right={0}
           bottom={0}
           display="flex"
           justifyContent="right"
           alignItems="right"
           >
          <Box sx={{p:2}} elevation={9}>
          <IconButton size="medium" sx={{ color: mainBlue, backgroundColor: white,  }}>
            <ModeEditIcon/>
          </IconButton>
          </Box>
          <Box sx={{p:2, paddingLeft: 0}} elevation={9}>
          <IconButton size="medium" sx={{ color: mainBlue, backgroundColor: white, }}>
            <DeleteRoundedIcon/>
          </IconButton>
          </Box>
        </Box>
      </Box>
      
      <CardContent>

        <Grid container alignItems="center">
          <Grid item xs={6}>
            <Grid container alignItems="center">
              <Grid item>
              <Typography
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: h4bold,
                  fontWeight: 600,
                  color: darkBlue,
                  my: 0.5,
                }}
              >
                {title}
              </Typography>
              <Typography sx={{ fontSize: h6bold, color: darkGray }}>{textone}</Typography>
              </Grid>           
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid container alignItems="center">
              <Grid item>
                <SharedButton value='View Jobs'></SharedButton>
              </Grid>           
            </Grid>
          </Grid>
        </Grid> 

        <Box sx={{ mt: 4}}>
        <Typography sx={{ color: darkBlue, fontSize: h6bold, fontWeight: 700}}>About</Typography>
        <Typography sx={{ color: darkGray, fontSize: h6bold, mt: 1}}>{texttwo}</Typography>
        </Box>

        <Grid container alignItems="center" sx={{ ml: -0.5, mt: 1 }}>
          <Grid item xs={4}>
            <Grid container alignItems="center">
              <Grid item>
                <IconButton size="small" sx={{color: mainBlue}}>
                  <LocalHotelRoundedIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <Typography sx={{ fontSize: h7bold, fontWeight:700, color: mainBlue, ml: 0.5 }}>{textthree} beds</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Box sx={{ mt: 4}}>
        <Typography sx={{ color: darkBlue, fontSize: h6bold, fontWeight: 700}}>Location</Typography>
        </Box>

      </CardContent>
    </Card>
  );
};

FacilityInfoCard.propTypes = {
  facility: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    textone: PropTypes.string.isRequired,
    texttwo: PropTypes.string.isRequired,
    textthree: PropTypes.string.isRequired,
    textfour: PropTypes.string.isRequired,
  }).isRequired,
};

export default FacilityInfoCard;
