import React from 'react'
import PageContainer from '../../components/PageContainer/PageContainer'
import { Typography } from '@mui/material'

const Home = () => {
  return (
    <PageContainer>
      <Typography sx={{ color: (theme) => theme.palette.customColors.purple }}>
        salam men home pageyem 
      </Typography>
    </PageContainer>
  )
}

export default Home
