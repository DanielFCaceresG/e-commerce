import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import ItemDetailContainer from "./components/ItemDetailContainer";

const App = () => (
  <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/item/:id" element={<ItemDetailContainer />} />
    </Routes>
  </>
);

export default App;
