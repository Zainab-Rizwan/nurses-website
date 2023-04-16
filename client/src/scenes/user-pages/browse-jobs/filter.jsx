import * as React from 'react';
import { styled, Button, Paper, Box, Grid, FormControl, Chip, TextField, Autocomplete } from '@mui/material';
import { useTheme } from '@emotion/react';
import { useState } from 'react';
import { SearchOutlined } from '@mui/icons-material';
import { useEffect } from 'react';

const disciplines = ['Monitor Technician', 'Surgical First Assistant', 'Paramedic', 'Histology Technician'];
const specialties = ['CT Technologist', 'Surgical Technologist', 'UltraSound Technologist', 'Cath Lab Technologist'];
const locations = ['Arizona', 'California', 'Indiana', 'Illinois'];

const Search = () => {
    const theme = useTheme();
    const white = theme.palette.background.default;
    const mainBlue = theme.palette.primary.main;
    const darkBlue = theme.palette.primary.dark;
    const darkGray = theme.palette.neutral.dark;
    const h6bold = theme.typography.h6bold;

    const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    marginTop:theme.spacing(-6),
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

  useEffect(() => {
    if (!isSpecialtiesEnabled) {
      setSelectedOptions2([]);
    }
  }, [isSpecialtiesEnabled]);

  return (
    <CustomBox component={Paper} elevation={9} marginLeft={"8%"} marginRight={"8%"} sx={{ p:2.5, color:darkGray, borderRadius: "20px"}}>
    <Grid container spacing={2} alignItems="center" color="white">
      <Grid item xs={12} sm={4} >
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
    <Grid item xs={12} sm={4}>
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
    <Grid item xs={12} sm={4}>
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
    </Grid>
    <Button className="search-button" value="Search" 
    sx={{ 
      padding: "10px 30px",
      border: "none",
      borderColor : darkBlue,
      transition: "all 0.4s",
      cursor: "pointer",
      backgroundColor: mainBlue,
      borderRadius: "4px",
      color: white,
      fontSize: h6bold,
      wordSpacing: "2px",
      "&:hover": {
        backgroundColor: "#103d49",
      },
      }}>
      <SearchOutlined className="search-icon" sx={{ mr: 1 }} />
      Search 
    </Button>
    </CustomBox>
  );
};

export default Search;