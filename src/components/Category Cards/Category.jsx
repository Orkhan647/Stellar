import React from 'react';
import { Box, Container, Typography, Card, CardContent } from '@mui/material';
import stateIcon from '../../assets/state icon.png';
import rocketIcon from '../../assets/rocket icon.png';
import economyIcon from '../../assets/economy icon.png';
import cyborgIcon from '../../assets/cyborg icon.png';

const categories = [
  {
    id: 1,
    title: 'Business',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    logo: stateIcon,
  },
  {
    id: 2,
    title: 'Startup',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    logo: rocketIcon,
  },
  {
    id: 3,
    title: 'Economy',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    logo: economyIcon,
  },
  {
    id: 4,
    title: 'Technology',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    logo: cyborgIcon,
  },
];

const Category = () => {
  return (
    <Container sx={{paddingBottom:"100px"}}>
      <Typography variant='h5' sx={{ textAlign: 'center', fontWeight: 700, mb: 3,mt:3 }}>
        Choose A Category
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
              height: 200,
              borderRadius: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '16px',
              paddingTop:'100px',
              transition: 'background 0.3s',
              '&:hover': {
                backgroundColor: '#FFD050',
              },
              mb: { xs: 2, sm: 0 },
            }}
          >
            <CardContent>
              <img src={category.logo} alt={category.title} style={{  marginBottom: '12px' }} />
              <Typography variant='h6' color='text.primary' sx={{ fontWeight: 800 }}>
                {category.title}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                {category.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default Category;
    