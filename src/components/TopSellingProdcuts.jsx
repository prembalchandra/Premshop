// TopSellingProdcuts.jsx
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  Link,
} from "@mui/material";
import { Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import product1 from "../assets/images/product/product-img-3.webp";
import product2 from "../assets/images/product/product-img-3.webp";
import product3 from "../assets/images/product/product-img-3.webp";
import product4 from "../assets/images/product/product-img-3.webp";
import { Col, Row } from "react-bootstrap";

const products = [
  {
    id: 1,
    name: "Leather Dress Shoes",
    oldPrice: "$19.99",
    newPrice: "$13.99",
    img: product1,
  },
  {
    id: 2,
    name: "Leather Dress Shoes",
    oldPrice: "$19.99",
    newPrice: "$13.99",
    img: product2,
  },
  {
    id: 3,
    name: "Leather Dress Shoes",
    oldPrice: "$19.99",
    newPrice: "$13.99",
    img: product3,
  },
  {
    id: 4,
    name: "Leather Dress Shoes",
    oldPrice: "$19.99",
    newPrice: "$13.99",
    img: product4,
  },
  {
    id: 5,
    name: "Leather Dress Shoes",
    oldPrice: "$19.99",
    newPrice: "$13.99",
    img: product4,
  },
  {
    id: 6,
    name: "Leather Dress Shoes",
    oldPrice: "$19.99",
    newPrice: "$13.99",
    img: product4,
  },
];

const TopSellingProdcuts = () => {
  const [wishlist, setWishlist] = useState({});

  const toggleWishlist = (id) => {
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
  };
  return (
    <Box component="section" sx={{ padding: "50px 0  0 0" }}>
      <Box className="scrn-container">
        <Box
          sx={{
            border: "1px solid #95c2ffb3",
            borderRadius: "8px",
            background: "rgba(255, 255, 255, 0.96)",
            boxShadow: "0 18px 36px rgba(15, 23, 42, 0.08)",
            padding: "1.4rem 1.6rem",
          }}
        >
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
                Most Trending Products
              </Typography>
            </Box>
            
          </Box>
          <Row>
            {products.map((product) => (
              <Col xs={12} sm={6} lg={4} key={product.id}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    padding: "20px 16px",
                    borderRadius: "12px",
                    marginBottom: "20px",
                    position: "relative",
                    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                    border: "1px solid transparent",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      border: "1px solid #c72277",
                      boxShadow: "0 12px 30px rgba(24, 0, 161, 0.3)",
                    },
                  }}
                >
                  <Box
                    component="a"
                    href="/Wishlist"
                    onClick={(e) => {
                      setWishlist((prev) => ({
                        ...prev,
                        [product.id]: !prev[product.id],
                      }));
                    }}
                    sx={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      color: wishlist[product.id] ? "#EA1C1C" : "#AE1C9A",
                      background: "#fff",
                      borderRadius: "50%",
                      padding: "6px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                      transition: "all 0.3s",
                      "&:hover": {
                        background: "#f8f8f8",
                        transform: "scale(1.1)",
                      },
                    }}
                  >
                    {wishlist[product.id] ? (
                      <FavoriteIcon fontSize="small" />
                    ) : (
                      <FavoriteBorderIcon fontSize="small" />
                    )}
                  </Box>

                  <Box
                    sx={{
                      width: "120px",
                      height: "137px",
                      background: "rgb(142 130 209 / 63%)",
                      mr: 2,
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={product.img}
                      alt={product.name}
                      sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </Box>

                  <CardContent sx={{ flex: 1, p: 0 }}>
                    <Box className="ratings">
                      <Rating
                        name="customized-rating"
                        defaultValue={5}
                        precision={1}
                        readOnly
                        icon={
                          <StarIcon
                            sx={{ fontSize: "14px", color: "#ffc107" }}
                          />
                        }
                        emptyIcon={
                          <StarBorderIcon
                            sx={{ fontSize: "14px", color: "#ffc107" }}
                          />
                        }
                      />
                    </Box>
                    <Typography
                      component="a"
                      href="/ProductDetails"
                      sx={{
                        fontWeight: 700,
                        fontSize: "15px",
                        color: "#232532",
                        textDecoration: "none",
                        display: "block",
                        mb: 1,
                      }}
                    >
                      {product.name}
                    </Typography>
                    <Box sx={{ display: "flex", gap: "9px" }}>
                      <Typography
                        sx={{
                          textDecoration: "line-through",
                          fontSize: "14px",
                          color: "#797979",
                        }}
                      >
                        {product.oldPrice}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#AE1C9A",
                          fontSize: "14px",
                          fontWeight: 500,
                        }}
                      >
                        {product.newPrice}
                      </Typography>
                    </Box>
                  </CardContent>

                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      right: 0,
                      transition: "all 0.4s",
                    }}
                  >
                    <Button
                      variant="contained"
                      href="Cart"
                      sx={{
                        padding: "12px 16px 7px 25px",
                        borderRadius: "32px 0px 13px 0px",
                        backgroundColor: "#1800a17d",
                        color: "#fff",
                        fontSize: "16px",
                        lineHeight: "24px",
                        textTransform: "none",
                        "&:hover": {
                          backgroundColor: "#c72277",
                          color: "#fff",
                        },
                      }}
                    >
                      Add To Cart
                    </Button>
                  </Box>
                </Card>
              </Col>
            ))}
          </Row>
        </Box>
      </Box>
    </Box>
  );
};

export default TopSellingProdcuts;
