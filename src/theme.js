// src/theme.js
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import "@fontsource/josefin-sans/300.css";
import "@fontsource/josefin-sans/400.css";
import "@fontsource/josefin-sans/500.css";
import "@fontsource/josefin-sans/600.css";
import "@fontsource/josefin-sans/700.css";

let theme = createTheme({
  palette: {
    primary: {
      main: "#000",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#00BFA6",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#F5F7F8",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#1A1A1A",
      secondary: "#5F6F75",
    },
  },
  typography: {
    fontFamily: "'Josefin Sans', sans-serif",
    h1: {
      fontWeight: 700,
      fontSize: "2.5rem",
      color: "#000",
      "@media (max-width:900px)": { fontSize: "2rem" },
      "@media (max-width:600px)": { fontSize: "1.7rem" },
    },
    h2: {
      fontWeight: 600,
      fontSize: "2rem",
      color: "#000",
      "@media (max-width:900px)": { fontSize: "1.7rem" },
      "@media (max-width:600px)": { fontSize: "1.5rem" },
    },
    h3: {
      fontWeight: 600,
      fontSize: "1.8rem",
      color: "#000",
      "@media (max-width:900px)": { fontSize: "1.5rem" },
      "@media (max-width:600px)": { fontSize: "1.3rem" },
    },
    h4: {
      fontWeight: 600,
      fontSize: "1.6rem",
      color: "#000",
      "@media (max-width:900px)": { fontSize: "1.4rem" },
      "@media (max-width:600px)": { fontSize: "1.2rem" },
    },
    h5: {
      fontWeight: 500,
      fontSize: "1.4rem",
      color: "#000",
      "@media (max-width:900px)": { fontSize: "1.2rem" },
      "@media (max-width:600px)": { fontSize: "1rem" },
    },
    h6: {
      fontWeight: 500,
      fontSize: "1.2rem",
      color: "#000",
      "@media (max-width:900px)": { fontSize: "1rem" },
      "@media (max-width:600px)": { fontSize: "0.9rem" },
    },
    body1: {
      fontSize: "1rem",
      color: "#1A1A1A",
    },
    button: {
      textTransform: "none",
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          padding: "8px 20px",
          transition: "all 0.3s ease",
          "&:hover": {
            backgroundColor: "#032E31",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
          transition: "transform 0.3s ease",
          "&:hover": { transform: "translateY(-4px)" },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#000",
          textDecoration: "none",
          fontWeight: 500,
          "&:hover": { textDecoration: "underline" },
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);
export default theme;
