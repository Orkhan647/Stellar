import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import ourImg from "../../assets/ourImg.png";

const AboutOurTeam = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Container sx={{ mt: 10 }}>
      <Grid container spacing={4} sx={{ justifyContent: isSmallScreen ? 'center' : 'space-between' }}>
        <Grid item xs={12} md={6} sx={{textAlign:isSmallScreen? 'center':null}}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>Our team of creatives</Typography>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do
            eiusmod tempor <br /> incididunt.
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim <br />
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut <br />
            aliquip ex ea commodo consequat. Duis aute irure dolor in <br />
            reprehenderit in voluptate velit esse cillum dolore eu fugiat.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} sx={{ position: 'relative' }}>
          <img style={{ width:isSmallScreen ? '100%':'90%' }} src={ourImg} alt="" />
          <Box sx={{

            position: 'absolute',
            left:  "0px",
             display: isSmallScreen? 'none': 'block',
            top: '90px',
            width: '70px',
            height: '80px',
            borderRadius: '30% 0 0 0',
            bgcolor: (theme) => theme.palette.secondary.main
          }} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutOurTeam;
