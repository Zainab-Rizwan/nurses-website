import React from 'react';
import { Box, Container, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ThemeProvider } from '@mui/system';
import { themeSettings } from 'theme';
import { useTheme } from '@emotion/react';

const Footer = () => {
    const theme = useTheme();
    const primaryMain = theme.palette.primary.main;
    const background = theme.palette.background.default;
    const h6= theme.typography.h6;
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: primaryMain,
          textAlign: 'center',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          p: 2,
        }}
      >
        <Typography style={{color: background, ...h6 }}>
          © 2023 WebsiteName.com. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
