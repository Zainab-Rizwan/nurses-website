import * as React from 'react';
import { useState } from "react";
import {
  Box,
  IconButton,
  Typography,
  MenuItem,
  Avatar,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Menu,
  Close,
} from "@mui/icons-material";
import { useNavigate, NavLink } from "react-router-dom";
import FlexBetween from "shared/FlexBetween/FlexBetween";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const navigate = useNavigate();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const theme = useTheme();
  const location = useLocation(); // <-- get the current location using useLocation
  const primary = theme.palette.neutral.main;
  const primaryMain = theme.palette.primary.main;
  const background = theme.palette.background.default;
  const alt = theme.palette.background.default;
  const bolder= theme.typography.h6bold;

  return (
    <FlexBetween padding="0.75rem 5%" backgroundColor={alt}>
      <FlexBetween gap="1.75rem">
        <Typography
          fontWeight="bold"
          fontSize="clamp(1rem, 2rem, 2.25rem)"
          color="primary"
          onClick={() => navigate("/")}
          sx={{
            "&:hover": {
              color: primary,
              cursor: "pointer",
            },
          }}
        >
          Website Name
        </Typography>
      
      </FlexBetween>

      {/* DESKTOP NAV */}
      {isNonMobileScreens ? (
        <FlexBetween gap="1rem">               
        <MenuItem component={NavLink} to="/browse-jobs" activeClassName="active-link" style={{ color: location.pathname === "/browse-jobs" ? primary : primaryMain, textDecoration: location.pathname === "/browse-jobs" , ...bolder }}> Browse Jobs </MenuItem>          
          <MenuItem component={NavLink} to="/salaries" activeClassName="active-link" style={{ color: location.pathname === "/salaries" ? primary : primaryMain, textDecoration: location.pathname === "/salaries" ,...bolder }}> Salaries </MenuItem>          
          <MenuItem component={NavLink} to="/sign-up" activeClassName="active-link" style={{ color: location.pathname === "/sign-up" ? primary : primaryMain, textDecoration: location.pathname === "/sign-up" ,...bolder }}> Sign Up </MenuItem>          
          <MenuItem component={NavLink} to="/sign-in" activeClassName="active-link" style={{ color: location.pathname === "/sign-in" ? primary : primaryMain, textDecoration: location.pathname === "/sign-in" , ...bolder }}> Login </MenuItem>          
          <MenuItem component={NavLink} to="/profile" activeClassName="active-link"  ><Avatar sx={{ bgcolor: primaryMain, width: 32, height: 32 }}> <AccountCircleIcon /></Avatar></MenuItem>
          </FlexBetween>
      ) : (
        <IconButton
          onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
        >
          <Menu />
        </IconButton>
      )}

      {/* MOBILE NAV */}
      {!isNonMobileScreens && isMobileMenuToggled && (
        <Box
          position="fixed"
          right="0"
          bottom="0"
          height="100%"
          zIndex="10"
          maxWidth="500px"
          minWidth="300px"
          backgroundColor={background}
        >
          {/* CLOSE ICON */}
          <Box display="flex" justifyContent="flex-end" p="1rem">
            <IconButton
              onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
            >
              <Close />
            </IconButton>
          </Box>

          {/* MENU ITEMS */}
          <FlexBetween
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="2rem"
          >
          <MenuItem component={NavLink} to="/browse-jobs" activeClassName="active-link" style={{ color: location.pathname === "/browse-jobs" ? primary : primaryMain, textDecoration: location.pathname === "/browse-jobs" , ...bolder }}> Browse Jobs </MenuItem>          
          <MenuItem component={NavLink} to="/salaries" activeClassName="active-link" style={{ color: location.pathname === "/salaries" ? primary : primaryMain, textDecoration: location.pathname === "/salaries" ,...bolder }}> Salaries </MenuItem>          
          <MenuItem component={NavLink} to="/sign-up" activeClassName="active-link" style={{ color: location.pathname === "/sign-up" ? primary : primaryMain, textDecoration: location.pathname === "/sign-up" ,...bolder }}> Sign Up</MenuItem>          
          <MenuItem component={NavLink} to="/sign-in" activeClassName="active-link" style={{ color: location.pathname === "/sign-in" ? primary : primaryMain, textDecoration: location.pathname === "/sign-in" , ...bolder }}> Login </MenuItem>          
          <MenuItem component={NavLink} to="/profile" activeClassName="active-link"  ><Avatar sx={{ bgcolor: primaryMain, width: 32, height: 32 }}> <AccountCircleIcon /></Avatar></MenuItem>
          </FlexBetween>
        </Box>
      )}
    </FlexBetween>
  );
};

export default Navbar;


