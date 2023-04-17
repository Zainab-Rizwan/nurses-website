import * as React from 'react';
import { Avatar, Button, CssBaseline, TextField, Link, Paper, Box, Grid, Typography, Chip, Autocomplete, FormControl } from '@mui/material';
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

const disciplines = ['Monitor Technician', 'Surgical First Assistant', 'Paramedic', 'Histology Technician'];
const locations = ['Arizona', 'California', 'Indiana', 'Illinois'];

export default function AccountSetUp() {
  const theme = useTheme();
  const primaryMain = theme.palette.primary.main;
  const darkGray = theme.palette.primary.dark;
  const white = theme.palette.background.default;
  const darkBlue = theme.palette.primary.dark;
  const lightgray = theme.palette.neutral.dark;
  const mainBlue = theme.palette.primary.main;
  const h3bold = theme.typography.h3bold;
  const h5 = theme.typography.h5;
  const h6bold = theme.typography.h6bold;
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
      cpassword: data.get('cpassword')
    });
  };

  const [selectedOptions1, setSelectedOptions1] = useState([]);
  const [selectedOptions2, setSelectedOptions2] = useState([]);

  const handleOptionSelect1 = (event, values) => {
    setSelectedOptions1(values);
  };

  const handleOptionSelect2 = (event, values) => {
    setSelectedOptions2(values);
  };

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
            <FormControl fullWidth variant="outlined" sx={{borderColor: 'darkGray',  position: "relative", mt: 1}}>
              <Autocomplete
                  ListboxProps={{
                    style: { maxHeight: '200px' },
                  }}
                  multiple
                  options={disciplines}
                  value={selectedOptions1}
                  onChange={handleOptionSelect1}
                  limitTags={2}
                  getLimitTagsText={(more) => `+${more}`}
                  renderTags={(value, getTagProps) =>
                    value.map((option, index) => (
                <Chip
                  key={option}
                  label={option}
                  sx={{ borderRadius:"2px",  }}
                  onDelete={() => {
                    const newSelectedOptions1 = [...selectedOptions1];
                    newSelectedOptions1.splice(index, 1);
                    setSelectedOptions1(newSelectedOptions1);
                  }}
                  {...getTagProps({ index })}
                />
              ))
            }
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Professions"
                InputLabelProps={{
                  style: { color: lightgray, fontWeight: 300, fontSize:"14px", maxHeight: "20px" }
                }}
              />
            )}
          />
          </FormControl>    
             <TextField
                margin="normal"
                required
                fullWidth
                id="specialty"
                label="Specialty"
                name="specialty"
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
                sx={{ mt:1 , mb: 0}}
              />
             <TextField
                margin="normal"
                required
                fullWidth
                id="specialty"
                label="Licenses in States"
                name="specialty"
              /> 
             <FormControl fullWidth  variant="outlined" sx={{borderColor: 'darkGray',  position: "relative", mt: 1 }}>
                <Autocomplete
                ListboxProps={{
                  style: { maxHeight: '200px' },
                }}
                multiple
                options={locations}
                value={selectedOptions2}
                limitTags={3}
                getLimitTagsText={(more) => `+${more}`}
                onChange={handleOptionSelect2}
                renderTags={(value, getTagProps) =>
                  value.map((option, index) => (
                    <Chip
                    sx={{ borderRadius:"2px"  }}
                      key={option}
                      label={option}
                      onDelete={() => {
                        const newSelectedOptions2 = [...selectedOptions2];
                        newSelectedOptions2.splice(index, 1);
                        setSelectedOptions2(newSelectedOptions2);
                      }}
                      {...getTagProps({ index })}
                    />
                  ))
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    label="Preferred Location"
                    InputLabelProps={{
                      style: { color: lightgray, fontWeight: 300, fontSize:"14px" }
                    }}
                  />
                )}
              />
                </FormControl>       
             <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={() => navigate("/otp")}
              sx={{
                padding: "10px 30px",
                border: "none",
                mt: 2,
                borderColor : darkBlue,
                transition: "all 0.4s",
                cursor: "pointer",
                backgroundColor: mainBlue,
                borderRadius: "4px",
                color: white,
                fontSize: h6bold,
                wordSpacing: "2px",
                "&:hover": {
                  backgroundColor: "#103d49",
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