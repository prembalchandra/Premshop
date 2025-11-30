import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  CardMedia,
  Box,
  CardContent,
  Stack,
  Typography,
  IconButton,
} from "@mui/material";
import Slider from "react-slick";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";

// IMPORT SLICK CSS (VERY IMPORTANT)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../assets/images/product/product-img.webp";
import img2 from "../assets/images/product/product-img2.webp";
import img3 from "../assets/images/product/product-img.webp";

const products = [
  {
    id: 1,
    name: "Cozy Cuppa Cafe",
    title: "Rosso Desiderio",
    newPrice: "₹338,500",
    rating: 3.6,
    oldPrice: "₹400,000",
    images: [img1, img2, img3],
  },
  {
    id: 2,
    name: "Cozy Cuppa Cafe",
    title: "Morning Flow",
    newPrice: "₹210,000",
    rating: 3.6,
    oldPrice: "₹260,000",
    images: [img1, img2, img3],
  },
  {
    id: 3,
    name: "Cozy Cuppa Cafe",
    title: "Vivid Shapes",
    newPrice: "₹150,000",
    rating: 3.6,
    oldPrice: "₹180,000",
    images: [img1, img2, img3],
  },
  {
    id: 4,
    name: "Cozy Cuppa Cafe",
    title: "Cheesecake, Waffles, Cakes,...",
    newPrice: "₹275,000",
    rating: 3.6,
    oldPrice: "₹330,000",
    images: [img1, img2, img3],
  },
  {
    id: 5,
    name: "Cozy Cuppa Cafe",
    title: "Cheesecake, Waffles, Cakes,...",
    newPrice: "₹275,000",
    oldPrice: "₹330,000",
    rating: 3.6,
    images: [img1, img2, img3],
  },
  {
    id: 6,
    name: "Cozy Cuppa Cafe",
    title: "Cheesecake, Waffles, Cakes,...",
    newPrice: "₹275,000",
    oldPrice: "₹330,000",
    rating: 3.6,
    images: [img1, img2, img3],
  },
];

const ProductSection = () => {
  const [wishlist, setWishlist] = useState({});
  const sliderRef = useRef(null);

  const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1, // default for mobile
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 576, 
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768, 
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 991, 
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1200, 
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
  ],
};


  const toggleWishlist = (id) => {
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <Box sx={{ padding: "40px 0 100px 0" }}>
      <Box
        className="scrn-container"
        sx={{
          maxWidth: "1300px",
          width: "100%",
          mx: "auto",
        }}
      >
        <Box
          sx={{
            border: "1px solid #95c2ffb3",
            borderRadius: "8px",
            background: "rgba(255, 255, 255, 0.96)",
            boxShadow: "0 18px 36px rgba(15, 23, 42, 0.08)",
            padding: "1.4rem 1.6rem",
          }}
        >
          {/* Header */}
          <Box
            sx={{
              mb: 4,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: { xs: "column", md: "row" },
              textAlign: { xs: "center", md: "left" },
              gap: 2,
            }}
          >
            <Box>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  color: "#c72277",
                  mb: 1,
                  fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.5rem" },
                }}
              >
                Top Rated Items With Excellent Reviews
              </Typography>

              <Typography
                sx={{
                  color: "#555",
                  fontSize: { xs: "0.9rem", sm: "1rem" },
                  maxWidth: 600,
                  mx: { xs: "auto", md: 0 },
                  mt: 1,
                }}
              >
                Browse our curated collection of original artworks.
              </Typography>
            </Box>

            {/* Arrows & view all */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <Link to="/Product" style={{ textDecoration: "none" }}>
                <Typography
                  sx={{
                    color: "#c72277",
                    fontWeight: 600,
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  View All Products →
                </Typography>
              </Link>

              <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
                <IconButton onClick={() => sliderRef.current.slickPrev()}>
                  <ArrowBackIosNewIcon
                    sx={{
                      width: 35,
                      height: 35,
                      borderRadius: "50%",
                      backgroundColor: "#c72277",
                      padding: "10px",
                      color: "#fff",
                    }}
                  />
                </IconButton>

                <IconButton onClick={() => sliderRef.current.slickNext()}>
                  <ArrowForwardIosIcon
                    sx={{
                      width: 35,
                      height: 35,
                      borderRadius: "50%",
                      backgroundColor: "#c72277",
                      padding: "10px",
                      color: "#fff",
                    }}
                  />
                </IconButton>
              </Box>
            </Box>
          </Box>

          {/* Main Product Slider */}
          <Slider ref={sliderRef} {...sliderSettings} style={{ width: "100%" }}>
            {products.map((product) => (
              <Box key={product.id} sx={{ px: 1, width: "100%" }}>
                <Box
                  sx={{
                    borderRadius: 2,
                    overflow: "hidden",
                  }}
                >
                  {/* Single Product Card */}
                  <Box
                    sx={{
                      position: "relative",
                      borderRadius: 2,
                      overflow: "hidden",
                      p: 1.5,
                      backgroundColor: "#fff",
                      border: "1px solid #e8e8e8",
                      transition: "0.3s",
                      "&:hover": { transform: "translateY(-6px)" },
                    }}
                  >
                    {/* Inner Image Slider */}
                    <Slider
                      dots={false}
                      infinite
                      arrows
                      speed={300}
                      slidesToShow={1}
                      slidesToScroll={1}
                      autoplay
                    >
                      {product.images.map((img, idx) => (
                        <Box key={idx} sx={{ position: "relative" }}>
                          <CardMedia
                            component="img"
                            image={img}
                            sx={{
                              width: "100%",
                              aspectRatio: "4/3",
                              objectFit: "contain",
                            }}
                          />

                          {/* Wishlist Button */}
                          <Box
                            onClick={() => toggleWishlist(product.id)}
                            sx={{
                              position: "absolute",
                              top: "10px",
                              right: "10px",
                              color: wishlist[product.id]
                                ? "#EA1C1C"
                                : "#AE1C9A",
                              background: "#fff",
                              borderRadius: "50%",
                              padding: "6px",
                              cursor: "pointer",
                              boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                              transition: "0.3s",
                            }}
                          >
                            {wishlist[product.id] ? (
                              <FavoriteIcon fontSize="small" />
                            ) : (
                              <FavoriteBorderIcon fontSize="small" />
                            )}
                          </Box>
                        </Box>
                      ))}
                    </Slider>

                    {/* Product Details */}
                    <CardContent sx={{ px: 2, pb: 2, pt: 1 }}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Link
                          to="/ProductDetails"
                          style={{ textDecoration: "none" }}
                        >
                          <Typography
                            variant="h6"
                            sx={{
                              color: "#000",
                              fontWeight: 600,
                              fontSize: { xs: "0.95rem", sm: "1rem" },
                              "&:hover": { color: "#c72277" },
                            }}
                          >
                            {product.name}
                          </Typography>
                        </Link>

                        <Stack direction="row" spacing={0.3}>
                          <StarIcon sx={{ color: "#2ECC71", fontSize: 18 }} />
                          <Typography variant="body2" fontWeight={600}>
                            {product.rating}
                          </Typography>
                        </Stack>
                      </Box>

                      <Typography
                        sx={{
                          mt: 0.5,
                          borderBottom: "1px dashed #e8e8e8",
                          pb: 0.5,
                          color: "#666",
                        }}
                      >
                        {product.title}
                      </Typography>

                      {/* Price */}
                      <Box
                        sx={{
                          display: "flex",
                          gap: 1,
                          alignItems: "center",
                          mt: 1,
                        }}
                      >
                        <Typography
                          sx={{ fontWeight: 700, fontSize: "1rem" }}
                        >
                          {product.newPrice}
                        </Typography>

                        <Typography
                          sx={{
                            textDecoration: "line-through",
                            color: "#f76161",
                            fontSize: "14px",
                          }}
                        >
                          {product.oldPrice}
                        </Typography>
                      </Box>

                      {/* Add to Cart */}
                      <Box sx={{ mt: 2 }}>
                        <Link to="/Cart" style={{ textDecoration: "none" }}>
                          <Box
                            sx={{
                              backgroundColor: "#1800a17d",
                              padding: "8px 12px",
                              textAlign: "center",
                              borderRadius: "6px",
                              color: "#fff",
                              fontWeight: 600,
                              cursor: "pointer",
                              "&:hover": { backgroundColor: "#c72277" },
                            }}
                          >
                            Add to Cart
                          </Box>
                        </Link>
                      </Box>
                    </CardContent>
                  </Box>
                </Box>
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductSection;
