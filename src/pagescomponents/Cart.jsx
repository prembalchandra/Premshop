import React from 'react'
import {
 Box
} from "@mui/material";
import CartPage from '../components/CartProductComponents/CartPages'
import CommonHeroSection from '../components/CommonHerosection'
import heroImg from '../assets/images/download.jpeg'
function Cart() {
  return (
    <Box>
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
