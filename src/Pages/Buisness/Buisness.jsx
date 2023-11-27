import React from "react";
import PageContainer from "../../components/PageContainer/PageContainer";
import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  styled,
  Grid,
  Button,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import stateIcon from "../../assets/state icon.png";
import rocketIcon from "../../assets/rocket icon.png";
import economyIcon from "../../assets/economy icon.png";
import cyborgIcon from "../../assets/cyborg icon.png";
import blog1 from "../../assets/blog1.png";

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
  <Box
    sx={{
      display: "flex",
      marginBottom: 5,
      flexDirection: isMobile ? "column" : "row",
      width: "100%",
    }}
  >
    <img
      style={{ width: isMobile ? "100%" : "35%", height: "auto" }}
      src={image}
      alt=""
    />
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        ml: isMobile ? 0 : 2,
      }}
    >
      <HoverTypography
        variant="h6"
        color="primary"
        sx={{ fontWeight: 700, mb: 1 }}
      >
        {category}
      </HoverTypography>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
        {title}
      </Typography>
      <Typography variant="body1" sx={{ color: "#777684", mb: 2 }}>
        {description}
      </Typography>
    </Box>
  </Box>
);

const BlogSidebar = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
  marginTop: theme.spacing(2),
  width: "200px",
}));

const SidebarCard = styled(Box)(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[300]}`,
  borderRadius: theme.spacing(1),
  padding: theme.spacing(2),
  margin: `${theme.spacing(2)}px 0`,
  width: "100%",
  display: "flex",
  gap: "20px",
  alignItems: "center",
  padding: "25px",

  "&:hover": {
    backgroundColor: theme.palette.secondary.main,
    cursor: "pointer",
  },

  "& img": {
    width: "30px",
    height: "30px",
    backgroundColor: "#FBF6EA",
    padding: "5px",
    borderRadius: "10px",
  },

  "& > :last-child": {
    fontWeight: 700,
    marginTop: theme.spacing(1),
  },
}));

const TagButton = styled(Button)(({ theme }) => ({
  borderRadius: "40px",
  border: `1px solid ${theme.palette.primary.main}`,
  padding: theme.spacing(1, 3),
  margin: theme.spacing(1),
  color: theme.palette.primary.main,
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
  },
}));

const Business = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const blogData = [
    {
      category: "BUSINESS",
      title: (
        <React.Fragment>
          Top 6 free website mockup tools <br /> 2022
        </React.Fragment>
      ),
      description: (
        <React.Fragment>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Non <br />
          blandit massa enim nec.
        </React.Fragment>
      ),
      image: blog1,
    },
    {
      category: "BUSINESS",
      title: (
        <React.Fragment>
          Step-by-step guide to choosing <br /> great font pairs
        </React.Fragment>
      ),
      description: (
        <React.Fragment>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Non <br />
          blandit massa enim nec.
        </React.Fragment>
      ),
      image: blog1,
    },
    {
      category: "BUSINESS",
      title: (
        <React.Fragment>
          Ten free foogle fonts that you <br /> should use
        </React.Fragment>
      ),
      description: (
        <React.Fragment>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Non <br />
          blandit massa enim nec.
        </React.Fragment>
      ),
      image: blog1,
    },
    {
      category: "BUSINESS",
      title: (
        <React.Fragment>
          What did I learn from doing 50+ <br /> design sprints?
        </React.Fragment>
      ),
      description: (
        <React.Fragment>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Non <br />
          blandit massa enim nec.
        </React.Fragment>
      ),
      image: blog1,
    },
  ];

  const tags = ["Tag1", "Tag2", "Tag3", "Tag4"];

  return (
    <PageContainer>
      <Box sx={{ bgcolor: "#F4F0F8" }}>
        <Container sx={{ mt: 9 }}>
          <Box sx={{ p: isMobile ? "50px" : "120px", textAlign: "center" }}>
            <Typography
              variant={isMobile ? "h4" : "h3"}
              sx={{ fontWeight: 700 }}
            >
              Business
            </Typography>
            <Typography sx={{ color: "#777684" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              <br />
              eiusmod tempor incididunt ut labore.
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mt: 7,
              }}
            >
              <Typography sx={{ fontWeight: "bold" }}>BLOG</Typography>
              <ChevronRightIcon sx={{ fontSize: 20, mx: 1 }} />
              <Typography sx={{ fontWeight: "bold" }}>BUSINESS</Typography>
            </Box>
          </Box>
        </Container>
      </Box>
      <Container>
        <Grid container spacing={isMobile ? 2 : 4} sx={{ mt: 5 }}>
          <Grid item xs={12} md={8}>
            {blogData.map((blog, index) => (
              <BlogPost key={index} isMobile={isMobile} {...blog} />
            ))}
          </Grid>
          <Grid item xs={12} md={4}>
            <BlogSidebar>
              <Typography
                variant="h4"
                sx={{ fontWeight: 700, mb: 4, textAlign: "center" }}
              >
                Categories
              </Typography>
              <SidebarCard>
                <img
                  style={{
                    backgroundColor: "#FBF6EA",
                    padding: "5px",
                    borderRadius: "10px",
                  }}
                  src={rocketIcon}
                  alt=""
                />
                <Typography variant="body1">Startup</Typography>
              </SidebarCard>
              <SidebarCard>
                <img
                  style={{
                    backgroundColor: "#FBF6EA",
                    padding: "5px",
                    borderRadius: "10px",
                  }}
                  src={stateIcon}
                  alt=""
                />
                <Typography variant="body1">Business</Typography>
              </SidebarCard>
              <SidebarCard>
                <img
                  style={{
                    backgroundColor: "#FBF6EA",
                    padding: "5px",
                    borderRadius: "10px",
                  }}
                  src={economyIcon}
                  alt=""
                />
                <Typography variant="body1">Economy</Typography>
              </SidebarCard>
              <SidebarCard>
                <img
                  style={{
                    backgroundColor: "#FBF6EA",
                    padding: "5px",
                    borderRadius: "10px",
                  }}
                  src={cyborgIcon}
                  alt=""
                />
                <Typography variant="body1">Technology</Typography>
              </SidebarCard>
            </BlogSidebar>
            <Grid item xs={12} md={4}>
              <Typography
                variant="h5"
                sx={{ fontWeight: 700, mb: 4, textAlign: "center" }}
              >
                All Tags
              </Typography>
              {tags.map((tag, index) => (
                <TagButton key={index} variant="outlined">
                  {tag}
                </TagButton>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </PageContainer>
  );
};

export default Business;
