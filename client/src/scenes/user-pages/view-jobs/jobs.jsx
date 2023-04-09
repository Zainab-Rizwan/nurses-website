import { Box, styled, Typography, useMediaQuery, Grid, Pagination, PaginationItem } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from '@emotion/react';
import Images from "constants/ImgConstants";
import JobCard from "shared/Job-Cards";
import { useState, useEffect, useRef } from 'react';
import ReactPaginate from 'react-paginate';

const cards = [
  { image: Images.CARD_IMG, title: 'New York City, NY', text: "$3,370/Weekly", textone: "Registered Nurse / Intensive Care Unit", texttwo: "12 Hr Nights",  textthree: "48 Hrs/Week",   textfour: "13 Weeks",},
  { image: Images.CARD_IMG, title: 'Chicago, IL', text: "$3,370/Weekly", textone: "Registered Nurse / Intensive Care Unit", texttwo: "12 Hr Nights",  textthree: "48 Hrs/Week",   textfour: "13 Weeks",},
  { image: Images.CARD_IMG, title: 'Chicago, IL', text: "$3,370/Weekly", textone: "Registered Nurse / Intensive Care Unit", texttwo: "12 Hr Nights",  textthree: "48 Hrs/Week",   textfour: "13 Weeks",},
  { image: Images.CARD_IMG, title: 'Chicago, IL', text: "$3,370/Weekly", textone: "Registered Nurse / Intensive Care Unit", texttwo: "12 Hr Nights",  textthree: "48 Hrs/Week",   textfour: "13 Weeks",},
  { image: Images.CARD_IMG, title: 'Chicago, IL', text: "$3,370/Weekly", textone: "Registered Nurse / Intensive Care Unit", texttwo: "12 Hr Nights",  textthree: "48 Hrs/Week",   textfour: "13 Weeks",},
  { image: Images.CARD_IMG, title: 'New York City, NY', text: "$3,370/Weekly", textone: "Registered Nurse / Intensive Care Unit", texttwo: "12 Hr Nights",  textthree: "48 Hrs/Week",   textfour: "13 Weeks",},
  { image: Images.CARD_IMG, title: 'Chicago, IL', text: "$3,370/Weekly", textone: "Registered Nurse / Intensive Care Unit", texttwo: "12 Hr Nights",  textthree: "48 Hrs/Week",   textfour: "13 Weeks",},
  { image: Images.CARD_IMG, title: 'Chicago, IL', text: "$3,370/Weekly", textone: "Registered Nurse / Intensive Care Unit", texttwo: "12 Hr Nights",  textthree: "48 Hrs/Week",   textfour: "13 Weeks",},
  { image: Images.CARD_IMG, title: 'Chicago, IL', text: "$3,370/Weekly", textone: "Registered Nurse / Intensive Care Unit", texttwo: "12 Hr Nights",  textthree: "48 Hrs/Week",   textfour: "13 Weeks",},
  { image: Images.CARD_IMG, title: 'Chicago, IL', text: "$3,370/Weekly", textone: "Registered Nurse / Intensive Care Unit", texttwo: "12 Hr Nights",  textthree: "48 Hrs/Week",   textfour: "13 Weeks",},
  { image: Images.CARD_IMG, title: 'New York City, NY', text: "$3,370/Weekly", textone: "Registered Nurse / Intensive Care Unit", texttwo: "12 Hr Nights",  textthree: "48 Hrs/Week",   textfour: "13 Weeks",},
  { image: Images.CARD_IMG, title: 'Chicago, IL', text: "$3,370/Weekly", textone: "Registered Nurse / Intensive Care Unit", texttwo: "12 Hr Nights",  textthree: "48 Hrs/Week",   textfour: "13 Weeks",},
  { image: Images.CARD_IMG, title: 'Chicago, IL', text: "$3,370/Weekly", textone: "Registered Nurse / Intensive Care Unit", texttwo: "12 Hr Nights",  textthree: "48 Hrs/Week",   textfour: "13 Weeks",},
  { image: Images.CARD_IMG, title: 'Chicago, IL', text: "$3,370/Weekly", textone: "Registered Nurse / Intensive Care Unit", texttwo: "12 Hr Nights",  textthree: "48 Hrs/Week",   textfour: "13 Weeks",},
  { image: Images.CARD_IMG, title: 'Chicago, IL', text: "$3,370/Weekly", textone: "Registered Nurse / Intensive Care Unit", texttwo: "12 Hr Nights",  textthree: "48 Hrs/Week",   textfour: "13 Weeks",},
];


export default function AllJobs(props){
  const navigate = useNavigate();
  const theme = useTheme();
  const mainBlue = theme.palette.primary.main ;
  const darkGray = theme.palette.neutral.dark;
  const darkBlue = theme.palette.primary.dark;
  const h2 = theme.typography.h2;  
  const h5 = theme.typography.h5;
  const h3bold = theme.typography.h3bold;
  const h5bold = theme.typography.h5bold;
  const h6bold = theme.typography.h6bold;
  const isDesktopScreens = useMediaQuery("(min-width: 1050px)");

  const { initialSlide } = props;
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 12;
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
    width: '85%',
  }));

  return (
    <Box sx={{ marginBottom: theme.spacing(8), marginTop: theme.spacing(6)}}>
    <Box sx={{  marginLeft: "10%", marginRight:"10%" }}>
      <Typography
        sx={{ 
          fontSize: isDesktopScreens ? h2 : h3bold, 
          color: darkBlue, 
          my: 1,
        }}>
        Permanent Jobs
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <Typography
          sx={{
            fontSize: h5,
            color: darkGray,
            my: 1,
            mt: 0
          }}
        >
          See the top paying permanent jobs.
        </Typography>
        <Typography
          sx={{ 
            fontSize: h6bold, 
            color: mainBlue,
            mt: -0.75
          }}>
          Showing {displayedCards.length} out of {cards.length} jobs
        </Typography>      
      </Box>
    </Box>

    <Box>         
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
              <Grid item xs={12} sm={6} md={4} key={index}>
                <JobCard job={job} />
              </Grid>
            ))}
          </Grid>
        </GuidesBox>
      </Box>
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

