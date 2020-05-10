import React from "react";
import PictureCard from "./PictureCard";
import styled from "styled-components";
import moment from "moment";
import { SectionTitle, Line } from "../theme/globalStyle";


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

  const tenLastPicturesCards = dates.map((element, index) => {
    const oddOrEven = index % 2;

    return (
      <PictureCard
        key={index}
        date={element}
        order={!!oddOrEven}
        shift={oddOrEven ? "-40%" : "0"}
        setNumberOfFavourites={props.setNumberOfFavourites}
      />
    );
  });

  return (
    <>
      <Line />
      <SectionTitle>View pictures from last ten days...</SectionTitle>;
      {tenLastPicturesCards}
    </>
  );
}

export default TenLastPictures;
