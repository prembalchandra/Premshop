import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/Navbar";
import Home from "./pagescomponents/Home";
import Blog from "./pagescomponents/Blog";
import Footer from "./components/Footer"
import About from "./pagescomponents/About";
import Contact from "./pagescomponents/Contact";
import Profile from "./pagescomponents/Profile";
import Wishlist from "./pagescomponents/Wishlist";
import Cart from "./pagescomponents/Cart";
import Checkout from "./pagescomponents/Checkout";
import Product from "./pagescomponents/Product";
import ProductDetails from "./pagescomponents/ProductDetails";
import PrivacyPolicy from "./components/PrivacyPolicy"
import TermsConditions from "./components/TermsCondition"
import ReturnPolicy from "./components/ReturnPolicy"


import theme from "./theme";




function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/Blog" element={<Blog/>}/>
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Profile" element={<Profile/>} />
          <Route path="/Wishlist" element={<Wishlist/>} />
          <Route path="/Cart" element={<Cart/>} />
          <Route path="/Checkout" element={<Checkout/>} />
          <Route path="/Product" element={<Product/>} />
          <Route path="/ProductDetails" element={<ProductDetails/>} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>} />
          <Route path="/TermsConditions" element={<TermsConditions/>} />
          <Route path="/ReturnPolicy" element={<ReturnPolicy/>} />



        </Routes>
        <Footer/>
      </Router>
    </ThemeProvider>
  );
}

export default App;
