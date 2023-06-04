import * as React from 'react';
import { Typography, Box, Grid,Pagination } from '@mui/material';
import { useTheme } from '@emotion/react';
import { useState } from 'react';
import Images from 'constants/ImgConstants';
import UserJobsCard from 'shared/User-Jobs-Cards';

  const cards = [
    { image: Images.CARD_IMG, title: 'Registered Nurse / Intensive Care Unit', location: "New York City, NY ", pay:  "$3,370/Weekly", shifts: "12 Hr Nights", timings: "48 Hrs/Week", duration: "13 Weeks", exclusive: true, travel: true, applicationstat: "In Progress"},
    { image: Images.CARD_IMG, title: 'Registered Nurse / Intensive Care Unit', location: "Chicago, IL ", pay:  "$3,370/Weekly", shifts: "12 Hr Nights", timings: "48 Hrs/Week", duration: "13 Weeks", exclusive: true, travel: false, applicationstat: "Rejected"},
    { image: Images.CARD_IMG, title: 'Registered Nurse / Intensive Care Unit', location: "New York City, NY ", pay:  "$3,370/Weekly", shifts: "12 Hr Nights", timings: "48 Hrs/Week", duration: "13 Weeks", exclusive: false, travel: true, applicationstat: "Accepted"},
    { image: Images.CARD_IMG, title: 'Registered Nurse / Intensive Care Unit', location: "Chicago, IL ", pay:  "$3,370/Weekly", shifts: "12 Hr Nights", timings: "48 Hrs/Week",  duration: "13 Weeks", exclusive: false, travel: false, applicationstat: "In Progress"},
    { image: Images.CARD_IMG, title: 'Registered Nurse / Intensive Care Unit', location: "Chicago, IL ", pay:  "$3,370/Weekly", shifts: "12 Hr Nights", timings: "48 Hrs/Week", duration: "13 Weeks", exclusive: true, travel: false, applicationstat: "Rejected"},
    { image: Images.CARD_IMG, title: 'Registered Nurse / Intensive Care Unit', location: "New York City, NY ", pay:  "$3,370/Weekly", shifts: "12 Hr Nights", timings: "48 Hrs/Week", duration: "13 Weeks", exclusive: false, travel: true, applicationstat: "Accepted"},
    { image: Images.CARD_IMG, title: 'Registered Nurse / Intensive Care Unit', location: "Chicago, IL ", pay:  "$3,370/Weekly", shifts: "12 Hr Nights", timings: "48 Hrs/Week", duration: "13 Weeks", exclusive: false, travel: true, applicationstat: "In Progress"},
  ];

export default function MyJobs() {
  const theme = useTheme();
  const h6bold = theme.typography.h6bold;
  const h4bold = theme.typography.h4bold;

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
    <Box sx={{ mt: "-0.5rem" }}>
      <Typography sx={{fontSize: h4bold}}>Jobs You Have Applied For</Typography>        
     <Box>
        <Typography
            sx={{ 
            fontSize: h6bold, 
            color: "#585858",
            mt:0.5
            }}>
            Showing {displayedCards.length} out of {cards.length} jobs
        </Typography>
            
        <Grid container spacing={0.1} sx={{mt: 3}}>
        {displayedCards.map((userjobs, index) => (
          <Grid item xs={12} key={index}>
            <UserJobsCard userjobs={userjobs}/>
          </Grid>
        ))}
        </Grid>
        
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
            <Pagination 
            count={totalPages} 
            page={currentPage + 1} 
            onChange={handleChanges} 
            color="primary" 
            showFirstButton 
            showLastButton/>
        </Box>
        </Box>
    </Box>
  );
}
