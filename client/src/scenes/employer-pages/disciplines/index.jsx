import * as React from 'react';
import {useTheme} from '@emotion/react';

const Disciplines = () => {
    const theme = useTheme();
    const neutralLight = theme.palette.background.alt;

    return (
        <div>Disciplines</div>
    );
};

export default Disciplines;