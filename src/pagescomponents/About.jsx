import React from "react";
import { Box } from "@mui/material";
import CommonHeroSection from "../components/CommonHerosection";
import heroImg from "../assets/images/download.jpeg";
import AboutComponentsPages from "../components/AboutComponents/AboutComponentsPages";
import AboutFeatures from "../components/AboutComponents/AboutFeatures";
import TestimonialSlider from "../components/AboutComponents/TestimonialSlider";
import SeoComponents from "../components/SeoComponents";
function About() {
  return (
    <Box>
      <SeoComponents
        title="About Us – Premshop"
        description="Learn about Premshop and our mission to provide quality products."
        canonical="https://premshops.netlify.app/About"
      />
      <CommonHeroSection
        title="About"
        bgImage={heroImg}
        height="50vh"
        align="center"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />
      <AboutComponentsPages />
      <AboutFeatures />
      <TestimonialSlider />
    </Box>
  );
}

export default About;
