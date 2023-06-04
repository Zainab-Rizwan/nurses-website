import * as React from 'react';
import { Typography, Box, Grid, Button, TextField, FormControl, Chip, Autocomplete } from '@mui/material';
import { useTheme } from '@emotion/react';
import { useState } from 'react';

const disciplines = ['Monitor Technician', 'Surgical First Assistant', 'Paramedic', 'Histology Technician'];
const locations = ['Arizona', 'California', 'Indiana', 'Illinois'];

const defaultValues = {
    firstName: 'John',
    lastName: 'Doe',
    phoneNumber: '0333-333-3333',
    jobType: 'Permanent',
    yearsOfExperience: '5',
    professions: ['Monitor Technician', 'Surgical First Assistant'],
    specialty: 'Intensive Care',
    dateAvailable: '2023-06-05',
    licenses: 'Sample License',
    preferredLocations: ['Arizona', 'California']
  };

export default function EditProf() {
  const theme = useTheme();
  const h6bold = theme.typography.h6bold;
  const h4bold = theme.typography.h4bold;
  const mainBlue = theme.palette.primary.main;
  const white = theme.palette.background.default;
  const darkBlue = theme.palette.primary.dark;
  const darkGray = theme.palette.neutral.dark;
  const lightgray = theme.palette.neutral.dark;
  const lightGray = theme.palette.background.alt;

  const [selectedOptions1, setSelectedOptions1] = useState(defaultValues.professions);
  const [selectedOptions2, setSelectedOptions2] = useState(defaultValues.preferredLocations);

  const handleOptionSelect1 = (event, values) => {
    setSelectedOptions1(values);
  };

  const handleOptionSelect2 = (event, values) => {
    setSelectedOptions2(values);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      password: data.get('password'),
      npassword: data.get('npassword'),
      cnpassword: data.get('cnpassword')
    });
  };

  return (
    <Box sx={{mt: "-0.5rem"}}>
        <Typography sx={{fontSize: h4bold}}>Edit Profile</Typography>
        <Typography sx={{fontSize: h6bold, color: "#585858", mt: 0.5}}>Update and personalize your profile information to reflect your latest achievements and interests</Typography>
        <Grid sx={{mt:"2rem", ml:0, mr:0}}>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{width:"100%"}}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <TextField
                margin="normal"
                autoWidth
                id="fname"
                required
                label="First Name"
                name="fname"
                sx={{ minWidth: "49%" }}
                defaultValue={defaultValues.firstName}
                />
                <TextField
                margin="normal"
                id="lname"
                label="Last Name"
                required
                name="lname"
                defaultValue={defaultValues.lastName}
                sx= {{ marginLeft: "1.6%", minWidth: "49%"}}/>
            </div>
            <TextField
                margin="normal"
                fullWidth
                required
                id="phone"
                label="Phone Number"
                defaultValue={defaultValues.phoneNumber}
                name="phone"
                autoComplete="tel"
                type="tel"/>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <TextField
                margin="normal"
                required
                autoWidth
                id="job-type"
                label="Job Type"
                defaultValue={defaultValues.jobType}
                name="job-type"
                sx= {{ minWidth: "49%"}}
                />
                <TextField
                margin="normal"
                id="years"
                required
                type="Number"
                label="Years of Experience"
                name="years"
                defaultValue={defaultValues.yearsOfExperience}
                sx= {{ marginLeft: "1.6%", minWidth: "49%"}}
                />
            </div>
            <FormControl fullWidth variant="outlined" sx={{ borderColor: 'darkGray', position: "relative", mt: 1 }}>
            <Autocomplete
              ListboxProps={{
                style: { maxHeight: '200px' },
              }}
              multiple
              options={disciplines}
              required
              value={selectedOptions1}
              defaultValue={defaultValues.professions}
              onChange={handleOptionSelect1}
              limitTags={2}
              getLimitTagsText={(more) => `+${more}`}
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip
                    key={option}
                    label={option}
                    sx={{ borderRadius: "2px" }}
                    onDelete={() => {
                      const newSelectedOptions1 = [...selectedOptions1];
                      newSelectedOptions1.splice(index, 1);
                      setSelectedOptions1(newSelectedOptions1);
                    }}
                    {...getTagProps({ index })}/>)) }
                renderInput={(params) => (
                <TextField
                {...params}
                variant="outlined"
                label="Professions"
                InputLabelProps={{
                    style: { color: lightgray, fontWeight: 300, fontSize: "14px", maxHeight: "20px" }
                }}/>
            )}/>
            </FormControl>    
                <TextField
                margin="normal"
                fullWidth
                required
                id="specialty"
                label="Specialty"
                defaultValue={defaultValues.specialty}
                name="specialty"
                />     
                <TextField
                margin="normal"
                fullWidth
                required
                id="date"
                label="Date Available"
                name="date"
                type="date"
                InputLabelProps={{
                    shrink: true,
                }}
                sx={{ mt: 1, mb: 0 }}
                defaultValue={defaultValues.dateAvailable}
                />
                <TextField
                margin="normal"
                fullWidth
                required
                id="licenses"
                defaultValue={defaultValues.licenses}
                label="Licenses in States"
                name="specialty"
                /> 
                <FormControl fullWidth  variant="outlined" sx={{borderColor: 'darkGray',  position: "relative", mt: 1 }}>
                <Autocomplete
                ListboxProps={{
                    style: { maxHeight: '200px' },
                }}
                multiple
                options={locations}
                value={selectedOptions2}
                required
                limitTags={3}
                getLimitTagsText={(more) => `+${more}`}
                onChange={handleOptionSelect2}
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
                    label="Preferred Location"
                    InputLabelProps={{
                        style: { color: lightgray, fontWeight: 300, fontSize:"14px" }
                    }}
                    />
                )}
                />
                </FormControl>
            </Box>
        </Grid>

        <Grid container justifyContent="space-between" item sx={{ mt: 4 }}>
            <Button
              variant ="contained"
              disableTouchRipple={false}
              sx={{
                padding:" 10px 30px",
                border: "none",
                mt: 2,
                mb: 4,
                backgroundColor: lightGray,
                borderColor: lightGray,
                color: darkGray,
                fontWeight: 700,
                transition: "all 0.4s",
                fontSize: h6bold,
                borderRadius: "4px",
                cursor: "pointer",
                wordSpacing: "2px",
                "&:hover": {
                  backgroundColor: lightGray,
                },
              }}
            >         
              Cancel Changes
            </Button> 

            <Button
                type="submit"
                variant="contained"
                sx={{
                    padding: '10px 30px',
                    border: 'none',
                    mt: 2,
                    mb: 4,
                    borderColor: darkBlue,
                    transition: 'all 0.4s',
                    cursor: 'pointer',
                    backgroundColor: mainBlue,
                    borderRadius: '4px',
                    color: white,
                    fontSize: 'h6',
                    wordSpacing: '2px',
                    '&:hover': {
                    backgroundColor: '#103d49',
                },}}>
                Save Changes
            </Button>
        </Grid>
    </Box>
  );
}

