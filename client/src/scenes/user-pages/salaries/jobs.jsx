import { Box, styled, Typography, useMediaQuery, Grid} from "@mui/material";
import React from "react";
import { useTheme } from '@emotion/react';
import Images from "constants/ImgConstants";
import JobCard from "shared/Job-Cards";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect, useRef } from 'react';
import './index.scss';


const cards = [
  { image: Images.CARD_IMG, title: 'New York City, NY', text: "$3,370/Weekly", textone: "Registered Nurse / Intensive Care Unit", texttwo: "12 Hr Nights",  textthree: "48 Hrs/Week",   textfour: "13 Weeks",},
  { image: Images.CARD_IMG, title: 'Chicago, IL', text: "$3,370/Weekly", textone: "Registered Nurse / Intensive Care Unit", texttwo: "12 Hr Nights",  textthree: "48 Hrs/Week",   textfour: "13 Weeks",},
  { image: Images.CARD_IMG, title: 'Chicago, IL', text: "$3,370/Weekly", textone: "Registered Nurse / Intensive Care Unit", texttwo: "12 Hr Nights",  textthree: "48 Hrs/Week",   textfour: "13 Weeks",},
  { image: Images.CARD_IMG, title: 'Chicago, IL', text: "$3,370/Weekly", textone: "Registered Nurse / Intensive Care Unit", texttwo: "12 Hr Nights",  textthree: "48 Hrs/Week",   textfour: "13 Weeks",},
  { image: Images.CARD_IMG, title: 'Chicago, IL', text: "$3,370/Weekly", textone: "Registered Nurse / Intensive Care Unit", texttwo: "12 Hr Nights",  textthree: "48 Hrs/Week",   textfour: "13 Weeks",},
];


export default function TopJobs(props){
  const { initialSlide } = props;
  const theme = useTheme();
  const mainBlue = theme.palette.primary.main ;
  const darkBlue = theme.palette.primary.dark;
  const h3bold = theme.typography.h3bold;
  const h6bold = theme.typography.h6bold;
  const isDesktopScreens = useMediaQuery("(min-width: 1050px)");


  const GuidesBox = styled(Box)(({ theme }) => ({
    justifyContent: "center",
    alignItems:"center",
    width: "80%",
    marginTop: theme.spacing(1),
  }));

  const [hasSetPosition, setHasSetPosition] = useState(false);
  const slider = useRef();

  useEffect(() => {
    if (slider.current && !hasSetPosition) {
      slider.current.slickGoTo(initialSlide);
      setHasSetPosition(true);
    }
  }, [initialSlide, hasSetPosition, slider]);


  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: isDesktopScreens ? 3 : 1,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
    {
      breakpoint: 1250,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  };


  return (
    <Box>
      <Box sx={{ my: theme.spacing(8), marginTop: theme.spacing(6) }}>         
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginLeft: "10%", marginRight:"10%" }}>
            <Typography
              sx={{ 
                fontSize: h3bold,
                color: darkBlue, 
              }}>
              Top Jobs
            </Typography>
            <Typography
              component="a"
              href="/browse-jobs"
              sx={{ 
                fontSize: h6bold, 
                color: mainBlue,
                marginLeft: '1rem',
              }}>
              View all jobs
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
          <Slider ref={slider}  {...sliderSettings} sx={{ mb: 6}}>
              {cards.map((job, index) => (
              <Grid item key={index}>
                <JobCard job={job} />
              </Grid>
            ))}
            </Slider>
          </GuidesBox>
        </Box>
      </Box>
    </Box>  
  );
};

