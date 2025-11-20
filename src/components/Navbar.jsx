import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  Divider,
  useMediaQuery,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import logoImg from "../assets/images/logo/premshop-logo.webp";
import logoIcon from "../assets/images/logo/logo-iocn.png";

import AccountMenu from "../components/AccountMenu";
import SubmenuImg from "../assets/images/logo/empty-cart.webp";

// ⭐ OUTSIDE MENU DATA
const megaMenuData = {
  Shop: [
    {
      title: "Dresses",
      items: [
        { name: "Shirt", path: "/" },
        { name: "Skirt", path: "/" },
        { name: "T-Shirt", path: "/" },
      ],
    },
    {
      title: "Bags",
      items: [
        { name: "HandBags", path: "/" },
        { name: "Mobile Bags", path: "/" },
        { name: "School Bags", path: "/" },
      ],
    },
    {
      title: "Cosmetics",
      items: [
        { name: "Lipsticks", path: "/" },
        { name: "Foundation", path: "/" },
        { name: "Eye Liner", path: "/" },
      ],
    },
  ],
};

const menuItems = [
  { title: "Home", path: "/" },
  { title: "Shop", mega: true },
  { title: "About", path: "/about" },
  { title: "Blog", path: "/blog" },
  { title: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);

  const [openMobileSubmenu, setOpenMobileSubmenu] = useState(false);

  const isMobile = useMediaQuery("(max-width:991px)");
  const location = useLocation();

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{ background: "#fff", color: "#000" }}
      >
        <Box className="scrn-container">
          <Toolbar sx={{ justifyContent: "space-between", padding: "10px 0 " }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              {isMobile && (
                <IconButton
                  sx={{ width: 30, height: 30, border: "1px solid #000" }}
                  onClick={() => setDrawerOpen(true)}
                >
                  <MenuIcon />
                </IconButton>
              )}

              <Box component={Link} to="/">
               
              </Box>
                <Box
                  component="img"
                  src={logoImg}
                  alt="logo"
                  sx={{
                    height: 50,
                    "@media (max-width:991px)": {
                      height: 27,
                    },
                  }}
                />
            
            </Box>

            {/* DESKTOP MENU */}
            {!isMobile && (
              <Box sx={{ display: "flex", gap: 4, position: "relative" }}>
                {menuItems.map((item, i) => (
                  <Typography
                    key={i}
                    component={item.path ? Link : "div"}
                    to={item.path}
                    onMouseEnter={() => item.mega && setHoveredMenu(item.title)}
                    sx={{
                      textDecoration: "none",
                      color:
                        location.pathname === item.path ? "#D124A3" : "#000",
                      fontWeight: 500,
                      cursor: "pointer",
                      "&:hover": { color: "#D124A3" },
                    }}
                  >
                    {item.title}
                  </Typography>
                ))}

                {/* FULL WIDTH HOVER MEGA MENU */}
                {hoveredMenu && megaMenuData[hoveredMenu] && (
                  <Box
                    onMouseEnter={() => setHoveredMenu(hoveredMenu)}
                    onMouseLeave={() => setHoveredMenu(null)}
                    sx={{
                      position: "fixed",
                      left: 0,
                      top: "78px",
                      width: "100vw",
                      background: "#fff",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                      padding: "40px 80px",
                      display: "flex",
                      gap: 5,
                      zIndex: 2000,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flex: "1 1 0%",
                        justifyContent: "space-around",
                      }}
                    >
                      {megaMenuData[hoveredMenu].map((col, index) => (
                        <Box key={index}>
                          <Typography sx={{ fontWeight: 700, mb: 2 }}>
                            {col.title}
                          </Typography>

                          <Box
                            component="ul"
                            sx={{ p: 0, m: 0, listStyle: "none" }}
                          >
                            {col.items.map((item, i) => (
                              <Box component="li" key={i} sx={{ mb: 1 }}>
                                <Typography
                                  component={Link}
                                  to={item.path}
                                  sx={{
                                    textDecoration: "none",
                                    color: "#000",
                                    fontSize: "15px",
                                    cursor: "pointer",
                                    "&:hover": { color: "#D124A3" },
                                  }}
                                >
                                  {item.name}
                                </Typography>
                              </Box>
                            ))}
                          </Box>
                        </Box>
                      ))}
                    </Box>

                    <Box sx={{ width: "284px", height: "250px" }}>
                      <img
                        src={SubmenuImg}
                        alt=""
                        style={{
                          width: "100%",
                          objectFit: "contain",
                          filter: "drop-shadow(0 5px 12px rgba(0,0,0,0.2))",
                        }}
                      />
                    </Box>
                  </Box>
                )}
              </Box>
            )}

            <AccountMenu />
          </Toolbar>
        </Box>
      </AppBar>

      {isMobile && (
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        >
          <Box sx={{ width: 260 }}>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", p: 2 }}
            >
              <Typography sx={{ fontWeight: 600 }}>Menu</Typography>
              <IconButton onClick={() => setDrawerOpen(false)}>
                <CloseIcon />
              </IconButton>
            </Box>

            <Divider />

            <List>
              {menuItems.map((item, i) =>
                item.mega ? (
                  <React.Fragment key={i}>
                    <ListItemButton
                      onClick={() => setOpenMobileSubmenu(!openMobileSubmenu)}
                    >
                      <ListItemText primary={item.title} />
                      {openMobileSubmenu ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>

                    {/* MOBILE SUBMENU */}
                    <Collapse
                      in={openMobileSubmenu}
                      timeout="auto"
                      unmountOnExit
                    >
                      <Box sx={{ padding: "10px 20px" }}>
                        {megaMenuData["Shop"].map((col, index) => (
                          <Box key={index} sx={{ mb: 2 }}>
                            <Typography
                              sx={{ fontWeight: 700, mb: 1, fontSize: "16px" }}
                            >
                              {col.title}
                            </Typography>

                            <Box
                              component="ul"
                              sx={{ p: 0, m: 0, listStyle: "none" }}
                            >
                              {col.items.map((sub, j) => (
                                <Box component="li" key={j} sx={{ mb: 1 }}>
                                  <Box
                                    component={Link}
                                    to={sub.path}
                                    onClick={() => setDrawerOpen(false)}
                                    style={{
                                      textDecoration: "none",
                                      color: "#000",
                                      fontSize: "15px",
                                    }}
                                  >
                                    {sub.name}
                                  </Box>
                                </Box>
                              ))}
                            </Box>
                          </Box>
                        ))}
                      </Box>
                    </Collapse>
                  </React.Fragment>
                ) : (
                  <ListItemButton
                    key={i}
                    component={Link}
                    to={item.path}
                    onClick={() => setDrawerOpen(false)}
                  >
                    <ListItemText primary={item.title} />
                  </ListItemButton>
                )
              )}
            </List>
          </Box>
        </Drawer>
      )}
    </>
  );
};

export default Navbar;
