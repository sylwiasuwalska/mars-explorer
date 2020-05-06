import React from "react";
import { Modal } from "react-bootstrap";
import styled from "styled-components";

const ModalContainer = styled(Modal)`
  text-align: center;
`

function ModalPicture(props) {
  return (
    <ModalContainer show={props.show} onHide={props.handleClose} centered size="xl">
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={props.url} alt="picture_of_the_day" />
      </Modal.Body>
    </ModalContainer>
  );
}

export default ModalPicture;
