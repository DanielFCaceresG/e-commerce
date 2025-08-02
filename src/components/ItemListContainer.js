import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { getProducts } from "../services/ProductService";
import { Spinner, Container, Alert } from "react-bootstrap";
import ItemListFilter from "./ItemListFilter";
import { useFilters } from "../contexts/FilterContext";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Obtenemos los filtros globales desde el contexto
  const { selectedCategories, priceRange } = useFilters();

  useEffect(() => {
    // Llamada inicial a la función asincrónica para obtener los productos
    getProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Hubo un error al cargar los productos.");
        setLoading(false);
      });
  }, []);

  // Aplicamos los filtros seleccionados: por categoría y por rango de precio
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);

    const matchesPrice =
      product.price >= priceRange.min && product.price <= priceRange.max;

    return matchesCategory && matchesPrice;
  });

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Catálogo de Productos</h2>

      <ItemListFilter />

      {loading && (
        <div className="d-flex justify-content-center my-5">
          <Spinner animation="border" variant="primary" />
        </div>
      )}

      {error && <Alert variant="danger">{error}</Alert>}

      {/* Lista de productos filtrados una vez se haya cargado la data */}
      {!loading && !error && <ItemList products={filteredProducts} />}
    </Container>
  );
};

export default ItemListContainer;
