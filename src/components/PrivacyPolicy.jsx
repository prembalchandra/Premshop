import { Box, Typography } from "@mui/material";
import React from "react";
import CommonHeroSection from "./CommonHerosection";

function PrivacyPolicy() {
  return (
    <>
      <CommonHeroSection
        title="Terms & Conditions"
        height="50vh"
        align="center"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Terms & Conditions" },
        ]}
      />
      <Box component="section" sx={{ padding: "40px 0 80px 0" }}>
        <Box className="scrn-container">
          <Typography
            variant="h4"
            sx={{ fontWeight: 700, color: "#000", mb: 3 }}
          >
            Privacy & Cookie Policy - Premshop
          </Typography>

          <Typography sx={{ mb: 2 }}>
            This privacy policy sets out how <strong>Premshop.com</strong> uses
            and protects any information that you give while using this website.
            Premshop is committed to ensuring that your privacy is protected.
            Any information you provide will only be used in accordance with
            this privacy statement.
          </Typography>

          <Typography sx={{ mb: 2 }}>
            Premshop may update this policy occasionally. Please check this page
            from time to time to ensure that you are satisfied with any changes.
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 600, mt: 3 }}>
            What we collect
          </Typography>

          <Typography sx={{ mb: 2 }}>
            We may collect the following information:
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
            <li>name</li>
            <li>contact information including email address</li>
            <li>
              demographic information such as postcode, preferences and
              interests
            </li>
            <li>
              other information relevant to customer surveys and/or offers
            </li>
          </Box>

          <Typography sx={{ mb: 2 }}>
            For the complete list of cookies we collect, see the “List of
            Cookies We Collect” section below.
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 600, mt: 3 }}>
            What we do with the information we gather
          </Typography>

          <Typography sx={{ mb: 2 }}>
            We require this information to understand your needs and provide you
            with a better service, for the following reasons:
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
            <li>Internal record keeping.</li>
            <li>Improving our products and services.</li>
            <li>
              Sending promotional emails about new products, special offers or
              other information using the email address you provided.
            </li>
            <li>
              Occasionally contacting you for research purposes via email,
              phone, or mail.
            </li>
          </Box>

          <Typography variant="h6" sx={{ fontWeight: 600, mt: 3 }}>
            Security
          </Typography>

          <Typography sx={{ mb: 2 }}>
            We are committed to ensuring that your information is secure.
            Suitable physical, electronic and managerial procedures are in place
            to safeguard the information we collect online.
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 600, mt: 3 }}>
            How we use cookies
          </Typography>

          <Typography sx={{ mb: 2 }}>
            A cookie is a small file placed on your computer's hard drive.
            Cookies help analyze web traffic and let web applications respond to
            you as an individual.
          </Typography>

          <Typography sx={{ mb: 2 }}>
            We use traffic log cookies to identify which pages are being used.
            This helps us improve our website based on customer needs. The data
            is used for statistical analysis only.
          </Typography>

          <Typography sx={{ mb: 2 }}>
            Overall, cookies help us provide a better website by enabling us to
            monitor useful and non-useful pages. Cookies do not give us access
            to your computer or any personal information other than what you
            choose to share.
          </Typography>

          <Typography sx={{ mb: 2 }}>
            You can accept or decline cookies. Most browsers automatically
            accept them, but you can modify browser settings to decline cookies
            if preferred.
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 600, mt: 3 }}>
            Links to other websites
          </Typography>

          <Typography sx={{ mb: 2 }}>
            Our website may contain links to other websites. Once you leave our
            site, we do not have control over other websites and are not
            responsible for their privacy and protection. Please read their
            respective privacy policies.
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 600, mt: 3 }}>
            Controlling your personal information
          </Typography>

          <Typography sx={{ mb: 2 }}>
            You may choose to restrict the use of your personal information in
            the following ways:
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
            <li>
              When filling forms, check the box to prevent your information from
              being used for marketing purposes.
            </li>
            <li>
              If you previously agreed to marketing usage, you can change your
              preference anytime by contacting us.
            </li>
          </Box>

          <Typography sx={{ mb: 2 }}>
            We will not sell, distribute or lease your personal information to
            third parties unless required by law or permitted by you.
          </Typography>

          {/* Cookies List */}
          <Typography variant="h6" sx={{ fontWeight: 600, mt: 3 }}>
            List of cookies we collect
          </Typography>

          <Typography sx={{ mb: 2 }}>
            The table below lists the cookies we collect and what they store:
          </Typography>

          <Box sx={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "#f2f2f2" }}>
                  <th style={{ padding: "10px", border: "1px solid #ddd" }}>
                    Cookie Name
                  </th>
                  <th style={{ padding: "10px", border: "1px solid #ddd" }}>
                    Cookie Description
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "FORM_KEY",
                    "Stores randomly generated key used to prevent forged requests.",
                  ],
                  ["PHPSESSID", "Your session ID on the server."],
                  [
                    "GUEST-VIEW",
                    "Allows guests to view and edit their orders.",
                  ],
                  [
                    "PERSISTENT_SHOPPING_CART",
                    "Link to your cart and viewing history.",
                  ],
                  ["STF", "Information on products you emailed to friends."],
                  ["STORE", "Selected store view or language."],
                  [
                    "USER_ALLOWED_SAVE_COOKIE",
                    "Indicates whether cookie usage is allowed.",
                  ],
                  [
                    "MAGE-CACHE-SESSID",
                    "Browser caching for faster load times.",
                  ],
                  [
                    "MAGE-CACHE-STORAGE",
                    "Browser caching for faster load times.",
                  ],
                  [
                    "SECTION-DATA-IDS",
                    "Browser caching for faster load times.",
                  ],
                  [
                    "PRIVATE_CONTENT_VERSION",
                    "Browser caching for faster load times.",
                  ],
                  ["X-MAGENTO-VARY", "Server caching for faster load times."],
                  ["MAGE-TRANSLATION-FILE-VERSION", "Translation support."],
                  ["MAGE-TRANSLATION-STORAGE", "Translation support."],
                ].map(([name, desc], i) => (
                  <tr key={i}>
                    <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                      {name}
                    </td>
                    <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                      {desc}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Box>

          <Typography sx={{ mt: 4 }}>
            If you believe any information we hold about you is incorrect,
            please contact us and we will promptly correct it.
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 600, mt: 4, mb: 1 }}>
            Contact Us
          </Typography>
          <Typography sx={{ color: "#444", lineHeight: 1.7 }}>
            For any questions regarding this privacy policy, contact us at:
            <br />
            Email: support@premshop.in
            <br />
            Phone: +91 8115494617
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default PrivacyPolicy;
