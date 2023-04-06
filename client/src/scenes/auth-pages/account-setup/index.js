import * as React from 'react';
import { Avatar, Button, CssBaseline, TextField, Link, Paper, Box, Grid, Typography, Chip } from '@mui/material';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { useTheme } from '@emotion/react';
import { ThemeProvider } from '@emotion/react';
import Images from 'constants/ImgConstants';
import { useNavigate } from "react-router-dom";


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        Website Name
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
export default function AccountSetUp() {
  const theme = useTheme();
  const primaryMain = theme.palette.primary.main;
  const darkGray = theme.palette.primary.dark;
  const lightBlue = theme.palette.neutral.light;
  const white = theme.palette.background.default;

  const h3bold = theme.typography.h3bold;
  const h5 = theme.typography.h5;
  const h6bold = theme.typography.h6bold;

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
      cpassword: data.get('cpassword')
    });
  };

  const [selectedValues1, setSelectedValues1] = useState([]);
  const handleChange1 = (event) => {
    const { value } = event.target;
    setSelectedValues1(value);
  };


  const navigate = useNavigate();

  return ( 
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'left',
            }}
          >
            <Avatar sx={{ 
              m: 1, 
              bgcolor: primaryMain, 
              '&:hover': {
              backgroundColor: white,
              border: `1px solid ${primaryMain}`,
              color: primaryMain,
              cursor: 'pointer'
              },}}              
              onClick={() => navigate("/sign-up")}>
              <ArrowBackOutlinedIcon />
            </Avatar>
            <Typography sx={{ fontSize: h3bold, mt: 2 }}>
              Account Setup
            </Typography>
            <Typography sx={{ fontSize: h5, my: 1, color: darkGray }}>
              Just a few things needed to create your account
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <TextField
                margin="normal"
                required
                autoWidth
                id="fname"
                label="First Name"
                name="fname"
                sx= {{ minWidth: "49%"}}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                id="lname"
                label="Last Name"
                name="lname"
                sx= {{ marginLeft: "2%", minWidth: "49%"}}

              />
            </div>
            <TextField
              margin="normal"
              required
              fullWidth
              id="phone"
              label="Phone Number"
              name="phone"
              autoComplete="tel"
              type="tel"
              autoFocus
            />
              <div style={{ display: 'flex', alignItems: 'center' }}>
              <TextField
                margin="normal"
                required
                autoWidth
                id="job-type"
                label="Job Type"
                name="job-type"
                sx= {{ minWidth: "49%"}}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                id="years"
                type="Number"
                label="Years of Experience"
                name="years"
                sx= {{ marginLeft: "2%", minWidth: "49%"}}
              />
            </div>
            <TextField
                margin="normal"
                required
                fullWidth
                id="profession"
                label="Profession"
                name="profession"
                autoFocus
              />
             <TextField
                margin="normal"
                required
                fullWidth
                id="specialty"
                label="Specialty"
                name="specialty"
                autoFocus
              />     
             <TextField
                margin="normal"
                required
                fullWidth
                id="date"
                label="Date Available"
                name="date"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  defaultValue: null,
                }}
              />
             <TextField
                margin="normal"
                required
                fullWidth
                id="specialty"
                label="Licenses in States"
                name="specialty"
                autoFocus
              /> 
            <FormControl sx={{ minWidth: "100%", mt: 2}}>
            <InputLabel>Preferred Location</InputLabel>
            <Select
            multiple
            value={selectedValues1}
            onChange={handleChange1}
            renderValue={(selected) => (
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} style={{ marginRight: 5, backgroundColor: lightBlue }} />
                ))}
              </div>
            )}
            autoWidth
          >
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
            <MenuItem value="option3">Option 3</MenuItem>
          </Select>
          </FormControl>           
             <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={() => navigate("/otp")}
              sx={{
                mt: 3, 
                mb: 2, 
                p: 2, 
                border: `1px solid ${primaryMain}`,
                fontSize: h6bold, 
                '&:hover': {
                  backgroundColor: white,
                  color: primaryMain,
                },
              }}
            >
              Create Account
            </Button>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          textAlign="right"
          sx={{
            backgroundImage: `url(${Images.AUTH_IMG})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
          </Grid>
    </ThemeProvider>
  );
}