import React from "react";
import PropTypes from "prop-types";
import { Card, CardActionArea, CardMedia, CardContent, Typography, Grid, IconButton, CardActions, styled, Box, Button, useMediaQuery } from "@mui/material";
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
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // import leaflet CSS
import L from 'leaflet';
import './index.scss';
import Images from "constants/ImgConstants";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|abcdef&chf=a,s,ee00FFFF",
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const CustomBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  maxHeight: "200px"
}));

const position = [51.505, -0.09]


const FacilityInfoCard = ({ facility }) => {
 const navigate = useNavigate();
 const theme = useTheme();
 const mainBlue = theme.palette.primary.main ;
 const white = theme.palette.background.default ;
 const darkGray = theme.palette.neutral.dark;
 const darkBlue = theme.palette.primary.dark;
 const lightGray = theme.palette.background.alt;
 const h3 = theme.typography.h3;
 const h4bold = theme.typography.h4bold;
 const h5bold = theme.typography.h5bold;
 const h6bold = theme.typography.h6bold;
 const h7bold = theme.typography.h7bold;
 const h6bolder = theme.typography.h6bolder;
 const { image, title, location, about, beds, coordinates } = facility;
 const isDesktopScreens = useMediaQuery("(min-width: 900px)");


  return (
    <Card sx={{ borderRadius:"20px", width: "100%"}}>
      <Box position="relative">
        <CardMedia component="img" height="250" image={image} />
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          justifyContent="left"
          alignItems="left"
          
          sx={{ p: 2, zIndex:1}}
        >
          <IconButton onClick={() => navigate("/facilities")} size="medium" sx={{ color: white, backgroundColor: mainBlue, '&:hover': {backgroundColor: mainBlue, color: lightGray } }}>
            <ArrowBackRoundedIcon/>
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
          <Box sx={{p:2, mr: -1, zIndex: 1}}>
          <IconButton onClick={() => navigate("/edit-facility")} size="medium" sx={{ color: mainBlue, backgroundColor: white, boxShadow: theme.shadows[5], '&:hover': {backgroundColor: white, color: "#103d49" } }}>
            <ModeEditIcon/>
          </IconButton>
          </Box>
          <Box sx={{p:2, paddingLeft: 0, zIndex: 1}} >
          <IconButton size="medium" sx={{ color: mainBlue, backgroundColor: white, boxShadow: theme.shadows[5], '&:hover': {backgroundColor: white, color: "#103d49" } }}>
            <DeleteRoundedIcon/>
          </IconButton>
          </Box>
        </Box>
      </Box>
      
      <CardContent>

      <Box sx={{ display: 'flex', justifyContent: isDesktopScreens ? 'space-between' : 'flex-start'}}>
        <Box sx={{ display: 'flex', justifyContent: 'left', minWidth: "80%" }}>
          <Box
            sx={{
              width: "5rem",
              minWidth:"5rem",
              height: "5rem",
              borderRadius: 2,
              background: `url(${Images.HOSPITAL_LOGO}) no-repeat`,
              backgroundSize: "cover",
              border: '1px solid lightgray',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
          </Box>
          <Box sx={{ paddingLeft: 2, mt: isDesktopScreens ? 1: 0.5}}>
            <Typography
              sx={{
                fontSize: isDesktopScreens ? h4bold : h5bold,
                fontWeight: 600,
                color: darkBlue,
                mt: 0.5
              }}
            >
              {title}
            </Typography>
            <Typography
              sx={{
                fontSize: isDesktopScreens ? h5bold : h6bold,
                fontWeight: 500,
                color: darkGray,
                my: 0.5,
              }}
            >
              {location}
            </Typography>
          </Box>
        </Box>
      </Box>

        <Box sx={{ mt: 4}}>
        <Typography sx={{ color: darkBlue, fontSize: h6bold, fontWeight: 700}}>About</Typography>
        <Typography sx={{ color: darkGray, fontSize: h6bold, mt: 1}}>{about}</Typography>
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
                <Typography sx={{ fontSize: h7bold, fontWeight:700, color: mainBlue, ml: 0.5 }}>{beds} beds</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        
        <Box sx={{ mt: 4}}>
        <Typography sx={{ color: darkBlue, fontSize: h6bold, fontWeight: 700}}>Jobs</Typography>
        <Typography sx={{ color: darkGray, fontSize: h6bold, mt: 1}}>Will be added after jobs pages are completed</Typography>
        </Box>

        <Box sx={{ mt: 4}}>
        <Typography sx={{ color: darkBlue, fontSize: h6bold, fontWeight: 700}}>Location</Typography>
        <CustomBox sx={{ mt: 1, mb: isDesktopScreens ? 24 : 16}}>
            <div className="map-container">
              <MapContainer elevation={9} center={position} zoom={9} maxBoundsViscosity={1.0} keyboard={false} 
              style={{ borderRadius: "20px", maxHeight:' 400px', minHeight:'300px'}}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                  <Marker position={position}>
                    <Popup>{title}</Popup>
                  </Marker>
              </MapContainer>
            </div>
            </CustomBox>
        </Box>

      </CardContent>
    </Card>
  );
};

FacilityInfoCard.propTypes = {
  facility: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
    beds: PropTypes.string.isRequired,
    coordinates: PropTypes.string.isRequired,
  }).isRequired,
};

export default FacilityInfoCard;
