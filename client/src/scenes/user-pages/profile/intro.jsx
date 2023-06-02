import * as React from 'react';
import { Typography, Tab, Tabs, Box, Grid, Pagination, Button, TextField, Divider } from '@mui/material';
import { useTheme } from '@emotion/react';
import Images from "constants/ImgConstants";
import JobCard from "shared/Job-Cards";
import { useState } from 'react';
import { IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";

const cards = [
  { image: Images.CARD_IMG, title: 'New York City, NY', text: "$3,370/Weekly", textone: "Registered Nurse / Intensive Care Unit", texttwo: "12 Hr Nights", textthree: "48 Hrs/Week", textfour: "13 Weeks", exclusive: true, travel: false},
  { image: Images.CARD_IMG, title: 'Chicago, IL', text: "$3,370/Weekly", textone: "Registered Nurse / Intensive Care Unit", texttwo: "12 Hr Nights", textthree: "48 Hrs/Week", textfour: "13 Weeks", exclusive: true, travel: true},
  { image: Images.CARD_IMG, title: 'Chicago, IL', text: "$3,370/Weekly", textone: "Registered Nurse / Intensive Care Unit", texttwo: "12 Hr Nights", textthree: "48 Hrs/Week", textfour: "13 Weeks", exclusive: false, travel: false},
  { image: Images.CARD_IMG, title: 'Chicago, IL', text: "$3,370/Weekly", textone: "Registered Nurse / Intensive Care Unit", texttwo: "12 Hr Nights", textthree: "48 Hrs/Week", textfour: "13 Weeks", exclusive: false, travel: true},
  { image: Images.CARD_IMG, title: 'Chicago, IL', text: "$3,370/Weekly", textone: "Registered Nurse / Intensive Care Unit", texttwo: "12 Hr Nights", textthree: "48 Hrs/Week", textfour: "13 Weeks", exclusive: false, travel: true},
  { image: Images.CARD_IMG, title: 'Chicago, IL', text: "$3,370/Weekly", textone: "Registered Nurse / Intensive Care Unit", texttwo: "12 Hr Nights", textthree: "48 Hrs/Week", textfour: "13 Weeks", exclusive: false, travel: false},
  { image: Images.CARD_IMG, title: 'Chicago, IL', text: "$3,370/Weekly", textone: "Registered Nurse / Intensive Care Unit", texttwo: "12 Hr Nights", textthree: "48 Hrs/Week", textfour: "13 Weeks", exclusive: true, travel: true},
];

export default function Intro() {
  const [value, setValue] = React.useState('one');
  const theme = useTheme();
  const h6bold = theme.typography.h6bold;
  const h3bold = theme.typography.h3bold;
  const h4bold = theme.typography.h4bold;
  const h5bold = theme.typography.h6;
  const mainBlue = theme.palette.neutral.dark;
  const white = theme.palette.background.default;
  const darkBlue = theme.palette.primary.dark;
  const darkGray = theme.palette.neutral.light;

  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const navigate = useNavigate();

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

  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 9;
  const totalPages = Math.ceil(cards.length / cardsPerPage);

  const handleChanges = (event, value) => {
    setCurrentPage(value - 1);
  };

  const startCard = currentPage * cardsPerPage;
  const endCard = startCard + cardsPerPage;
  const displayedCards = cards.slice(startCard, endCard);

  return (
    <Box sx={{ width: '100%', mt: 10, }}>     
      <Grid container spacing={1}>
        <Grid item xs></Grid>

        <Grid item lg={8.3} md={8.6} sm={9} xs={9.9} >
          <Box sx={{mb: 6}}>  
            <Typography sx={{fontSize: h3bold}}>John Doe</Typography>
            <Typography sx={{mt:1, fontSize: h5bold}}>Discipline RN | Specialty Intensive Care</Typography>
          </Box>

          <Divider sx={{ width: '100%', mt:"-1rem", mb: "12px" }} />
          
          <Tabs
            value={value}
            onChange={handleChange} 
                      
            sx={{
              '& .MuiTabs-flexContainer': {
                justifyContent: 'flex-start',
              },
              '& .MuiTab-root': {
                fontSize: h6bold,
                fontWeight: 700,
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
            <Box>
              <Typography
                sx={{ 
                  fontSize: h6bold, 
                  color: mainBlue,
                  mt: -0.75
                }}>
                Showing {displayedCards.length} out of {cards.length} jobs
              </Typography>
                
              <Grid container spacing={0.1}>
                {displayedCards.map((job, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <JobCard job={job} exclusive={job.exclusive} travel={job.travel} />
                  </Grid>
                ))}
                </Grid>
              
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <Pagination 
                  count={totalPages} 
                  page={currentPage + 1} 
                  onChange={handleChanges} 
                  color="primary" 
                  showFirstButton 
                  showLastButton/>
              </Box>
            </Box>
          </TabPanel>
          
          <TabPanel value={value} index="three">
           
          </TabPanel>
          
          <TabPanel value={value} index="four">
            <Box>
              <Typography sx={{fontSize: h4bold}}>Password</Typography>
              <Typography sx={{fontSize: h4bold, color: darkGray}}>Please enter your current password to chnage your password.</Typography>
              <Divider sx={{ width: '100%', mb: "12px" }} />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                id="password"
                autoComplete="current-password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Divider sx={{ width: '100%', mb: "12px" }} />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                id="password"
                autoComplete="current-password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Divider sx={{ width: '100%', mb: "12px" }} />
              <TextField
                margin="normal"
                required
                fullWidth
                name="cpassword"
                label="Confirm Password"
                type={showConfirmPassword ? 'text' : 'password'}
                id="cpassword"
                autoComplete="current-password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        edge="end"
                      >
                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Divider sx={{ width: '100%', mt:"-1rem", mb: "12px" }} />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  padding: "10px 30px",
                    border: "none",
                    mt: 1,
                    mb: 4, 
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
                }}
              >
                Reset Password
              </Button>
            </Box>
          </TabPanel>

        </Grid>

        <Grid item xs></Grid>
      </Grid>
    </Box>
  );
}

