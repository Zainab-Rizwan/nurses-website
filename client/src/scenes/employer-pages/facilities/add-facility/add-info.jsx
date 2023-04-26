import React from "react";
import { styled, Typography, TextField, Box, Grid, useMediaQuery, Divider } from '@mui/material';
import { useTheme } from '@emotion/react';
import { useNavigate } from "react-router-dom";
import SharedButton from "shared/Button";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function AddFacilityInfo(props){
  const theme = useTheme();
  const navigate = useNavigate();
  const darkGray = theme.palette.neutral.dark;
  const h6bold = theme.typography.h6bold;
  const white = theme.palette.background.default;
  const darkBlue = theme.palette.primary.dark;
  const isFullWidth = useMediaQuery((theme) => theme.breakpoints.up('md'));

  const GuidesBox = styled(Box)(({ theme }) => ({
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: white, 
    borderRadius: "20px",
  }));

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     name: data.get('name'),
  //     description: data.get('description'),
  //     image: data.get('image'),
  //     address1: data.get('address1'),
  //     address2: data.get('address2'),
  //     state: data.get('state'),
  //     city: data.get('city'),
  //     zip: data.get('zip'),
  //     beds: data.get('beds'),
  //   });
  // };

  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, false] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ color: [] }, { background: [] }],
        ["link", "image"],
        [{ 'table': true }],
      ],
  },
};

  return (
    <Box fullWidth sx={{ marginTop: theme.spacing(4)}}>
      <GuidesBox >
        <Grid container spacing={2} sx={{ p:4, paddingTop: 2, display: 'flex', justifyContent: 'flex-end'}}>

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
          <Grid item xs={12} md={7} sx={{ maxHeight: '265px', minHeight:'265px', height:"265px",}}>
            <ReactQuill 
              modules={modules} 
              style={{ 
                maxHeight: '150px', 
                minHeight:'150px', 
                height:'150px',
                overflowWrap: 'break-word',
                wordBreak: 'break-word',
              }}
            />
          </Grid>
          <Divider sx={{width: '100%', mb: 2}} />

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
              label= "Address line 1"
              id="address1"
              name="address"
              sx={{ mt: 0}}
            />   
            <TextField
              margin="normal"
              fullWidth
              label= "Address line 2 (Optional)"
              id="address2"
              name="address"
              sx={{ mt: 0}}
            />   
             <TextField
              margin="normal"
              fullWidth
              required
              label= "State"
              id="state"
              name="state"
              sx={{ mt: 0}}
            />   
            <Grid container spacing={isFullWidth ? 1 : 0}>
              <Grid item xs={12} md={6}>
                <TextField
                  margin="normal"
                  fullWidth
                  required
                  label= "City"
                  id="city"
                  name="city"
                  sx={{ mt: 0}}
                />   
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  margin="normal"
                  fullWidth
                  required
                  label= "  Zip Code"
                  id="zip"
                  name="zip"
                  sx={{ mt: 0}}
                />   
              </Grid>
            </Grid>

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
              fullWidth
              type="number"
              id="beds"
              name="beds"
              sx={{ mt: 0}}
            />   
          </Grid>

          <Divider sx={{width: '100%', mt: 3, mb: 2}} />

          <Grid item xs={12} md={5}>
            <Typography sx={{ fontSize: "16px", color: darkBlue, fontWeight: 700 }}>
              Picture
            </Typography>
            <Typography sx={{ fontSize: h6bold, my: 0.5, color: darkGray }}>
              Upload a relevant image (JPG, PNG or SVG)
            </Typography>
          </Grid>
          <Grid item xs={12} md={7}>
            <Box sx={{mt: isFullWidth ? 2 : 0, fontSize: h6bold}}>
          <input
            accept="image/jpeg,image/png,image/svg+xml"
            id="image"
            name="image"
            type="file"
          />
          </Box>
          </Grid>
          
          <Divider sx={{width: '100%', mt: 3, mb: 8}} />

          <Box sx={{mr: 0, mb: 2, display: 'flex', justifyContent: 'flex-end'}}>
            <SharedButton  onClick={() => navigate("/facilities")} value="Add Facility"/>
          </Box>

        </Grid>
      </GuidesBox>
    </Box>
  );
};