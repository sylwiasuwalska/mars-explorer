import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Waypoint } from "react-waypoint";
import { Col, Row } from "react-bootstrap";
import ModalPicture from "./ModalPicture";
import { CSSTransition } from "react-transition-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";

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
  justify-content: space-between;
  left: ${(props) => props.shift};
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

const IconContainer = styled(FontAwesomeIcon)``;

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
  const [animate, setAnimate] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const initialFavourite = !!localStorage.getItem(props.pictureData.date)
  const [isFavourite, setIsFavourite] = useState(initialFavourite);

  const addRemoveToLocalStorage = () => {
    isFavourite
      ? localStorage.removeItem(props.pictureData.date)
      : localStorage.setItem(
          props.pictureData.date,
          JSON.stringify(props.pictureData)
        );
    setIsFavourite(!isFavourite);
  };

  return (
    <Waypoint
      onEnter={() => setAnimate(true)}
      onLeave={() => setAnimate(false)}
    >
      <div>
        <CSSTransition in={animate} timeout={1500} classNames="fade">
          <CardContainer url={props.pictureData.url}>
            <Row>
              <Col md={{ span: 8, order: props.order ? 1 : 12 }}>
                <Image url={props.pictureData.url} onClick={handleShow}/>
              </Col>
              <Col md={{ span: 4, order: props.order ? 12 : 1 }}>
                <Paragraph shift={props.shift}>
                  <Title>{props.pictureData.title}</Title>
                  <IconContainer
                    icon={isFavourite ? faHeartSolid : faHeartRegular}
                    size="2x"
                    onClick={addRemoveToLocalStorage}
                  />
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
      </div>
    </Waypoint>
  );
}

export default PictureCard;
