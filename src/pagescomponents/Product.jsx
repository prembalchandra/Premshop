import React from 'react'
import {
 Box
} from "@mui/material";
import ProductsidebarPages from '../components/ProductSidebarComponents/ProductsidebarPages'
import TopSellingProducts from '../components/TopSellingProdcuts';
import ProductCard from '../components/ProductCard';
import CommonHeroSection from '../components/CommonHerosection'
import heroImg from '../assets/images/download.jpeg'
function Product() {
  return (
    <Box>
      <CommonHeroSection
          title="Product"
          bgImage={heroImg}
          height="50vh"
          align="center"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Product" }]}
        />
      <ProductsidebarPages/>
      <TopSellingProducts/>
      <ProductCard/>
    </Box>
  )
}

export default Product
