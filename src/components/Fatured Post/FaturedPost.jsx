import { Box, Button, Container, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import useMediaQuery from "@mui/material/useMediaQuery";
import postPhoto from '../../assets/about img.png';

const FaturedPost = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ bgcolor: '#F4F0F8',pb:3}}>
      <Container sx={{ paddingTop: '100px' }}>
        <Grid container sx={{ flexDirection: isSmallScreen ? 'column-reverse' : 'row', gridColumnGap: isSmallScreen ? '0px' : '40px' }}>
          <Grid item>
            <Typography  sx={{ marginBottom: isSmallScreen ? '5px' : '20px', fontWeight: 'bold' }}>Featured Post</Typography>
            <Typography variant="h5" sx={{ fontWeight: 700 }}>
              Step-by-step guide to choosing great <br /> font pairs
            </Typography>
            <Typography sx={{ mt: 1, mb: 1 }}>By <span style={{ color: '#592EA9' }}>John Doe </span> l May 23, 2022</Typography>
            <Typography sx={{ color: '#6D6E76' }}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat <br /> nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </Typography>
            <Button
              sx={{
                bgcolor: '#FFD050',
                mt: 2,
                "&:hover": {
                  color: "white",
                  bgcolor: "#232536",
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
          <Grid item>
            <img
              src={postPhoto}
              alt=""
              style={{
                display: 'block',
                width: "100%",
                maxWidth: "100%" ,
                objectFit: "cover",
                paddingBottom:isSmallScreen ? '15px': null
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FaturedPost;
