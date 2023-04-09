import React from "react";
import PropTypes from "prop-types";
import { Card, CardActionArea, CardMedia, CardContent, Typography, Grid, IconButton, CardActions, styled, Box } from "@mui/material";
import MoonIcon from '@mui/icons-material/NightsStay';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Button from "shared/Button";
import { useNavigate } from "react-router-dom";
import { useTheme } from '@emotion/react';

const JobCard = ({ job }) => {
 const navigate = useNavigate();
 const theme = useTheme();
 const mainBlue = theme.palette.primary.main ;
 const darkGray = theme.palette.neutral.dark;
 const darkBlue = theme.palette.primary.dark;
 const h4bold = theme.typography.h4bold;
 const h6bold = theme.typography.h6bold;
 const h7bold = theme.typography.h7bold;
 const h6bolder = theme.typography.h6bolder;
 const { image, title, text, textone, texttwo, textthree, textfour } = job;

  const GuideBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: theme.spacing(4, 0, 4, 0),
    flex: 1,
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(2, 0, 2, 0),
    },
  }));

  return (
    <GuideBox>
    <Card sx={{ minWidth: 320 }} elevation={9}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={image} />
        <CardContent>
          <Typography sx={{ fontSize: h4bold, color: darkBlue, my: 0.5 }}>{title}
          <Box>
             <Typography
              sx={{ fontSize: h6bolder, color: mainBlue, display: "inline-block",}}
            >
              {text}
            </Typography>
          </Box>
           
          </Typography>
          <Typography sx={{ fontSize: h6bold, color: darkGray }}>{textone}</Typography>
        </CardContent>
      </CardActionArea>
      <Grid container alignItems="center" sx={{ ml: 1, mt: 3 }}>
        <Grid item xs={4}>
          <Grid container alignItems="center">
            <Grid item>
              <IconButton size="small">
                <MoonIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <Typography sx={{ fontSize: h7bold, color: darkGray, ml: -0.5 }}>{texttwo}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4} sx={{ ml: -0.5, mr: 0.5 }}>
          <Grid container alignItems="center">
            <Grid item>
              <IconButton size="small">
                <AccessTimeIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <Typography sx={{ fontSize: h7bold, color: darkGray }}>{textthree}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid container alignItems="center">
            <Grid item>
              <IconButton size="small">
                <CalendarMonthIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <Typography sx={{ fontSize: h7bold, color: darkGray }}>{textfour}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <CardActions sx={{ mt: 0 }}>
        <Button value="Apply Now" onClick={() => navigate("/browse-jobs")} />
      </CardActions>
    </Card>
    </GuideBox>
  );
};

JobCard.propTypes = {
  job: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    textone: PropTypes.string.isRequired,
    texttwo: PropTypes.string.isRequired,
    textthree: PropTypes.string.isRequired,
    textfour: PropTypes.string.isRequired,
  }).isRequired,
};

export default JobCard;
