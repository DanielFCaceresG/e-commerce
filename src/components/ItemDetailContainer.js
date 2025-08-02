import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/ProductService";
import ItemDetail from "./ItemDetail";
import { Spinner, Container } from "react-bootstrap";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id).then(setProduct);
  }, [id]);

  return product ? (
    <ItemDetail product={product} />
  ) : (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: "60vh" }}
    >
      <Spinner animation="border" role="status" variant="primary">
        <span className="visually-hidden">Cargando...</span>
      </Spinner>
    </Container>
  );
};

export default ItemDetailContainer;
