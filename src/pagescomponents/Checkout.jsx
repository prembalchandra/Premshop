import React from 'react'
import {
 Box
} from "@mui/material";
import CheckoutPage from '../components/CheckoutComponents/CheckoutPages'
import CommonHeroSection from '../components/CommonHerosection'
import heroImg from '../assets/images/download.jpeg'
import SeoComponents from "../components/SeoComponents";
function Checkout() {
  return (

    <Box>
      <SeoComponents
  title="Checkout – Premshop"
  description="Complete your order securely on Premshop."
  canonical="https://premshops.netlify.app/checkout"
/>

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
