import React from "react";
import moment from "moment";
import { Tooltip } from "react-bootstrap";
import PictureCard from "./components/PictureCard";

export const today = moment().format("YYYY-MM-DD");

export const renderTooltipForAdding = (props) => {
  return (
    <Tooltip id="button-tooltip" {...props}>
      Add to favourite
    </Tooltip>
  );
};

export const renderTooltipForFavouritePage = (props) => {
  return (
    <Tooltip id="button-tooltip" {...props}>
      See your favourites
    </Tooltip>
  );
};

export const renderPictureCards = (array, setNumberOfFavourites) => {
  return array.map((element, index) => {
    const oddOrEven = index % 2;

    return (
      <PictureCard
        key={index}
        date={element}
        order={!!oddOrEven}
        shift={oddOrEven ? "-40%" : "0"}
        setNumberOfFavourites={setNumberOfFavourites}
      />
    );
  });
};
