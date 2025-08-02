import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import ItemQuantitySelector from "./ItemQuantitySelector";
import { useCart } from "../contexts/CartContext";

// Componente que muestra los detalles de un producto individual
const ItemDetail = ({ product }) => {
  const { items } = useCart();

  // Verifica si el producto ya se encuentra en el carrito
  const itemInCart = items.find((item) => item.id === product.id);
  const quantityInCart = itemInCart ? itemInCart.quantity : undefined;

  return (
    <Card className="m-3 shadow-sm border-0 rounded-4">
      <Row className="g-0">
        <Col md={5}>
          <Card.Img
            src={product.image}
            alt={product.name}
            className="rounded-start-4 img-fluid object-fit-cover h-100"
            style={{ objectFit: "cover", height: "100%" }}
          />
        </Col>

        <Col md={7}>
          <Card.Body className="p-4 d-flex flex-column justify-content-between h-100">
            <div>
              <Card.Title className="fs-3 fw-semibold">
                {product.name}
              </Card.Title>

              <Card.Text className="text-secondary mb-2 fst-italic">
                Categoría: {product.category}
              </Card.Text>

              <Card.Text className="text-muted mb-2">
                {product.description}
              </Card.Text>

              <Card.Text className="fs-5 fw-bold text-success">
                $ {product.price.toLocaleString("es-CO")}
              </Card.Text>

              {/* Mensaje si el producto ya está en el carrito */}
              {itemInCart && (
                <div className="text-success fw-semibold mt-2">
                  Este producto se encuentra en el carrito.
                </div>
              )}
            </div>

            {/* Selector de cantidad */}
            <div className="mt-3">
              <ItemQuantitySelector
                product={product}
                quantity={quantityInCart}
              />
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default ItemDetail;
