import React, { useState } from "react";
import styled from "styled-components";
import { Col, Row, Container } from "react-bootstrap";
import ModalPicture from "./ModalPicture";

const CardContainer = styled.div`
  text-align: center;
  padding: 3rem;
  background-color: ${(props) => props.theme.dark};
`;

const Image = styled.div`
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
  height: 800px;
  width: 100%;
  border: 1px solid ${(props) => props.theme.secondary};
  cursor: pointer;
`;

const Title = styled.h2`
  font-family: "Grand Hotel", cursive;
  color: ${(props) => props.theme.secondary};
  font-size: 3rem;
  padding: 2rem;
`;

const Paragraph = styled.p`
  color: ${(props) => props.theme.secondary};
  text-align: justify;
`;
const Link = styled.a`
  background-color: ${(props) => props.theme.danger};
  color: ${(props) => props.theme.secondary};
  margin: 10px;
  padding: 10px 20px;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

function PictureCard(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <CardContainer url={props.pictureData.url}>
      <Row>
        <Col>
          <Title>{props.pictureData.title}</Title>
        </Col>
      </Row>
      <Row>
        <Col sm={8}>
          <Image url={props.pictureData.url} onClick={handleShow} />
        </Col>
        <Col sm={4}>
          <Paragraph>{props.pictureData.explanation}</Paragraph>
          <Paragraph>
            Copyright:{" "}
            {props.pictureData.copyright
              ? props.pictureData.copyright
              : "unknown"}
          </Paragraph>
          <Link href={props.pictureData.hdurl}>HD version</Link>
        </Col>
      </Row>

      <ModalPicture
        show={show}
        handleClose={handleClose}
        url={props.pictureData.url}
        title={props.pictureData.title}
      />
    </CardContainer>
  );
}

export default PictureCard;
