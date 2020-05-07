import React from "react";
import PictureCard from "./PictureCard";
import styled from "styled-components";

const SectionTitle = styled.h2`
  font-family: "Lato", sans-serif;
  font-weight: 900;
  font-size: 3rem;
  color: ${(props) => props.theme.secondary};
  margin-left: 10%;
  margin-bottom: 3%;
  @media (max-width: 768px) {
    font-size: 3rem;
    margin: 0;
  }
`;

const Line = styled.hr`
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid ${(props) => props.theme.secondary};
    margin: 5% 0;
    margin-bottom: 3%;
    padding: 0;
}`;

function TenLastPictures(props) {
  console.log(props.tenLastPictures);
  const tenLastPicturesCard = Object.values(props.tenLastPictures).map(
    (element, index) => {
      return <PictureCard key={index} pictureData={element} />;
    }
  );

  return (
    <>
      <Line />
      <SectionTitle>Pictures from last ten days...</SectionTitle>;
      {tenLastPicturesCard}
    </>
  );
}

export default TenLastPictures;
