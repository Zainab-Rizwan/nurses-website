import * as React from 'react';
import { Box} from "@mui/system";
import Navbar from "shared/NavBar/navbar";
import Footer from 'shared/Footer/footer';

const Profile = () => {

    return (
    <Box>
        <Navbar />
        <div>Profile</div> 
        <Footer />   
    </Box> 
    );
};

export default Profile;