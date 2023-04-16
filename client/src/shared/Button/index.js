import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import { useTheme } from '@emotion/react';


const SharedButton = ({value, onClick}) => {
    const theme = useTheme();
    const mainBlue = theme.palette.primary.main ;
    const darkBlue = theme.palette.primary.dark;
    const white = theme.palette.neutral.background;
    const h6bold = theme.typography.h6bold;
  
    return (
      <Button
        variant ="contained"
        onClick={(event) => onClick(event)}
        disableTouchRipple={false}
        sx={{
          padding:" 10px 30px",
          border: "none",
          backgroundColor: mainBlue,
          borderColor: darkBlue,
          color: white,
          fontWeight: "bold",
          transition: "all 0.4s",
          fontSize: h6bold,
          borderRadius: "4px",
          cursor: "pointer",
          wordSpacing: "2px",
          "&:hover": {
            backgroundColor: "#103d49",
          },
        }}
      >         
        {value}
      </Button>
    );
  };
  
SharedButton.propTypes = {
    styleClass: PropTypes.string,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

SharedButton.defaultProps = {
    styleClass: 'btn-primary'
};


export default SharedButton;