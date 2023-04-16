import * as React from 'react';
import { Avatar, Button, CssBaseline, Link, Paper, Box, Grid, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import { ThemeProvider } from '@emotion/react';
import Images from 'constants/ImgConstants';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { useNavigate } from 'react-router-dom';

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
export default function CheckEmail() {
  const theme = useTheme();
  const primaryMain = theme.palette.primary.main;
  const darkGray = theme.palette.primary.dark;
  const white = theme.palette.background.default;
  const h3bold = theme.typography.h3bold;
  const h5 = theme.typography.h5;
  const h6bold = theme.typography.h6bold;
  const darkBlue = theme.palette.primary.dark;
  const mainBlue = theme.palette.primary.main;
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
            <Avatar sx={{ m: 1, bgcolor: primaryMain}}>
              <MailOutlineIcon />
            </Avatar>
            <Typography sx={{ fontSize: h3bold, mt: 2 }}>
              Check Your Email
            </Typography>
            <Typography sx={{ fontSize: h5, my: 1, color: darkGray }}>
             We sent a password reset link to sampleemail@gmail.com
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
                 <Button
              type="submit"
              onClick={() => navigate("/set-new-password")}
              fullWidth
              variant="contained"
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
              Open email app
            </Button>
              <Grid container>
                <Grid item xs>
                <Typography variant="body2">
                Didn't receive the email? {' '}
                  <Link component={Link} to href="sign-in" variant="body2">
                    <strong>Click to resend.</strong>
                  </Link>
                </Typography>
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