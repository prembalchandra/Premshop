import React, { useEffect, useState } from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import product1 from "../assets/images/product/product-img2.webp";
import product2 from "../assets/images/product/product-img2.webp";
import product3 from "../assets/images/product/product-img2.webp";
import product4 from "../assets/images/product/product-img2.webp";

const products = [
  {
    id: 1,
    title: "Leather Dress Shoes",
    oldPrice: 22.99,
    newPrice: 13.99,
    image: product1,
  },
  {
    id: 2,
    title: "Trendy Bucket Hat",
    oldPrice: 39.99,
    newPrice: 23.99,
    image: product2,
  },
  {
    id: 3,
    title: "Stylish Statement Earrings",
    oldPrice: 39.99,
    newPrice: 26.99,
    image: product3,
  },
  {
    id: 4,
    title: "Rainbow Sequin Dress",
    oldPrice: 29.99,
    newPrice: 16.99,
    image: product4,
  },
];

const FlashSaleProduct = () => {
  const targetDate = new Date("2025-12-31T23:59:59").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <Box
      component="section"
      sx={{
        padding: "50px 0",
        background: "linear-gradient(90deg, #fbd7e9 0%, #ffd7ab 100%)",
      }}
    >
      <Box className="scrn-container">
        <Box className="section-inner-crad">
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
                Limited Time Flash Sale Today!
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 6 }}>
              {["days", "hours", "minutes", "seconds"].map((unit) => (
                <Box textAlign="center" key={unit}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: "bold",
                      color:
                        unit === "hours"
                          ? "#68d8f0"
                          : unit === "minutes"
                          ? "green"
                          : "red",
                    }}
                  >
                    {timeLeft[unit]}
                  </Typography>
                  <Typography>
                    {unit.charAt(0).toUpperCase() + unit.slice(1)}
                  </Typography>
                </Box>
              ))}
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

          <Row className="justify-content-center g-4">
            {products.map((product) => (
              <Col xs={12} sm={6} md={3} key={product.id}>
                <Card
                  sx={{
                    position: "relative",
                    textDecoration: "none",
                    color: "#000",
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
                    },
                    "& .zoom-img": { transition: "transform 0.6s ease" },
                    "&:hover .zoom-img": { transform: "scale(1.1)" },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={product.image}
                    alt={product.title}
                    className="zoom-img"
                    sx={{
                      width: "100%",
                      aspectRatio: "4/3",
                      objectFit: "contain",
                    }}
                  />
                  <CardContent sx={{ px: 2, pb: 2, pt: 1 }}>
                    <Link to="/ProductDetails" style={{ textDecoration: "none" }}>
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#000",
                          fontWeight: 600,
                          fontSize: { xs: "0.95rem", sm: "1rem" },
                          "&:hover": { color: "#1800a1" },
                        }}
                      >
                        {product.title} 
                      </Typography>
                    </Link>

                    <Box
                      sx={{
                        display: "flex",
                        gap: 1,
                        alignItems: "center",
                        mt: 1,
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: 700,
                          color: "#000",
                          fontSize: "1rem",
                        }}
                      >
                        ${product.newPrice}
                      </Typography>
                      <Typography
                        sx={{
                          textDecoration: "line-through",
                          color: "#f76161",
                          fontSize: "14px",
                        }}
                      >
                        ${product.oldPrice}
                      </Typography>
                    </Box>

                    <Box sx={{ mt: 2 }}>
                      <Link
                        to="/Cart"
                        style={{ textDecoration: "none", width: "100%" }}
                      >
                        <Box
                          sx={{
                            padding: "8px 12px",
                            textAlign: "center",
                            backgroundColor: "#1800a17d",
                            color: "#fff",
                            borderRadius: "6px",
                            color: "#fff",
                            fontWeight: 600,
                            fontSize: "14px",
                            cursor: "pointer",
                            textTransform: "none",
                            "&:hover": {
                              backgroundColor: "#c72277",
                              color: "#fff",
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

export default FlashSaleProduct;
