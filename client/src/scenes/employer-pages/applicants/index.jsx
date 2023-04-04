import * as React from 'react';
import {useTheme} from '@emotion/react';

const Applicants = () => {
    const theme = useTheme();
    const neutralLight = theme.palette.background.alt;

    return (<div>Applicants</div>
    );
};

export default Applicants;