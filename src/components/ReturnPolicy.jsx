import { Box, Typography } from "@mui/material";
import React from "react";

function ReturnClaimPolicy() {
  return (
    <Box component="section" sx={{ padding: "40px 0 80px" }}>
      <Box className="scrn-container">
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
          Return & Claim Policy - Premshop
        </Typography>

        <Typography sx={{ mb: 2 }}>
          A ‘Return’ means sending back the purchased item to Premshop. Returns
          are allowed in the following cases:
        </Typography>

        
        <Box
          component="ul"
          sx={{
            display: "flex",
            gap: "3px",
            flexDirection: "column",
            marginLeft: "31px !important",
            paddingBottom: "19px!important",
          }}
        >
          <Box component="li">Defective item</Box>
          <Box component="li">Damaged during shipping</Box>
          <Box component="li">Missing product</Box>
          <Box component="li">Wrong item delivered</Box>
          <Box component="li">Incorrect size</Box>
        </Box>

        <Typography sx={{ mb: 2 }}>
          Please check product details carefully before buying. Buyers should
          raise a return request within <b>15 days</b> from receiving the
          product by contacting us at <b> 8115494617 </b>.
        </Typography>

        <Typography sx={{ mb: 2 }}>
          Refunds are initiated only after product verification and will be
          processed within <b>10 working days</b>.
        </Typography>

        <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
          Return Process
        </Typography>

        <Typography sx={{ mb: 2 }}>
          Email your return request to <b>support@premshop.in</b> with the
          following:
        </Typography>

        <Box
          component="ul"
          sx={{
            display: "flex",
            gap: "3px",
            flexDirection: "column",
            marginLeft: "31px !important",
            paddingBottom: "19px!important",
          }}
        >
          <Box component="li">3 images (top, bottom, side)</Box >
          <Box component="li">Order Number</Box>
          <Box component="li">Reason for return</Box>
        </Box>

        <Typography sx={{ mb: 2, fontWeight: 600 }}>
          Note: Tag seal must be intact. Used items are not accepted.
        </Typography>

        <Typography sx={{ mb: 2 }}>
          Any invalid return will be sent back to the customer with courier
          charges borne by the customer.
        </Typography>

        <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
          Exchange Policy
        </Typography>

        <Typography sx={{ mb: 2 }}>
          Exchange is not available. You can place a new order and return the
          previous product as per return policy.
        </Typography>

        <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
          Free Gift Return
        </Typography>
        <Typography sx={{ mb: 2 }}>
          Free gifts must be returned along with the product.
        </Typography>

        <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
          Partial Return
        </Typography>
        <Typography sx={{ mb: 2 }}>
          Yes, customers can return only specific items from their order.
        </Typography>

        <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
          Order Cancellation
        </Typography>
        <Typography sx={{ mb: 2 }}>
          Orders can be cancelled only before dispatch.
        </Typography>

        <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
          Claim Policy
        </Typography>
        <Typography sx={{ mb: 2 }}>
          Claims are valid only for manufacturing defects. Minor issues will be
          considered for repair first.
        </Typography>

        <Typography sx={{ mb: 1, fontWeight: 600 }}>
          Major Defects include:
        </Typography>

        <Box
            component="ul"
            sx={{
              display: "flex",
              gap: "3px",
              flexDirection: "column",
              marginLeft: "31px !important",
              paddingBottom: "19px!important",
            }}
          >
          <Box component="li">Damaged/discoloured upper material</Box>
          <Box component="li">Broken/damaged sole or insole</Box>
        </Box>

        <Typography sx={{ mb: 2 }}>
          Please return the item with all tags, labels, packaging and invoice.
        </Typography>

        <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
          Refund Policy
        </Typography>
        <Typography sx={{ mb: 2 }}>
          Refunds are processed after seller verification within{" "}
          <b>10 working days</b>. The amount will be refunded using the same
          payment method.
        </Typography>

        <Typography sx={{ mb: 2 }}>
          For any queries, contact <b>8115494617</b> or email{" "}
          <b>support@premshop.in</b>.
        </Typography>
      </Box>
    </Box>
  );
}

export default ReturnClaimPolicy;
