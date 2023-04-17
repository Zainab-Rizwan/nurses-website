import * as React from 'react';
import { Box} from "@mui/system";
import ResponsiveDrawer from 'shared/SideBar/sidebar';
import { Typography } from '@mui/material';
import { useTheme } from '@emotion/react';


const Dashboard = () => {
    const theme= useTheme();
    return (
        <Box sx={{ display: 'flex' }}>
        <ResponsiveDrawer />
        <Box sx={{ flexGrow: 1, p: 3, mt: theme.spacing(8) }}>
          <Typography variant="h3" sx={{ mb: 2 }}>
            Welcome to my Dashboard!
          </Typography>
          <Typography variant="body1">
            Lorem ipquam erjusto rutrum sapienenim.
          </Typography>
         
        </Box>
      </Box>
    );
};

export default Dashboard;