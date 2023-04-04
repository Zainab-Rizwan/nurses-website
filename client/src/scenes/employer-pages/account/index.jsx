import * as React from 'react';
import {useTheme} from '@emotion/react';

const Account = () => {
    const theme = useTheme();
    const neutralLight = theme.palette.background.alt;

    return (
        <div>Account</div>
    );
};

export default Account;