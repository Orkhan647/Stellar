import React, { useEffect, useState } from "react";
import PageContainer from "../../components/PageContainer/PageContainer";
import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import {  createTheme } from "@mui/material/styles";
import profilePicture from "../../assets/Profile picture.png";
import rocketIcon from "../../assets/rocket icon.png";
import startupImg from "../../assets/startupImg.png";
import blog1 from "../../assets/blog1.png";
import blog2 from "../../assets/blog2.png";
import blog3 from "../../assets/blog3.png";
import JoinOurTeam from "../../components/JoinOurTeam/JoinOurTeam";

const StartUp = () => {
  const [isAuthorHovered, setIsAuthorHovered] = useState(false);
  const theme = createTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <PageContainer>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "start",
            textAlign: "center",
            ml:isSmallScreen? null:"250px",
            mt: "150px",
            mb:"100px"
          }}
        >
          <Box sx={{ display: "flex", gap: "15px" }}>
            
            <img src={profilePicture} alt="" />
            <Box sx={{display:'flex',flexDirection:'column',textAlign:'left'}}>
            <Typography
              variant="h6"
              sx={{
                "&:hover": {
                  color: "#592EA9",
                  cursor: "pointer",
                },
                color: isAuthorHovered ? "#592EA9" : "inherit",
              }}
              onMouseOver={() => setIsAuthorHovered(true)}
              onMouseOut={() => setIsAuthorHovered(false)}
              >
              Andrew Jonson
            </Typography>
            <Typography sx={{ color: "#6D6E76" }}>
              Posted on 27th January 2022
            </Typography>
                </Box>
          </Box>
          <Typography variant="h3" sx={{ fontWeight: 700, mt: 3,textAlign:'left' }}>
            Step-by-step guide to choosing <br /> great font pairs
          </Typography>
          <Box
            sx={{ display: "flex", mt: 4, gap: "15px", alignItems: "center", textAlign: "center" }}
          >
            <img style={{ objectFit: "contain" }} src={rocketIcon} alt="" />
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
            
              }}
            >
              Startup
            </Typography>
          </Box>
        </Box>
        <img
          style={{ maxWidth: "100%", width: "100%", marginLeft: "auto", marginRight: "auto" }}
          src={startupImg}
          alt=""
        />
        <Box sx={{ mt: 6, ml: 2, mb: 10, marginRight: "auto", marginLeft: isSmallScreen?"auto":"100px" }}>
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed
            do eiusmod.
          </Typography>
          <Typography sx={{ color: "#6D6E76", mt: 2 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore <br /> magna aliqua.
            Non blandit massa enim nec. Scelerisque viverra mauris in aliquam
            sem. At risus viverra <br /> adipiscing at in tellus. Sociis natoque
            penatibus et magnis dis parturient montes. Ridiculus mus mauris
            vitae <br />
            ultricies leo. Neque egestas congue quisque egestas diam. Risus in
            hendrerit gravida rutrum quisque non.
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 700, mt: 5 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed
            do eiusmod.
          </Typography>
          <Typography sx={{ color: "#6D6E76", mt: 2 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore <br /> magna aliqua.
            Non blandit massa enim nec. Scelerisque viverra mauris in aliquam
            sem. At risus viverra <br /> adipiscing at in tellus. Sociis natoque
            penatibus et magnis dis parturient montes. Ridiculus mus mauris
            vitae <br />
            ultricies leo. Neque egestas congue quisque egestas diam. Risus in
            hendrerit gravida rutrum quisque non.
          </Typography>
          <Typography sx={{ color: "#6D6E76", mt: 3 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore <br /> magna aliqua.
            Non blandit massa enim nec. Scelerisque viverra mauris in aliquam
            sem. At risus viverra <br /> adipiscing at in tellus. Sociis natoque
            penatibus et magnis dis parturient montes. Ridiculus mus mauris
            vitae <br />
            ultricies leo. Neque egestas congue quisque egestas diam. Risus in
            hendrerit gravida rutrum quisque non.
            <Box sx={{ color: "#161722", fontWeight: "bold", ml: 2, mt: 2 }}>
              <ul>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Non blandit massa enim nec scelerisque</li>
                <li>Neque egestas congue quisque egestas</li>
              </ul>
            </Box>
          </Typography>

          <Typography sx={{ color: "#6D6E76", mt: 3 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore <br /> magna aliqua.
            Non blandit massa enim nec. Scelerisque viverra mauris in aliquam
            sem. At risus viverra <br /> adipiscing at in tellus. Sociis natoque
            penatibus et magnis dis parturient montes. Ridiculus mus mauris
            vitae <br />
            ultricies leo. Neque egestas congue quisque egestas diam. Risus in
            hendrerit gravida rutrum quisque non.
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 700, mt: 3 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed
            do eiusmod.
          </Typography>
          <Typography sx={{ color: "#6D6E76", mt: 2 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore <br /> magna aliqua.
            Non blandit massa enim nec. Scelerisque viverra mauris in aliquam
            sem. At risus viverra <br /> adipiscing at in tellus. Sociis natoque
            penatibus et magnis dis parturient montes. Ridiculus mus mauris
            vitae <br />
            ultricies leo. Neque egestas congue quisque egestas diam. Risus in
            hendrerit gravida rutrum quisque non.
          </Typography>
        </Box>
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 4, textAlign: "left" }}>
          What to read next
        </Typography>
        <Box sx={{ display: "flex", flexDirection:isSmallScreen?"column":'row', gap: "20px", overflowX: "auto", alignItems: "center" }}>
          <Box sx={{ maxWidth: "350px", width: "100%", flex: "0 0 auto" }}>
            <img
              src={blog1}
              alt=""
              style={{ width: "100%", height: "auto", maxWidth: "100%" }}
            />
            <Typography sx={{ mt: 1, display: "flex", gap: 1 }}>
              By
              <Typography
                sx={{
                  "&:hover": {
                    color: "purple",
                    cursor: "pointer",
                  },
                }}
              >
                John Doe
              </Typography>{" "}
              l Aug 23, 2021{" "}
            </Typography>
            <Typography variant="h5" sx={{ mt: 1, fontWeight: 700, textAlign: "left" }}>
              A UX Case Study Creating a <br /> Studious Environment for <br />{" "}
              Students:{" "}
            </Typography>
            <Typography sx={{ fontSize: "14px", mt: 2, color: "#656672", textAlign: "left" }}>
              Duis aute irure dolor in reprehenderit in voluptate <br /> velit
              esse cillum dolore eu fugiat nulla pariatur. <br /> Excepteur sint
              occaecat cupidatat non proident.
            </Typography>
          </Box>
          <Box sx={{ maxWidth: "350px", width: "100%", flex: "0 0 auto" }}>
            <img
              src={blog2}
              alt=""
              style={{ width: "100%", height: "auto", maxWidth: "100%" }}
            />
            <Typography sx={{ mt: 1, display: "flex", gap: 1}}>
              By
              <Typography
                sx={{
                  "&:hover": {
                    color: "purple",
                    cursor: "pointer",
                  },
                }}
              >
                John Doe
              </Typography>{" "}
              l Aug 23, 2021{" "}
            </Typography>
            <Typography variant="h5" sx={{ mt: 1, fontWeight: 700, textAlign: "left" }}>
              A UX Case Study Creating a <br /> Studious Environment for <br />{" "}
              Students:{" "}
            </Typography>
            <Typography sx={{ fontSize: "14px", mt: 2, color: "#656672", textAlign: "left" }}>
              Duis aute irure dolor in reprehenderit in voluptate <br /> velit
              esse cillum dolore eu fugiat nulla pariatur. <br /> Excepteur sint
              occaecat cupidatat non proident.
            </Typography>
          </Box>
          <Box sx={{ maxWidth: "350px", width: "100%", flex: "0 0 auto" }}>
            <img
              src={blog3}
              alt=""
              style={{ width: "100%", height: "auto", maxWidth: "100%" }}
            />
            <Typography sx={{ mt: 1, display: "flex", gap: 1 }}>
              By
              <Typography
                sx={{
                  "&:hover": {
                    color: "purple",
                    cursor: "pointer",
                  },
                }}
              >
                John Doe
              </Typography>{" "}
              l Aug 23, 2021{" "}
            </Typography>
            <Typography variant="h5" sx={{ mt: 1, fontWeight: 700, textAlign: "left" }}>
              A UX Case Study Creating a <br /> Studious Environment for <br />{" "}
              Students:{" "}
            </Typography>
            <Typography sx={{ fontSize: "14px", mt: 2, color: "#656672", textAlign: "left" }}>
              Duis aute irure dolor in reprehenderit in voluptate <br /> velit
              esse cillum dolore eu fugiat nulla pariatur. <br /> Excepteur sint
              occaecat cupidatat non proident.
            </Typography>
          </Box>
        </Box>
        <hr style={{ margin: '75px 0', color: '#6D6E76' }} />
        <JoinOurTeam />
      </Container>
    </PageContainer>
  );
};

export default StartUp;
