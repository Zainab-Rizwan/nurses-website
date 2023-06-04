import * as React from 'react';
import { Typography, Box } from '@mui/material';
import { useTheme } from '@emotion/react';

export default function Details() {
  const theme = useTheme();
  const h6bold = theme.typography.h6bold;

  return (
    <Box sx={{ mt: "-0.5rem" }}>
        <Typography variant="h6" sx={{ mb: 2, fontSize:h6bold }}> Phone </Typography>
        <Typography variant="h6" sx={{ mb: 2 }}> Email </Typography>
        <Typography variant="h6" sx={{ mb: 2 }}> Job Type </Typography>
        <Typography variant="h6" sx={{ mb: 2 }}> Years of Experience </Typography>
        <Typography variant="h6" sx={{ mb: 2 }}> Professions </Typography>
        <Typography variant="h6" sx={{ mb: 2 }}> Specialty </Typography>
        <Typography variant="h6" sx={{ mb: 2 }}> Date Available </Typography>
        <Typography variant="h6" sx={{ mb: 2 }}> Licenses in States</Typography>
        <Typography variant="h6" sx={{ mb: 2 }}> Preferred Locations </Typography>
    </Box>
  );
}
