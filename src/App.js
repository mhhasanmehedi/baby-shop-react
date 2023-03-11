import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { fetchCarts } from "./features/carts/cartsSlice";
import About from "./pages/About";
import CategoryProducts from "./pages/CategoryProducts";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Product from "./pages/Product";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarts());
  });
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/:productId" element={<Product />} />
        <Route path="/categories/:category" element={<CategoryProducts />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
