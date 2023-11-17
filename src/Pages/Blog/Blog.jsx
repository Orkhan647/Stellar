import React from 'react'
import Category from '../../components/Category Cards/Category'
import JoinOurTeam from '../../components/JoinOurTeam/JoinOurTeam'
import PageContainer from "../../components/PageContainer/PageContainer";
import FaturedPost from '../../components/Fatured Post/FaturedPost';
import Blogs from '../../components/Blogs/Blogs';
const Blog = () => {
  return (
    <PageContainer>
     <FaturedPost/>
     <Blogs/>
     <Category/>
     <JoinOurTeam/>
    </PageContainer>
  )
}

export default Blog