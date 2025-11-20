import React from "react";
import { Box } from "@mui/material";
import CommonHeroSection from "../components/CommonHerosection";
import heroImg from "../assets/images/download.jpeg";
import SeoComponents from "../components/SeoComponents";
function Blog() {
  return (
    <Box>
      <SeoComponents
        title="Blog – Premshop"
        description="Read the latest news, tips and shopping guides."
        canonical="https://premshops.netlify.app/blog"
      />

      <CommonHeroSection
        title="Blog"
        bgImage={heroImg}
        height="50vh"
        align="center"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />
    </Box>
  );
}

export default Blog;
