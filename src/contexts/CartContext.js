import React, { createContext, useReducer, useContext } from "react";

const CartContext = createContext();

const initialState = { items: [] };

function reducer(state, action) {
  switch (action.type) {
    case "addItem": {
      // Verifica si el producto ya está en el carrito
      const existing = state.items.find((i) => i.id === action.payload.id);
      let items;
      if (existing) {
        // Si ya existe, se incrementa su cantidad
        items = state.items.map((i) =>
          i.id === action.payload.id
            ? { ...i, quantity: i.quantity + action.payload.quantity }
            : i
        );
      } else {
        // Si no existe, se agrega como nuevo
        items = [...state.items, { ...action.payload }];
      }
      return { ...state, items };
    }
    case "removeItem":
      // Elimina un producto por su ID
      return {
        ...state,
        items: state.items.filter((i) => i.id !== action.payload),
      };
    case "incrementQuantity":
      // Aumenta la cantidad de un producto específico
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.payload ? { ...i, quantity: i.quantity + 1 } : i
        ),
      };
    case "decrementQuantity":
      // Disminuye la cantidad de un producto específico
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.payload ? { ...i, quantity: i.quantity - 1 } : i
        ),
      };
    case "clearCart":
      // Vacia el carrito completamente
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
}

// Proveedor del contexto del carrito
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Métodos de acción que se exponen a los componentes consumidores del contexto
  const addItem = (product, quantity) =>
    dispatch({ type: "addItem", payload: { ...product, quantity } });

  const removeItem = (id) => dispatch({ type: "removeItem", payload: id });

  const incrementQuantity = (id) =>
    dispatch({ type: "incrementQuantity", payload: id });

  const decrementQuantity = (id) =>
    dispatch({ type: "decrementQuantity", payload: id });

  const clearCart = () => dispatch({ type: "clearCart" });

  // Retorna el total de ítems en el carrito (sumatoria de cantidades)
  const getItemCount = () =>
    state.items.reduce((sum, i) => sum + i.quantity, 0);

  // Retorna el valor total del carrito
  const getTotal = () =>
    state.items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        addItem,
        removeItem,
        incrementQuantity,
        decrementQuantity,
        clearCart,
        getItemCount,
        getTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook personalizado para consumir el contexto del carrito
export const useCart = () => useContext(CartContext);
