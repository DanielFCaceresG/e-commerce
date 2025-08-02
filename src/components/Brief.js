import React from "react";
import { useCart } from "../contexts/CartContext";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemQuantitySelector from "./ItemQuantitySelector";
import "../styles/Brief.css";

const Brief = () => {
  // Funciones y estado del contexto del carrito
  const { items, getTotal, removeItem, incrementQuantity, decrementQuantity } =
    useCart();

  // Formato de moneda en pesos colombianos
  const formatCurrency = (value) =>
    value.toLocaleString("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    });

  return (
    <div className="brief-container">
      <Table responsive bordered hover className="cart-table">
        <thead className="cart-header">
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="cart-row">
              <td>
                <Link to={`/item/${item.id}`} className="text-decoration-none">
                  {item.name}
                </Link>
              </td>
              <td>{formatCurrency(item.price)}</td>
              <td>
                <ItemQuantitySelector
                  quantity={item.quantity}
                  onIncrement={() => incrementQuantity(item.id)}
                  onDecrement={() => decrementQuantity(item.id)}
                  showAddButton={false}
                />
              </td>
              <td>{formatCurrency(item.price * item.quantity)}</td>
              <td>
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() => removeItem(item.id)}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}

          <tr>
            <td colSpan="3" className="text-end fw-bold">
              Total
            </td>
            <td colSpan="2" className="fw-bold">
              {formatCurrency(getTotal())}
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Brief;
