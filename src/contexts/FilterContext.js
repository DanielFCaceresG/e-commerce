import React, { createContext, useState, useContext } from "react";

const FilterContext = createContext();

// Hook personalizado para acceder al contexto de filtros
export const useFilters = () => useContext(FilterContext);

export const FilterProvider = ({ children }) => {
  // Estado para categorías seleccionadas (por ID o nombre)
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Rango de precios seleccionado, con valores mínimo y máximo
  const [priceRange, setPriceRange] = useState({ min: 1, max: 5000 });

  const clearFilters = () => {
    setSelectedCategories([]);
    setPriceRange({ min: 1, max: 5000 });
  };

  return (
    <FilterContext.Provider
      value={{
        selectedCategories,
        setSelectedCategories,
        priceRange,
        setPriceRange,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
