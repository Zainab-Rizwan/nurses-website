import * as React from 'react';
import { styled, CssBaseline, TextField, Button, FormControlLabel, Checkbox, Link, Paper, Box, Grid, Typography, Card, useMediaQuery, FormControl, InputLabel, Select, Chip, MenuItem } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useTheme } from '@emotion/react';
import { ThemeProvider } from '@emotion/react';
import Images from 'constants/ImgConstants';
import { IconButton, InputAdornment } from '@mui/material';
import { useState } from 'react';
import { SearchOutlined } from '@mui/icons-material';
import './index.scss';

const Search = () => {
  const disciplines = [
    {value: 'Monitor Technician', },
    {value: 'Surgical First Assistant',},
    {value: 'Paramedic',},
    { value: 'Histology Technician',},
  ];

  const specialties = [
    {value: 'CT Technologist', },
    {value: 'Surgical Technologist',},
    {value: 'UltraSound Technologist',},
    { value: 'Cath Lab Technologist',},
  ];

  const locations = [
    {value: 'Arizona', },
    {value: 'California',},
    {value: 'Illinois',},
    { value: 'Indiana',},
  ];

    const theme = useTheme();
    const white = theme.palette.background.default;
    const lightBlue = theme.palette.neutral.light;
    const darkBlue = theme.palette.primary.main;
    const mainBlue = theme.palette.primary.light;
    const h7 = theme.typography.h7;
    const h5 = theme.typography.h5bold;
    const h5bold = theme.typography.h5bolder;
    const isTabletScreens = useMediaQuery("(min-width: 768px)");
    const isDesktopScreens = useMediaQuery("(min-width: 800px)");

    const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    backgroundColor: darkBlue,
    borderRadius: "40px",
    marginTop: isDesktopScreens ? "-3rem" : "-2.5rem",
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
    <CustomBox marginLeft={"8%"} marginRight={"8%"} sx={{ p:2.5, color: "#FFFFFF"}}>
    <Grid container spacing={2} alignItems="center" color="#FFFFFF">
      <Grid item xs={12} sm={4} >
      <FormControl fullWidth variant="outlined" sx={{borderColor: 'white'}}>
      <InputLabel sx={{ color: "#FFFFFF", fontSize: h5}}>Discipline</InputLabel>
      <Select
        style={{ borderBottom: "1px solid #FFFFFF", borderRadius:"0px"}}
        multiple
        label="Select a discipline"
        value={selectedValues1}
        onChange={handleChange1}
        renderValue={(selected) => (
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {selected.map((value) => (
              <Chip key={value} label={value} style={{ marginRight: 5, marginTop:5, backgroundColor: lightBlue }} />
            ))}
          </div>
        )}
        sx={{
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: darkBlue
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: darkBlue
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: darkBlue
          }
        }}
      >
    {disciplines.map((disciplines) => (
      <MenuItem key={disciplines.value} value={disciplines.value}>
        {disciplines.value}
      </MenuItem>
    ))}
    </Select>
  </FormControl>

    </Grid>
    <Grid item xs={12} sm={4}>
      <FormControl fullWidth>
        <InputLabel sx={{ color: "#FFFFFF", fontSize: h5}}>Specialty</InputLabel>
        <Select
          style={{ borderBottom: "1px solid #FFFFFF", borderRadius:"0px"}}
          multiple
          label="Select a specialty"
          value={selectedValues2}
          onChange={handleChange2}
          renderValue={(selected) => (
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {selected.map((value) => (
                <Chip key={value} label={value} style={{ marginRight: 5, marginTop:5, backgroundColor: lightBlue }} />
                ))}
            </div>
          )}
          sx={{
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: darkBlue
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: darkBlue
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: darkBlue
            }
          }}
        >
          {specialties.map((specialties) => (
            <MenuItem key={specialties.value} value={specialties.value}>
              {specialties.value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
    <Grid item xs={12} sm={4}>
      <FormControl fullWidth>
        <InputLabel sx={{ color: "#FFFFFF", fontSize: h5}}>Location</InputLabel>
        <Select
          style={{ borderBottom: "1px solid #FFFFFF", borderRadius:"0px"}}
          multiple
          label="Select a location"
          value={selectedValues3}
          onChange={handleChange3}
          sx={{ border: "0px solid white"}}
          renderValue={(selected) => (
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {selected.map((value) => (
                <Chip key={value} label={value} style={{ marginRight: 5, marginTop:5, backgroundColor: lightBlue }} />
                ))}
            </div>
          )}
          sx={{
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: darkBlue
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: darkBlue
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: darkBlue
            }
          }}
        >
          {locations.map((locations) => (
            <MenuItem key={locations.value} value={locations.value}>
              {locations.value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
    </Grid>
    <Button className="search-button" value="Search" 
    sx={{ 
      padding: "10px 30px",
      border: "none",
      border: "1px solid white",
      transition: "all 0.4s",
      cursor: "pointer",
      backgroundColor: "white",
      fontSize: h5bold,
      color: darkBlue,
      "&:hover": {
        backgroundColor: darkBlue,
        color: "white",
      },
      }}>
      <SearchOutlined className="search-icon" sx={{ mr: 1 }} />
      Search 
    </Button>
    </CustomBox>
  );
};

export default Search;