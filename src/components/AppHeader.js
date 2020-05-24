import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Form, Jumbotron, OverlayTrigger } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faHeart } from "@fortawesome/free-solid-svg-icons";
import { renderTooltipForFavouritePage } from "../helpers";

const JumbotronBackground = styled(Jumbotron)`
  background-image: url("https://apod.nasa.gov/apod/image/2004/STSCI-H-p2016a-m-2000x1374.jpg");
  background-size: cover;
  background-color: transparent;
  padding-top: 15vh;
  padding-bottom: 15vh;
  margin: 0;
`;

const NoHoverLink = styled(Link)`
    &:hover {
  text-decoration: none;
  }
`;

const AppTitle = styled.h1`
  font-family: "Lato", sans-serif;
  font-weight: 900;
  font-size: 4rem;
  color: #fff;
  margin-left: 10%;

  @media (max-width: 768px) {
    font-size: 3rem;
    margin: 0;
  }
`;

const FavouriteContainer = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  position: fixed;
  font-weight: 500;
  top: 30px;
  left: 30px;
  color: #000;
  z-index: 10;

  &.fa-layers-text {
    font-size: 2rem;
  }
`;

const ModeThemeChanger = styled.div`
  position: fixed;
  top: 30px;
  right: 30px;
  color: #fff;
  z-index: 10;
`;

const Paragraph = styled.p`
  margin-left: 10%;
  font-size: 1.5rem;
  color: #fff;
  @media (max-width: 768px) {
    margin: 0;
    font-size: 1rem;
  }
`;

function AppHeader(props) {
  return (
    <JumbotronBackground fluid>
      <Link to="/favourite">
        <FavouriteContainer className="fa-layers fa-fw">
          <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltipForFavouritePage}
          >
            <FontAwesomeIcon
              icon={faHeart}
              color="white"
              size="2x"
              transform="left-3 down-1"
            />
          </OverlayTrigger>
          <span className="fa-layers-text" color="black">
            {props.numberOfFavourites}
          </span>
        </FavouriteContainer>
      </Link>

      <ModeThemeChanger>
        <Form>
          <Form.Switch
            onChange={() => props.setLightTheme(!props.isLightTheme)}
            type="switch"
            id="custom-switch"
            label={
              props.isLightTheme ? (
                <FontAwesomeIcon icon={faMoon} />
              ) : (
                <FontAwesomeIcon icon={faSun} />
              )
            }
            value="dark"
          />
        </Form>
      </ModeThemeChanger>
      <NoHoverLink to="/nasa-explorer">
        <AppTitle>Astronomy Picture of the Day</AppTitle>
        <Paragraph>
          This is place where you can see pictures chosen by NASA as Astronomy
          Picture of the Day. Set the date and explore!
        </Paragraph>
      </NoHoverLink>
    </JumbotronBackground>
  );
}

export default AppHeader;
