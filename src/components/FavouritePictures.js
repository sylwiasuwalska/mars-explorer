import React from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { SectionTitle, Line } from "../theme/globalStyle";
import { Button } from "react-bootstrap";

const BackButton = styled(Button)`
  border-radius: 0;
  border: none;
  color: ${(props) => props.theme.secondary};
  background-color: ${(props) => props.theme.backgroundColor};
  position: relative;
  left: 10%;
`;

function FavouritePictures(props) {
  let history = useHistory();
  return (
    <>
      <BackButton variant="secondary" onClick={() => history.goBack()}>
        <FontAwesomeIcon icon={faLongArrowAltLeft} /> take me back
      </BackButton>
      <Line />
      <SectionTitle>Your favourite pictures</SectionTitle>
    </>
  );
}

export default FavouritePictures;
