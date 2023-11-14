import React from "react";
import { useMediaQuery } from '@mui/material';
import { Box, Button, Container, Typography } from "@mui/material";
import whyImage from "../../assets/why img.png";

const WhyWe = () => {
  const isLargeScreen = useMediaQuery('(min-width:600px)');

  return (
    <Container sx={{ position: 'relative' }}>
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          display: isLargeScreen ? 'block' : 'none',
        }}
      >
        <img
          src={whyImage}
          alt="friends"
          style={{ width: "75%", height: "auto" }}
        />
      </Box>
      <Box
        sx={{
          position: isLargeScreen ? 'absolute' : 'relative',
          height: '70%',
          bottom: '0px',
          right: '10px',
          backgroundColor: 'white',
          padding: '40px',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
         
        }}
      >
        <Typography sx={{ fontWeight: 700, mb: 2 }}>Why we started</Typography>
        <Typography variant={isLargeScreen ? 'h4' : 'h6'} sx={{ fontWeight: 700, mb: 2 }}>
          It started out as a simple <br /> idea and evolved into <br /> our
          passion
        </Typography>
        <Typography sx={{ color: "#6D6E76", mb: 3, display: isLargeScreen ? 'block' : 'none' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim <br /> veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip.
        </Typography>
        <Button
          sx={{
            color: "black",
            bgcolor: (theme) => theme.palette.secondary.main,
            marginTop: "10px",
            height: "35px",
            width: "150px", 
            "&:hover": { bgcolor: "#4C4C4C", color: "white" },
          }}
        >
          <span style={{ fontWeight: 700 }}>Read More</span>
        </Button>
      </Box>
    </Container>
  );
};

export default WhyWe;
