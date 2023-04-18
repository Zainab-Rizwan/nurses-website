import * as React from 'react';
import { styled, TextField, Button, Box } from '@mui/material';
import { useTheme } from '@emotion/react';
import { SearchOutlined } from '@mui/icons-material';
import { Add } from '@mui/icons-material';

const Search = () => {
    const theme = useTheme();
    const white = theme.palette.background.default;
    const mainBlue = theme.palette.primary.main;
    const darkGray = theme.palette.neutral.dark;
    const darkBlue = theme.palette.primary.dark;
    const h5bold = theme.typography.h5bolder;
    const h6bold = theme.typography.h6bold;

    const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    color: white, 
    gap: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "row",
      alignItems: "center",
      textAlign: "center",
    },   
  }));

  return (
    <CustomBox sx={{ marginTop: theme.spacing(4)}}>
      <TextField
      id="search-field"
      label="Search"
      fullWidth
      sx={{ color: darkGray, fontSize: h5bold, backgroundColor: white, borderColor: white,}}
    />

    <Button className="search-button" value="Search" 
    sx={{ 
      padding: "10px 40px",
      border: "none",
      borderColor : darkBlue,
      transition: "all 0.4s",
      cursor: "pointer",
      backgroundColor: mainBlue,
      borderRadius: "4px",
      color: white,
      fontSize: h6bold,
      wordSpacing: "2px",
      "&:hover": {
        backgroundColor: "#103d49",
      },
      }}>
      <SearchOutlined className="search-icon" sx={{ mr: 1}} />
      Search 
    </Button>

    <Button
  sx={{
    display: 'flex',
    alignItems: 'center',
    padding: '10px 45px',
    border: 'none',
    borderColor: darkBlue,
    transition: 'all 0.4s',
    cursor: 'pointer',
    backgroundColor: white,
    borderRadius: '4px',
    color: mainBlue,
    //whiteSpace: 'nowrap',
    fontSize: h6bold,
    fontWeight: 700,
    wordSpacing: '2px',
    mr: 1,
  }}
>
  <span sx={{ flexGrow: 1 }}> Add Facility</span>
  <Add sx={{ ml: 1 }} />
</Button>

    </CustomBox>
  );
};

export default Search;