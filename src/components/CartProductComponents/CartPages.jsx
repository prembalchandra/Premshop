import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Typography,
  Button,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import Cartdata from "../../assets/images/logo/empty-cart.webp";
import CartImg from "../../assets/images/product/product-img.webp";

const initialCart = [
  {
    id: 1,
    name: "Classic Oxford Shirt",
    newewprice: 208,
    img: CartImg,
    description: "A stylish classic oxford shirt perfect for any occasion.",
    oldPrice: 300,
    quantity: 1,
  },
  {
    id: 2,
    name: "Classic Oxford Shirt",
    newewprice: 120,
    img: CartImg,
    description: "A stylish classic oxford shirt perfect for any occasion.",
    oldPrice: 130,
    quantity: 1,
  },
  {
    id: 3,
    name: "Classic Oxford Shirt",
    newewprice: 2000,
    img: CartImg,
    description: "A stylish classic oxford shirt perfect for any occasion.",
    oldPrice: 3000,
    quantity: 1,
  },
  {
    id: 4,
    name: "Classic Oxford Shirt",
    newewprice: 1200,
    img: CartImg,
    description: "A stylish classic oxford shirt perfect for any occasion.",
    oldPrice: 2300,
    quantity: 1,
  },
];

const CartPages = () => {
  const [Cart, setCart] = useState(initialCart);

  const handleDelete = (id) => {
    setCart(Cart.filter((item) => item.id !== id));
  };

  const cleanCart = () => {
    setCart([]);
  };

  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <Box component="section">
      <Box className="scrn-container">
        {Cart.length === 0 ? (
          <Box
            className="text-center py-5"
            sx={{
              border: "1px solid #95c2ffb3",
              borderRadius: "8px",
              background: "rgba(255, 255, 255, 0.96)",
              boxShadow: "0 18px 36px rgba(15, 23, 42, 0.08)",
              padding: "1.4rem 1.6rem",
            }}
          >
            <img
              src={Cartdata}
              alt="empty"
              style={{ width: "280px"}}
            />

            <Typography variant="h6" className="fw-bold mb-2">
              Empty! You don’t have any Products in your Cart
            </Typography>

            <Button
              variant="contained"
              color="primary"
              href="/Product"
              sx={{
                padding: "8px 24px",
                margin: "4rem 0",
                textAlign: "center",
                borderRadius: "3rem",
                display: "inline-block",
                background: "#AE1C9A",
                fontSize: "15px",
                fontWeight: 500,
                position: "relative",
                color: "#FFFFFF",
                fontFamily: '"Inter", sans-serif',
                transition: "all 0.3s",
                overflow: "hidden",
                zIndex: 1,
                "&:hover": {
                  background: "#8C157D",
                  transform: "translateY(-2px)",
                },
              }}
            >
              Back to Shop
            </Button>
          </Box>
        ) : (
          <TableContainer component={Paper} 
           sx={{
              border: "1px solid #95c2ffb3",
              borderRadius: "8px",
              background: "rgba(255, 255, 255, 0.96)",
              boxShadow: "0 18px 36px rgba(15, 23, 42, 0.08)",
              padding: "1.4rem 1.6rem",
            }}
          >
            <Table>
              <TableHead sx={{ background: "#0d6efd33" }}>
                <TableRow>
                  <TableCell>
                    <strong>PRODUCT</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Quantity</strong>
                  </TableCell>
                  <TableCell>
                    <strong>PRICE</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Total</strong>
                  </TableCell>
                  <TableCell align="center">
                    <strong>ACTION</strong>
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {Cart.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <Box className="d-flex align-items-center gap-3">
                        <Box
                          sx={{
                            border: "1px solid #ccc",
                            width: "80px",
                            height: "80px",
                            overflow: "hidden",
                            borderRadius: "10px",
                            background: "rgb(142 130 209 / 63%)",
                          }}
                        >
                          <img
                            src={item.img}
                            alt="product"
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          />
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                          <Typography variant="subtitle1">
                            {item.name}
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                            {item.description}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>

                    <TableCell>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          background: "#f5f5f5",
                          padding: "6px 14px",
                          borderRadius: "30px",
                          width: "140px",
                          justifyContent: "center",
                          border: "1px solid #ddd",
                        }}
                      >
                        <IconButton
                          size="small"
                          onClick={() => decreaseQty(item.id)}
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
                          {item.quantity}
                        </Typography>

                        <IconButton
                          size="small"
                          onClick={() => increaseQty(item.id)}
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
                    </TableCell>

                    <TableCell>
                      <Typography variant="subtitle1" sx={{ color: "#AE1C9A" }}>
                        ${item.newewprice}.00
                      </Typography>

                      {item.oldPrice && (
                        <Typography variant="body2" color="textSecondary">
                          <span
                            style={{
                              textDecoration: "line-through",
                              color: "gray",
                            }}
                          >
                            ${item.oldPrice}.00
                          </span>
                        </Typography>
                      )}
                    </TableCell>

                    <TableCell align="right">
                      <Typography
                        variant="subtitle1"
                        sx={{
                          color: "#0D6EFD",
                          fontWeight: 600,
                          fontSize: "15px",
                        }}
                      >
                        ₹
                        {(item.newewprice * item.quantity).toLocaleString(
                          "en-IN",
                          { minimumFractionDigits: 2 }
                        )}
                      </Typography>
                    </TableCell>

                    <TableCell align="center">
                      <IconButton
                        color="error"
                        onClick={() => handleDelete(item.id)}
                      >
                        <CloseIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}

        {Cart.length > 0 && (
          <Box className="d-flex justify-content-end gap-3 mt-4 mb-5">
            <Button
              variant="contained"
              color="error"
              onClick={cleanCart}
              sx={{
                padding: "8px 24px",
                textAlign: "center",
                borderRadius: "3rem",
                display: "inline-block",
                background: "#0D6EFD",
                fontSize: "15px",
                fontWeight: 500,
                position: "relative",
                color: "#FFFFFF",
                fontFamily: '"Inter", sans-serif',
                transition: "all 0.3s",
                overflow: "hidden",
                zIndex: 1,
                "&:hover": {
                  background: "#0B5ED7",
                  transform: "translateY(-2px)",
                },
              }}
            >
              Clean Cart
            </Button>

            <Button
              variant="contained"
              color="primary"
              href="/Checkout"
              sx={{
                padding: "8px 24px",
                textAlign: "center",
                borderRadius: "3rem",
                display: "inline-block",
                background: "#AE1C9A",
                fontSize: "15px",
                fontWeight: 500,
                position: "relative",
                color: "#FFFFFF",
                fontFamily: '"Inter", sans-serif',
                transition: "all 0.3s",
                overflow: "hidden",
                zIndex: 1,
                "&:hover": {
                  background: "#8C157D",
                  transform: "translateY(-2px)",
                },
              }}
            >
              Proceed to Checkout
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default CartPages;
