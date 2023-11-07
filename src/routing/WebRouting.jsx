import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";


const WebRouting = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Suspense>
  );
};

export default WebRouting;
