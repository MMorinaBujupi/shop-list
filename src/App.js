import React from "react";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./component/Products";
import Product from "./component/Product";
const App = () => {
  return (
    <>
      {" "}
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/:id" element={<Product />} />
      </Routes>
    </>
  );
};
export default App;
