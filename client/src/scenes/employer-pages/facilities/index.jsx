import * as React from 'react';
import { Box} from "@mui/system";
import Navbar from "shared/NavBar/navbar";
import { ThemeProvider } from '@mui/system';
import { themeSettings } from 'theme';
import { useTheme } from '@emotion/react';
import Footer from 'shared/Footer/footer';

const Facilities = () => {
    const theme = useTheme();
    const neutralLight = theme.palette.background.alt;

    return (
    <Box sx={{
        backgroundColor: neutralLight,
    }}>
        <Navbar />
        <div>Facilities</div>    
        <Footer />
    </Box> 
    );
};

export default Facilities;