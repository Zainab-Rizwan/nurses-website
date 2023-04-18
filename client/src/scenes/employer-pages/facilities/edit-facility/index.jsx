import * as React from 'react';
import { Box} from "@mui/system";
import ResponsiveDrawer from 'shared/SideBar/sidebar';
import { Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import EditFacilityInfo from './edit-info';


const EditFacility = () => {
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
            Edit Facility
          </Typography>
          <Typography sx={{ fontSize: h6bold, color: darkGray}}>
            Edit the details of your facility
          </Typography>
          <EditFacilityInfo />
        </Box>
        </Box>
    );
};

export default EditFacility;