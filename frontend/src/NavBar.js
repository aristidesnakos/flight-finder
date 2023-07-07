import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import InfoIcon from '@mui/icons-material/Info';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const NavBar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: '240px',
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: '240px', boxSizing: 'border-box' },
      }}
    >
      <List>
        <ListItem button component={Link} to="/">
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>

        <ListItem button component={Link} to="/register">
          <ListItemIcon><PersonAddIcon /></ListItemIcon>
          <ListItemText primary="Register" />
        </ListItem>

        <ListItem button component={Link} to="/login">
          <ListItemIcon><VpnKeyIcon /></ListItemIcon>
          <ListItemText primary="Login" />
        </ListItem>

        <ListItem button component={Link} to="/search">
          <ListItemIcon><SearchIcon /></ListItemIcon>
          <ListItemText primary="Search" />
        </ListItem>

        <ListItem button component={Link} to="/details">
          <ListItemIcon><InfoIcon /></ListItemIcon>
          <ListItemText primary="Details" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default NavBar;