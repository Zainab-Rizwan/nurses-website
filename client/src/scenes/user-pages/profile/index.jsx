import * as React from 'react';
import { Box} from "@mui/system";
import Footer from 'shared/Footer/footer';
import Banner from './banner';
import Intro from './intro';

const Profile = () => {
    return (
    <Box>
        <Banner/>
        <Intro/>
        <Footer/>
    </Box> 
    );
};

export default Profile;