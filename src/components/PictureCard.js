import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Waypoint } from "react-waypoint";
import { Col, OverlayTrigger, Row, Spinner } from "react-bootstrap";
import ModalPicture from "./ModalPicture";
import { CSSTransition } from "react-transition-group";
import { renderTooltipForAdding } from "../helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";
import ReactPlayer from "react-player";

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
    transition: all 1500ms;
    animation: bounceIn 1000ms ease-in;
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

  @media (max-width: 768px) {
  height: 50vh;
  }
`;

const Title = styled.h2`
  font-family: "Raleway", sans-serif;
  font-weight: 900;
  color: ${(props) => props.theme.secondary};
  font-size: 2rem;
    @media (max-width: 768px) {

    font-size: 1rem;
  }
`;

const Paragraph = styled.div`
  z-index: 5;
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
    font-size: 0.75rem;
  }
`;

const FavouriteIconContainer = styled.button`
  background-color: transparent;
  border: none;
  color: ${(props) => props.theme.secondary};
`;

const Link = styled.a`
  flex-basis: 100%;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.danger};
  color: ${(props) => props.theme.secondary};
  margin: 10px;
  padding: 10px 20px;
  text-align: center;

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

  const [isLoading, setIsLoading] = useState(true);
  const [pictureData, setPictureData] = useState("");

  const initialFavourite = !!localStorage.getItem(props.date);
  const [isFavourite, setIsFavourite] = useState(initialFavourite);

  const fetchPictureData = async (date) => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `https://api.nasa.gov/planetary/apod?date=${date}&api_key=IrU9YCmzeRGcHbJULHNnNWTIhNitiAjxTegDI4XJ`
      );
      setPictureData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      //TODO handling error
    }
  };

  const addRemoveToLocalStorage = () => {
    if (isFavourite) {
      localStorage.removeItem(props.date);
      props.setNumberOfFavourites((prevState) => prevState - 1);
    } else {
      localStorage.setItem(props.date, JSON.stringify(pictureData));
      props.setNumberOfFavourites((prevState) => prevState + 1);
    }
    setIsFavourite(!isFavourite);
  };

  useEffect(() => {
    const isNewDateFav = !!localStorage.getItem(props.date);
    setIsFavourite(isNewDateFav);
    if (localStorage.getItem(props.date)) {
      const localStorageData = JSON.parse(localStorage.getItem(props.date));
      setPictureData(localStorageData);
      setIsLoading(false);
    } else {
      fetchPictureData(props.date);
    }
  }, [props.date]);

  if (isLoading) {
    return (
      <CardContainer>
        <Spinner animation="grow" variant="light" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </CardContainer>
    );
  }

  return (
    <Waypoint
      onEnter={() => setAnimate(true)}
      onLeave={() => setAnimate(false)}
    >
      <div>
        <CSSTransition in={animate} timeout={1000} classNames="fade">
          <CardContainer>
            <Row>
              <Col md={{ span: 8, order: props.order ? 1 : 12 }}>
                {pictureData.media_type === "image" ? (
                  <Image url={pictureData.url} onClick={handleShow} />
                ) : (
                  <ReactPlayer
                    url={pictureData.url}
                    height="800px"
                    width="100%"
                  />
                )}
              </Col>
              <Col md={{ span: 4, order: props.order ? 12 : 1 }}>
                <Paragraph shift={props.shift}>
                  <Title>{pictureData.title}</Title>
                  <OverlayTrigger
                    placement="top"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltipForAdding}
                  >
                    <FavouriteIconContainer onClick={addRemoveToLocalStorage}>
                      <FontAwesomeIcon
                        icon={isFavourite ? faHeartSolid : faHeartRegular}
                        size="2x"
                      />
                    </FavouriteIconContainer>
                  </OverlayTrigger>
                  <p>{pictureData.date}</p>
                  <p>{pictureData.explanation}</p>
                  <p>
                    Copyright:{" "}
                    {pictureData.copyright ? pictureData.copyright : "unknown"}
                  </p>
                  <Link href={pictureData.hdurl} target="_blank">HD version - click to open in a new tab</Link>
                </Paragraph>
              </Col>
            </Row>

            <ModalPicture
              show={show}
              handleClose={handleClose}
              url={pictureData.url}
              title={pictureData.title}
            />
          </CardContainer>
        </CSSTransition>
      </div>
    </Waypoint>
  );
}

export default PictureCard;
