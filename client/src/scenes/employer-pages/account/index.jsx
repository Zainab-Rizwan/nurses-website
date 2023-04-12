import * as React from 'react';
import { Box} from "@mui/system";
import Navbar from "shared/NavBar/navbar";
import Footer from 'shared/Footer/footer';

const Account = () => {
    return (
    <Box>
        <Navbar />
        <div>Account</div>  
        <Footer />  
    </Box> 
    );
};

export default Account;