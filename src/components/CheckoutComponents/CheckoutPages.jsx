import React from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  Radio,
  Card,
  FormControl,
} from "@mui/material";
import { Row, Col } from "react-bootstrap";

export default function CheckoutPages() {
  return (
    <Box component="section"
      sx={{
        padding: "50px 0 120px 0",
      }}
    >
      <Box className="scrn-container">
        <Row>
          <Col item xs={12} sm={6} md={6}>
            <Card>
              <Box>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    padding: "8px 24px",
                    margin: "0",
                    textAlign: "center",
                    borderRadius: "0rem",
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
                  Log into Your Account
                </Button>
              </Box>
              <Box
                sx={{
                  padding: "20px",
                }}
              >
                <Typography variant="h5" mb={3}>
                  Billing Details
                </Typography>

                <Box className="row">
                  <Box className="col-md-6 mb-3">
                    <TextField fullWidth label="First Name*" />
                  </Box>

                  <Box className="col-md-6 mb-3">
                    <TextField fullWidth label="Last Name*" />
                  </Box>

                  <Box className="col-md-6 mb-3">
                    <TextField
                      fullWidth
                      label="Email*"
                      placeholder="user@gmail.com"
                    />
                  </Box>

                  <Box className="col-md-6 mb-3">
                    <TextField
                      fullWidth
                      label="Phone*"
                      placeholder="+880388**0899"
                    />
                  </Box>

                  <Box className="col-12 mb-3">
                    <Select fullWidth defaultValue="india">
                      <MenuItem value="india">india</MenuItem>
                    </Select>
                  </Box>

                  <Box className="col-12 mb-3">
                    <TextField
                      fullWidth
                      label="Address*"
                      placeholder="Enter your Address"
                    />
                  </Box>

                  <Box className="col-md-6 mb-3">
                    <Select fullWidth defaultValue="uttar pradesh">
                      <MenuItem value="uttar pradesh">Uttar pradesh</MenuItem>
                    </Select>
                  </Box>

                  <Box className="col-md-6 mb-3">
                    <TextField
                      fullWidth
                      label="Postcode / ZIP*"
                      placeholder="0000"
                    />
                  </Box>
                </Box>

                <FormControlLabel
                  control={<Checkbox />}
                  label="Create an account?"
                  sx={{ mt: 2 }}
                />

                <Typography variant="h6" mt={3}>
                  Shipping Address
                </Typography>

                <FormControlLabel
                  control={<Checkbox />}
                  label="Same as Billing?"
                />
              </Box>
            </Card>
          </Col>

          <Col item xs={12} sm={6} md={6}>
            <Card>
              <Box>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    padding: "8px 24px",
                    margin: " 0",
                    textAlign: "center",
                    borderRadius: "0rem",
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
                  Enter Coupon Code
                </Button>
              </Box>
              <Box
                sx={{
                  padding: "20px",
                }}
              >
                <Typography variant="h5" mb={3}>
                  Order Summary
                </Typography>

                <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
                  <Box
                    component="li"
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      py: 2,
                    }}
                  >
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: "15px !important",
                          fontWeight: "400",
                          color: "#232532",
                        }}
                      >
                        Apple Watch X1
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          fontSize: "13px",
                          fontWeight: "400",
                          color: "#797979",
                        }}
                      >
                        64GB, Black, 44mm, Chain Belt
                      </Typography>
                    </Box>
                    <Typography
                      variant="h6"
                      color="primary"
                      sx={{
                        fontSize: "15px !important",
                        fontWeight: "500",
                        color: "#232532",
                      }}
                    >
                      $38
                    </Typography>
                  </Box>

                  <Box
                    component="li"
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      py: 2,
                    }}
                  >
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: "15px !important",
                          fontWeight: "400",
                          color: "#232532",
                        }}
                      >
                        Beats Wireless x1
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          fontSize: "13px",
                          fontWeight: "400",
                          color: "#797979",
                        }}
                      >
                        64GB, Black, 44mm, Chain Belt
                      </Typography>
                    </Box>
                    <Typography
                      variant="h5"
                      color="primary"
                      sx={{
                        fontSize: "15px !important",
                        fontWeight: "500",
                        color: "#232532",
                      }}
                    >
                      $48
                    </Typography>
                  </Box>

                  <Box
                    component="li"
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      py: 2,
                      borderBottom: "1px solid #f3b4ea7d",
                    }}
                  >
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: "15px !important",
                          fontWeight: "400",
                          color: "#232532",
                        }}
                      >
                        Samsung Galaxy S10 x2
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          fontSize: "13px",
                          fontWeight: "400",
                          color: "#797979",
                        }}
                      >
                        12GB RAM, 512GB, Dark Blue
                      </Typography>
                    </Box>
                    <Typography
                      variant="h4"
                      color="primary"
                      sx={{
                        fontSize: "15px !important",
                        fontWeight: "500",
                        color: "#232532",
                      }}
                    >
                      $279
                    </Typography>
                  </Box>
                  <Box
                    component="li"
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      py: 2,
                    }}
                  >
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: "15px !important",
                          fontWeight: "600",
                          color: "#232532",
                        }}
                      >
                        SUBTOTAL
                      </Typography>
                    </Box>
                    <Typography
                      variant="h4"
                      color="primary"
                      sx={{
                        fontSize: "15px !important",
                        fontWeight: "500",
                        color: "#232532",
                      }}
                    >
                      $279
                    </Typography>
                  </Box>
                  <Box
                    component="li"
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      py: 2,
                      borderBottom: "1px solid #f3b4ea7d",
                    }}
                  >
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: "15px !important",
                          fontWeight: "400",
                          color: "#232532",
                        }}
                      >
                        SHIPPING
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          fontSize: "13px",
                          fontWeight: "400",
                          color: "#797979",
                        }}
                      >
                        Free Shipping
                      </Typography>
                    </Box>
                    <Typography
                      variant="h4"
                      color="primary"
                      sx={{
                        fontSize: "15px !important",
                        fontWeight: "500",
                        color: "#232532",
                      }}
                    >
                      +$0
                    </Typography>
                  </Box>
                </Box>

                <Box display="flex" justifyContent="space-between" mt={1}>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: "500",
                    }}
                  >
                    Total
                  </Typography>
                  <Typography
                    variant="h4"
                    color="primary"
                    textAlign="right"
                    fontWeight="400"
                  >
                    $365
                  </Typography>
                </Box>

                <RadioGroup sx={{ mt: 3 }}>
                  <FormControl
                    component="fieldset"
                    sx={{
                      display: "flex",
                      alignItems: "start",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <FormControlLabel
                      value="bank"
                      control={
                        <Radio
                          sx={{
                            display: "flex",
                            alignSelf: "flex-start",
                            paddingTop: "0 !important",
                          }}
                        />
                      }
                      label={
                        <Box>
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 500,
                              fontSize: "14px !important",
                            }}
                          >
                            Direct Bank Transfer
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              mt: 0.5,
                              fontSize: "12px!important",
                              fontWeight: "300",
                            }}
                          >
                            Make your payment directly into our bank account.
                            <br /> Please use your Order ID as the payment
                            reference.
                          </Typography>
                        </Box>
                      }
                    />

                    <FormControlLabel
                      value="bank"
                      control={
                        <Radio
                          sx={{
                            display: "flex",
                            alignSelf: "flex-start",
                            paddingTop: "0 !important",
                          }}
                        />
                      }
                      label={
                        <Box>
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 500,
                              fontSize: "14px !important",
                            }}
                          >
                            Cash on Delivery
                          </Typography>
                        </Box>
                      }
                    />
                    <FormControlLabel
                      value="bank"
                      control={
                        <Radio
                          sx={{
                            display: "flex",
                            alignSelf: "flex-start",
                            paddingTop: "0 !important",
                          }}
                        />
                      }
                      label={
                        <Box>
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 500,
                              fontSize: "14px !important",
                            }}
                          >
                            Credit/Debit Cards or Paypal
                          </Typography>
                        </Box>
                      }
                    />
                  </FormControl>
                </RadioGroup>

                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  sx={{
                    padding: "8px 24px",
                    margin: "1rem 0",
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
                  Place Order Now
                </Button>
              </Box>
            </Card>
          </Col>
        </Row>
      </Box>
    </Box>
  );
}
