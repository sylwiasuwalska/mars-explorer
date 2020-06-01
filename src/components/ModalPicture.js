import React from "react";
import { Modal } from "react-bootstrap";
import styled from "styled-components";

const ModalContainer = styled(Modal)`
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
`;

function ModalPicture(props) {
  return (
    <ModalContainer
      show={props.show}
      onHide={props.handleClose}
      centered
      size="xl"
    >
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image src={props.url} alt="picture_of_the_day" />
      </Modal.Body>
    </ModalContainer>
  );
}

export default ModalPicture;
