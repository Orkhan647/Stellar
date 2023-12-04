import React from 'react'
import PageContainer from '../../components/PageContainer/PageContainer'
import DetailHead from '../../components/DetailHead/DetailHead'
import { useEffect } from "react";
import DetailPosts from '../../components/DetailPosts/DetailPosts';
const Detail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <PageContainer>
      <DetailHead/>
      <DetailPosts/>
    </PageContainer>
  )
}

export default Detail