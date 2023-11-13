import React from 'react'
import PageContainer from '../../components/PageContainer/PageContainer'

import Banner from '../../components/Banner/banner'
import Posts from '../../components/Posts/Posts'

const Home = () => {
  return (
    <PageContainer>
      <Banner/>
      <Posts/>
    </PageContainer>
  )
}

export default Home
