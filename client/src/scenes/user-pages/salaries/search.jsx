import * as React from 'react';
import { styled, Box, Grid, FormControl, Chip, Autocomplete, TextField } from '@mui/material';
import { useTheme } from '@emotion/react';
import { useState } from 'react';
import { useEffect } from 'react';

const disciplines = ['Monitor Technician', 'Surgical First Assistant', 'Paramedic', 'Histology Technician'];
const specialties = ['CT Technologist', 'Surgical Technologist', 'UltraSound Technologist', 'Cath Lab Technologist'];
const locations = ['Arizona', 'California', 'Indiana', 'Illinois'];
const jobTypes = ['Part Time', 'Full Time']

const Search = () => {
    const theme = useTheme();
    const white = theme.palette.background.default;
    const darkGray = theme.palette.neutral.dark;

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

  const [selectedOptions1, setSelectedOptions1] = useState([]);
  const [selectedOptions2, setSelectedOptions2] = useState([]);
  const [selectedOptions3, setSelectedOptions3] = useState([]);
  const [selectedOptions4, setSelectedOptions4] = useState([]);
  const [isSpecialtiesEnabled, setIsSpecialtiesEnabled] = useState(false);

  const handleOptionSelect1 = (event, values) => {
    setSelectedOptions1(values);
    setIsSpecialtiesEnabled(values.length > 0);
  };

  const handleOptionSelect2 = (event, values) => {
    setSelectedOptions2(values);
  };
    
  const handleOptionSelect3 = (event, values) => {
    setSelectedOptions3(values);
  };

  const handleOptionSelect4 = (event, values) => {
    setSelectedOptions4(values);
  };  

  useEffect(() => {
    if (!isSpecialtiesEnabled) {
      setSelectedOptions2([]);
    }
  }, [isSpecialtiesEnabled]);


  return (
    <CustomBox marginLeft={"10%"} marginRight={"10%"} sx={{color:darkGray}}>
    <Grid container spacing={2} alignItems="center" color="white">
      <Grid item xs={12} sm={3} >
      <FormControl fullWidth variant="outlined" sx={{borderColor: 'darkGray',  position: "relative",}}>
      <Autocomplete
          ListboxProps={{
            style: { maxHeight: '200px' },
          }}
          multiple
          options={disciplines}
          value={selectedOptions1}
          onChange={handleOptionSelect1}
          limitTags={1}
          getLimitTagsText={(more) => `+${more}`}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
        <Chip
          key={option}
          label={option}
          sx={{ borderRadius:"2px",  }}
          onDelete={() => {
            const newSelectedOptions1 = [...selectedOptions1];
            newSelectedOptions1.splice(index, 1);
            setSelectedOptions1(newSelectedOptions1);
          }}
          {...getTagProps({ index })}
        />
      ))
    }
    renderInput={(params) => (
      <TextField
        {...params}
        variant="outlined"
        label="Disciplines"
        InputLabelProps={{
          style: { color: darkGray, fontWeight: 500, fontSize:"16px", maxHeight: "20px" }
        }}
      />
    )}
  />
      </FormControl>

    </Grid>
    <Grid item xs={12} sm={3}>
    <FormControl fullWidth  variant="outlined" sx={{borderColor: 'darkGray',  position: "relative", }}>
      <Autocomplete
          ListboxProps={{
            style: { maxHeight: '200px' },
          }}
          multiple
          options={specialties}
          value={selectedOptions2}
          onChange={handleOptionSelect2}
          disabled={!isSpecialtiesEnabled}
          limitTags={1}
          getLimitTagsText={(more) => `+${more}`}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip
              sx={{ borderRadius:"2px"  }}
                key={option}
                label={option}
                onDelete={() => {
                  const newSelectedOptions2 = [...selectedOptions2];
                  newSelectedOptions2.splice(index, 1);
                  setSelectedOptions2(newSelectedOptions2);
                }}
                {...getTagProps({ index })}
              />
            ))
          }
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              label="Specialties"
              InputLabelProps={{
                style: { color: darkGray, fontWeight: 500, fontSize:"16px" }
              }}
            />
          )}
        />
      </FormControl>
    </Grid>


    <Grid item xs={12} sm={3}>
    <FormControl fullWidth  variant="outlined" sx={{borderColor: 'darkGray',  position: "relative", }}>
      <Autocomplete
      ListboxProps={{
        style: { maxHeight: '200px' },
      }}
      multiple
      options={locations}
      value={selectedOptions3}
      limitTags={1}
      getLimitTagsText={(more) => `+${more}`}
      onChange={handleOptionSelect3}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip
          sx={{ borderRadius:"2px"  }}
            key={option}
            label={option}
            onDelete={() => {
              const newSelectedOptions3 = [...selectedOptions3];
              newSelectedOptions3.splice(index, 1);
              setSelectedOptions3(newSelectedOptions3);
            }}
            {...getTagProps({ index })}
          />
        ))
      }
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label="Location"
          InputLabelProps={{
            style: { color: darkGray, fontWeight: 500, fontSize:"16px" }
          }}
        />
      )}
    />
      </FormControl>
    </Grid>
    <Grid item xs={12} sm={3}>
    <FormControl fullWidth  variant="outlined" sx={{borderColor: 'darkGray',  position: "relative", }}>
      <Autocomplete
      ListboxProps={{
        style: { maxHeight: '200px' },
      }}
      multiple
      options={jobTypes}
      value={selectedOptions4}
      limitTags={1}
      getLimitTagsText={(more) => `+${more}`}
      onChange={handleOptionSelect4}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip
          sx={{ borderRadius:"2px"  }}
            key={option}
            label={option}
            onDelete={() => {
              const newSelectedOptions4 = [...selectedOptions4];
              newSelectedOptions4.splice(index, 1);
              setSelectedOptions4(newSelectedOptions4);
            }}
            {...getTagProps({ index })}
          />
        ))
      }
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label="Job Type"
          InputLabelProps={{
            style: { color: darkGray, fontWeight: 500, fontSize:"16px" }
          }}
        />
      )}
    />
      </FormControl>
    </Grid>
    </Grid>
    </CustomBox>
  );
};

export default Search;