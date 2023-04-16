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
  { image: Images.CARD_IMG, title: 'New York City, NY', text: "$3,370/Weekly", textone: "Registered Nurse / Intensive Care Unit", texttwo: "12 Hr Nights", textthree: "48 Hrs/Week", textfour: "13 Weeks", exclusive: false, travel: false},
  { image: Images.CARD_IMG, title: 'Chicago, IL', text: "$3,370/Weekly", textone: "Registered Nurse / Intensive Care Unit", texttwo: "12 Hr Nights", textthree: "48 Hrs/Week", textfour: "13 Weeks", exclusive: true, travel: true},
  { image: Images.CARD_IMG, title: 'Chicago, IL', text: "$3,370/Weekly", textone: "Registered Nurse / Intensive Care Unit", texttwo: "12 Hr Nights", textthree: "48 Hrs/Week", textfour: "13 Weeks", exclusive: false, travel: true},
  { image: Images.CARD_IMG, title: 'Chicago, IL', text: "$3,370/Weekly", textone: "Registered Nurse / Intensive Care Unit", texttwo: "12 Hr Nights", textthree: "48 Hrs/Week", textfour: "13 Weeks", exclusive: false, travel: false},
  { image: Images.CARD_IMG, title: 'Chicago, IL', text: "$3,370/Weekly", textone: "Registered Nurse / Intensive Care Unit", texttwo: "12 Hr Nights", textthree: "48 Hrs/Week", textfour: "13 Weeks", exclusive: true, travel: true},
];

export default function Carousel(props){
  const { initialSlide } = props;

  const theme = useTheme();
  const mainBlue = theme.palette.primary.main ;
  const darkGray = theme.palette.neutral.dark;
  const darkBlue = theme.palette.primary.dark;
  const h2 = theme.typography.h2;  
  const h5 = theme.typography.h5;
  const h3bold = theme.typography.h3bold;
  const h6bold = theme.typography.h6bold;
  const isDesktopScreens = useMediaQuery("(min-width: 1050px)");


  const GuidesBox = styled(Box)(({ theme }) => ({
    justifyContent: "center",
    alignItems:"center",
    width: "85%",
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
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
    {
      breakpoint: 1150,
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
    <Box sx={{ marginBottom: theme.spacing(8), marginTop: theme.spacing(6)}}>
      <Box sx={{  marginLeft: "10%", marginRight:"10%" }}>
        <Typography
          sx={{ 
            fontSize: isDesktopScreens ? h2 : h3bold, 
            color: darkBlue, 
            my: 1,
          }}>
          Top Jobs
        </Typography>
        <Typography
            sx={{
              fontSize: h5,
              color: darkGray,
              my: 6,
              mt: 0
            }}
          >
          See the top paying permanent, local, tarvel, contract and per diem / PRN jobs.
          </Typography>
        </Box>
       

      <Box>         
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginLeft: "10%", marginRight:"10%", mt: 2 }}>
            <Typography
              sx={{ 
                fontSize: h3bold,
                color: darkBlue, 
              }}>
              Permanent Positions
            </Typography>
            <Typography
              component="a"
              href="/view-jobs"
              sx={{ 
                fontSize: h6bold, 
                color: mainBlue,
                marginLeft: '1rem',
              }}>
              View 63 more permanent postions
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
              <JobCard job={job} exclusive={job.exclusive} travel={job.travel}/>
            </Grid>
          ))}
            </Slider>
          </GuidesBox>
        </Box>
      </Box>

      
      <Box>         
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginLeft: "10%", marginRight:"10%", marginTop: isDesktopScreens ? "2%" : "10%" }}>
            <Typography
              sx={{ 
                fontSize: h3bold,
                color: darkBlue, 
              }}>
              Travel Contracts
            </Typography>
            <Typography
              component="a"
              href="/view-jobs"
              sx={{ 
                fontSize: h6bold, 
                color: mainBlue,
                marginLeft: '1rem',
              }}>
              View 79 more travel contract positions
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
              <JobCard job={job} exclusive={job.exclusive} travel={job.travel} />
            </Grid>
          ))}
            </Slider>
          </GuidesBox>
        </Box>
      </Box>

      <Box>         
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginLeft: "10%", marginRight:"10%", marginTop: isDesktopScreens ? "2%" : "10%" }}>
            <Typography
              sx={{ 
                fontSize: h3bold,
                color: darkBlue, 
              }}>
              Per diem / PRN and local jobs
            </Typography>
            <Typography
              component="a"
              href="/view-jobs"
              sx={{ 
                fontSize: h6bold, 
                color: mainBlue,
                marginLeft: '1rem',
              }}>
              View 235 more per diem / PRN and local jobs
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
              <JobCard job={job} exclusive={job.exclusive} travel={job.travel} />
            </Grid>
          ))}
            </Slider>
          </GuidesBox>
        </Box>
      </Box>

      <Box>         
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginLeft: "10%", marginRight:"10%", marginTop: isDesktopScreens ? "2%" : "10%" }}>
            <Typography
              sx={{ 
                fontSize: h3bold,
                color: darkBlue, 
              }}>
              Locum Tenens
            </Typography>
            <Typography
              component="a"
              href="/view-jobs"
              sx={{ 
                fontSize: h6bold, 
                color: mainBlue,
                marginLeft: '1rem',
              }}>
              View 42 locum tenens
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
              <JobCard job={job} exclusive={job.exclusive} travel={job.travel} />
            </Grid>
          ))}
            </Slider>
          </GuidesBox>
        </Box>
      </Box>
    </Box> 
  );
};

