import { Box, styled, Typography, useMediaQuery, TextField, InputLabel} from "@mui/material";
import React from "react";
import { useTheme } from '@emotion/react';
import Images from "constants/ImgConstants";
import './index.scss';
import Button from "shared/Button";


const Calculator = () => {
  const theme = useTheme();
  const darkGray = theme.palette.neutral.dark;
  const darkBlue = theme.palette.primary.dark;
  const h2 = theme.typography.h2;  
  const h5 = theme.typography.h5;
  const h3bold = theme.typography.h3bold;
  const h5bold = theme.typography.h5bold;
  const isDesktopScreens = useMediaQuery("(min-width: 1050px)");

  const CustomImage = styled('img')(({ theme }) => ({
    maxWidth: "100%",
  }));

  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(8),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));
  

  return (
    <Box sx={{  marginLeft: "10%", marginRight:"10%", marginTop: theme.spacing(8) }}>
      <Box>
        <Typography
          sx={{ 
            fontSize: isDesktopScreens ? h2 : h3bold, 
            color: darkBlue, 
            my: 1,
          }}>
        How much is your agency really paying you? Is 20% margin really 20%?
        </Typography>
        <Typography
            sx={{
              fontSize: h5,
              color: darkGray,
              my: 6,
              mt: 3
            }}
          >
          On average, most agencies charge 45% mark-up or more. What that means is 55% or less
          of your bill rate is going to the actual clinician.  Use our Bill Rate and Transparency 
          Calculator below to see if your vendor is operating at appropriate margins.
          </Typography>
      </Box  >
      
    <CustomBox>
        <Box  sx={{ flex: "1.25" }} >
        <Box>
            <InputLabel sx={{ fontSize: h5bold, color: darkBlue}}>Bill Rate</InputLabel>
            <TextField
            margin="normal"
            fullWidth
            sx={{ my: 1, minWidth: "20rem"}}
            />
            <InputLabel sx={{ fontSize: h5bold, color: darkBlue}}>Location / Zip Code</InputLabel>
            <TextField
            margin="normal"
            fullWidth
            sx={{ my: 1, minWidth: "20rem"}}
        />
        <Box sx={{mt: 2}}>
        <Button value ="Calculate"/>
        </Box>
        </Box>
        </Box>
        <Box sx={{ flex: "1.75" }}>
        <CustomImage src={Images.SALARIES_IMG} alt="heroImg" />
        </Box>
    </CustomBox>
    </Box>  
  );
};

export default Calculator;
