import * as React from 'react';
import { Box} from "@mui/system";
import ResponsiveDrawer from 'shared/SideBar/sidebar';
import { Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import Search from './search';
import FacilityCards from './cards';


const Facilities = () => {
    const theme= useTheme();
    const lightGray = theme.palette.background.alt;
    const darkBlue = theme.palette.primary.dark;
    const darkGray = theme.palette.neutral.dark;
    const h6bold = theme.typography.h6bold;
    const h2 = theme.typography.h2;

    return (
        <Box sx={{ display: 'flex', backgroundColor: lightGray }}>
          <ResponsiveDrawer />
          <Box sx={{ flexGrow: 1, p: 3, mt: theme.spacing(4) }}>
            <Typography sx={{ mb: 1, fontSize: h2, color: darkBlue}}>
              Facilities
            </Typography>
            <Typography sx={{ fontSize: h6bold, color: darkGray}}>
              View and manage the facilities you have added.
            </Typography>
            <Search />  
            <FacilityCards />
          </Box>
        </Box>
    );
};

export default Facilities;