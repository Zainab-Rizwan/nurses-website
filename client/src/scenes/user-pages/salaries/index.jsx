import * as React from 'react';
import { Box} from "@mui/system";
import Footer from 'shared/Footer/footer';
import TopJobs from './jobs';
import StatesTable from './states-table';
import EmployersTable from './employers-table';
import Header from './header';
import Calculator from './calculator';
import Graph from './graph';
import Details from './details';
import Search from './search';

const Salaries = () => {
    return (
    <Box >
        <Header />
        <Calculator />
        <Details />
        <Search />
        <Graph />
        <StatesTable />
        <EmployersTable />
        <TopJobs />
        <Footer />  
    </Box> 
    );
};

export default Salaries;