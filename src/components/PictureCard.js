import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Col, Row, Container } from "react-bootstrap";
import ModalPicture from "./ModalPicture";
import { CSSTransition } from "react-transition-group";

const CardContainer = styled.div`
  text-align: center;
  padding: 3rem;
  background-color: ${(props) => props.theme.dark};
  height: auto;
  &.fade-enter {
    opacity: 0;
  }

  &.fade-enter-active {
    opacity: 1;
    transition: all 3500ms;
    animation: bounceIn 1.5s ease-in;
  }

  &.fade-exit {
    opacity: 1;
  }

  &.fade-exit-active {
    opacity: 0;
    transition: all 1500ms;
  }

  @keyframes bounceIn {
    0% {
      transform: scale(0.95);
    }
    50% {
      transform: scale(0.975);
    }
    100% {
      transform: scale(1);
    }
  }
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
  flex-basis: 100%;
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

  useEffect(() => {});

  return (
    <CSSTransition in={props.animate} timeout={1500} classNames="fade">
      <CardContainer url={props.pictureData.url}>
        <Row>
          <Col sm={8}>
            <Image url={props.pictureData.url} onClick={handleShow} />
          </Col>
          <Col sm={4}>
            <Paragraph>
              <Title>{props.pictureData.title}</Title>
              <p>{props.pictureData.date}</p>
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
    </CSSTransition>
  );
}

export default PictureCard;
