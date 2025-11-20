import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Stack,
  Checkbox,
  FormControlLabel,
  Select,
  Slider,
  MenuItem,
  Button,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import productImg from "../../assets/images/product/product-img-8.webp";
import Nodatafound from "../../assets/images/logo/no-data-found.svg"

const categories = [
  "Mobile & Laptops",
  "Bags & Backpacks",
  "Clothing",
  "Shoes",
  "Sneakers",
  "Sports Shoes",
  "Jewelry",
  "Electronics",
  "Computers & Tablets",
];

const products = [
  {
    id: 1,
    name: "Poultry Palace",
    desc: "Chicken quesadilla, avocado...",
    image: productImg,
    oldPrice: "₹19.99",
    newPrice: "₹13.99",
    rating: 3.9,
    category: "Food",
  },
  {
    id: 2,
    name: "Ribeye Junction",
    desc: "Chicken quesadilla, avocado...",
    image: productImg,
    oldPrice: "₹25.99",
    newPrice: "₹29.99",
    rating: 3.2,
    category: "Food",
  },
  {
    id: 3,
    name: "The Grill Master’s",
    desc: "Bread, Eggs, Butter, Fries...",
    image: productImg,
    oldPrice: "₹22.99",
    newPrice: "₹27.99",
    rating: 4.3,
    category: "Food",
  },
  {
    id: 4,
    name: "Cozy Cuppa Cafe",
    desc: "Cheesecake, waffles, Cakes...",
    image: productImg,
    oldPrice: "₹15.99",
    newPrice: "₹24.99",
    rating: 3.6,
    category: "Food",
  },
  {
    id: 5,
    name: "Gaming Laptop",
    desc: "High performance laptop",
    image: productImg,
    oldPrice: "₹999.99",
    newPrice: "₹899.99",
    rating: 4.5,
    category: "Mobile & Laptops",
  },
];

export default function Products() {
  const [wishlist, setWishlist] = useState({});
  const [sortOption, setSortOption] = useState("Default");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 1000]); // default range

  const toggleWishlist = (id) => {
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const toggleShowAll = () => setShowAll((prev) => !prev);

  const visibleCategories = showAll ? categories : categories.slice(0, 10);

  const filteredProducts = products.filter((p) => {
    const price = parseFloat(p.newPrice.replace("₹", ""));
    const inCategory =
      selectedCategories.length > 0
        ? selectedCategories.includes(p.category)
        : true;
    const inPriceRange = price >= priceRange[0] && price <= priceRange[1];

    return inCategory && inPriceRange;
  });

  const sortedProducts = filteredProducts.sort((a, b) => {
    const priceA = parseFloat(a.newPrice.replace("₹", ""));
    const priceB = parseFloat(b.newPrice.replace("₹", ""));
    if (sortOption === "PriceLow") return priceA - priceB;
    if (sortOption === "PriceHigh") return priceB - priceA;
    return 0;
  });

  return (
    <Box component="section" sx={{ py: 5 }}>
      <Box className="scrn-container">
        <Row>
          <Col xs={12} md={3} lg={3} className="mb-4">
            <Box
              sx={{
                border: "1px solid #95c2ffb3",
                borderRadius: "8px",
                background: "rgba(255, 255, 255, 0.96)",
                boxShadow: "0 18px 36px rgba(15, 23, 42, 0.08)",
                padding: "1.4rem 1.6rem",
                position: "sticky",
                top: "1rem",
              }}
            >
              <Typography variant="h6" gutterBottom>
                Product Categories
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {visibleCategories.map((cat) => (
                  <FormControlLabel
                    key={cat}
                    control={
                      <Checkbox
                        checked={selectedCategories.includes(cat)}
                        onChange={() => handleCategoryChange(cat)}
                      />
                    }
                    label={cat}
                  />
                ))}
                {categories.length > 10 && (
                  <Button
                    onClick={toggleShowAll}
                    variant="text"
                    sx={{
                      mt: 0,
                      backgroundColor: "transparent",
                      padding: "0",
                      textTransform: "none",
                      color: "#1800a1",
                      fontWeight: 600,
                      justifyContent: "end",
                      "&:hover": {
                        backgroundColor: "transparent",
                        boxShadow: "none",
                      },
                    }}
                  >
                    {showAll ? "Show Less" : "Show More"}
                  </Button>
                )}
              </Box>

              <Box sx={{ mt: 4 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Price Range
                </Typography>

                <Slider
                  value={priceRange}
                  onChange={handlePriceChange}
                  valueLabelDisplay="auto"
                  min={0}
                  max={1000}
                  step={10}
                  sx={{
                    color: "#0134a2", 
                    height: 8,
                    "& .MuiSlider-thumb": {
                      backgroundColor: "#ae1c9a", 
                      border: "2px solid #0134a2",
                    },
                    "& .MuiSlider-rail": {
                      backgroundColor: "#ccc", 
                      opacity: 1,
                    },
                    "& .MuiSlider-track": {
                      border: "none",
                    },
                  }}
                />

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: 1,
                  }}
                >
                  <Typography sx={{ color: "#FF0000" }}>
                    ₹{priceRange[0]}
                  </Typography>{" "}
                  <Typography sx={{ color: "#008000" }}>
                    ₹{priceRange[1]}
                  </Typography>{" "}
                </Box>
              </Box>
            </Box>
          </Col>

          <Col xs={12} md={9} lg={9}>
            <Box
              sx={{
                border: "1px solid #95c2ffb3",
                borderRadius: "8px",
                background: "rgba(255, 255, 255, 0.96)",
                boxShadow: "0 18px 36px rgba(15, 23, 42, 0.08)",
                padding: "1.4rem 1.6rem",
              }}
            >
              <Box className="d-flex justify-content-between align-items-center mb-3">
                <Typography>
                  Showing {sortedProducts.length} products
                </Typography>
                <Select
                  size="small"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  <MenuItem value="Default">Default</MenuItem>
                  <MenuItem value="PriceLow">Price: Low to High</MenuItem>
                  <MenuItem value="PriceHigh">Price: High to Low</MenuItem>
                </Select>
              </Box>

              <Row>
                {sortedProducts.length > 0 ? (
                  sortedProducts.map((res) => (
                    <Col xs={12} sm={6} md={4} key={res.id}>
                      <Card
                        sx={{
                          position: "relative",
                          textDecoration: "none",
                          color: "#000",
                          borderRadius: 2,
                          mb: 3,
                          overflow: "hidden",
                          padding: 2,
                          background: "#ffffff",
                          boxShadow: "0 18px 42px rgba(244, 161, 87, 0.16)",
                          transition: "transform 0.3s, box-shadow 0.3s",
                          "&:hover": {
                            transform: "translateY(-6px)",
                            boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
                          },
                          "& .zoom-img": {
                            transition: "transform 0.6s ease",
                          },
                          "&:hover .zoom-img": {
                            transform: "scale(1.1)",
                          },
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
                            }}
                          />
                          <Box
                            component="a"
                            href="/Wishlist"
                            onClick={() => toggleWishlist(res.id)}
                            sx={{
                              position: "absolute",
                              top: 10,
                              right: 10,
                              color: wishlist[res.id] ? "#EA1C1C" : "#AE1C9A",
                              background: "#fff",
                              borderRadius: "50%",
                              p: 0.5,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                              cursor: "pointer",
                              "&:hover": { transform: "scale(1.1)" },
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
                              component={Link}
                              to="/ProductDetails"
                              sx={{
                                fontWeight: 700,
                                fontSize: 15,
                                color: "#232532",
                                textDecoration: "none",
                                display: "block",
                                mb: 1,
                              }}
                            >
                              {res.name}
                            </Typography>
                            <Stack
                              direction="row"
                              alignItems="center"
                              spacing={0.3}
                            >
                              <StarIcon
                                sx={{ color: "#2ECC71", fontSize: 18 }}
                              />
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
                              display: "-webkit-box",
                              WebkitLineClamp: 1,
                              WebkitBoxOrient: "vertical",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              width: "100%",
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
                                fontSize: 14,
                                color: "#797979",
                              }}
                            >
                              {res.oldPrice}
                            </Typography>
                            <Typography
                              variant="body1"
                              sx={{
                                color: "#AE1C9A",
                                fontSize: 14,
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
                                  borderRadius: 1,
                                  color: "#fff",
                                  fontWeight: 600,
                                  fontSize: 14,
                                  cursor: "pointer",
                                  "&:hover": { backgroundColor: "#1800a1" },
                                }}
                              >
                                Add to Cart
                              </Box>
                            </Link>
                          </Box>
                        </CardContent>
                      </Card>
                    </Col>
                  ))
                ) : (
                  <Col xs={12}>
                    <Typography variant="h6" align="center" sx={{ mt: 4 }}>

                      <img src={Nodatafound} alt="No data found"  sx={{ width: 200, height: 200, margin: "0 auto" }} />
                     
                    </Typography>
                  </Col>
                )}
              </Row>
            </Box>
          </Col>
        </Row>
      </Box>
    </Box>
  );
}
