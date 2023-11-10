import * as React from 'react';
import PropTypes from 'prop-types';
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
import { useState } from 'react';

const navItems = ['Home', 'Blog', 'About', 'Contact'];

function Navbar(props) {
  const { window } = props;
  const [selectedItem, setSelectedItem] = React.useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleClick = (item) => {
    setSelectedItem(item);
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
              {navItems.map((item, index) => (
                <ListItem disablePadding key={item}>
                  <ListItemButton
                    selected={selectedItem === item}
                    onClick={() => handleClick(item)}
                    sx={{
                      '&.Mui-selected': {
                        color: (theme) => theme.palette.secondary.main,
                      },
                    }}
                  >
                    <ListItemText primary={item} />
                  </ListItemButton>
                  {index === navItems.length - 1 && (
                    <Button
                      sx={{
                        color: 'black',
                        bgcolor: 'white',
                        marginLeft: '50px',
                        '&:hover': {
                          bgcolor: (theme) => theme.palette.secondary.main,
                        },
                      }}
                    >
                      Subscribe
                    </Button>
                  )}
                </ListItem>
              ))}
            </List>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
  anchor="top"
  open={openDrawer}
  onClose={() => setOpenDrawer(false)}
>
  <List sx={{ margin: '0 auto',width:'100%' }}>
    {navItems.map((text) => (
      <ListItem
        button
        key={text}
        onClick={() => {
          setSelectedItem(text);
          setOpenDrawer(false);
        }}
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
