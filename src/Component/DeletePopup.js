import React from "react";
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
import { Modal, Button } from "react-bootstrap";

export const DeletePopup = ({showModal, hideModal, confirmModal, id, message}) => {
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={showModal} onHide={hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={hideModal}>
            Close
          </Button>
          <Button variant="primary" onClick={confirmModal(id)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
