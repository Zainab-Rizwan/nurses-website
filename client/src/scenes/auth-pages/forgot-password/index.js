import * as React from 'react';
import { Avatar, Button, CssBaseline, TextField, Link, Paper, Box, Grid, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import { ThemeProvider } from '@emotion/react';
import Images from 'constants/ImgConstants';
import KeyIcon from '@mui/icons-material/Key';
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
export default function ForgotPassword() {
  const theme = useTheme();
  const navigate = useNavigate();
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
              <KeyIcon />
            </Avatar>
            <Typography sx={{ fontSize: h3bold, mt: 2 }}>
              Forgot Password?
            </Typography>
            <Typography sx={{ fontSize: h5, my: 1, color: darkGray }}>
              No worries, we'll send your reset instructions.
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
              />
                 <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={() => navigate("/check-email")}
              sx={{
                padding: "10px 30px",
                  border: "none",
                  mt: 1,
                  mb: 2, 
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
              Reset Password
            </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="sign-in" variant="body2">
                    Back to login
                  </Link>
                </Grid>
                <Grid item>
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