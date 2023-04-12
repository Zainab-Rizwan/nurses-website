import * as React from 'react';
import { Box} from "@mui/system";
import Navbar from "shared/NavBar/navbar";
import Footer from 'shared/Footer/footer';

const Dashboard = () => {
    return (
    <Box>
        <Navbar />
        <div>Dashboard</div>    
        <Footer />
    </Box> 
    );
};

export default Dashboard;