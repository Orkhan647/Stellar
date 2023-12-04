import React from "react";
import { useParams } from "react-router-dom";
import { categories } from "../../components/AboutListAuthors/AboutAuthors";
import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";

const DetailPosts = () => {
  const { id } = useParams();
  const data = categories.filter((item) => item.id === +id)[0];
  const isSmallScreen = useMediaQuery('(max-width:600px)'); // Adjust the threshold as needed

  const firstPart = data.posts.title1.substring(0, 24);
  const secondPart = data.posts.title1.substring(24);
  const firstDescriptionPart = data.posts.description1.substring(0, 71);
  const secondDescriptionPart = data.posts.description1.substring(71);
  const firstPart2 = data.posts.title2.substring(0, 34);
  const secondPart2 = data.posts.title2.substring(34);

  return (
    <Container>
      <Typography variant="h4" sx={{ fontWeight: 700, mt: 5, mb: 5 }}>
        All Posts
      </Typography>
      <Grid container >
        <Grid item sx={{ display: "flex",flexDirection:isSmallScreen?"column":"row"}}>
          <Box>
            <img
              src={data.posts.img1}
              alt="Post Image"
              style={{ maxWidth: isSmallScreen? "100%":"80%" }}
            />
          </Box>
          <Box sx={{ mt: isSmallScreen ? 4 : 6, ml: isSmallScreen ? 0 : 2 }}>
            <Typography
              sx={{textAlign:isSmallScreen?"center":null,
                fontWeight: "bold",
                "&:hover": { color: "purple", cursor: "pointer" },
              }}
            >
              {data.posts.busines}
            </Typography>
            <Typography variant={isSmallScreen? "h5":"h4"} sx={{ fontWeight: 700, mb: 1, mt: 1 }}>
              {" "}
              {firstPart}
              <br />
              {secondPart}
            </Typography>
            <Typography sx={{ color: "#6D6E76",display:isSmallScreen?"none":null }}>
              {firstDescriptionPart}
              <br />
              {secondDescriptionPart}
            </Typography>
          </Box>
        </Grid>
        <Grid item sx={{ display: "flex", mt: isSmallScreen ? 5 : 0,flexDirection:isSmallScreen?"column":"row" }}>
          <Box>
            <img
              src={data.posts.img2}
              alt="Post Image"
              style={{ maxWidth: isSmallScreen? "100%":"80%"}}
            />
          </Box>
          <Box sx={{ mt: isSmallScreen ? 4 : 6, ml: isSmallScreen ? 0 : 2 }}>
            <Typography
              sx={{textAlign:isSmallScreen?"center":null,
                fontWeight: "bold",
                "&:hover": { color: "purple", cursor: "pointer" },
              }}
            >
              {data.posts.economy}
            </Typography>
            <Typography variant={isSmallScreen?"h5":"h4"} sx={{ fontWeight: 700, mb: 1, mt: 1 }}>
              {" "}
              {firstPart2}
              <br />
              {secondPart2}
            </Typography>
            <Typography sx={{ color: "#6D6E76",display:isSmallScreen?"none":null  }}>
              {firstDescriptionPart}
              <br />
              {secondDescriptionPart}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DetailPosts;
