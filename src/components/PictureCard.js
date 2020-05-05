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
  background-position: 50% 50%;
  height: 800px;
  width: 100%;
  border: 1px solid ${(props) => props.theme.secondary};
  cursor: pointer;
`;

const Title = styled.h2`
  font-family: "Raleway", sans-serif;
  font-weight: 900;
  color: ${(props) => props.theme.secondary};
  font-size: 2rem;
`;

const Paragraph = styled.div`
  display: flex;
  flex-flow: wrap;
  align-items: center;
  position: relative;
  left: -40%;
  top: 10%;
  width: 140%;
  color: ${(props) => props.theme.secondary};
  background-color: ${(props) => props.theme.light};
  text-align: justify;
  padding: 2rem;

  p {
    font-family: "Raleway", sans-serif;
    padding-bottom: 8px;
    margin: 0;
  }
  @media (max-width: 768px) {
    position: initial;
    width: 100%;
  }
`;

const Link = styled.a`
  flex-basis: 100%;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.danger};
  color: ${(props) => props.theme.secondary};
  margin: 10px;
  padding: 10px 20px;

  &:hover {
    text-decoration: none;
    cursor: pointer;
    color: ${(props) => props.theme.secondary};
  }
`;

function PictureCard(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <CardContainer url={props.pictureData.url}>
      <Row>
        <Col sm={8}>
          <Image url={props.pictureData.url} onClick={handleShow} />
        </Col>
        <Col sm={4}>
          <Paragraph>
            <Title>{props.pictureData.title}</Title>
            <p>{props.pictureData.explanation}</p>
            <p>
              Copyright:{" "}
              {props.pictureData.copyright
                ? props.pictureData.copyright
                : "unknown"}
            </p>
            <Link href={props.pictureData.hdurl}>HD version</Link>
          </Paragraph>
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
