const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// Devuelve todos los productos disponibles en la base de datos
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener productos" });
  }
});

module.exports = router;
