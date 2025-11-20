import React from "react";
import { Box, Typography, Divider, IconButton } from "@mui/material";
import { Row, Col } from "react-bootstrap";
import { List, ListItem, Link } from "@mui/material";
import logoImg from "../assets/images/logo/premshop-logo.webp";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ReplayIcon from "@mui/icons-material/Replay";
import SecurityIcon from "@mui/icons-material/Security";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{ backgroundColor: "#000", color: "#fff", padding:"45px 0 20px 0"}}
    >
      <Box className="scrn-container">
        <Box
          sx={{
            background: "#AE1C9A",
            padding: "24px",
            marginTop: "-6rem",
            borderRadius: "4px",
          }}
        >
          <Row>
            <Col item xs={12} sm={6} md={3}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box sx={{ mr: 2 }}>
                  <LocalShippingIcon
                    sx={{
                      fontSize: "44px",
                    }}
                  />
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#fff",
                    }}
                  >
                    Free Shipping
                  </Typography>
                  <Typography variant="body2">
                    When ordering over $100
                  </Typography>
                </Box>
              </Box>
            </Col>

            <Col item xs={12} sm={6} md={3}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ mr: 2 }}>
                  <ReplayIcon
                    sx={{
                      fontSize: "44px",
                    }}
                  />
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#fff",
                    }}
                  >
                    Free Return
                  </Typography>
                  <Typography variant="body2">
                    Get Return within 30 days
                  </Typography>
                </Box>
              </Box>
            </Col>

            <Col item xs={12} sm={6} md={3}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ mr: 2 }}>
                  <SecurityIcon
                    sx={{
                      fontSize: "44px",
                    }}
                  />
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#fff",
                    }}
                  >
                    Secure Payment
                  </Typography>
                  <Typography variant="body2">
                    100% Secure Online Payment
                  </Typography>
                </Box>
              </Box>
            </Col>

            <Col item xs={12} sm={6} md={3}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ mr: 2 }}>
                  <EmojiEventsIcon
                    sx={{
                      fontSize: "44px",
                    }}
                  />
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#fff",
                    }}
                  >
                    Best Quality
                  </Typography>
                  <Typography variant="body2">
                    Original Product Guaranteed
                  </Typography>
                </Box>
              </Box>
            </Col>
          </Row>
        </Box>

        <Box sx={{ pt: "4rem" }}>
          <Row className="gy-4">
            <Col xs={12} sm={6} md={3}>
              <Box component={Link} to="/">
                <Box
                  component="img"
                  src={logoImg}
                  alt="Pizzacrafts"
                  sx={{ height: 50, width: "auto" }}
                />
              </Box>
              <Typography
                sx={{
                  color: "#fff",
                  margin:"20px 0"
                }}
              >
                Premshop offers quality products, fast delivery, secure
                payments, and a seamless shopping experience for every customer.
              </Typography>
              <Box sx={{ display: "flex", gap: 2, margin: "10px 0" }}>
                <IconButton sx={{ color: "#fff" }}>
                  <FacebookIcon />
                </IconButton>

                <IconButton sx={{ color: "#fff" }}>
                  <InstagramIcon />
                </IconButton>

                <IconButton sx={{ color: "#fff" }}>
                  <YouTubeIcon />
                </IconButton>

                <IconButton sx={{ color: "#fff" }}>
                  <TwitterIcon />
                </IconButton>
              </Box>
            </Col>

            <Col xs={12} sm={6} md={3}>
              <Typography
                variant="h6"
                sx={{
                  mb: 2,
                  fontWeight: 600,
                  fontSize: "24px",
                  color: "#fff",
                }}
              >
                What's In Store
              </Typography>
              <List
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  color: "#fff",
                  p: 0,
                }}
              >
                <ListItem sx={{ p: 0 }}>
                  <Link
                    href="about.html"
                    underline="none"
                    sx={{ color: "#fff", py: 0.5 }}
                  >
                    Secure Payment
                  </Link>
                </ListItem>
                <ListItem sx={{ p: 0 }}>
                  <Link
                    href="privacy.html"
                    underline="none"
                    sx={{ color: "#fff", py: 0.5 }}
                  >
                    Privacy Policy
                  </Link>
                </ListItem>
                <ListItem sx={{ p: 0 }}>
                  <Link
                    href="terms.html"
                    underline="none"
                    sx={{ color: "#fff", py: 0.5 }}
                  >
                    Terms of Use
                  </Link>
                </ListItem>
                <ListItem sx={{ p: 0 }}>
                  <Link
                    href="product-sidebar.html"
                    underline="none"
                    sx={{ color: "#fff", py: 0.5 }}
                  >
                    Archived Products
                  </Link>
                </ListItem>
              </List>
            </Col>

            <Col xs={12} sm={6} md={3}>
              <Typography
                variant="h6"
                sx={{
                  mb: 2,
                  fontWeight: 600,
                  fontSize: "24px",
                  color: "#fff",
                }}
              >
                Company Info & Policies
              </Typography>

              <List
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  color: "#fff",
                  p: 0,
                }}
              >
                <ListItem sx={{ p: 0 }}>
                  <Link
                    href="about.html"
                    underline="none"
                    sx={{ color: "#fff", py: 0.5 }}
                  >
                    Secure Payment
                  </Link>
                </ListItem>
                <ListItem sx={{ p: 0 }}>
                  <Link
                    href="/PrivacyPolicy"
                    underline="none"
                    sx={{ color: "#fff", py: 0.5 }}
                  >
                    Privacy Policy
                  </Link>
                </ListItem>
                <ListItem sx={{ p: 0 }}>
                  <Link
                    href="/TermsConditions"
                    underline="none"
                    sx={{ color: "#fff", py: 0.5 }}
                  >
                    Terms of Use
                  </Link>
                </ListItem>
                <ListItem sx={{ p: 0 }}>
                  <Link
                    href="/ReturnPolicy"
                    underline="none"
                    sx={{ color: "#fff", py: 0.5 }}
                  >
                    Return & Claim Policy
                  </Link>
                </ListItem>
              </List>
            </Col>

            <Col xs={12} sm={6} md={3}>
              <Typography
                variant="h6"
                sx={{
                  mb: 2,
                  fontWeight: 600,
                  fontSize: "24px",
                  color: "#fff",
                }}
              >
                Get In Touch
              </Typography>

              <Box mb={2}>
                <Typography fontWeight="bold" color="#fff">
                  Address: Prayagraj Tehsil, Uttar Pradesh
                </Typography>
              </Box>

              <Box mb={2}>
                <Typography fontWeight="bold" color="#fff">
                  Phone: 8115494617
                </Typography>
              </Box>

              <Box>
                <Typography fontWeight="bold" color="#fff">
                  Email: support@premshop.in
                </Typography>
              </Box>
            </Col>
          </Row>
        </Box>

        <Divider sx={{ mt: 6, borderColor: "#fff" }} />
        <Typography color="#fff" textAlign="center" mt={3}>
          © {new Date().getFullYear()} Premshop. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
