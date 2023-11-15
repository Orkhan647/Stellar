import React, { useState } from "react";
import {
  Avatar,
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import useMediaQuery from "@mui/material/useMediaQuery";
import avatar1 from "../../assets/Profile picture.png";
import avatar2 from "../../assets/logo 2.png";
import avatar3 from "../../assets/logo 1.png";

const AboutUs = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [currentAvatarIndex, setCurrentAvatarIndex] = useState(0);
  const avatars = [avatar1, avatar2,avatar3];

  const customData = [
    { name: "Orxan Kerimov", location: "Azerbaijan, Baku" },
    { name: "Pakize Eliyeva", location: "Azerbaijan, Baku" },
    { name: "Hesen Ehmedov", location: "Azerbaijan, Baku" },
  ];

  const [avatarInfo, setAvatarInfo] = useState(customData[0]);

  const testimonialGridStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: isSmallScreen ? "40px 20px" : "80px 150px",
  };

  const contentGridStyles = {
    display: "flex",
    gap: "90px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: isSmallScreen ? "40px 20px" : "80px 50px",
  };

  const avatarContainerStyles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "5px",
    "& .MuiIconButton-root": {
      borderRadius: "50%",
      backgroundColor: "white",
      "&:hover": {
        backgroundColor: "#232536",
        color: "white",
      },
    },
    "& .MuiSvgIcon-root": {
      fontSize: "24px",
    },
  };

  const handleNextAvatar = () => {
    const nextIndex = (currentAvatarIndex + 1) % avatars.length;
    setCurrentAvatarIndex(nextIndex);
    updateAvatarInfo(nextIndex);
  };

  const handlePrevAvatar = () => {
    const prevIndex = (currentAvatarIndex - 1 + avatars.length) % avatars.length;
    setCurrentAvatarIndex(prevIndex);
    updateAvatarInfo(prevIndex);
  };

  const updateAvatarInfo = (index) => {
    setAvatarInfo(customData[index]);
  };

  const handleAvatarClick = () => {
    const nextIndex = (currentAvatarIndex + 1) % avatars.length;
    setCurrentAvatarIndex(nextIndex);
    updateAvatarInfo(nextIndex);
  };

  return (
    <Container sx={{paddingBottom:'50px'}}>
      <Grid container sx={{ bgcolor: "#FBF6EA" }}>
        <Grid item xs={12} sm={6} sx={testimonialGridStyles}>
          <Typography sx={{ fontWeight: 700, fontSize: "14px", mb: 3 }}>
            TESTIMONIALS
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
            What people say <br /> about our blog
          </Typography>
          <Typography sx={{ fontSize: "14px", color: "#6D6E76", mb: 2 }}>
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed
            do eiusmod tempor.
          </Typography>
        </Grid>
        <Divider
          orientation="vertical"
          flexItem
          sx={{ my: isSmallScreen ? 2 : 10, mx: 2 }}
        />

        <Grid item xs={12} sm={5} sx={contentGridStyles}>
          <Typography sx={{ fontSize: isSmallScreen ? "16px" : "20px", fontWeight: 700 }}>
            Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit, sed do <br />
            eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua.
          </Typography>

          <Grid container sx={avatarContainerStyles} onClick={handleAvatarClick}>
            <Grid item sx={{ display: "flex" }}>
              <Avatar alt="Avatar" src={avatars[currentAvatarIndex]} />
              <Box sx={{ ml: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  {avatarInfo.name}
                </Typography>
                <Typography variant="body2">{avatarInfo.location}</Typography>
              </Box>
            </Grid>
            <Grid item>
              <IconButton variant="contained" color="primary" onClick={handlePrevAvatar}>
                <ArrowBackIcon />
              </IconButton>
              <IconButton
                sx={{ marginLeft: isSmallScreen ? '5px' : '10px' }}
                variant="contained"
                color="primary"
                onClick={handleNextAvatar}
              >
                <ArrowForwardIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUs;
