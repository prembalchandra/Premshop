import { Box, Typography, Avatar } from "@mui/material";
import Slider from "react-slick";

export default function TestimonialSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
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
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
};

  const testimonials = [
    {
      text: "As a digital marketing agency our team works day in and day out...",
      name: "Stefhen Hoking",
      role: "HR of",
      company: "Desgin360",
      img: "/avatar1.jpg",
    },
    {
      text: "It is a long established fact that a reader will be distracted...",
      name: "Abdullah Al Mamun",
      role: "Designer of",
      company: "DesginCode",
      img: "/avatar2.jpg",
    },
    {
      text: "Build the perfect online store using our high-converting template...",
      name: "Mohammad Rashed Khan",
      role: "CEO of",
      company: "DesginLab",
      img: "/avatar3.jpg",
    },
    {
      text: "Build the perfect online store using our high-converting template...",
      name: "Mohammad Rashed Khan",
      role: "CEO of",
      company: "DesginLab",
      img: "/avatar3.jpg",
    },
    {
      text: "Build the perfect online store using our high-converting template...",
      name: "Mohammad Rashed Khan",
      role: "CEO of",
      company: "DesginLab",
      img: "/avatar3.jpg",
    },
    {
      text: "Build the perfect online store using our high-converting template...",
      name: "Mohammad Rashed Khan",
      role: "CEO of",
      company: "DesginLab",
      img: "/avatar3.jpg",
    },
  ];

  return (
    <Box sx={{ padding: "30px 0 120px 0" }}>
      <Box className="scrn-container">
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <Box key={index} sx={{ px: 2 }}>
              <Box
                sx={{
                  background: "#fff",
                  p: 3,
                  borderRadius: "16px",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                  minHeight: 260,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "18px",
                    lineHeight: "28px",
                    color: "#555",
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  “{item.text}”
                </Typography>

                <Typography sx={{ color: "#FFA726", mt: 1 }}>★★★★★</Typography>

                <Box
                  sx={{
                    height: "1px",
                    width: "100%",
                    background: "#eee",
                    my: 2,
                  }}
                />

                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Avatar src={item.img} sx={{ width: 56, height: 56 }} />

                  <Box>
                    <Typography fontSize="20px" fontWeight={700}>
                      {item.name}
                    </Typography>
                    <Typography sx={{ color: "#666" }}>
                      {item.role}{" "}
                      <span style={{ color: "#BA1DA0", fontWeight: 600 }}>
                        {item.company}
                      </span>
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}
