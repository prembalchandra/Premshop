import React from "react";
import HeroSection from "../components/HeroSection";
import CategoryCardSlider from "../components/CategoriesComponents";
import ProductCard from "../components/ProductCard";
import ProductSection from "../components/ProductSection";
import FlashSaleProduct from "../components/FlashSaleProduct";
import TopSellingProdcuts from "../components/TopSellingProdcuts";
import SeoComponents from "../components/SeoComponents";
const Home = () => {
  return (
    <>
       <SeoComponents
        title="Premshop – Best Online Shopping"
        description="Shop fashion, beauty and more at Premshop with fast delivery."
        keywords="shopping, premshop, fashion, ecommerce"
        canonical="https://premshops.netlify.app/"
      />
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
