import React from "react";
import { useState } from 'react';
import FacilityInfoCard from "shared/FacilityInfo";
import { Avatar, Button, CssBaseline, styled, Typography, TextField, Link, Paper, Box, Grid, useMediaQuery, Divider } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useTheme } from '@emotion/react';
import { ThemeProvider } from '@emotion/react';
import Images from 'constants/ImgConstants';
import { IconButton, InputAdornment } from '@mui/material';
import { Google, Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import SharedButton from "shared/Button";

export default function EditFacilityInfo(props){
  const theme = useTheme();
  const navigate = useNavigate();
  const mainBlue = theme.palette.primary.main ;
  const darkGray = theme.palette.neutral.dark;
  const h2 = theme.typography.h2;  
  const h4 = theme.typography.h4bold;
  const h6bold = theme.typography.h6bold;
  const primaryMain = theme.palette.primary.main;
  const lightGray = theme.palette.neutral.light;
  const white = theme.palette.background.default;
  const darkBlue = theme.palette.primary.dark;
  const h3bold = theme.typography.h3bold;
  const h5 = theme.typography.h5;
  const isDesktopScreens = useMediaQuery("(min-width: 1050px)");

  const GuidesBox = styled(Box)(({ theme }) => ({
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: white, 
    borderRadius: "20px",
  }));

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get('name'),
      description: data.get('description'),
      image: data.get('image'),
      address: data.get('address'),
      beds: data.get('beds'),
    });
  };

  return (
    <Box fullWidth sx={{ marginTop: theme.spacing(4)}}>
      <GuidesBox >
        <Grid container spacing={2} sx={{ p:4, paddingTop: 1}}>

          <Grid item xs={12} md={5}>
            <Typography sx={{ fontSize: "16px", color: darkBlue, fontWeight: 700 }}>
              Facility Name
            </Typography>
            <Typography sx={{ fontSize: h6bold, my: 0.5, color: darkGray }}>
              Enter the name of this facility
            </Typography>
          </Grid>
          <Grid item xs={12} md={7}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              name="name"
              sx={{ mt: 0}}
            />   
          </Grid>

          <Divider sx={{width: '100%', mt: 3, mb: 2}} />

          <Grid item xs={12} md={5}>
            <Typography sx={{ fontSize: "16px", color: darkBlue, fontWeight: 700 }}>
               Description
            </Typography>
            <Typography sx={{ fontSize: h6bold, my: 0.5, color: darkGray }}>
              Provide a description for this facility
            </Typography>
          </Grid>
          <Grid item xs={12} md={7}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="description"
              name="description"
              sx={{ mt: 0}}
            />   
          </Grid>

          <Divider sx={{width: '100%', mt: 3, mb: 2}} />

          <Grid item xs={12} md={5}>
            <Typography sx={{ fontSize: "16px", color: darkBlue, fontWeight: 700 }}>
              Picture
            </Typography>
            <Typography sx={{ fontSize: h6bold, my: 0.5, color: darkGray }}>
              Upload a relevant image
            </Typography>
          </Grid>
          <Grid item xs={12} md={7}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="image"
              name="image"
              sx={{ mt: 0}}
            />   
          </Grid>

          <Divider sx={{width: '100%', mt: 3, mb: 2}} />

          <Grid item xs={12} md={5}>
            <Typography sx={{ fontSize: "16px", color: darkBlue, fontWeight: 700 }}>
              Address
            </Typography>
            <Typography sx={{ fontSize: h6bold, my: 0.5, color: darkGray }}>
              Enter the street address, city, state and zip code
            </Typography>
          </Grid>
          <Grid item xs={12} md={7}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="address"
              name="address"
              sx={{ mt: 0}}
            />   
          </Grid>

          <Divider sx={{width: '100%', mt: 3, mb: 2}} />

          <Grid item xs={12} md={5}>
            <Typography sx={{ fontSize: "16px", color: darkBlue, fontWeight: 700 }}>
              Number of beds
            </Typography>
            <Typography sx={{ fontSize: h6bold, my: 0.5, color: darkGray }}>
              Enter the number of beds available at the facility
            </Typography>
          </Grid>
          <Grid item xs={12} md={7}>
            <TextField
              margin="normal"
              required
              type="number"
              fullWidth
              id="beds"
              name="beds"
              sx={{ mt: 0}}
            />   
          </Grid>

          <Divider sx={{width: '100%', mt: 3, mb: 2}} />

          <Grid item xs={12} md={5}>
            <SharedButton value="Cancel Changes"/>
          </Grid>
          <Grid item xs={12} md={5}>
            <SharedButton value="Edit Facility"/>
          </Grid>

        </Grid>
      </GuidesBox>
    </Box>
  );
};