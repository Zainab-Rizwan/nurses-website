import * as React from 'react';
import { Box} from "@mui/system";
import Navbar from "widgets/navbar";
import { ThemeProvider } from '@mui/system';
import { themeSettings } from 'theme';
import { useTheme } from '@emotion/react';

const BrowseJobs = () => {
    const theme = useTheme();
    const neutralLight = theme.palette.background.alt;

    return (
    <Box sx={{
        backgroundColor: neutralLight,
    }}>
        <Navbar />
        <div>Browse Jobs</div>    
    </Box> 
    );
};

export default BrowseJobs;