import React from "react";
import PageContainer from "../../components/PageContainer/PageContainer";
import { Box, Container, Typography, useMediaQuery } from "@mui/material";

const PrivacyPolicy = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <PageContainer>
      <Box sx={{ bgcolor: "#F4F0F8" }}>
        <Container sx={{ mt: 9 }}>
          <Box
            sx={{ p: isSmallScreen ? "50px" : "120px", textAlign: "center" }}
          >
            <Typography
              variant={isSmallScreen ? "h4" : "h3"}
              sx={{ fontWeight: 700 }}
            >
              Privacy Policy
            </Typography>
            <Typography sx={{ color: "#777684" }}>
              Last Updated on 27th January 2022
            </Typography>
          </Box>
        </Container>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 10,
          p: isSmallScreen ? "20px" : null,
        }}
      >
        <Box sx={{ textAlign: "left" }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
            Lorem ipsum dolor sit amet
          </Typography>
          <Typography sx={{ color: "#4C4C4C" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore <br /> et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut <br />
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum <br /> dolore eu fugiat
            nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore
            magna aliqua. Non blandit massa enim nec. Scelerisque viverra <br />{" "}
            mauris in aliquam sem. At risus viverra adipiscing at in tellus.
            Sociis natoque penatibus et magnis dis <br /> parturient montes.
            Ridiculus mus mauris vitae ultricies leo. Neque egestas congue
            quisque egestas <br /> diam. Risus in hendrerit gravida rutrum
            quisque non. Sit amet nulla facilisi morbi tempus iaculis urna.{" "}
            <br /> Lorem sed risus ultricies tristique nulla aliquet enim.
            Volutpat blandit aliquam etiam erat velit. Orci eu <br /> lobortis
            elementum nibh. Ipsum suspendisse ultrices gravida dictum fusce ut
            placerat orci nulla. <br /> Neque convallis a cras semper auctor
            neque vitae tempus quam.
          </Typography>
        </Box>
        <Box sx={{ textAlign: "left", mb: 10 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, mt: 5 }}>
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed
            do eiusmod tempor.
          </Typography>
          <Typography sx={{ color: "#4C4C4C" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore <br /> et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut <br />
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum <br /> dolore eu fugiat
            nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore
            magna aliqua. Non blandit massa enim nec. Scelerisque viverra <br />{" "}
            mauris in aliquam sem. At risus viverra adipiscing at in tellus.
            Sociis natoque penatibus et magnis dis <br /> parturient montes.
            Ridiculus mus mauris vitae ultricies leo. Neque egestas congue
            quisque egestas <br /> diam. Risus in hendrerit gravida rutrum
            quisque non. Sit amet nulla facilisi morbi tempus iaculis urna.{" "}
            <br /> Lorem sed risus ultricies tristique nulla aliquet enim.
            Volutpat blandit aliquam etiam erat velit. Orci eu <br /> lobortis
            elementum nibh. Ipsum suspendisse ultrices gravida dictum fusce ut
            placerat orci nulla. <br /> Neque convallis a cras semper auctor
            neque vitae tempus quam.
          </Typography>
        </Box>
      </Box>
    </PageContainer>
  );
};

export default PrivacyPolicy;
