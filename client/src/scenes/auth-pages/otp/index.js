import * as React from 'react';
import { Avatar, Button, CssBaseline, Link, Paper, Box, Grid, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useTheme } from '@emotion/react';
import { ThemeProvider } from '@emotion/react';
import Images from 'constants/ImgConstants';
import { useState } from 'react';
import OtpInput from 'react-otp-input';

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

const styles = {
  otpInput: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  otpInputInput: {
    width: '15%',
    height: '5rem',
    backgroundColor: '#E3E8E9',
    borderRadius: '8px',
    fontSize: '32px',
    color: '#333333',
    textAlign: 'center',
    border: 'none',
    fontFamily: 'Arial, sans-serif',
    '&:focus': {
      outline: 'none',
      boxShadow: '0 0 0 2px #F7D7C1',
      border: 'none',
    },
  },
};

export default function OTP() {
  const theme = useTheme();
  const primaryMain = theme.palette.primary.main;
  const darkGray = theme.palette.primary.dark;
  const white = theme.palette.background.default;
  const h3bold = theme.typography.h3bold;
  const h5 = theme.typography.h5;
  const h6bold = theme.typography.h6bold;
  const darkBlue = theme.palette.primary.dark;
  const mainBlue = theme.palette.primary.main;
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const [otp, setOtp] = useState('');

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
            <Avatar sx={{ m: 1, bgcolor: primaryMain}}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography sx={{ fontSize: h3bold, mt: 2, }}>
              OTP Verification
            </Typography>
            <Typography sx={{ fontSize: h5, my: 1, color: darkGray, }}>
            Please enter the six digit verification code sent to your email
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <Box sx={{margin: "5%"}}>
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={<span> </span>}
                inputStyle={styles.otpInputInput}
                containerStyle={styles.otpInput}
                renderInput={(props) => <input {...props} />}
              />
              </Box>
                <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{padding: "10px 30px",
                  border: "none",
                  mb: 2, 
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
                  }, }}
              >
                Submit
              </Button>
              <Grid container>
                <Grid item>
                <Typography variant="body2">
                  Didn't receive a code?{' '}
                  <Link component={Link} to href="/" variant="body2">
                    <strong>Resend code</strong>
                  </Link>
                </Typography>
                </Grid>
              </Grid>
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