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
    marginTop: "-2.5rem",
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
    <CustomBox gap={2} margin={"10%"} sx={{ p:2}}>
          <FormControl sx={{ minWidth: "18rem"}}>
          <InputLabel>Select discipline</InputLabel>
          <Select
            label="Select discipline"
            multiple
            value={selectedValues1}
            onChange={handleChange1}
            renderValue={(selected) => (
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} style={{ marginRight: 5, backgroundColor: lightBlue }} />
                ))}
              </div>
            )}
            autoWidth
          >
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
            <MenuItem value="option3">Option 3</MenuItem>
          </Select>
        </FormControl>

          <FormControl sx={{ minWidth: "18rem"}}>
            <InputLabel>Select specialty</InputLabel>
            <Select
            label="Select specialty"
            multiple
            value={selectedValues2}
            onChange={handleChange2}
            renderValue={(selected) => (
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} style={{ marginRight: 5, backgroundColor: lightBlue }} />
                ))}
              </div>
            )}
          >
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
            <MenuItem value="option3">Option 3</MenuItem>
          </Select>
          </FormControl>
          <FormControl sx={{ minWidth: "18rem"}}>
            <InputLabel>Select location</InputLabel>
            <Select
            label="Select location"
            multiple
            value={selectedValues3}
            onChange={handleChange3}
            renderValue={(selected) => (
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} style={{ marginRight: 5, backgroundColor: lightBlue }} />
                ))}
              </div>
            )}
            autoWidth
          >
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
            <MenuItem value="option3">Option 3</MenuItem>
          </Select>
          </FormControl>

          <TextField
          id="standard-select-currency-native"
          select
          label="Native select"
          defaultValue="EUR"
          SelectProps={{
            native: true,
          }}
          helperText="Please select your currency"
          variant="standard"
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