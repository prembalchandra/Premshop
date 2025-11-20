import React from 'react'
import {
 Box
} from "@mui/material";
import ProductdetailsPages from '../components/ProductdetailsComponents/Productdetailspages'
import CommonHeroSection from '../components/CommonHerosection'
import heroImg from '../assets/images/download.jpeg'
import TopSellingProducts from '../components/TopSellingProdcuts';
import BestsellProduct from '../components/BestsellproductCompnents/BestsellProduct';
function ProductDetails() {
  return (
    <Box >
      <CommonHeroSection
          title="Product Details "
          bgImage={heroImg}
          height="50vh"
          align="center"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Product Details" }]}
        />
      <ProductdetailsPages/>
     
      <TopSellingProducts/>
       <BestsellProduct/>
      
    </Box>
  )
}

export default ProductDetails 
