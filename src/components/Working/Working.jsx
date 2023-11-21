import {
    Box,
    Container,
    Divider,
    Button,
    Grid,
    Typography,
    useMediaQuery,
    useTheme,
  } from "@mui/material";
  import React from "react";
  
  const Working = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  
    const inputPlaceholderStyle = {
      marginBottom: "8px",
      padding: "10px",
    };
  
    const textareaStyle = {
      ...inputPlaceholderStyle,
      height: '100px',
      fontSize: '16px',
      resize: 'none',
    };
  
    return (
      <Container>
        <Box
          sx={{
            padding: "20px",
            bgcolor: "#592EA9",
            width: "70%",
            margin: "0 auto",
            mb: 2,
            marginTop: '100px'
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
              <Box sx={{ display: isSmallScreen ? "block" : "none" }}>
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
  
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width:isSmallScreen? null: "73.7%",
            margin: "0 auto",
            mb: 10,
          }}
        >
          <input
            style={{ ...inputPlaceholderStyle }}
            placeholder="Full Name"
          />
          <input
            style={{ ...inputPlaceholderStyle }}
            placeholder="Your Email"
          />
        
          <select
            style={{ ...inputPlaceholderStyle, height: '40px' }}
            defaultValue="" 
          >
            <option value="" disabled>Select an option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
          <textarea
            style={textareaStyle}
            placeholder="Message"
          />
          <Button
            sx={{
              color: "black",
              bgcolor: (theme) => theme.palette.secondary.main,
              marginTop: "10px",
              height: "35px",
              "&:hover": {
                bgcolor: (theme) => theme.palette.primary.main,
                color: "white",
              },
            }}
          >
            <span style={{ fontWeight: 700 }}>Send Message</span>
          </Button>
        </Box>
      </Container>
    );
  };
  
  export default Working;
  