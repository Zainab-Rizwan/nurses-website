import * as React from 'react';
import { Typography, Box, Grid, Button, TextField, Divider } from '@mui/material';
import { useTheme } from '@emotion/react';
import { IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export default function ChangePass() {
  const theme = useTheme();
  const h6bold = theme.typography.h6bold;
  const h4bold = theme.typography.h4bold;
  const mainBlue = theme.palette.primary.main;
  const white = theme.palette.background.default;
  const darkBlue = theme.palette.primary.dark;

  const [showCurrentPassword, setShowCurrentPassword] = React.useState(false);
  const [showNewPassword, setShowNewPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      password: data.get('password'),
      npassword: data.get('npassword'),
      cnpassword: data.get('cnpassword')
    });
  };

  const toggleCurrentPasswordVisibility = () => {
    setShowCurrentPassword((prev) => !prev);
  };

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  return (
    <Box sx={{ mt: "-0.5rem" }} component="form" noValidate onSubmit={handleSubmit}>
      <Typography sx={{ fontSize: h4bold }}>Password</Typography>
      <Typography sx={{ fontSize: h6bold, color: "#585858", mt: 0.5 }}>
        Please enter your current password to change your password.
      </Typography>

      <Grid container spacing={2} sx={{ mt: "2rem" }}>
        <Grid item xs={12} md={5}>
          <Typography sx={{ fontSize: "h6bold", fontWeight: 500 }}>Current password</Typography>
        </Grid>
        <Grid item xs={12} md={7}>
          <TextField
            sx={{ mt: "0rem" }}
            margin="normal"
            required
            fullWidth
            name="password"
            id="password"
            type={showCurrentPassword ? 'text' : 'password'}
            autoComplete="password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={toggleCurrentPasswordVisibility} edge="end">
                    {showCurrentPassword ? <Visibility /> : <VisibilityOff />}
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
            id="npassword"
            type={showNewPassword ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={toggleNewPasswordVisibility} edge="end">
                    {showNewPassword ? <Visibility /> : <VisibilityOff />}
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
          <Typography sx={{ fontSize: "h6bold", fontWeight: 500 }}>Confirm new password</Typography>
        </Grid>
        <Grid item xs={12} md={7}>
          <TextField
            sx={{ mt: "0rem" }}
            margin="normal"
            required
            fullWidth
            name="cnpassword"
            id="cnpassword"
            type={showConfirmPassword ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={toggleConfirmPasswordVisibility} edge="end">
                    {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
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
    </Box>
  );
}
