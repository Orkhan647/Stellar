import React, { useEffect } from 'react'
import PageContainer from '../../components/PageContainer/PageContainer'
import ContactHeader from '../../components/Contact header/ContactHeader'
import Working from '../../components/Working/Working'


const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <PageContainer>
        <ContactHeader/>
        <Working/>
      
        
    </PageContainer>

  )
}

export default Contact