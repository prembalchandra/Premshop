import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import ProductdetailsPages from "../components/ProductdetailsComponents/Productdetailspages";
import CommonHeroSection from "../components/CommonHerosection";
import heroImg from "../assets/images/download.jpeg";
import TopSellingProducts from "../components/TopSellingProdcuts";
import BestsellProduct from "../components/BestsellproductCompnents/BestsellProduct";
import { useParams } from "react-router-dom";
import SeoComponents from "../components/SeoComponents";

export default function ProductDetails() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function loadProduct() {
      const res = await fetch(`/api/products/${slug}`);
      const data = await res.json();
      setProduct(data);
    }
    loadProduct();
  }, [slug]);

  if (!product) return <div>Loading...</div>;

  return (
    <Box>
      {/* SEO */}
      <SeoComponents
        title={`${product.name} – Premshop`}
        description={product.shortDescription}
        canonical={`https://premshops.netlify.app/product/${slug}`}
        keywords={`${product.name}, buy ${product.name}, ${product.category}`}
      />

      {/* Banner Section */}
      <CommonHeroSection
        title="Product Details"
        bgImage={heroImg}
        height="50vh"
        align="center"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Product Details" },
        ]}
      />

      {/* Product Details Component */}
      <ProductdetailsPages product={product} />

      {/* Other sections */}
      <TopSellingProducts />
      <BestsellProduct />
    </Box>
  );
}
