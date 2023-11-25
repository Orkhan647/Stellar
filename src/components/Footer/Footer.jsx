import React from "react";
import { Container, Typography, Box, Button, Link } from "@mui/material";
import logo from "../../assets/logo/logo.png";
import { Facebook, Twitter, LinkedIn, Instagram } from "@mui/icons-material";
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {


  const handleLinkClick = () => {

    window.scrollTo(0, 0); 
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) => theme.palette.primary.main,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Box>
            <img
              src={logo}
              alt="Logo"
              style={{ height: 40, marginTop: "20px" }}
            />
          </Box>
          <Box sx={{ display: "flex" }}>
            <Link
              component={RouterLink}
              to="/"
              onClick={() => handleLinkClick()}
              variant="body2"
              color="textSecondary"
              sx={{
                display: "inline",
                mx: 2,
                color: "#FFFFFF",
                "&:hover": {
                  color: (theme) => theme.palette.secondary.main,
                  textDecoration: "none",
                  cursor: "pointer",
                },
              }}
            >
              Home
            </Link>
            <Link
              component={RouterLink}
              to="/blog"
              onClick={() => handleLinkClick()}
              variant="body2"
              color="textSecondary"
              sx={{
                display: "inline",
                mx: 2,
                color: "#FFFFFF",
                "&:hover": {
                  color: (theme) => theme.palette.secondary.main,
                  textDecoration: "none",
                  cursor: "pointer",
                },
              }}
            >
              Blog
            </Link>
            <Link
              component={RouterLink}
              to="/about"
              onClick={() => handleLinkClick()}
              variant="body2"
              color="textSecondary"
              sx={{
                display: "inline",
                mx: 2,
                color: "#FFFFFF",
                "&:hover": {
                  color: (theme) => theme.palette.secondary.main,
                  textDecoration: "none",
                  cursor: "pointer",
                },
              }}
            >
              About
            </Link>
            <Link
              component={RouterLink}
              to="/contact"
              onClick={() => handleLinkClick()}
              variant="body2"
              color="textSecondary"
              sx={{
                display: "inline",
                mx: 2,
                color: "#FFFFFF",
                "&:hover": {
                  color: (theme) => theme.palette.secondary.main,
                  textDecoration: "none",
                  cursor: "pointer",
                },
              }}
            >
              Contact
            </Link>
            <Link
              component={RouterLink}
              to="/privacy"
              onClick={() => handleLinkClick()}
              variant="body2"
              color="textSecondary"
              sx={{
                display: "inline",
                mx: 2,
                color: "#FFFFFF",
                "&:hover": {
                  color: (theme) => theme.palette.secondary.main,
                  textDecoration: "none",
                  cursor: "pointer",
                },
              }}
            >
              Privacy Policy
            </Link>
          </Box>
        </Box>

        <Box
          sx={{
            backgroundColor: "#2e3040",
            display: "flex",
            justifyContent: "space-between",
            padding: "20px",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Box>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                color: "#FFFFFF",
                padding: { xs: "20px", sm: "50px" },
                margin: 0,
              }}
            >
              Subscribe to our newsletter to get
              <br /> latest updates and news
            </Typography>
          </Box>
          <Box
            sx={{
              padding: { xs: "20px", sm: "50px" },
              margin: 0,
            }}
          >
            <input
              type="text"
              style={{
                backgroundColor: "transparent",
                border: "1px solid #4C4C4C",
                padding: "10px",
                width: "100%",
                outline: "none",
                color: "lightgray",
              }}
              placeholder="Enter Your Email"
            />
            <Button
              sx={{
                color: "black",
                bgcolor: (theme) => theme.palette.secondary.main,
                marginTop: "10px",
                width: { xs: "100%", sm: "auto" },
                "&:hover": { bgcolor: "white" },
              }}
            >
              Subscribe
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { xs: "column", sm: "row" },
            mt: 2,
            padding: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column" },
              alignItems: { xs: "center", sm: "flex-start" },
              ml: 2,
            }}
          >
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ mb: 1, color: "#FFFFFF" }}
            >
              Finstreet 118, 2561 Fintown
            </Typography>
            <Box sx={{ display: "flex", gap: "10px" }}>
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{ mb: 1, color: "#FFFFFF" }}
              >
                Hello@finsweet.com
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{ mb: 1, color: "#FFFFFF" }}
              >
                020 7993 2905
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <Box
              sx={{
                mx: 1,
                color: "#6D6E76",
                "&:hover": {
                  color: (theme) => theme.palette.secondary.main,
                  textDecoration: "none",
                  cursor: "pointer",
                },
              }}
            >
              <Facebook />
            </Box>
            <Box
              sx={{
                mx: 1,
                color: "#6D6E76",
                "&:hover": {
                  color: (theme) => theme.palette.secondary.main,
                  textDecoration: "none",
                  cursor: "pointer",
                },
              }}
            >
              <Twitter />
            </Box>
            <Box
              sx={{
                mx: 1,
                color: "#6D6E76",
                "&:hover": {
                  color: (theme) => theme.palette.secondary.main,
                  textDecoration: "none",
                  cursor: "pointer",
                },
              }}
            >
              <LinkedIn />
            </Box>
            <Box
              sx={{
                mx: 1,
                color: "#6D6E76",
                "&:hover": {
                  color: (theme) => theme.palette.secondary.main,
                  textDecoration: "none",
                  cursor: "pointer",
                },
              }}
            >
              <Instagram />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
