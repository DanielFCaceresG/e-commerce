import React, { useState } from "react";
import Brief from "../components/Brief";
import {
  Button,
  Container,
  Modal,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import { useCart } from "../contexts/CartContext";

const Checkout = () => {
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const { items, clearCart } = useCart();

  const handleConfirm = () => {
    clearCart();
    setShowModal(false);
    setShowToast(true);
  };

  return (
    <Container className="mt-3">
      <h2>Resumen de compra</h2>
      <Brief />

      <Button
        className="mt-3"
        onClick={() => setShowModal(true)}
        disabled={items.length === 0}
      >
        Finalizar compra
      </Button>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar compra</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ¿Estás seguro de que deseas finalizar la compra?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleConfirm}>
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer position="top-end" className="p-3">
        <Toast
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={3000}
          autohide
          bg="success"
        >
          <Toast.Body className="text-white">¡Compra finalizada!</Toast.Body>
        </Toast>
      </ToastContainer>
    </Container>
  );
};

export default Checkout;
