import React, { useEffect } from 'react'
import Category from '../../components/Category Cards/Category'
import JoinOurTeam from '../../components/JoinOurTeam/JoinOurTeam'
import PageContainer from "../../components/PageContainer/PageContainer";
import FaturedPost from '../../components/Fatured Post/FaturedPost';
import Blogs from '../../components/Blogs/Blogs';
const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <PageContainer>
     <FaturedPost/>
     <Blogs/>
     <Category textAlign="left" title="All Categories"/>
     <JoinOurTeam/>
    </PageContainer>
  )
}

export default Blog