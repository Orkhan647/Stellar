import React from 'react';
import { Box, Container, Typography, Card, CardContent, IconButton } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';
import logo1 from '../../assets/logo 1.png';
import logo2 from '../../assets/logo 2.png';
import logo3 from '../../assets/logo 3.png';
import logo4 from '../../assets/logo 4.png';

const categories = [
  {
    id: 1,
    title: 'Floyd Miles',
    description: 'Content Writer @Company',
    logo: logo1,
  },
  {
    id: 2,
    title: 'Dianne Russell',
    description: 'Content Writer @Company',
    logo: logo2,
  },
  {
    id: 3,
    title: 'Jenny Wilson',
    description: 'Content Writer @Company',
    logo: logo3,
  },
  {
    id: 4,
    title: 'Leslie Alexander',
    description: 'Content Writer @Company',
    logo: logo4,
  },
];

const Category = () => {
  return (
    <Container sx={{ marginBottom: '100px',padding:'50px 0' }}>
      <Typography variant='h5' sx={{ textAlign: 'center', fontWeight: 700, mb: 3 }}>
      List of Authors
      </Typography>

      <Box
        display='flex'
        flexDirection={{ xs: 'column', sm: 'row' }}
        justifyContent='space-between'
        alignItems={{ xs: 'center', sm: 'stretch' }}
      >
        {categories.map((category) => (
          <Card
            key={category.id}
            sx={{
              border: '1px solid  #e9e9ea',
              width: 240,
              height: 280,
              borderRadius: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '16px',
              transition: 'background 0.3s',
              backgroundColor: '#F4F4F4', // Set background color
              '&:hover': {
                backgroundColor: '#FBF6EA', // Set hover background color
              },
              mb: { xs: 2, sm: 0 },
            }}
          >
            <CardContent sx={{ textAlign: 'center' }}>
              <img src={category.logo} alt={category.title} style={{ marginBottom: '20px' }} />
              <Typography variant='h6' color='text.primary' sx={{ fontWeight: 800, mb: 1 }}>
                {category.title}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                {category.description}
              </Typography>

              <Box mt='auto' display="flex" justifyContent="center">
                <IconButton sx={{ color: 'black', '&:hover': { color: 'blue' } }}>
                  <Facebook />
                </IconButton>
                <IconButton sx={{ color: 'black', '&:hover': { color: '#00acee' } }}>
                  <Twitter />
                </IconButton>
                <IconButton sx={{ color: 'black', '&:hover': { color: 'darkblue' } }}>
                  <LinkedIn />
                </IconButton>
                <IconButton sx={{ color: 'black', '&:hover': { color: 'rgb(228, 64, 95)' } }}>
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

export default Category;
