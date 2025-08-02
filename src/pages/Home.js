import React from "react";
import { Container } from "react-bootstrap";
import ItemListContainer from "../components/ItemListContainer";
import { FilterProvider } from "../contexts/FilterContext";

const Home = () => {
  return (
    // Se encapsula el contenido dentro de FilterProvider para que los componentes hijos puedan acceder al contexto de filtros
    <FilterProvider>
      <Container className="mt-4 pb-5">
        <ItemListContainer />
      </Container>
    </FilterProvider>
  );
};

export default Home;
