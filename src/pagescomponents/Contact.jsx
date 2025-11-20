import React from "react";
import ContactSection from "../components/ContactSection";
import SeoComponents from "../components/SeoComponents";

const About = () => {
  return <>
  <SeoComponents
  title="Contact Premshop"
  description="Need support? Contact Premshop customer care."
  canonical="https://premshops.netlify.app/contact"
/>

    <ContactSection/>
  </>
};

export default About;
