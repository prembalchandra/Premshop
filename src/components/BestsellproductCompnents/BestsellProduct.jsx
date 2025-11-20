import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Stack,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import nachosImg from "../../assets/images/product/product-img-3.webp";
import steakImg from "../../assets/images/product/product-img.webp";
import sushiImg from "../../assets/images/product/product-img-8.webp";
import dumplingsImg from "../../assets/images/product/product-img2.webp";

const restaurants = [
  {
    id: 1,
    name: "Poultry Palace",
    desc: "Chicken quesadilla, avocado...",
    image: nachosImg,
    oldPrice: "$19.99",
    newPrice: "$13.99",
    rating: 3.9,
    location: "New...",
    distance: "3.2 km",
    time: "25 min",
  },
  {
    id: 2,
    name: "Ribeye Junction",
    desc: "Chicken quesadilla, avocado...",
    image: steakImg,
    oldPrice: "$25.99",
    newPrice: "$18.99",
    rating: 3.2,
    location: "Calif...",
    distance: "1 km",
    time: "10 min",
  },
  {
    id: 3,
    name: "The Grill Master’s",
    desc: "Bread, Eggs, Butter, Fries...",
    image: sushiImg,
    oldPrice: "$22.99",
    newPrice: "$16.99",
    rating: 4.3,
    location: "New...",
    distance: "5 km",
    time: "40 min",
  },
  {
    id: 4,
    name: "Cozy Cuppa Cafe",
    desc: "Cheesecake, waffles, Cakes...",
    image: dumplingsImg,
    oldPrice: "$15.99",
    newPrice: "$11.99",
    rating: 3.6,
  },
  {
    id: 5,
    name: "Cozy Cuppa Cafe",
    desc: "Cheesecake, waffles, Cakes...",
    image: dumplingsImg,
    oldPrice: "$15.99",
    newPrice: "$11.99",
    rating: 3.6,
  },
  {
    id: 6,
    name: "Cozy Cuppa Cafe",
    desc: "Cheesecake, waffles, Cakes...",
    image: dumplingsImg,
    oldPrice: "$15.99",
    newPrice: "$11.99",
    rating: 3.6,
  },
  {
    id: 7,
    name: "Cozy Cuppa Cafe",
    desc: "Cheesecake, waffles, Cakes...",
    image: dumplingsImg,
    oldPrice: "$15.99",
    newPrice: "$11.99",
    rating: 3.6,
  },
  {
    id: 8,
    name: "Cozy Cuppa Cafe",
    desc: "Cheesecake, waffles, Cakes...",
    image: dumplingsImg,
    oldPrice: "$15.99",
    newPrice: "$11.99",
    rating: 3.6,
  },
];

const BestsellProduct = () => {
  const [wishlist, setWishlist] = useState({});

  const toggleWishlist = (id) => {
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <Box
      component="section"
      sx={{ padding: "40px 0  100px 0"}}
    >
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
              Top Selling Products This Week
            </Typography>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            <Link
              to="/Product"
              style={{
                textDecoration: "none",
                color: "#c72277",
                fontWeight: "600",
                fontSize: "18px",
              }}
            >
              View All Products →
            </Link>
          </Box>
        </Box>

        <Row>
          {restaurants.slice(0, 8).map((res) => (
            <Col xs={12} sm={6} md={3} key={res.id}>
              <Card
                sx={{
                  position: "relative",
                  textDecoration: "none",
                  color: "#000 !important",
                  borderRadius: 2,
                  marginBottom: "20px",
                  overflow: "hidden",
                  padding: "12px",
                  backgroundColor: "#fff",
                  border: "1px solid #e8e8e8",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
                  }
                }}
              >
                <Box sx={{ position: "relative" }}>
                  <CardMedia
                    component="img"
                    image={res.image}
                    alt={res.name}
                    className="zoom-img"
                    sx={{
                      width: "100%",
                      aspectRatio: "4/3",
                      objectFit: "contain",
                      transition: "transform 0.6s ease",
                    }}
                  />
                  <Box
                    component="a"
                    href="/Wishlist"
                    onClick={() => toggleWishlist(res.id)}
                    sx={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      color: wishlist[res.id] ? "#EA1C1C" : "#AE1C9A",
                      background: "#fff",
                      borderRadius: "50%",
                      padding: "6px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                      border: "none",
                      cursor: "pointer",
                      transition: "all 0.3s",
                      "&:hover": {
                        background: "#f8f8f8",
                        transform: "scale(1.1)",
                      },
                    }}
                  >
                    {wishlist[res.id] ? (
                      <FavoriteIcon fontSize="small" />
                    ) : (
                      <FavoriteBorderIcon fontSize="small" />
                    )}
                  </Box>
                </Box>

                <CardContent sx={{ px: 2, pb: 2, pt: 1 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
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
                      {res.name}
                    </Typography>

                    <Stack direction="row" alignItems="center" spacing={0.3}>
                      <StarIcon sx={{ color: "#2ECC71", fontSize: 18 }} />
                      <Typography variant="body2" fontWeight={600}>
                        {res.rating}
                      </Typography>
                    </Stack>
                  </Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      mt: 0.5,
                      borderBottom: "1px dashed #e8e8e8",
                      pb: 0.5,
                    }}
                  >
                    {res.desc}
                  </Typography>
                  <Box
                    sx={{
                      mt: 0.5,
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        textDecoration: "line-through",
                        fontSize: "14px",
                        color: "#797979",
                      }}
                    >
                      {res.oldPrice}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#AE1C9A",
                        fontSize: "14px",
                        fontWeight: 500,
                      }}
                    >
                      {res.newPrice}
                    </Typography>
                  </Box>

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
                          fontSize: "14px",
                          cursor: "pointer",
                          "&:hover": {
                            backgroundColor: "#c72277",
                          },
                        }}
                      >
                        Add to Cart
                      </Box>
                    </Link>
                  </Box>
                </CardContent>
              </Card>
            </Col>
          ))}
        </Row>
      </Box>
      </Box>
    </Box>
  );
};

export default BestsellProduct;
