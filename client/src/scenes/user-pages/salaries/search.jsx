import * as React from 'react';
import { styled, Box, Grid, FormControl, InputLabel, Select, Chip, MenuItem } from '@mui/material';
import { useTheme } from '@emotion/react';
import { useState } from 'react';

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

  const jobTypes = [
    {value: 'Part Time', },
    {value: 'Full Time',},
  ];

    const theme = useTheme();
    const white = theme.palette.background.default;
    const lightBlue = theme.palette.neutral.light;
    const darkGray = theme.palette.neutral.dark;
    const h5 = theme.typography.h5bold;

    const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    borderRadius: "20px",
    marginTop:theme.spacing(8),
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
    const [selectedValues4, setSelectedValues4, ] = useState([]);
  
  
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

    const handleChange4 = (event) => {
        const { value } = event.target;
        setSelectedValues4(value);
      };
  

  return (
    <CustomBox marginLeft={"10%"} marginRight={"10%"} sx={{color:darkGray}}>
    <Grid container spacing={2} alignItems="center" color="white">
      <Grid item xs={12} sm={3} >
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
    <Grid item xs={12} sm={3}>
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
    <Grid item xs={12} sm={3}>
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
    <Grid item xs={12} sm={3}>
      <FormControl fullWidth>
        <InputLabel sx={{ color: darkGray, fontSize: h5}}>Job Type</InputLabel>
        <Select
          style={{borderRadius:"5px"}}
          multiple
          label="Select a job type"
          value={selectedValues4}
          onChange={handleChange4}
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
          {jobTypes.map((jobTypes) => (
            <MenuItem key={jobTypes.value} value={jobTypes.value}>
              {jobTypes.value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
    </Grid>
    </CustomBox>
  );
};

export default Search;