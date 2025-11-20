import React from 'react'
import {
 Box
} from "@mui/material";
import CommonHeroSection from '../components/CommonHerosection'
import heroImg from '../assets/images/download.jpeg'
function Blog() {
  return (
    <Box>
      <CommonHeroSection
          title="Blog"
          bgImage={heroImg}
          height="50vh"
          align="center"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
        />
    </Box>
  )
}

export default Blog
