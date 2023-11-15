import { Button, Container, Typography } from "@mui/material";
import React from "react";

const JoinOurTeam = () => {
  return (
    <Container sx={{ textAlign: 'center',paddingBottom:'50px' }}>
      <Typography variant="h5" sx={{ fontWeight: 700, textAlign: 'center' }}>
        Join our team to be a part <br /> of our story
      </Typography>
      <Typography sx={{ color: '#6D6E76', textAlign: 'center' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed do eiusmod
        tempor incididunt.
      </Typography>
      <Button
        sx={{
          color: "black",
          bgcolor: (theme) => theme.palette.secondary.main,
          marginTop: "10px",
          
          height: "35px",
          "&:hover": { bgcolor: "#232536",color:'white' },
          display: "flex",
          justifyContent: "center",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <span style={{ fontWeight: 700 }}>Read More</span>
      </Button>
    </Container>
  );
};

export default JoinOurTeam;
