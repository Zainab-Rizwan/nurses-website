import { Box, styled, Typography, useMediaQuery, Grid, Pagination} from "@mui/material";
import React from "react";
import { useTheme } from '@emotion/react';
import Images from "constants/ImgConstants";
import FacilityCard from "shared/Facility-Cards";
import { useState } from 'react';

const cards = [
  { image: Images.HOSPITAL_IMG, title: 'HillCrest Medical Center', location: "1120 S Utica Ave | Tulsa, OK 74104 ", about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus ac tortor vel dapibus. Pellentesque congue pharetra ligula commodo venenatis. Pellentesque blandit enim est, in dignissim mi blandit id. Pellentesque eu magna non tortor pharetra pharetra. Sed in justo sit amet neque posuere hendrerit eu et risus. Nam rhoncus suscipit nisi, ac porta urna vulputate id. Etiam nec odio eget ligula vehicula viverra.", jobs: " 24", beds: " 200",},
  { image: Images.HOSPITAL_IMG, title: 'HillCrest Medical Center', location: "1120 S Utica Ave | Tulsa, OK 74104 ", about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus ac tortor vel dapibus. Pellentesque congue pharetra ligula commodo venenatis. Pellentesque blandit enim est, in dignissim mi blandit id. Pellentesque eu magna non tortor pharetra pharetra. Sed in justo sit amet neque posuere hendrerit eu et risus. Nam rhoncus suscipit nisi, ac porta urna vulputate id. Etiam nec odio eget ligula vehicula viverra.", jobs: " 13", beds: " 200",},
  { image: Images.HOSPITAL_IMG, title: 'HillCrest Medical Center', location: "1120 S Utica Ave | Tulsa, OK 74104 ", about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus ac tortor vel dapibus. Pellentesque congue pharetra ligula commodo venenatis. Pellentesque blandit enim est, in dignissim mi blandit id. Pellentesque eu magna non tortor pharetra pharetra. Sed in justo sit amet neque posuere hendrerit eu et risus. Nam rhoncus suscipit nisi, ac porta urna vulputate id. Etiam nec odio eget ligula vehicula viverra.", jobs: " 91", beds: " 200",},
  { image: Images.HOSPITAL_IMG, title: 'HillCrest Medical Center', location: "1120 S Utica Ave | Tulsa, OK 74104 ", about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus ac tortor vel dapibus. Pellentesque congue pharetra ligula commodo venenatis. Pellentesque blandit enim est, in dignissim mi blandit id. Pellentesque eu magna non tortor pharetra pharetra. Sed in justo sit amet neque posuere hendrerit eu et risus. Nam rhoncus suscipit nisi, ac porta urna vulputate id. Etiam nec odio eget ligula vehicula viverra.", jobs: " 04", beds: " 200",},
  { image: Images.HOSPITAL_IMG, title: 'HillCrest Medical Center', location: "1120 S Utica Ave | Tulsa, OK 74104 ", about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus ac tortor vel dapibus. Pellentesque congue pharetra ligula commodo venenatis. Pellentesque blandit enim est, in dignissim mi blandit id. Pellentesque eu magna non tortor pharetra pharetra. Sed in justo sit amet neque posuere hendrerit eu et risus. Nam rhoncus suscipit nisi, ac porta urna vulputate id. Etiam nec odio eget ligula vehicula viverra.", jobs: " 38", beds: " 200",},
  { image: Images.HOSPITAL_IMG, title: 'HillCrest Medical Center', location: "1120 S Utica Ave | Tulsa, OK 74104 ", about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus ac tortor vel dapibus. Pellentesque congue pharetra ligula commodo venenatis. Pellentesque blandit enim est, in dignissim mi blandit id. Pellentesque eu magna non tortor pharetra pharetra. Sed in justo sit amet neque posuere hendrerit eu et risus. Nam rhoncus suscipit nisi, ac porta urna vulputate id. Etiam nec odio eget ligula vehicula viverra.", jobs: " 61", beds: " 200",},
  { image: Images.HOSPITAL_IMG, title: 'HillCrest Medical Center', location: "1120 S Utica Ave | Tulsa, OK 74104 ", about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus ac tortor vel dapibus. Pellentesque congue pharetra ligula commodo venenatis. Pellentesque blandit enim est, in dignissim mi blandit id. Pellentesque eu magna non tortor pharetra pharetra. Sed in justo sit amet neque posuere hendrerit eu et risus. Nam rhoncus suscipit nisi, ac porta urna vulputate id. Etiam nec odio eget ligula vehicula viverra.", jobs: " 11", beds: " 200",},
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
  const cardsPerPage = 5;
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
          {displayedCards.map((facilities, index) => (
            <Grid item xs={12} key={index}>
              <FacilityCard facilities={facilities}/>
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

