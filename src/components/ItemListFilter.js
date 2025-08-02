import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useFilters } from "../contexts/FilterContext";
import Select from "react-select";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import "../styles/ItemListFilter.css";

// Lista de categorías disponibles
const categoriesList = ["Smartphones", "Audio", "Accesorios", "Computadores"];

// Adaptación de las categorías al formato requerido por react-select
const categoryOptions = categoriesList.map((cat) => ({
  value: cat,
  label: cat,
}));

const ItemListFilter = () => {
  const {
    selectedCategories,
    setSelectedCategories,
    priceRange,
    setPriceRange,
    clearFilters,
  } = useFilters();

  // Actualiza las categorías seleccionadas desde el componente Select
  const handleCategoryChange = (selected) => {
    setSelectedCategories(selected ? selected.map((s) => s.value) : []);
  };

  // Filtra las opciones activas para mantener sincronía con el estado
  const selectedOptions = categoryOptions.filter((opt) =>
    selectedCategories.includes(opt.value)
  );

  // Actualiza el rango de precios al mover el slider
  const handleSliderChange = ([min, max]) => {
    setPriceRange({ min, max });
  };

  const isClearDisabled =
    selectedCategories.length === 0 &&
    priceRange.min === 1 &&
    priceRange.max === 5000;

  return (
    <Form className="p-4 rounded shadow bg-white mb-4">
      <Row className="g-4 align-items-center">
        <Col md={6}>
          <Form.Label className="fw-semibold">Categorías</Form.Label>
          <Select
            options={categoryOptions}
            isMulti
            value={selectedOptions}
            onChange={handleCategoryChange}
            placeholder="Selecciona categorías"
            className="react-select-container"
            classNamePrefix="react-select"
          />
        </Col>

        <Col md={6}>
          <Form.Label className="fw-semibold">Rango de precio</Form.Label>
          <div className="mb-2 d-flex justify-content-between">
            <span>${priceRange.min}</span>
            <span>${priceRange.max}</span>
          </div>
          <RangeSlider
            min={1}
            max={5000}
            value={[priceRange.min, priceRange.max]}
            onInput={handleSliderChange}
            step={1}
          />
        </Col>

        <Col md={12}>
          <Button
            variant="outline-secondary"
            onClick={clearFilters}
            disabled={isClearDisabled}
          >
            Limpiar filtros
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default ItemListFilter;
