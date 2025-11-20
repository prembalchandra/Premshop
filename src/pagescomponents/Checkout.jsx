import React from 'react'
import {
 Box
} from "@mui/material";
import CheckoutPage from '../components/CheckoutComponents/CheckoutPages'
import CommonHeroSection from '../components/CommonHerosection'
import heroImg from '../assets/images/download.jpeg'
function Checkout() {
  return (
    <Box>
      <CommonHeroSection
          title="Checkout"
          bgImage={heroImg}
          height="50vh"
          align="center"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Checkout" }]}
        />
      <CheckoutPage/>
    </Box>
  )
}

export default Checkout
