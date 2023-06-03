import * as React from 'react';
import { Typography, Tab, Tabs, Box, Grid, Pagination, Divider } from '@mui/material';
import { useTheme } from '@emotion/react';
import Images from "constants/ImgConstants";
import JobCard from "shared/Job-Cards";
import { useState } from 'react';
import MyJobs from './my-jobs';
import ChangePass from './change-password';
import EditProf from './edit-profile';

export default function Intro() {
  const [value, setValue] = React.useState('one');
  const theme = useTheme();
  const h6bold = theme.typography.h6bold;
  const h3bold = theme.typography.h3bold;
  const h5bold = theme.typography.h6;
  const darkGray = theme.palette.neutral.dark;

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  function TabPanel({ value, index, children }) {
    return (
      <div role="tabpanel" hidden={value !== index}>
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  }

  return (
    <Box sx={{ width: '100%', mt: 10, }}>     
      <Grid container spacing={1}>
        <Grid item xs></Grid>

        <Grid item lg={8.3} md={8.6} sm={9} xs={9.9} >
          <Box sx={{mb: 3}}>  
            <Typography sx={{fontSize: h3bold}}>John Doe</Typography>
            <Typography sx={{mt:1, fontSize: h5bold}}>Discipline RN | Specialty Intensive Care</Typography>
          </Box>
          
          <Tabs
            value={value}
            onChange={handleChange}                     
            sx={{
              '& .MuiTabs-flexContainer': {
                justifyContent: 'flex-start',
              },
              '& .MuiTab-root': {
                fontSize: h6bold,
                fontWeight: 500,
                wordSpacing: 2,
                textTransform: 'none',
                letterSpacing: -0.5
              },
            }}>
            <Tab value="one" label="My Details" />
            <Tab value="two" label="My Jobs" />
            <Tab value="three" label="Edit Profile" />
            <Tab value="four" label="Change Password" />
          </Tabs>

          <Divider sx={{ width: '100%', mb: "12px" }} />

          <Box sx={{marginLeft: "-1.5rem", marginRight:"-1.5rem", mt:3}}>
            <TabPanel value={value} index="one">
              <Typography variant="h6" sx={{ mb: 2 }}> Phone </Typography>
              <Typography variant="h6" sx={{ mb: 2 }}> Email </Typography>
              <Typography variant="h6" sx={{ mb: 2 }}> Job Type </Typography>
              <Typography variant="h6" sx={{ mb: 2 }}> Years of Experience </Typography>
              <Typography variant="h6" sx={{ mb: 2 }}> Professions </Typography>
              <Typography variant="h6" sx={{ mb: 2 }}> Specialty </Typography>
              <Typography variant="h6" sx={{ mb: 2 }}> Date Available </Typography>
              <Typography variant="h6" sx={{ mb: 2 }}> Licenses in States</Typography>
              <Typography variant="h6" sx={{ mb: 2 }}> Preferred Locations </Typography>
              <Box sx={{ p: 2, backgroundColor: '#F5F5F5' }}>
                {/* Content for My Details tab */}
              </Box>
            </TabPanel>

            <TabPanel value={value} index="two">
              {MyJobs()}
            </TabPanel>
            
            <TabPanel value={value} index="three">  
              {EditProf()}      
            </TabPanel>
            
            <TabPanel value={value} index="four">
              {ChangePass()}
            </TabPanel>
          </Box>
        </Grid>

        <Grid item xs></Grid>
      </Grid>
    </Box>
  );
}

