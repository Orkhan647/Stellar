import {
  Box,
  Container,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";

const Working = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container>
      <Box
        sx={{
          padding: "20px",
          bgcolor: "#592EA9",
          width: "70%",
          margin: "0 auto",
          mb: 8,
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{ textAlign: "center", display: "flex" }}
        >
          <Grid item xs={6} sx={{ color: "#bdabdd" }}>
            <Typography
              sx={{
                marginRight: isSmallScreen ? 0 : "150px",
                fontWeight: isSmallScreen ? 700 : null,
              }}
            >
              Working Hours
            </Typography>
          </Grid>
          <Grid item xs={6} sx={{ color: "#bdabdd" }}>
            <Typography
              sx={{
                marginRight: isSmallScreen ? 0 : "130px",
                display: isSmallScreen ? "none" : "block",
              }}
            >
              Contact Us
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Divider sx={{ backgroundColor: "#bdabdd" }} />
          </Grid>
        </Grid>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            mt: 2,
            flexDirection: isSmallScreen ? "column" : "row",
          }}
        >
          <Box sx={{ marginBottom: isSmallScreen ? 2 : 0 }}>
            <Typography variant="h4" sx={{ color: "white", fontWeight: 700 }}>
              Monday To Friday
            </Typography>
            <Typography
              variant="h5"
              sx={{ color: "white", fontWeight: 700, mt: 1 }}
            >
              9:00 AM to 8:00 PM
            </Typography>
            <Typography sx={{ color: "#bdabdd", mt: 1 }}>
              Our Support Team is available 24/7
            </Typography>
          </Box>
          <Box>
            <Box sx={{display:isSmallScreen ? 'block':'none'}}>
              <Typography
                sx={{
                  color: "#bdabdd",
                  marginRight: isSmallScreen ? 0 : "130px",
                  display: isSmallScreen ? "block" : "none",
                  paddingBottom: isSmallScreen ? "10px" : null,
                  fontWeight: 700,
                }}
              >
                Contact Us
              </Typography>
              <Divider
                sx={{ backgroundColor: "#bdabdd", marginBottom: "10px" }}
              />
            </Box>
            <Typography variant="h4" sx={{ color: "white", fontWeight: 700 }}>
              020 7993 2905
            </Typography>
            <Typography sx={{ color: "#bdabdd", mt: 1 }}>
              hello@finsweet.com
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Working;
