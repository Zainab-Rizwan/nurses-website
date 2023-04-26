import { Box, styled, Grid} from "@mui/material";
import React from "react";
import { useTheme } from '@emotion/react';
import Images from "constants/ImgConstants";
import FacilityInfoCard from "shared/FacilityInfo";

const facility = {
    image: Images.HOSPITAL_IMG,
    title: 'Hillcrest Medical Center',
    location: '1120 S Utica Ave | Tulsa, OK 74104 | 36.7783 N, 49.1174 W',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus ac tortor vel dapibus. Pellentesque congue pharetra ligula commodo venenatis. Pellentesque blandit enim est, in dignissim mi blandit id. Pellentesque eu magna non tortor pharetra pharetra. Sed in justo sit amet neque posuere hendrerit eu et risus. Nam rhoncus suscipit nisi, ac porta urna vulputate id. Etiam nec odio eget ligula vehicula viverra.',
    beds: '200',
  };

export default function FacilityInfo(props){
  const theme = useTheme();

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

