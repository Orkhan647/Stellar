import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import postIMg from "../../assets/posts-image.png";

const Posts = () => {
  const boxStyles = {
    padding: '20px 50px',
    transition: 'background-color 0.3s',
    '&:hover': {
      bgcolor: '#FBF6EA',
    },
  };
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container>
      <Grid
        container
        spacing={1}  
        gap={isSmallScreen ? '16px' : '80px'}  // Adjust the gap for smaller screens
        paddingTop={isSmallScreen ? "20px" : "50px"} // Adjust the padding for smaller screens
      >
    
        <Grid item xs={12} md={6}>
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            Featured Post
          </Typography>
          <Box sx={{ padding: isSmallScreen ? "20px" : "50px" }}>
            <img
              style={{ paddingBottom: isSmallScreen ? "10px" : "30px", width: "100%" }}
              src={postIMg}
              alt="home image"
            />

            <Typography mb={2} sx={{ fontSize: isSmallScreen ? "12px" : "14px" }}>
              By{" "}
              <span style={{ color: "#592EA9", fontWeight: 700 }}>
                John Doe
              </span>{" "}
              | May 23, 2022
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </Typography>
            <Typography mb={2} sx={{ fontSize: isSmallScreen ? "12px" : "14px", color: "#6D6E76" }}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </Typography>
            <Button
              sx={{
                color: "black",
                bgcolor: (theme) => theme.palette.secondary.main,
                marginTop: isSmallScreen ? "8px" : "10px",
                width: isLargeScreen ? "50%" : "100%", 
                height: "35px",
                "&:hover": { bgcolor: "#232536", color: "white" },
              }}
            >
              <span style={{ fontWeight: 700 }}>Read More</span>
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box sx={{ display: 'flex', justifyContent:'space-between' }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: 700, paddingBottom: isMediumScreen ? "20px" : "30px" }}
            >
              All Posts
            </Typography>
            <Typography sx={{
              '&:hover': {
                color: '#592EA9',
                cursor: 'pointer'
              }
            }}>View All</Typography>
          </Box>

          {[1, 2, 3, 4].map((post) => (
            <Box key={post} sx={boxStyles}>
              <Typography sx={{ fontSize: isSmallScreen ? '12px' : '14px', paddingBottom: '8px' }}>
                By{" "}
                <span style={{ color: "#592EA9", fontWeight: 700 }}>
                  John Doe
                </span>{" "}
                Aug 23, 2021
              </Typography>
              <Typography sx={{ fontWeight: 700 }}>
                8 Figma design systems that <br /> you can download for free{" "}
                <br /> today.
              </Typography>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Posts;
