import { Box, styled, Typography, useMediaQuery, Grid, Pagination} from "@mui/material";
import React from "react";
import { useTheme } from '@emotion/react';
import Images from "constants/ImgConstants";
import FacilityCard from "shared/Facility-Cards";
import { useState } from 'react';

const cards = [
  { image: Images.CARD_IMG, title: 'New York City, NY', text: "$3,370/Weekly", textone: "Registered Nurse / Intensive Care Unit", texttwo: "12 Hr Nights", textthree: "48 Hrs/Week", textfour: "13 Weeks", exclusive: true, travel: false},
  { image: Images.CARD_IMG, title: 'Chicago, IL', text: "$3,370/Weekly", textone: "Registered Nurse / Intensive Care Unit", texttwo: "12 Hr Nights", textthree: "48 Hrs/Week", textfour: "13 Weeks", exclusive: true, travel: true},
  { image: Images.CARD_IMG, title: 'Chicago, IL', text: "$3,370/Weekly", textone: "Registered Nurse / Intensive Care Unit", texttwo: "12 Hr Nights", textthree: "48 Hrs/Week", textfour: "13 Weeks", exclusive: false, travel: false},
  { image: Images.CARD_IMG, title: 'Chicago, IL', text: "$3,370/Weekly", textone: "Registered Nurse / Intensive Care Unit", texttwo: "12 Hr Nights", textthree: "48 Hrs/Week", textfour: "13 Weeks", exclusive: false, travel: true},
  { image: Images.CARD_IMG, title: 'Chicago, IL', text: "$3,370/Weekly", textone: "Registered Nurse / Intensive Care Unit", texttwo: "12 Hr Nights", textthree: "48 Hrs/Week", textfour: "13 Weeks", exclusive: true, travel: false},
  { image: Images.CARD_IMG, title: 'Chicago, IL', text: "$3,370/Weekly", textone: "Registered Nurse / Intensive Care Unit", texttwo: "12 Hr Nights", textthree: "48 Hrs/Week", textfour: "13 Weeks", exclusive: true, travel: false},
  { image: Images.CARD_IMG, title: 'Chicago, IL', text: "$3,370/Weekly", textone: "Registered Nurse / Intensive Care Unit", texttwo: "12 Hr Nights", textthree: "48 Hrs/Week", textfour: "13 Weeks", exclusive: false, travel: true},
  { image: Images.CARD_IMG, title: 'Chicago, IL', text: "$3,370/Weekly", textone: "Registered Nurse / Intensive Care Unit", texttwo: "12 Hr Nights", textthree: "48 Hrs/Week", textfour: "13 Weeks", exclusive: false, travel: false},
  { image: Images.CARD_IMG, title: 'Chicago, IL', text: "$3,370/Weekly", textone: "Registered Nurse / Intensive Care Unit", texttwo: "12 Hr Nights", textthree: "48 Hrs/Week", textfour: "13 Weeks", exclusive: true, travel: true},
];

export default function FacilityCards(props){
  const theme = useTheme();
  const mainBlue = theme.palette.primary.main ;
  const darkGray = theme.palette.neutral.dark;
  const darkBlue = theme.palette.primary.dark;
  const h2 = theme.typography.h2;  
  const h5 = theme.typography.h5;
  const h4 = theme.typography.h4bold;
  const h6bold = theme.typography.h6bold;
  const isDesktopScreens = useMediaQuery("(min-width: 1050px)");

  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 6;
  const totalPages = Math.ceil(cards.length / cardsPerPage);

  const handleChange = (event, value) => {
    setCurrentPage(value - 1);
  };

  const startCard = currentPage * cardsPerPage;
  const endCard = startCard + cardsPerPage;
  const displayedCards = cards.slice(startCard, endCard);

  const GuidesBox = styled(Box)(({ theme }) => ({
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  }));

  return (
    <Box sx={{ marginTop: theme.spacing(4)}}>
    <Box>
      <Typography
        sx={{ 
          fontSize: h4, 
          color: darkBlue, 
        }}>
        {cards.length} Facilities
      </Typography>
    </Box>

      <Box    
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "2em",    
        }}>
        <GuidesBox>
          <Grid container spacing={0.1}>
          {displayedCards.map((job, index) => (
            <Grid item xs={12} sm={12} md={12} key={index}>
              <FacilityCard job={job} exclusive={job.exclusive} travel={job.travel} />
            </Grid>
          ))}
          </Grid>
        </GuidesBox>
      </Box>

    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Pagination 
          count={totalPages} 
          page={currentPage + 1} 
          onChange={handleChange} 
          color="primary" 
          showFirstButton 
          showLastButton 
        />
      </Box>

</Box>
);
};

