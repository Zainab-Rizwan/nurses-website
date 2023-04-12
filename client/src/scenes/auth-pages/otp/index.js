import * as React from 'react';
import { Button, CssBaseline, TextField, Link, Paper, Box, Grid, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@emotion/react';
import { ThemeProvider } from '@emotion/react';

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
export default function OTP() {
  const theme = useTheme();
  const primaryMain = theme.palette.primary.main;
  const darkGray = theme.palette.primary.dark;
  const white = theme.palette.background.default;

  const h3bold = theme.typography.h3bold;
  const h5 = theme.typography.h5;
  const h6bold = theme.typography.h6bold;

  const isDesktopScreens = useMediaQuery("(min-width: 800px)");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('otp'),
    });
  };

  const refs = React.useRef([...Array(6)].map(() => React.createRef()));

  const handleInput = (index, event) => {
    const input = event.target.value;
    if (input.length > 0 && index < 5) {
      refs.current[index + 1].current.focus();
    }
  };

  return ( 
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh',  }}>
        <CssBaseline />
        <Grid item xs={12}component={Paper} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography sx={{ fontSize: h3bold, mt: 2 }}>
              OTP Verification
            </Typography>
            <Typography sx={{ fontSize: h5, my: 1, color: darkGray }}>
              Please enter the six digit verification code sent to your email
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 5  }}>
            <Grid container spacing={1}>
              {[...Array(6)].map((_, index) => (
                <Grid item xs={2} key={index}>
                  <TextField
                    variant="outlined"
                    margin="dense"
                    inputProps={{ maxLength: 1,  style: {
                      textAlign: 'center',
                      height: isDesktopScreens ?'6rem' : '4rem', 
                      maxWidth: "4rem",
                      fontSize: '32px',
                    }, }}
                    autoFocus={index === 0}
                    onChange={(event) => handleInput(index, event)}
                    inputRef={refs.current[index]}
                  />
                </Grid>
              ))}
            </Grid>
              <Box sx={{  display: 'flex',
              flexDirection: 'column',
              mt: 5,
              alignItems: 'center',}}>
              <Button
                type="submit"
                autoWidth
                variant="contained"
                sx={{ mt: 3,
                    mb: 2, 
                    p: 1, 
                    minWidth: '15rem',
                    border: `1px solid ${primaryMain}`,
                    fontSize: h6bold, 
                    '&:hover': {
                        backgroundColor: white,
                        color: primaryMain,
                  }, }}>
                Submit
              </Button>
              </Box>

              <Grid container>
                <Grid item xs  sx={{  display: 'flex',  alignItems: 'center' , justifyContent: 'center', mb: 10}}>
                <Typography variant="body2">
                  Didn't receive a code?{' '}
                  <Link component={Link} to href="/" variant="body2">
                    <strong>Resend code</strong>
                  </Link>
                </Typography>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5}} />
            </Box>
          </Box>
        </Grid>
          </Grid>
    </ThemeProvider>
  );
}