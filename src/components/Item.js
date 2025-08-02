import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { useCart } from "../contexts/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "../styles/Item.css";

/**
 * Componente que representa una tarjeta individual de producto.
 */
const Item = ({ product }) => {
  const { items } = useCart();
  const cartItem = items.find((item) => item.id === product.id);

  return (
    <Card className="h-100 shadow-sm product-card position-relative">
      <Card.Img variant="top" src={product.image} alt={product.title} />

      {cartItem && (
        <div className="cart-badge">
          <FontAwesomeIcon icon={faShoppingCart} />
          <span className="ms-1">{cartItem.quantity}</span>
        </div>
      )}

      <Card.Body className="d-flex flex-column">
        <Card.Title>{product.title}</Card.Title>
        <Card.Text className="mb-3 text-muted">
          $ {product.price.toLocaleString("es-CO")}
        </Card.Text>
        <Link to={`/item/${product.id}`} className="mt-auto">
          <Button variant="primary" className="w-100">
            Ver detalle
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Item;
