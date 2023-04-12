import * as React from 'react';
import { styled, TextField, Button, Paper, Box, Grid, FormControl, InputLabel, Select, Chip, MenuItem } from '@mui/material';
import { useTheme } from '@emotion/react';
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
    const mainBlue = theme.palette.primary.main;
    const darkGray = theme.palette.neutral.dark;
    const h5 = theme.typography.h5bold;
    const h5bold = theme.typography.h5bolder;

    const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
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
    <Box component={Paper} elevation={9} marginLeft={"8%"} marginRight={"8%"} sx={{borderRadius: "20px"}} >
    <CustomBox  sx={{ marginTop:theme.spacing(-6), p: 2.5,
}}>
    <Grid container spacing={2} alignItems="center" color="white">
      <Grid item xs={12} sm={4} >
      <FormControl fullWidth variant="outlined" sx={{borderColor: 'darkGray'}}>
      <InputLabel sx={{ color: darkGray, fontSize: h5}}>Discipline</InputLabel>
      <Select
        style={{borderRadius:"5px"}}
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
              borderColor: 'lightgray'
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor:'lightgray'
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'lightgray'
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
        <InputLabel sx={{ color: darkGray, fontSize: h5}}>Specialty</InputLabel>
        <Select
          style={{borderRadius:"5px"}}
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
          renderValue={(selected) => (
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {selected.map((value) => (
                <Chip key={value} label={value} style={{ marginRight: 5, marginTop:5, backgroundColor: lightBlue }} />
                ))}
            </div>
          )}
          sx={{
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'lightgray'
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor:'lightgray'
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'lightgray'
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
        <InputLabel sx={{ color: darkGray, fontSize: h5}}>Location</InputLabel>
        <Select
          style={{borderRadius:"5px"}}
          multiple
          label="Select a location"
          value={selectedValues3}
          onChange={handleChange3}
          renderValue={(selected) => (
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {selected.map((value) => (
                <Chip key={value} label={value} style={{ marginRight: 5, marginTop:5, backgroundColor: lightBlue }} />
                ))}
            </div>
          )}
          sx={{
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'lightgray'
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor:'lightgray'
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'lightgray'
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
    </CustomBox>
    <CustomBox sx={{paddingLeft: 2.5, paddingRight: 2.5, paddingBottom: 2.5}}>
      <TextField
      id="search-field"
      label="Search"
      variant="outlined"
      fullWidth
      sx={{ color: darkGray, fontSize: h5bold}}
    />
    <Button className="search-button" value="Search" 
    sx={{ 
      padding: "10px 30px",
      border: `1px solid ${mainBlue}`,
      transition: "all 0.4s",
      cursor: "pointer",
      backgroundColor: mainBlue,
      fontSize: h5bold,
      color: white,
      "&:hover": {
        backgroundColor: white,
        color: mainBlue,
      },
      }}>
      <SearchOutlined className="search-icon" sx={{ mr: 1 }} />
      Search 
    </Button>
    </CustomBox>
    </Box>
  );
};

export default Search;