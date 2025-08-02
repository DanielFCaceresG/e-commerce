import React from "react";
import { Button } from "react-bootstrap";
import { useCart } from "../contexts/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import "../styles/AddItemButton.css";

// Componente que permite añadir un producto al carrito con una cantidad específica
const AddItemButton = ({ product, quantity }) => {
  const { addItem } = useCart();

  return (
    <div className="add-item-button-container">
      <Button
        variant="success"
        className="add-button"
        onClick={() => addItem(product, quantity)}
      >
        <FontAwesomeIcon icon={faCartPlus} className="me-2" />
        Añadir al carrito
      </Button>
    </div>
  );
};

export default AddItemButton;
