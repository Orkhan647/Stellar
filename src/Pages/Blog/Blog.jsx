import React from 'react'
import PageContainer from "../../components/PageContainer/PageContainer";
import FaturedPost from '../../components/Fatured Post/FaturedPost';
import Blogs from '../../components/Blogs/Blogs';
const Blog = () => {
  return (
    <PageContainer>
     <FaturedPost/>
     <Blogs/>
    </PageContainer>
  )
}

export default Blog