import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import CartWidget from "./CartWidget";
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="navbar-custom shadow-sm">
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          className="navbar-logo d-flex align-items-center"
        >
          <img
            src="/e-commerce.png"
            alt="Prueba SISTRAN Logo"
            width="30"
            height="30"
            className="me-2"
          />
          Prueba SISTRAN
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            {/* Enlace a la página principal con ícono de inicio */}
            <Nav.Link as={Link} to="/" className="nav-link-custom">
              <FontAwesomeIcon icon={faHome} className="me-1 nav-icon" /> Inicio
            </Nav.Link>
            {/* Enlace al checkout que muestra el widget del carrito */}
            <Nav.Link as={Link} to="/checkout" className="nav-link-custom">
              <CartWidget />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
