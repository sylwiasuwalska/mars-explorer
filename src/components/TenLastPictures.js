import React from "react";
import PictureCard from "./PictureCard";
import styled from "styled-components";
import moment from "moment";

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

    const getLastTenDays = () => {
        let dates = [];
        for (let i = 0; i < 10; i++) {
            dates[i] = moment()
                .subtract(i + 1, "days")
                .format("YYYY-MM-DD");
        }
        return dates;
    };

    const dates = getLastTenDays();

    const tenLastPicturesCards = dates.map(
    (element, index) => {
      const oddOrEven = index % 2;

      return (
        <PictureCard
          key={index}
          date={element}
          order={!!oddOrEven}
          shift={oddOrEven ? "-40%" : "0"}
        />
      );
    }
  );

  return (
    <>
      <Line />
      <SectionTitle>View pictures from last ten days...</SectionTitle>;
      {tenLastPicturesCards}
    </>
  );
}

export default TenLastPictures;
