import * as React from 'react';
import {useTheme} from '@emotion/react';
import WelcomeCard from "./welcome";
import NavStat from "./nav-stat";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const Dashboard = () => {
    const theme = useTheme();
    const neutralLight = theme.palette.background.alt;

    const navs = [
        "Disciplines",
        "Facilities",
        "Jobs Listings",
        "Applicants",
    ]

    return (
        <Box style={{backgroundColor: neutralLight, height: "100vh"}} container spacing={2}>
            <Grid container>
                <Grid item xs={12} style={{marginBottom: "2rem"}}>
                    <WelcomeCard/>
                </Grid>
                {navs.map((nav, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index} style={{padding: "0.2rem"}}>
                        <NavStat title={nav}/>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
};

export default Dashboard;