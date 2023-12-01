import React, { useEffect } from "react";
import PageContainer from "../../components/PageContainer/PageContainer";

import Banner from "../../components/Banner/banner";
import Posts from "../../components/Posts/Posts";
import AboutUs from "../../components/About Us/AboutUs";
import Category from "../../components/Category Cards/Category";
import WhyWe from "../../components/WhyWe/WhyWe";
import Authors from "../../components/Authors/Authors";
import Brands from "../../components/Brands/Brands";
import Testimonials from "../../components/Testimonials/Testimonials";
import JoinOurTeam from "../../components/JoinOurTeam/JoinOurTeam";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <PageContainer>
      <Banner />
      <Posts />
      <AboutUs />
      <Category />
      <WhyWe />
      <Authors />
      <Brands/>
      <Testimonials/>
      <JoinOurTeam/>
    </PageContainer>
  );
};

export default Home;
