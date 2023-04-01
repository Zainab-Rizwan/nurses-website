import * as React from 'react';
import {useTheme} from '@emotion/react';
import WelcomeCard from "./welcome";
import NavStat from "./nav-stat";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
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
            <Grid container >
                <Grid item xs={12}>
                    <WelcomeCard/>
                </Grid>
                {navs.map((nav, index) => (
                    <Grid item xs={3} key={index} style={{padding: "1rem"}}>
                        <NavStat title={nav}/>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
};

export default Dashboard;