import React from 'react'
import {
 Box
} from "@mui/material";
import WishlistPage from '../components/WishlistComponents/Wishlist'
import CommonHeroSection from '../components/CommonHerosection'
import heroImg from '../assets/images/download.jpeg'
function Wishlist() {
  return (
    <Box>
      <CommonHeroSection
          title="Wishlist"
          bgImage={heroImg}
          height="50vh"
          align="center"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Wishlist" }]}
        />
      <WishlistPage/>
    </Box>
  )
}

export default Wishlist
