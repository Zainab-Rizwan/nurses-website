import * as React from 'react';
import { Typography, Box, Grid, Button, TextField, Divider } from '@mui/material';
import { useTheme } from '@emotion/react';
import { useState } from 'react';
import { IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import { Avatar, CssBaseline, Link, Paper, Chip, Autocomplete, FormControl } from '@mui/material';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { ThemeProvider } from '@emotion/react';
import Images from 'constants/ImgConstants';

const disciplines = ['Monitor Technician', 'Surgical First Assistant', 'Paramedic', 'Histology Technician'];
const locations = ['Arizona', 'California', 'Indiana', 'Illinois'];

export default function EditProf() {
  const [value, setValue] = React.useState('one');
  const theme = useTheme();
  const h6bold = theme.typography.h6bold;
  const h3bold = theme.typography.h3bold;
  const h4bold = theme.typography.h4bold;
  const h5bold = theme.typography.h6;
  const mainBlue = theme.palette.primary.main;
  const white = theme.palette.background.default;
  const darkBlue = theme.palette.primary.dark;
  const darkGray = theme.palette.neutral.dark;
  const lightgray = theme.palette.neutral.dark;
  const h5 = theme.typography.h5;
  const primaryMain = theme.palette.primary.main;
  const navigate = useNavigate();

  const [selectedOptions1, setSelectedOptions1] = useState([]);
  const [selectedOptions2, setSelectedOptions2] = useState([]);

  const handleOptionSelect1 = (event, values) => {
    setSelectedOptions1(values);
  };

  const handleOptionSelect2 = (event, values) => {
    setSelectedOptions2(values);
  };

  const [showNPassword, setShowNPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      password: data.get('password'),
      npassword: data.get('npassword'),
      cnpassword: data.get('cnpassword')
    });
  };

  return (
    <Box sx={{mt: "-0.5rem"}}>
    <Typography sx={{fontSize: h4bold}}>Edit Profile</Typography>
    <Typography sx={{fontSize: h6bold, color: "#585858", mt: 0.5}}>Update and personalize your profile information to reflect your latest achievements and interests</Typography>

    <Grid container spacing={2} sx={{mt:"2rem"}}> 
        <Grid item xs={12} md={5}>
            <Typography sx={{ fontSize: "h6bold", fontWeight:500,}}>Current password</Typography>
        </Grid>
        <Grid item xs={12} md={7}>
          <TextField
            sx={{ mt: "0rem" }}
            margin="normal"
            required
            fullWidth
            name="password"
            type={showPassword ? 'text' : 'password'}
            id="password"
            autoComplete="password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handlePasswordVisibility} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
      <Divider sx={{ width: '100%', mt: "1rem" }} />
      <Grid container spacing={2} sx={{ mt: "0.5rem" }}>
        <Grid item xs={12} md={5}>
          <Typography sx={{ fontSize: "h6bold", fontWeight: 500 }}>New password</Typography>
        </Grid>
        <Grid item xs={12} md={7}>
          <TextField
            sx={{ mt: "0rem" }}
            margin="normal"
            required
            fullWidth
            name="npassword"
            type={showPassword ? 'text' : 'password'}
            id="npassword"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handlePasswordVisibility} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
    </Grid>
    <Divider sx={{ width: '100%', mt:"1rem" }} />
    <Grid container spacing={2} sx={{mt:"0.5rem"}}> 
        <Grid item xs={12} md={5}>
            <Typography sx={{ fontSize: "h6bold", fontWeight:500,}}>Confirm new password</Typography>
        </Grid>
        <Grid item xs={12} md={7}>
        <TextField
            sx={{mt:"0rem"}}
            margin="normal"
            required
            fullWidth
            name="cnpassword"
            type={showConfirmPassword ? 'password' : 'text'}
            id="cnpassword"
            InputProps={{
            endAdornment: (
                <InputAdornment position="end">
                <IconButton
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    edge="end"
                >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
                </InputAdornment>
            ),
            }}
        />
        </Grid>
    </Grid>  
    <Grid container justifyContent="flex-end" item sx={{ mt: 2.5 }}>
        <Button
        type="submit"
        variant="contained"
        sx={{
            padding: '10px 30px',
            border: 'none',
            mt: 2,
            mb: 4,
            borderColor: darkBlue,
            transition: 'all 0.4s',
            cursor: 'pointer',
            backgroundColor: mainBlue,
            borderRadius: '4px',
            color: white,
            fontSize: 'h6',
            wordSpacing: '2px',
            '&:hover': {
            backgroundColor: '#103d49',
            },
        }}
        >
        Save New Password
        </Button>
    </Grid>
    <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid item xs={12} sm={8} md={5}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'left',
            }}
          >
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
            </Box>
          </Box>
        </Grid>
          </Grid>
    </Box>
  );
}

