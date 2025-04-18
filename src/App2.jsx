import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Products from "./components/Products";
import AboutPage from "./pages/AboutPage";
import FeaturedProducts from "./components/FeaturedProducts";
import NewProducts from "./components/NewProducts";

const App2 = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="products" element={<Products />}>
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
      </Routes>
    </>
  );
};

export default App2;
