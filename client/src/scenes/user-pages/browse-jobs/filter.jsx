import * as React from 'react';
import { styled, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Paper, Box, Grid, Typography, Card, useMediaQuery, FormControl, InputLabel, Select, Chip, MenuItem } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useTheme } from '@emotion/react';
import { ThemeProvider } from '@emotion/react';
import Images from 'constants/ImgConstants';
import { IconButton, InputAdornment } from '@mui/material';
import { useState } from 'react';
import { SearchOutlined } from '@mui/icons-material';
import Button from 'shared/Button';

const Search = () => {

    
const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];

    const theme = useTheme();
    const white = theme.palette.background.default;
    const lightBlue = theme.palette.neutral.light;
    const darkBlue = theme.palette.primary.main;
    const mainBlue = theme.palette.primary.light;
    const h7 = theme.typography.h7;
    const h5 = theme.typography.h5bold;
    const isTabletScreens = useMediaQuery("(min-width: 768px)");
    const isDesktopScreens = useMediaQuery("(min-width: 800px)");

    const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    backgroundColor: darkBlue,
    borderRadius: "40px",
    marginTop: isDesktopScreens ? "-4rem" : "-2.5rem",
    color: white,
    gap: theme.spacing(2),

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
    
  }));

    const [selectedValues1, setSelectedValues1] = useState([]);
    const [selectedValues2, setSelectedValues2] = useState([]);
    const [selectedValues3, setSelectedValues3, ] = useState([]);
  
  
    const handleChange1 = (event) => {
      const { value } = event.target;
      setSelectedValues1(value);
    };
  
    const handleChange2 = (event) => {
      const { value } = event.target;
      setSelectedValues2(value);
    };
  
    const handleChange3 = (event) => {
      const { value } = event.target;
      setSelectedValues3(value);
    };

  return (
    <CustomBox gap={2} marginLeft={"10%"} marginRight={"10%"} sx={{ p:2, color: "#FFFFFF"}}>
        <TextField
          select
          label="Native select"
          defaultValue=""
          SelectProps={{
            native: true,
          }}
          variant="standard"
          sx={{ minWidth: "15rem"}}
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <TextField
          select
          label="Native select"
          defaultValue=""
          SelectProps={{
            native: true,
          }}
          variant="standard"
          sx={{ minWidth: "15rem"}}
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <TextField
          select
          label="Native select"
          defaultValue=""
          SelectProps={{
            native: true,
          }}
          variant="standard"
          sx={{ minWidth: "15rem"}}
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <Button value='Search Jobs'/>
    </CustomBox>
  );
};

export default Search;