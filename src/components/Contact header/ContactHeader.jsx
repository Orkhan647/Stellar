import { Box, Container, Typography } from "@mui/material";
import React from "react";

const ContactHeader = () => {
  const headerStyles = {
    fontWeight: 700,

    mb: 1,
  };

  return (
    <Container sx={{ mt: 20 }}>
      <Box sx={{ textAlign: "center" }}>
        <Typography sx={{ ...headerStyles, fontSize: "18px" }}>
          Contact us
        </Typography>
        <Typography variant="h4" sx={{ ...headerStyles, mb: 1 }}>
          Let’s Start a Conversation
        </Typography>
        <Typography sx={{ color: "#6D6E76", fontSize: "14px", mb: 5 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore <br /> et dolore magna aliqua. Ut
          enim ad minim.
        </Typography>
      </Box>
    </Container>
  );
};

export default ContactHeader;
