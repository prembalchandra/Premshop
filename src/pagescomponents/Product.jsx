import React from "react";
import { Box } from "@mui/material";
import ProductsidebarPages from "../components/ProductSidebarComponents/ProductsidebarPages";
import TopSellingProducts from "../components/TopSellingProdcuts";
import ProductCard from "../components/ProductCard";
import CommonHeroSection from "../components/CommonHerosection";
import heroImg from "../assets/images/download.jpeg";
import SeoComponents from "../components/SeoComponents";
function Product() {
  return (
    <Box>
      <SeoComponents
        title="Products – Premshop"
        description="Explore latest products across all categories."
        canonical="https://premshops.netlify.app/products"
      />

      <CommonHeroSection
        title="Product"
        bgImage={heroImg}
        height="50vh"
        align="center"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Product" }]}
      />
      <ProductsidebarPages />
      <TopSellingProducts />
      <ProductCard />
    </Box>
  );
}

export default Product;
