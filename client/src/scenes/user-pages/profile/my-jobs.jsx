import * as React from 'react';
import { Typography, Box, Grid,Pagination } from '@mui/material';
import { useTheme } from '@emotion/react';
import { useState } from 'react';
import Images from 'constants/ImgConstants';
import JobCard from "shared/Job-Cards";

const cards = [
    { image: Images.CARD_IMG, title: 'New York City, NY', text: "$3,370/Weekly", textone: "Registered Nurse / Intensive Care Unit", texttwo: "12 Hr Nights", textthree: "48 Hrs/Week", textfour: "13 Weeks", exclusive: true, travel: false},
    { image: Images.CARD_IMG, title: 'Chicago, IL', text: "$3,370/Weekly", textone: "Registered Nurse / Intensive Care Unit", texttwo: "12 Hr Nights", textthree: "48 Hrs/Week", textfour: "13 Weeks", exclusive: true, travel: true},
    { image: Images.CARD_IMG, title: 'Chicago, IL', text: "$3,370/Weekly", textone: "Registered Nurse / Intensive Care Unit", texttwo: "12 Hr Nights", textthree: "48 Hrs/Week", textfour: "13 Weeks", exclusive: false, travel: false},
    { image: Images.CARD_IMG, title: 'Chicago, IL', text: "$3,370/Weekly", textone: "Registered Nurse / Intensive Care Unit", texttwo: "12 Hr Nights", textthree: "48 Hrs/Week", textfour: "13 Weeks", exclusive: false, travel: true},
    { image: Images.CARD_IMG, title: 'Chicago, IL', text: "$3,370/Weekly", textone: "Registered Nurse / Intensive Care Unit", texttwo: "12 Hr Nights", textthree: "48 Hrs/Week", textfour: "13 Weeks", exclusive: false, travel: true},
    { image: Images.CARD_IMG, title: 'Chicago, IL', text: "$3,370/Weekly", textone: "Registered Nurse / Intensive Care Unit", texttwo: "12 Hr Nights", textthree: "48 Hrs/Week", textfour: "13 Weeks", exclusive: false, travel: false},
    { image: Images.CARD_IMG, title: 'Chicago, IL', text: "$3,370/Weekly", textone: "Registered Nurse / Intensive Care Unit", texttwo: "12 Hr Nights", textthree: "48 Hrs/Week", textfour: "13 Weeks", exclusive: true, travel: true},
  ];

export default function MyJobs() {
  const theme = useTheme();
  const h6bold = theme.typography.h6bold;
  const darkGray = theme.palette.neutral.dark;

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
     <Box>
        <Typography
            sx={{ 
            fontSize: h6bold, 
            color: darkGray,
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
    </Box>
  );
}
