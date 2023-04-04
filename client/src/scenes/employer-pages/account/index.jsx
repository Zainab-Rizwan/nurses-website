import * as React from 'react';
import {Box} from "@mui/system";
import Navbar from "widgets/navbar";
import {ThemeProvider} from '@mui/system';
import {themeSettings} from 'theme';
import {useTheme} from '@emotion/react';
import Footer from 'widgets/footer';

const Account = () => {
    const theme = useTheme();
    const neutralLight = theme.palette.background.alt;

    return (
        <div>Account</div>
    );
};

export default Account;