import React from "react";
import { useCart } from "../contexts/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "../styles/CartWidget.css";

/**
 * Componente CartWidget
 * Muestra el ícono del carrito junto con la cantidad actual de productos añadidos.
 */
const CartWidget = () => {
  const { getItemCount } = useCart();
  const cantidadItems = getItemCount();

  return (
    <div className="cart-widget position-relative">
      <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
      {cantidadItems > 0 && <span className="cart-count">{cantidadItems}</span>}
    </div>
  );
};

export default CartWidget;
