import { Button, Container, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import useMediaQuery from "@mui/material/useMediaQuery";

const AboutUs = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container>
      <Grid container sx={{ bgcolor: "#F4F0F8", position: "relative" }}>
        {/* First Line (15% white) */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "15%",
            height: "20px",
            backgroundColor: "white",
            zIndex: 1,
          }}
        ></div>
        {/* Second Line (60% red) */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "15%",
            width: "60%",
            height: "20px",
            backgroundColor: "#FFD050",
            zIndex: 1,
          }}
        ></div>
        {/* Third Line (25% black) */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "75%",
            width: "25%",
            height: "20px",
            backgroundColor: "#592EA9",
            zIndex: 1,
          }}
        ></div>

        <Grid item sx={{ padding: isSmallScreen ? "40px 20px" : "80px 50px" }}>
          <Typography sx={{ fontWeight: 700, fontSize: "14px", mb: 3 }}>
            ABOUT US
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
            We are a community of <br /> content writers who share their <br />{" "}
            learnings
          </Typography>
          <Typography sx={{ fontSize: "14px", color: "#6D6E76", mb: 2 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
            <br />
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
          <Button
  sx={{
    "&:hover": {
      color: "#592EA9",
      background: "none",
    },
    width: "100%", 
    [theme.breakpoints.up("md")]: {
      
      width: "auto", 
    },
  }}
>
  <span style={{ fontWeight: 700 }}>Read More</span>
  <ArrowForwardIosIcon sx={{ fontSize: 12, marginLeft: 1 }} />
</Button>
        </Grid>
        <Grid item sx={{ padding: isSmallScreen ? "40px 20px" : "80px 50px" }}>
          <Typography sx={{ fontWeight: 700, fontSize: "14px", mb: 3 }}>
            OUR MISSION
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
            Creating valuable content for <br /> creatives all around the world
          </Typography>
          <Typography sx={{ fontSize: "14px", color: "#6D6E76" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
            <br />
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut{" "}
            <br /> enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi <br /> ut aliquip ex ea commodo consequat.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUs;
