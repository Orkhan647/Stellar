import React from "react";
import { Box, Container, Divider, Typography, styled, useMediaQuery, Button } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import blog1 from "../../assets/blog1.png";
import blog2 from "../../assets/blog2.png";
import blog3 from "../../assets/blog3.png";
import blog4 from "../../assets/blog4.png";

const HoverTypography = styled(Typography)(() => ({
  fontSize: "14px",
  fontWeight: 700,
  marginBottom: 3,
  "&:hover": {
    color: "#592EA9",
    cursor: "pointer",
  },
}));

const BlogPost = ({ isMobile, category, title, description, image }) => (
  <Box sx={{ display: "flex", marginBottom: 5, flexDirection: isMobile ? 'column' : 'row' }}>
    <img style={{ width: isMobile ? "100%" : "35%", height: "auto" }} src={image} alt="" />
    <Box
      sx={{
        display: "flex",
        flexDirection:'column' ,
        justifyContent: "center",
        ml: isMobile ? 0 : 5,
      }}
    >
      <HoverTypography variant="body2" sx={{ mt: isMobile ? 2 : null }}>{category}</HoverTypography>
      <Typography variant="h5" sx={{ fontWeight: 700, marginBottom: 3 }}>
        {title}
      </Typography>
      <Typography sx={{ color: "#6D6E76" }}>{description}</Typography>
    </Box>
  </Box>
);

const BlogPaginationButton = ({ children }) => (
  <Button sx={{ fontWeight: 700, transition: "transform 0.3s", "&:hover": { transform: "scale(1.2)", background: 'none' } }}>
    {children}
  </Button>
);

const Blogs = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const blogData = [
    {
      category: "STARTUP",
      title: "Design tips for designers that cover everything you need",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      image: blog1,
    },
    {
      category: "BUSINESS",
      title: "How to build rapport with your web design clients",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      image: blog2,
      
    },
    {
      category: "STARTUP",
      title: "Logo design trends to avoid in 2022",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      image: blog3,
    },
    {
      category: "TECHNOLOGY",
      title: "8 Figma design systems you can download for free today",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      image: blog4,
    },
    {
      category: "ECONOMY",
      title: "Font sizes in UI design: The complete guide to follow",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      image: blog1,
    },
  ];

  return (
    <Container>
      <Typography variant="h4" sx={{ fontWeight: 700, mt: isMobile ? 2 : 7, mb: isMobile ? 3 : 5 }}>
        All Posts
      </Typography>
      <Divider sx={{ marginBottom: isMobile ? 3 : 7 }} />
      {blogData.map((blog, index) => (
        <BlogPost key={index} isMobile={isMobile} {...blog} />
      ))}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3, mb: 3, gap: '6px' }}>
        <BlogPaginationButton><ArrowBackIosIcon fontSize="small" />Prev</BlogPaginationButton>
        <BlogPaginationButton>Next<ArrowForwardIosIcon fontSize="small" /></BlogPaginationButton>
      </Box>
    </Container>
  );
};

export default Blogs;
