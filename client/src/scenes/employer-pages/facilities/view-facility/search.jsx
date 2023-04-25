import * as React from 'react';
import { styled, TextField, Button, Box, IconButton, useMediaQuery, Popover, Typography, Tooltip } from '@mui/material';
import { useTheme } from '@emotion/react';
import { SearchOutlined } from '@mui/icons-material';
import { Add } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from 'react';

const Search = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const white = theme.palette.background.default;
    const mainBlue = theme.palette.primary.main;
    const darkGray = theme.palette.neutral.dark;
    const darkBlue = theme.palette.primary.dark;
    const h5bold = theme.typography.h5bolder;
    const h6bold = theme.typography.h6bold;
    const lightGray = theme.palette.neutral.light;

    const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    color: white, 
    gap: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "row",
      alignItems: "center",
      textAlign: "center",
    },   
  }));
  

  const isMobileOrTablet = useMediaQuery('(max-width: 759px)');

  return (
    <CustomBox sx={{ marginTop: theme.spacing(4)}}>
      <TextField
        id="search-field"
        label="Search"
        fullWidth
        sx={{ color: darkGray, fontSize: h5bold, backgroundColor: white, borderColor: white,}}
        InputProps={{
          endAdornment: (
            <Button className="search-button" value="Search" 
            sx={{ 
              padding: "10px 40px",
              border: "none",
              borderColor : darkBlue,
              transition: "all 0.4s",
              cursor: "pointer",
              backgroundColor: mainBlue,
              borderRadius: "4px",
              borderStartStartRadius:"0px",
              borderEndStartRadius:"0px",
              color: white,
              fontSize: h6bold,
              wordSpacing: "2px",
              zIndex: 2,
              transform: 'translate(7px) scale(1.15)',
              "&:hover": {
                backgroundColor: "#103d49",
              },
              }}>
              <SearchOutlined className="search-icon" sx={{ mr: 1}} />
              Search 
            </Button>
          ),}}
        />

      {isMobileOrTablet ? (
         <Tooltip title="Add new facility">
            <IconButton
              sx={{
                backgroundColor: white,
                borderRadius: '4px',
                padding: 2,
                "&:hover": {
                  backgroundColor: "#f9f9f9",
                },
              }}>
              <Add/>
            </IconButton>
        </Tooltip>
        ) : (
        <Button
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: '10px 35px',
            transition: 'all 0.4s',
            cursor: 'pointer',
            backgroundColor: white,
            borderRadius: '4px',
            color: mainBlue,
            whiteSpace: 'nowrap',
            fontSize: h6bold,
            fontWeight: 700,
            wordSpacing: '1px',
            "&:hover": {
              backgroundColor: "#f9f9f9",
            },
          }} 
          onClick={() => navigate("/add-facility")} >
          New Facility
          <Add sx={{ ml: 1 }} />
        </Button>
      )}
    </CustomBox>
  );
};

export default Search;