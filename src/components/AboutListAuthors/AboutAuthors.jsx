import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { Facebook, Twitter, LinkedIn, Instagram } from "@mui/icons-material";
import logo1 from "../../assets/logo 1.png";
import logo2 from "../../assets/logo 2.png";
import logo3 from "../../assets/logo 3.png";
import logo4 from "../../assets/logo 4.png";
import logo5 from "../../assets/logo-5.png";
import logo6 from "../../assets/logo 6.png";
import logo7 from "../../assets/logo 7.png";
import logo8 from "../../assets/logo 8.png";

const categories = [
  {
    id: 1,
    title: "Floyd Miles",
    description: "Content Writer @Company",
    logo: logo1,
  },
  {
    id: 2,
    title: "Dianne Russell",
    description: "Content Writer @Company",
    logo: logo2,
  },
  {
    id: 3,
    title: "Jenny Wilson",
    description: "Content Writer @Company",
    logo: logo3,
  },
  {
    id: 4,
    title: "Leslie Alexander",
    description: "Content Writer @Company",
    logo: logo4,
  },
  {
    id: 5,
    title: "Guy Hawkins",
    description: "Content Writer @Company",
    logo: logo5,
  },
  {
    id: 6,
    title: "Eleanor Pena",
    description: "Content Writer @Company",
    logo: logo6,
  },
  {
    id: 7,
    title: "Robert Fox",
    description: "Content Writer @Company",
    logo: logo7,
  },
  {
    id: 8,
    title: "Jacob Jones",
    description: "Content Writer @Company",
    logo: logo8,
  },
];

const AboutAuthors = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Container sx={{ marginBottom: "100px", padding: "50px 0" }}>
      <Typography
        variant="h5"
        sx={{ textAlign: "center", fontWeight: 700, mb: 3 }}
      >
        List of Authors
      </Typography>

      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent={isSmallScreen ? "center" : "space-between"}
        alignItems="center"
      >
        {categories.map((category, index) => (
          <Card
            key={category.id}
            sx={{
              border: "1px solid #e9e9ea",
              width: 240,
              height: 280,
              borderRadius: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "16px",
              transition: "background 0.3s",
              backgroundColor: "#F4F4F4",
              "&:hover": {
                backgroundColor: "#FBF6EA",
              },
              mb: 4, // Adjust margin for more space
            }}
          >
            <CardContent sx={{ textAlign: "center" }}>
              <img
                src={category.logo}
                alt={category.title}
                style={{ marginBottom: "20px" }}
              />
              <Typography
                variant="h6"
                color="text.primary"
                sx={{ fontWeight: 800, mb: 1 }}
              >
                {category.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {category.description}
              </Typography>

              <Box display="flex" justifyContent="center">
                <IconButton
                  sx={{ color: "black", "&:hover": { color: "blue" } }}
                >
                  <Facebook />
                </IconButton>
                <IconButton
                  sx={{ color: "black", "&:hover": { color: "#00acee" } }}
                >
                  <Twitter />
                </IconButton>
                <IconButton
                  sx={{ color: "black", "&:hover": { color: "darkblue" } }}
                >
                  <LinkedIn />
                </IconButton>
                <IconButton
                  sx={{
                    color: "black",
                    "&:hover": { color: "rgb(228, 64, 95)" },
                  }}
                >
                  <Instagram />
                </IconButton>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default AboutAuthors;
