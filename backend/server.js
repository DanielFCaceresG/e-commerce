require("dotenv").config(); // Carga variables de entorno desde .env

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const productsRoute = require("./routes/Products");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/products", productsRoute);

// Valores por defecto si no se define .env
const PORT = process.env.PORT || 5000;
const MONGO_URI =
  process.env.MONGO_URI ||
  "mongodb+srv://publicuser:Pass123456@pruebasistran.lo1ulj8.mongodb.net/pruebasistran";

// Conexión Mongo y arranque del servidor
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conectado a MongoDB");
    app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
  })
  .catch((error) => console.error("Error conectando a MongoDB:", error));
