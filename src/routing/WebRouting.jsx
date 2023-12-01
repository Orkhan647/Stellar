import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import PrivacyPolicy from "../Pages/Privacy Policy/PrivacyPolicy";
import Buisness from "../Pages/Buisness/Buisness";
import StartUp from "../Pages/StartUp/StartUp";

const WebRouting = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/business" element={<Buisness />} />
        <Route path="/startup" element={<StartUp/>} />

      </Routes>
    </Suspense>
  );
};

export default WebRouting;
