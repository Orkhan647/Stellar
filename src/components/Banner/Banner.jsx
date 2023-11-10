import React from "react";
import banner from "../../assets/banner.png";
import { Box, Button, Container, Typography } from "@mui/material";

const Banner = () => {
  return (
    <div style={{ position: "relative" }}>
      <img
        src={banner}
        alt="Banner Image"
        style={{ width: "100%", height: "auto" }}
      />
      <Container>
        <div
             style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                paddingLeft:'100px',
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}>

        <div
          style={{
              position: "absolute",
            top: "20%",
            color: "white",
            textAlign: "left",
            fontSize: "2em",
            fontWeight: "bold",
          }}
          >
        <Box>
  <Typography style={{ marginBottom: "25px" }}>
    POSTED ON <span style={{ fontWeight: 900 }}>START UP</span>
  </Typography>
  <Typography variant="h3" style={{ marginBottom: "20px",fontWeight:700 }}>
    Step-by-step guide to choosing <br /> great font pairs
  </Typography>
  <Typography style={{ marginBottom: "20px" }}>
    By <span style={{ color: "#FFD050" }}>James West</span> | May 23, 2022
  </Typography>
  <Typography style={{ marginBottom: "20px" }}>
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
    eu <br /> fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident.
  </Typography>
</Box>
<Button
              sx={{
                  color: "black",
                bgcolor: (theme) => theme.palette.secondary.main,
                marginTop: "10px",
                width:'25%',
               height:'35px',
                "&:hover": { bgcolor: "white" },
            }}
            >
            <span style={{fontWeight:700}}>Read More</span>
            </Button>

        </div>
            </div>
      </Container>
    </div>
  );
};

export default Banner;
