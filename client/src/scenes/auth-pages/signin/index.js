import * as React from 'react';
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Paper, Box, Grid, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useTheme } from '@emotion/react';
import { ThemeProvider } from '@emotion/react';
import Images from 'constants/ImgConstants';
import { IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff, Google } from '@mui/icons-material';


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
export default function SignIn() {
  const theme = useTheme();
  const primaryMain = theme.palette.primary.main;
  const darkGray = theme.palette.primary.dark;
  const white = theme.palette.background.default;
  const lightGray = theme.palette.neutral.light;
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

  const [showPassword, setShowPassword] = React.useState(false);

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
            <Typography sx={{ fontSize: h3bold, mt: 2 }}>
              Sign in
            </Typography>
            <Typography sx={{ fontSize: h5, my: 1, color: darkGray }}>
              Welcome Back! Please enter your credentials.
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
              <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              id="password"
              autoComplete="current-password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
                 <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                padding: "10px 30px",
                  border: "none",
                  mt: 1,
                  mb: 1, 
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
              Sign In
            </Button>
            <Button
              type="submit"
              fullWidth
              sx={{
                mb: 2, 
                mt: 1,
                p: "10px 30px",
                wordSpacing: "2px",
                border: `1px solid ${lightGray}`,
                fontSize: h6bold, 
                '&:hover': {
                  backgroundColor: lightGray,
                  color: darkGray,
                },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Google sx={{ mr: 1, color: darkGray }} />
              Sign In with Google
            </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="forgot-password" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                <Typography variant="body2">
                 Don't have an account? {' '}
                  <Link component={Link} to href="sign-up" variant="body2">
                    <strong>Sign Up</strong>
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