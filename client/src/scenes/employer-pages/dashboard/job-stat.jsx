import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {useTheme} from '@emotion/react';
import {Link} from "react-router-dom";
import {ButtonBase} from "@mui/material";
import {makeStyles} from "@mui/styles";


const useStyles = makeStyles({
    root: {
        // maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const bull = (
    <Box
        component="span"
        sx={{display: 'inline-block', mx: '2px', transform: 'scale(0.8)'}}
    >
        •
    </Box>
);

export default function JobStats({title}) {
    const theme = useTheme();
    const classes = useStyles();

    return (
        // card with zero shadow
        <Card sx={{boxShadow: 0, borderRadius: 4}}>
            <ButtonBase
                focusRipple
                focusVisibleClassName={classes.focusVisible}
                style={{
                    width: '100%',
                }}
            >

                <CardContent sx={{textAlign: "left"}}>

                    <Typography variant="h4" component="div" color={"text.secondary"}>
                        <b>{title}</b>
                    </Typography>

                    <Typography sx={{mb: 1.5}} color="text.secondary">
                        <Link href="#" underline="none">
                            View all
                        </Link>
                    </Typography>

                    <Typography variant="h1" component="div" style={{color: theme.palette.primary.main}}>
                        <b>40,032</b>
                    </Typography>

                </CardContent>
            </ButtonBase>
        </Card>
    );
}

