import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { Container, Button, Box, Drawer, Divider } from '@mui/material';
import logo from '../../assets/logo/logo.png';

const navItems = ['Home', 'Blog', 'About', 'Contact'];

function Navbar(props) {
  const { window } = props;
  const [openDrawer, setOpenDrawer] = useState(false);
  const location = useLocation();

  const isItemSelected = (item) => {
    return location.pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`);
  };

  const handleClick = (item) => {
    setOpenDrawer(false);

    // Check if the clicked item is the "Subscribe" button
    if (item === 'Subscribe') {
      // Handle subscribe button click (e.g., show a modal, trigger an action, etc.)
      console.log('Subscribe button clicked');
    }
  };

  return (
    <div>
      <AppBar sx={{ margin: 0 }}>
        <Container>
          <Toolbar>
            <IconButton
              color="inherit"
              edge="start"
              sx={{ mr: 2, display: { sm: 'none' } }}
              onClick={() => setOpenDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1, cursor: 'pointer' }}>
              <img src={logo} alt="" width={250} height={50} />
            </Box>
            <List sx={{ display: { xs: 'none', gap: '10px', sm: 'flex' } }}>
              {navItems.map((item) => (
                <ListItem disablePadding key={item}>
                  <ListItemButton
                    component={Link}
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    selected={isItemSelected(item)}
                    onClick={() => handleClick(item)}
                    sx={{
                      color: isItemSelected(item)
                        ? (theme) => theme.palette.secondary.main
                        : undefined,
                    }}
                  >
                    <ListItemText primary={item} />
                  </ListItemButton>
                </ListItem>
              ))}
              <ListItem>
                <Button
                  component={Link}
                  to="/subscribe"
                  sx={{
                    bgcolor: (theme) => theme.palette.secondary.main,
                    marginLeft: '50px',
                    '&:hover': {
                      bgcolor: 'white',
                    },
                  }}
                  onClick={(e) => {
                    e.preventDefault(); // Prevent the default behavior (navigation)
                    handleClick('Subscribe');
                  }}
                >
                  Subscribe
                </Button>
              </ListItem>
            </List>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        anchor="top"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List sx={{ margin: '0 auto', width: '100%' }}>
          {navItems.map((text) => (
            <ListItem
              component={Link}
              to={text === 'Home' ? '/' : `/${text.toLowerCase()}`}
              key={text}
              onClick={() => setOpenDrawer(false)}
              sx={{
                textAlign: 'center',
                '&:hover': {
                  backgroundColor: (theme) => theme.palette.secondary.main,
                },
              }}
            >
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
    </div>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
