import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { Container, Button, Box, Drawer, Divider } from "@mui/material";
import logo from "../../assets/logo/logo.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Blog", path: "/blog" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Navbar = (props) => {
  const handleScroll = () => {
    window.scrollTo(0, 0);
  };
  const { window } = props;
  const [openDrawer, setOpenDrawer] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  const isItemSelected = (item) => {
    return location.pathname === (item.path === "/" ? "/" : `${item.path}`);
  };

  const handleClick = (item) => {
    setOpenDrawer(false);

    if (item.label === "Subscribe") {
      console.log("Subscribe button clicked");
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
              sx={{ mr: 2, display: { sm: "none" } }}
              onClick={() => setOpenDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1, cursor: "pointer" }}>
              <img src={logo} alt="" width={250} height={50} />
            </Box>
            <List sx={{ display: { xs: "none", gap: "10px", sm: "flex" } }}>
              {navItems.map((item) => (
                <ListItem disablePadding key={item.label}>
                  <RouterLink
                    to={item.path}
                    underline="none"
                    color="inherit"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    <ListItemButton
                      selected={isItemSelected(item)}
                      onClick={() => {
                        handleClick(item);
                        handleLinkClick();
                        navigate(item.path);
                      }}
                      sx={{
                        color: isItemSelected(item)
                          ? (theme) => theme.palette.secondary.main
                          : undefined,
                      }}
                    >
                      <ListItemText primary={item.label} />
                    </ListItemButton>
                  </RouterLink>
                </ListItem>
              ))}
              <ListItem>
                <Button
                  underline="none"
                  sx={{
                    color: "black",
                    bgcolor: (theme) => theme.palette.secondary.main,
                    marginLeft: "50px",
                    "&:hover": {
                      bgcolor: "white",
                      color: "black",
                    },
                  }}
                >
                  <ListItemText primary="Subscribe" />
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
        <List sx={{ margin: "0 auto", width: "100%" }}>
          {navItems.map((item) => (
            <ListItem
              component={RouterLink}
              to={item.path}
              key={item.label}
              onClick={() => {
                setOpenDrawer(false);
                handleLinkClick();
                navigate(item.path);
              }}
              sx={{
                textAlign: "center",
                "&:hover": {
                  backgroundColor: (theme) => theme.palette.secondary.main,
                },
              }}
            >
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
    </div>
  );
};

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
