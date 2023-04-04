import * as React from 'react';
import {useTheme} from '@emotion/react';

const Facilities = () => {
    const theme = useTheme();
    const neutralLight = theme.palette.background.alt;

    return (
        <div>Facilities</div>
    );
};

export default Facilities;