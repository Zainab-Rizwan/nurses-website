import { Box, styled, Typography, useMediaQuery, Grid, Pagination} from "@mui/material";
import React from "react";
import { useTheme } from '@emotion/react';
import Images from "constants/ImgConstants";
import { useState } from 'react';
import FacilityInfoCard from "shared/FacilityInfo";

const facility = {
    image: Images.CARD_IMG,
    title: 'Hillcrest Medical Center',
    textone: '1120 S Utica Ave | Tulsa, OK 74104 | 36.7783 N, 49.1174 W',
    texttwo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus ac tortor vel dapibus. Pellentesque congue pharetra ligula commodo venenatis. Pellentesque blandit enim est, in dignissim mi blandit id. Pellentesque eu magna non tortor pharetra pharetra. Sed in justo sit amet neque posuere hendrerit eu et risus. Nam rhoncus suscipit nisi, ac porta urna vulputate id. Etiam nec odio eget ligula vehicula viverra.',
    textthree: '200',
    textfour: 'Start Date',
  };

export default function FacilityInfo(props){
  const theme = useTheme();
  const mainBlue = theme.palette.primary.main ;
  const darkGray = theme.palette.neutral.dark;
  const darkBlue = theme.palette.primary.dark;
  const h2 = theme.typography.h2;  
  const h5 = theme.typography.h5;
  const h4 = theme.typography.h4bold;
  const h6bold = theme.typography.h6bold;
  const isDesktopScreens = useMediaQuery("(min-width: 1050px)");


  const GuidesBox = styled(Box)(({ theme }) => ({
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  }));

  return (
    <Box fullWidth sx={{ marginTop: theme.spacing(4)}}>  
        <GuidesBox>
          <Grid container spacing={0.1}>
          <FacilityInfoCard facility={facility} />
          </Grid>
        </GuidesBox>
    </Box>
  );
};

