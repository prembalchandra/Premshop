import React from 'react'
import {
 Box
} from "@mui/material";
import CommonHeroSection from '../components/CommonHerosection'
import heroImg from '../assets/images/download.jpeg'
import AboutComponentsPages from '../components/AboutComponents/AboutComponentsPages';
import AboutFeatures from "../components/AboutComponents/AboutFeatures"
import TestimonialSlider from "../components/AboutComponents/TestimonialSlider"
function About() {
  return (
    <Box>
      <CommonHeroSection
          title="About"
          bgImage={heroImg}
          height="50vh"
          align="center"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        />
        <AboutComponentsPages/>
        <AboutFeatures />
        <TestimonialSlider />
    </Box>
  )
}

export default About
