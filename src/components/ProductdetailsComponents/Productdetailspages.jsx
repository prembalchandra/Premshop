import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { Box, Typography, Button, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Row, Col } from "react-bootstrap";
import ProductTabspages from "./ProductTabspages";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import sliderImg from "../../assets/images/product/product-img-3.webp";
import sliderImg2 from "../../assets/images/product/product-img-8.webp";
import sliderImg3 from "../../assets/images/product/product-img.webp";
import sliderImg4 from "../../assets/images/product/product-img2.webp";
import sliderImg5 from "../../assets/images/product/product-img2.webp";

const ProductSlider = () => {
  const images = [sliderImg, sliderImg2, sliderImg3, sliderImg4, sliderImg5];

  const mainSliderRef = useRef(null);
  const thumbSliderRef = useRef(null);

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const price = 6.99;
  const oldPrice = 9.99;

  useEffect(() => {
    setNav1(mainSliderRef.current);
    setNav2(thumbSliderRef.current);
  }, []);

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => setQuantity((prev) => Math.max(1, prev - 1));

  const mainSettings = {
    asNavFor: nav2,
    arrows: false,
    fade: true,
  };

  const thumbSettings = {
    asNavFor: nav1,
    slidesToShow: 4,
    swipeToSlide: true,
    focusOnSelect: true,
    arrows: false,
  };

  return (
    <Box component="section" sx={{ padding: "50px 0 0px 0" }}>
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
          <Row>
            <Col md={6} xs={12}>
              <Box
                sx={{
                  width: { xs: "100%", md: 400 },
                  margin: "auto",
                  position: "relative",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  mb: 2
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    backgroundColor: "#FFC107",
                    color: "#000",
                    borderRadius: "50%",
                    padding: "8px 6px",
                    top: 10,
                    left: 10,
                    height:"50px",
                    width:"50px",
                    lineHeight:"38px",
                    fontWeight: "bold",
                    zIndex: 2,
                  }}
                >
                  -50%
                </Box>

                {/* Main Slider */}
                <Slider {...mainSettings} ref={mainSliderRef}>
                  {images.map((img, idx) => (
                    <Box key={idx} sx={{ borderBottom: "1px solid #ddd" }}>
                      <img
                        src={img}
                        alt={`product-${idx}`}
                        style={{ width: "100%" }}
                      />
                    </Box>
                  ))}
                </Slider>


                <Box sx={{ mt: 0 }}>
                  <Slider {...thumbSettings} ref={thumbSliderRef}>
                    {images.map((img, idx) => (
                      <Box key={idx} sx={{ px: 1 }}>
                        <img
                          src={img}
                          alt={`thumb-${idx}`}
                          style={{
                            width: "100%",
                            border: "2px solid #ddd",
                            borderRadius: "4px",
                            cursor: "pointer",
                          }}
                        />
                      </Box>
                    ))}
                  </Slider>
                </Box>
              </Box>
            </Col>

            <Col md={6} xs={12}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  mb: 2
                }}
              >
                <Typography variant="subtitle2" gutterBottom>
                  BOY'S FASHION
                </Typography>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  gutterBottom
                  sx={{
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  Rainbow Sequin Professional Coat
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    gap: "8px",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    component="span"
                    sx={{
                      color: "#AE1C9A",
                      fontSize: "22px",
                      fontWeight: 500,
                    }}
                  >
                    ₹{(price * quantity).toFixed(2)}
                  </Typography>
                  <Typography
                    component="span"
                    sx={{
                      textDecoration: "line-through",
                      fontSize: 14,
                      color: "#797979",
                    }}
                  >
                    ₹{oldPrice.toFixed(2)}
                  </Typography>
                </Box>

                <Box>
                  <Typography sx={{ mb: 2 }}>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page.
                  </Typography>

                  <Typography sx={{ mb: 1 }}>
                    Availability: 132 Products Available
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "#f5f5f5",
                    padding: "6px 14px",
                    borderRadius: "30px",
                    width: "140px",
                    border: "1px solid #ddd",
                  }}
                >
                  <IconButton
                    size="small"
                    onClick={decreaseQty}
                    sx={{
                      background: "#fff",
                      border: "1px solid #ccc",
                      width: "28px",
                      height: "28px",
                      "&:hover": { background: "#eee" },
                    }}
                  >
                    <RemoveIcon fontSize="small" />
                  </IconButton>

                  <Typography
                    variant="subtitle1"
                    sx={{
                      width: "30px",
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                  >
                    {quantity}
                  </Typography>

                  <IconButton
                    size="small"
                    onClick={increaseQty}
                    sx={{
                      background: "#fff",
                      border: "1px solid #ccc",
                      width: "28px",
                      height: "28px",
                      "&:hover": { background: "#eee" },
                    }}
                  >
                    <AddIcon fontSize="small" />
                  </IconButton>
                </Box>

                <Button
                  variant="a"
                  href="/Cart"
                  sx={{
                    backgroundColor: "#1800a17d",
                    padding: "8px 12px",
                    textAlign: "center",
                    borderRadius: 1,
                    color: "#fff",
                    marginTop:"10px",
                    fontWeight: 600,
                    fontSize: 14,
                    maxWidth: "150px",
                    cursor: "pointer",
                    "&:hover": { backgroundColor: "#c72277" },
                  }}
                >
                  Add to Cart
                </Button>
              </Box>
            </Col>
          </Row>
           <ProductTabspages />
        </Box>

       
      </Box>
    </Box>
  );
};

export default ProductSlider;
