import { Box, Typography } from "@mui/material";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import PaymentRoundedIcon from "@mui/icons-material/PaymentRounded";
import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import { Row, Col } from "react-bootstrap";

export default function AboutFeatures() {
  const iconStyle = {
    fontSize: 40,
    color: "#fff",
  };

  const circleStyle = {
    width: 85,
    height: 85,
    borderRadius: "50%",
    background: "#BA1DA0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto",
  };

  return (
    <Box component="section" sx={{ paddingTop: "0" }}>
      <Box className="scrn-container">
        <Row className="g-4">

          {/* Column 1 */}
          <Col xs={12} sm={6} md={3}>
            <Box textAlign="center">
              <Box sx={circleStyle}>
                <DashboardRoundedIcon sx={iconStyle} />
              </Box>
              <Typography variant="h5" fontWeight={700} mt={2}>
                Choose Product
              </Typography>
              <Typography color="text.secondary" mt={1}>
                Browse a wide range of quality products easily...
              </Typography>
            </Box>
          </Col>

          {/* Column 2 */}
          <Col xs={12} sm={6} md={3}>
            <Box textAlign="center">
              <Box sx={circleStyle}>
                <PaymentRoundedIcon sx={iconStyle} />
              </Box>
              <Typography variant="h5" fontWeight={700} mt={2}>
                Make Payment
              </Typography>
              <Typography color="text.secondary" mt={1}>
                Enjoy smooth & secure online payments...
              </Typography>
            </Box>
          </Col>

          {/* Column 3 */}
          <Col xs={12} sm={6} md={3}>
            <Box textAlign="center">
              <Box sx={circleStyle}>
                <LocalShippingRoundedIcon sx={iconStyle} />
              </Box>
              <Typography variant="h5" fontWeight={700} mt={2}>
                Fast Delivery
              </Typography>
              <Typography color="text.secondary" mt={1}>
                Quick delivery right to your doorstep...
              </Typography>
            </Box>
          </Col>

          {/* Column 4 */}
          <Col xs={12} sm={6} md={3}>
            <Box textAlign="center">
              <Box sx={circleStyle}>
                <SupportAgentRoundedIcon sx={iconStyle} />
              </Box>
              <Typography variant="h5" fontWeight={700} mt={2}>
                24/7 Support
              </Typography>
              <Typography color="text.secondary" mt={1}>
                Our team is always ready to assist you anytime...
              </Typography>
            </Box>
          </Col>

        </Row>
      </Box>
    </Box>
  );
}
