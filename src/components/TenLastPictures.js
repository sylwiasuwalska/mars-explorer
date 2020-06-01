import React from "react";
import PictureCard from "./PictureCard";
import moment from "moment";
import { SectionTitle, Line } from "../theme/globalStyle";
import { renderPictureCards } from "../helpers";

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

  const tenLastPicturesCards = renderPictureCards(
    dates,
    props.setNumberOfFavourites
  );

  return (
    <>
      <Line />
      <SectionTitle>View pictures from last ten days...</SectionTitle>
      {tenLastPicturesCards}
    </>
  );
}

export default TenLastPictures;
