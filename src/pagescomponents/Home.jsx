import React from "react";
import HeroSection from "../components/HeroSection";
import CategoryCardSlider from "../components/CategoriesComponents";
import ProductCard from "../components/ProductCard";
import ProductSection from "../components/ProductSection";
import FlashSaleProduct from "../components/FlashSaleProduct";
import TopSellingProdcuts from "../components/TopSellingProdcuts";
const Home = () => {
  return (
    <>
      <HeroSection />
      <CategoryCardSlider />
      <ProductSection />
      <FlashSaleProduct />
      <TopSellingProdcuts />

      <ProductCard />
    </>
  );
};

export default Home;
