import React from 'react'
import {
 Box
} from "@mui/material";
import CartPage from '../components/CartProductComponents/CartPages'
import CommonHeroSection from '../components/CommonHerosection'
import heroImg from '../assets/images/download.jpeg'
import SeoComponents from "../components/SeoComponents";
function Cart() {
  return (
    <Box>
      <SeoComponents
  title="Your Cart – Premshop"
  description="Review your items before placing an order."
  canonical="https://premshops.netlify.app/cart"
/>

      <CommonHeroSection
          title="Cart"
          bgImage={heroImg}
          height="50vh"
          align="center"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Cart" }]}
        />
      <CartPage/>
    </Box>
  )
}

export default Cart
