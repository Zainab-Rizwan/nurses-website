import * as React from 'react';
import { Box} from "@mui/system";
import Navbar from "widgets/navbar";
import { ThemeProvider } from '@mui/system';
import { themeSettings } from 'theme';
import { useTheme } from '@emotion/react';

const Account = () => {
    const theme = useTheme();
    const neutralLight = theme.palette.background.alt;

    return (
    <Box sx={{
        backgroundColor: neutralLight,
    }}>
        <Navbar />
        <div>Account</div>    
    </Box> 
    );
};

export default Account;