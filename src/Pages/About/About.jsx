import React, { useEffect } from "react";
import PageContainer from "../../components/PageContainer/PageContainer";
import AboutPageHead from "../../components/AboutPageHead/AboutPageHead";
import AboutOurTeam from "../../components/AboutOurTeam/AboutOurTeam";
import AboutAuthors from "../../components/AboutListAuthors/AboutAuthors";
import JoinOurTeam from "../../components/JoinOurTeam/JoinOurTeam";

const About = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <PageContainer>
      <AboutPageHead/>
      <AboutOurTeam/>
       <AboutAuthors/>
       <JoinOurTeam/>
    </PageContainer>
  );
};

export default About;
