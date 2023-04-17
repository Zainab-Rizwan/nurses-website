import * as React from 'react';
import { AppBar, Box, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ContactPageRoundedIcon from '@mui/icons-material/ContactPageRounded';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import ApartmentRoundedIcon from '@mui/icons-material/ApartmentRounded';
import { NavLink, useLocation } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import { useNavigate  } from 'react-router-dom';
import Images from 'constants/ImgConstants';

const drawerWidth = 220;

interface Props {
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
  const location = useLocation();
  const [activeItem, setActiveItem] = React.useState(location.pathname);
  const { window } = props;
  const theme = useTheme();
  const navigate = useNavigate();
  const white = theme.palette.background.default;
  const lightBlue = theme.palette.neutral.main;
  const lightGray = theme.palette.background.alt;
  const darkBlue = theme.palette.primary.dark;
  const lighterBlue = theme.palette.neutral.light;
  const mainBlue = theme.palette.primary.main;
  const h2= theme.typography.h3bold;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleListItemClick = (text: string, path: string) => {
    setActiveItem(path);
  };

  const drawer = (
    <div>
      <Toolbar sx={{ justifyContent: 'center'}}>
      <Typography onClick={() => navigate("/")} sx={{ fontSize: h2, color: mainBlue, textAlign: 'center', cursor: 'pointer',
        '&:hover': {
        color: lightBlue,
      },}}>Website Name</Typography>
      </Toolbar>
      <Divider />
      <List>
      {[
        { text: 'Dashboard', path: '/dashboard', icon: <DashboardOutlinedIcon /> },
        { text: 'Jobs', path: '/jobs', icon: <BusinessCenterRoundedIcon /> },
        { text: 'Disciplines', path: '/disciplines', icon: <ListAltIcon /> },
        { text: 'Applicants', path: '/applicants', icon: <ContactPageRoundedIcon /> },
        { text: 'Facilities', path: '/facilities', icon: <ApartmentRoundedIcon /> },
        { text: 'Account', path: '/account', icon: <AccountCircleRoundedIcon /> },
      ].map(({ text, path, icon }) => (
        <ListItem key={text} disablePadding sx={{ padding: '5px 20px 0px 20px'}}>
          <NavLink to={path} style={{ textDecoration: 'none' }}>
            <ListItemButton
              sx={{
                backgroundColor: activeItem === path ? lighterBlue : white,
                color: activeItem === path ? mainBlue : lightBlue,
                borderRadius: '5px',
                width: '11rem',
                '&:hover': {
                  backgroundColor: lightGray,
                  color: mainBlue,
                },
              }}
              onClick={() => handleListItemClick(text, path)}
            >
              <ListItemIcon sx={{  color: activeItem === path ? mainBlue : lightBlue}}> {icon}</ListItemIcon>
              <ListItemText disableTypography primary={<Typography style={{ color: activeItem === path ? mainBlue : lightBlue, fontWeight: 500, fontSize: "14.4px"}}>{text}</Typography>}/>
            </ListItemButton>
          </NavLink>
        </ListItem>
      ))}
    </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="absolute"
        elevation={0}
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: lightGray,
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none', color: darkBlue } }}
          >
            <MenuIcon />
          </IconButton>
          <Avatar  onClick={() => navigate("/account")}  src={Images.AVATAR_IMG} sx={{ ml: 2, cursor: "pointer", '&:hover': {boxShadow: theme.shadows[5], },}} />
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
