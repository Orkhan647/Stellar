import { Box, Container, useTheme, useMediaQuery } from "@mui/material";
import React from "react";
import logo1 from "../../assets/brandsLogo/Logo 1.png";
import logo2 from "../../assets/brandsLogo/Logo 2.png";
import logo3 from "../../assets/brandsLogo/Logo 3.png";
import logo4 from "../../assets/brandsLogo/Logo 4.png";
import logo5 from "../../assets/brandsLogo/Logo 5.png";
import logo6 from "../../assets/brandsLogo/Featured in.png";

const Brands = () => {
  const logos = [logo6, logo2, logo3, logo4, logo5, logo1];

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const minHeight = Math.min(...logos.map((logo) => getHeight(logo)));

  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: isSmallScreen ? 'wrap' : 'nowrap',
          paddingBottom: isSmallScreen ? '20px' : '50px',
        }}
      >
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`logo-${index + 1}`}
            style={{
              width: 'auto',
              height: `${minHeight}px`,
              objectFit: 'contain',
              flexBasis: isSmallScreen ? '48%' : 'auto', 
              marginBottom: isSmallScreen ? '10px' : '0',
            }}
          />
        ))}
      </Box>
    </Container>
  );
};

export default Brands;

function getHeight(logo) {
  const img = new Image();
  img.src = logo;
  return img.height;
}
