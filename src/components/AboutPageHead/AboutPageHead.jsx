import { Box, Container, Grid, Typography, useMediaQuery, createTheme, responsiveFontSizes } from "@mui/material";
import React from "react";
import aboutImg from "../../assets/aboutImg.png";

const AboutPageHead = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return (
    <Container sx={{ mt: 20 }}>
      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid item sx={{ bgcolor: "white" }}>
          <Box
            sx={{
              position: isSmallScreen ? "relative" : "absolute",
              left: isSmallScreen ? null : "150px",
              top: isSmallScreen ? null : "100px",
              zIndex: 1,
              bgcolor: "white",
              padding:isSmallScreen ? '15px':"60px",
            }}
          >
            <Typography sx={{ fontWeight: 700 }}>ABOUT US</Typography>
            <Typography variant={isSmallScreen ? "h6" : "h4"} sx={{ fontWeight: 700, mt: 2 }}>
              We are a team of <br /> content writers who <br /> share their learnings
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Typography
            sx={{
              color: "#4C4C4C",
              mb: 10,
              display: isSmallScreen ? "none" : "block",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
            <br />
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut{" "}
            <br /> enim ad minim veniam, quis nostrud exercitation ullamco{" "}
            <br /> laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{ position: "relative" }}>
        <img
          style={{
            width: "100%",
            height: isSmallScreen ? "230px" : null,
            objectFit: "cover", // or "contain" based on your preference
          }}
          src={aboutImg}
          alt=""
        />
      </Box>
      <Box
        sx={{
          bgcolor: (theme) => theme.palette.secondary.main,
          textAlign: "left",
          gap: "10px",
          padding: isSmallScreen ? "10px" : "40px",
          width: "fit-content",
          position: isSmallScreen ? "relative" : "absolute",
          bottom: isSmallScreen ? null : "-110px",
          left: isSmallScreen ? null : "210px",
          display: "flex",
        }}
      >
        <Box>
          <Typography variant={isSmallScreen ? "h5" : 'h3'} sx={{ fontWeight: 700 }}>
            12+
          </Typography>
          <Typography>Blogs Published</Typography>
        </Box>
        <Box>
          <Typography variant={isSmallScreen ? "h5" : 'h3'} sx={{ fontWeight: 700 }}>
            18K+
          </Typography>
          <Typography>Views on Finsweet</Typography>
        </Box>
        <Box>
          <Typography variant={isSmallScreen ? "h5" : 'h3'} sx={{ fontWeight: 700 }}>
            30K+
          </Typography>
          <Typography>Total active Users</Typography>
        </Box>
        <Box sx={{ display: isSmallScreen ? "none" : "block" }}>
          <div
            style={{
              position: "absolute",
              bottom: "-23px",
              left: 0,
              width: "48%",
              height: "30px",
              backgroundColor: "#592EA9",
              zIndex: 1,
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              bottom: "-23px",
              left: "47%",
              width: "100%",
              height: "30px",
              backgroundColor: "#ffd050",
              zIndex: 1,
            }}
          ></div>
        </Box>
      </Box>
    </Container>
  );
};

export default AboutPageHead;
