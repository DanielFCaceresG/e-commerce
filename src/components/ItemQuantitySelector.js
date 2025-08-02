import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import AddItemButton from "./AddItemButton";
import "../styles/ItemQuantitySelector.css";

const ItemQuantitySelector = ({
  product,
  quantity: externalQuantity, // Permite controlar la cantidad desde fuera del componente si se proporciona
  onIncrement,
  onDecrement,
  showAddButton = true, // Muestra u oculta el botón de agregar
}) => {
  const [quantity, setQuantity] = useState(1);
  const qty = externalQuantity ?? quantity; // Usa cantidad externa si está definida, de lo contrario usa la interna

  const handleDecrease = () => {
    if (externalQuantity !== undefined) {
      onDecrement?.(); // Llama al callback externo si se controla desde fuera
    } else if (qty > 1) {
      setQuantity((q) => q - 1);
    }
  };

  const handleIncrease = () => {
    if (externalQuantity !== undefined) {
      onIncrement?.();
    } else {
      setQuantity((q) => q + 1);
    }
  };

  return (
    <Form className="d-flex align-items-center gap-3">
      <div className="quantity-box">
        <Button
          variant="primary"
          size="sm"
          onClick={handleDecrease}
          className="quantity-btn"
          disabled={qty === 1} // Desactiva el botón si la cantidad es mínima
        >
          −
        </Button>
        <div className="quantity-value">{qty}</div>
        <Button
          variant="primary"
          size="sm"
          onClick={handleIncrease}
          className="quantity-btn"
        >
          +
        </Button>
      </div>
      {showAddButton && <AddItemButton product={product} quantity={qty} />}
    </Form>
  );
};

export default ItemQuantitySelector;
