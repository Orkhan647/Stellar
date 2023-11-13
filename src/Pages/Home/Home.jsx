import React from 'react'
import PageContainer from '../../components/PageContainer/PageContainer'

import Banner from '../../components/Banner/banner'
import Posts from '../../components/Posts/Posts'
import AboutUs from '../../components/About Us/AboutUs'
import Category from '../../components/Category Cards/Category'

const Home = () => {
  return (
    <PageContainer>
      <Banner/>
      <Posts/>
      <AboutUs/>
      <Category/>
    </PageContainer>
  )
}

export default Home
