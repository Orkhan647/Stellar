import React from "react";
import { useParams } from "react-router-dom";
import { categories } from "../../components/AboutListAuthors/AboutAuthors";
import { Box, Container, Typography, IconButton } from "@mui/material";


import { Facebook, Twitter, LinkedIn, Instagram } from "@mui/icons-material";

const DetailHead = () => {
  const { id } = useParams();
  const data = categories.filter((item) => item.id === +id)[0];
  console.log(data);


  return (
    
      <Box sx={{ position:'relative',bgcolor: "#F4F0F8", mt: 10,pt:6,pb:6 }}>
        <Container sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
          {data && (
            <Box sx={{ display: "flex", gap: 4 }}>
              <img style={{width:'200px'}} src={data.logo} alt="" />
              <Box>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
                  {`Hey There, I'm ${data.title}`}
                  <br />
                  {` and welcome to my Blog `}
                </Typography>

                <Typography variant="body1" sx={{ mb: 5,color:'#6D6E76' }}>
                  {data.about}
                </Typography>
                <Box sx={{ display: "flex", gap: 1, color: "#232536" }}>
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
              </Box>
            </Box>
          )}
          

          
        </Container>
        <Box
  sx={{
    display: 'flex',
    height: '17px',
    width: '65%',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
  }}
>
  <Box sx={{ bgcolor: (theme) => theme.palette.secondary.main, flex: '50%' }}></Box>
  <Box sx={{ bgcolor: 'purple', flex: '10%' }}></Box>
</Box>

      </Box>
    
  );
};

export default DetailHead;
