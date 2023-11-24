import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";
import aboutImg from "../../assets/aboutImg.png";

const AboutPageHead = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTabletScreen = useMediaQuery((theme) => theme.breakpoints.down("lg"));

  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return (
    <Container sx={{ mt: isSmallScreen ? 5 : 10 }}>
      <Grid container sx={{ flexDirection: isSmallScreen ? "column-reverse" : "row" }}>
        <Grid item xs={12} md={6} sx={{ order: isSmallScreen ? 2 : 1 }}>
          <Box
            sx={{
              mt:isSmallScreen? 4:null,
              position: "relative",
              top: isTabletScreen ? null : "70px",
              left: isTabletScreen ? null : "40px",
              zIndex: 1,
              bgcolor: "white",
              padding: isSmallScreen ? "15px" : "60px",
              textAlign: "center",
             
            }}
          >
            <Typography sx={{ fontWeight: 700 }}>ABOUT US</Typography>
            <Typography
              variant={isSmallScreen ? "h6" : "h4"}
              sx={{ fontWeight: 700, mt: 2 }}
            >
              We are a team of <br /> content writers who <br /> share their
              learnings
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={{ order: isSmallScreen ? 1 : 2 }}>
          <Typography
            sx={{
              
              color: "#4C4C4C",
              mt:isTabletScreen ? 10:14,
              mb: isSmallScreen ? 10 : 2,
              display: isSmallScreen ? "none" : "block",
              textAlign: "center",
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

      <Box sx={{ position: "relative", mt: isSmallScreen ? 0 : 4 }}>
        <img
          style={{
            width: "100%",
            height: isSmallScreen ? "200px" : "100%",
            objectFit: "cover",

          }}
          src={aboutImg}
          alt=""
        />
      <Box
        sx={{
          bgcolor: (theme) => theme.palette.secondary.main,
          textAlign: isSmallScreen? 'center':"left",
          width: isSmallScreen ? 'auto' : 'fit-content',
          gap: isSmallScreen ? "5px" : "10px", 
          padding: isSmallScreen ? "10px" : "30px",
          display: "flex",
          position: isSmallScreen? 'relative':'absolute',
          bottom:isSmallScreen? '4px':'29px',
          left: isSmallScreen? '0px':'120px'

          
         
        }}
      >
        <Box sx={{ mb: isSmallScreen ? 2 : 0 }}>
          <Typography
            variant={isSmallScreen ? "h5" : "h3"}
            sx={{ fontWeight: 700 }}
          >
            12+
          </Typography>
          <Typography>Blogs Published</Typography>
        </Box>
        <Box sx={{ mb: isSmallScreen ? 2 : 0 }}>
          <Typography
            variant={isSmallScreen ? "h5" : "h3"}
            sx={{ fontWeight: 700 }}
          >
            18K+
          </Typography>
          <Typography>Views on Finsweet</Typography>
        </Box>
        <Box sx={{ mb: isSmallScreen ? 2 : 0 }}>
          <Typography
            variant={isSmallScreen ? "h5" : "h3"}
            sx={{ fontWeight: 700 }}
          >
            30K+
          </Typography>
          <Typography>Total active Users</Typography>
        </Box>
        <Box sx={{display:isSmallScreen? 'none':'block'}}>
        
         <div
          style={{
            position: "absolute",
            bottom: -25,
            left: 0,
            width: "15%",
            height: "25px",
            backgroundColor: "#592EA9",
            zIndex: 1,
          }}
        ></div>
       
        <div
          style={{
            position: "absolute",
            bottom: -25,
            left: "15%",
            width: "60%",
            height: "25px",
            backgroundColor: "#592EA9",
            zIndex: 1,
          }}
        ></div>
     
        <div
          style={{
            position: "absolute",
            bottom: -25,
            left: "50%",
            width: "100%",
            height: "25px",
            backgroundColor: "#FFD050",
            zIndex: 1,
          }}
        ></div>
        </Box>
      </Box>
      </Box>


      <Grid container sx={{ justifyContent: 'space-around', padding: isSmallScreen ? '20px 10px' : '80px 40px', bgcolor: '#F4F0F8' }}>
        <Grid item xs={12} md={6} sx={{ mb: isSmallScreen ? 3 : null }}>
          <Typography sx={{ fontWeight: 700, mb: 2 }}>OUR MISSION</Typography>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
            Creating valuable content for <br /> creatives all around the world
          </Typography>
          <Typography sx={{ color: '#6D6E76' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
            <br />
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non{" "}
            <br />
            blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.{" "}
            <br />
            At risus viverra adipiscing at in tellus.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography sx={{ fontWeight: 700, mb: 2 }}>Our Vision</Typography>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
            A platform that empowers <br /> individuals to improve
          </Typography>
          <Typography sx={{ color: '#6D6E76' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
            <br />
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non{" "}
            <br />
            blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.{" "}
            <br />
            At risus viverra adipiscing at in tellus.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutPageHead;
