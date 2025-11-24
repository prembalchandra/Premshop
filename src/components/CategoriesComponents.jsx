import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import {
  Box,
  Typography,
  Card,
  CardActionArea,
  IconButton,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image from "../assets/images/download.png";

const categories = [
  { name: "Dresses", icon: Image },
  { name: "Shoes", icon: Image },
  { name: "Bags", icon: Image },
  { name: "Accessories", icon: Image },
  { name: "Hats", icon: Image },
  { name: "Watches", icon: Image },
  { name: "Jewelry", icon: Image },
  { name: "Sunglasses", icon: Image },
];

export default function CategoryCardSlider() {
  const [selected, setSelected] = useState("");
  const sliderRef = useRef(null);
  useEffect(() => {
  window.dispatchEvent(new Event("resize"));
}, []);

  const settings = {
    initialSlide: 0,
    adaptiveHeight: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
    mobileFirst: true
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
            position: "relative",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              color: "#c72277",
              mb: 2,
              fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.5rem" },
            }}
          >
            Our Categories
          </Typography>

          <IconButton
            sx={{
              position: "absolute",
              left: -10,
              top: "60%",
              transform: "translateY(-50%)",
              zIndex: 10,
              width: 35,
              height: 35,
              borderRadius: "50%",
              backgroundColor: "#c72277",
              padding: "10px",
              color: "#fff",
              "&:hover": { backgroundColor: "#8e82d1" },
            }}
            onClick={() => sliderRef.current.slickPrev()}
          >
            <ArrowBackIosNewIcon fontSize="small" />
          </IconButton>

          <Slider {...settings}>
            {categories.map((cat) => (
              <Box key={cat.name} sx={{ padding: 1 }}>
                <Card
                  sx={{
                    textAlign: "center",
                    borderRadius: 2,
                    border:
                      selected === cat.name
                        ? "2px solid #053F44"
                        : "1px solid #ddd",
                    backgroundColor: selected === cat.name ? "#f3f0ff" : "#fff",
                  }}
                >
                  <CardActionArea onClick={() => setSelected(cat.name)}>
                    <Box sx={{ padding: 2 }}>
                      <img
                        src={cat.icon}
                        alt={cat.name}
                        style={{ width: 50, height: 50 }}
                      />
                      <Typography sx={{ marginTop: 1 }}>{cat.name}</Typography>
                    </Box>
                  </CardActionArea>
                </Card>
              </Box>
            ))}
          </Slider>

          <IconButton
            sx={{
              position: "absolute",
              right: -10,
              top: "60%",
              transform: "translateY(-50%)",
              zIndex: 10,
                width: 35,
              height: 35,
              borderRadius: "50%",
              backgroundColor: "#c72277",
              padding: "10px",
              color: "#fff",
              "&:hover": { backgroundColor: "#8e82d1",}
            }}
            onClick={() => sliderRef.current.slickNext()}
          >
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
