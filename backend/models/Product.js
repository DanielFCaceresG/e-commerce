const mongoose = require("mongoose");

// Esquema del documento para productos
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
  description: String,
  category: String,
});

// Se especifica explícitamente la colección 'items' que es como se llama realmente
module.exports = mongoose.model("Product", productSchema, "items");
