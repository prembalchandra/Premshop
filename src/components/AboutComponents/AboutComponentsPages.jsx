import React from "react";
import { Box, Grid, Typography, Button, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AboutImg from "../../assets/images/about-img.webp";
import { Col, Row } from "react-bootstrap";

const AboutComponentsPages = () => {
  return (
    <Box sx={{ padding: "60px 0" }}>
       <Box className="scrn-container">
      <Row>  
        <Col item xs={12} md={6}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src={AboutImg}      
              alt="About Us"
              sx={{
                width: "78%",
                margin:"aout"
              }}
            />
          </Box>
        </Col>

      <Col item xs={12} md={6}>
  <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
    Know More About PremShop?
  </Typography>

  <Typography sx={{ color: "text.secondary", mb: 3 }}>
    PremShop is your trusted destination for trendy fashion, quality products,
    and a seamless online shopping experience. We bring you a wide collection 
    of clothing, accessories, lifestyle essentials, and daily-use items – all 
    curated with love and delivered with care.  
    <br /><br />
    Our goal is to make shopping simple, affordable, and enjoyable for everyone.
    With fast delivery, secure payments, and customer-first support, PremShop 
    ensures you get the best experience every time you shop.
  </Typography>

  <Stack spacing={2}>
    <Stack direction="row" spacing={1} alignItems="center">
      <CheckCircleIcon color="secondary" />
      <Typography>Wide range of premium & trending products</Typography>
    </Stack>

    <Stack direction="row" spacing={1} alignItems="center">
      <CheckCircleIcon color="secondary" />
      <Typography>Fast delivery & secure payment options</Typography>
    </Stack>

    <Stack direction="row" spacing={1} alignItems="center">
      <CheckCircleIcon color="secondary" />
      <Typography>Dedicated support for a smooth shopping experience</Typography>
    </Stack>
  </Stack>

  <Button
    variant="contained"
    sx={{
      mt: 4,
      backgroundColor: "#A00497",
      borderRadius: "30px",
      padding: "10px 24px",
      textTransform: "none",
      fontSize: "16px",
    }}
    endIcon={<ArrowForwardIcon />}
  >
    Contact Us
  </Button>
</Col>

      </Row>
      </Box>
    </Box>
  );
};

export default AboutComponentsPages;
