import React, { useState } from "react";
import Input from "./Input";
import PictureCard from "./PictureCard";
import TenLastPictures from "./TenLastPictures";
import { today } from "../helpers";

function Main(props) {
  const [date, setDate] = useState(today);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDate(e.target.date.value);
  };

  return (
    <>
      {" "}
      <Input handleSubmit={handleSubmit} />
      <PictureCard
        date={date}
        key={100}
        order={true}
        shift={"-40%"}
        setNumberOfFavourites={props.setNumberOfFavourites}
      />
      <TenLastPictures setNumberOfFavourites={props.setNumberOfFavourites} />
    </>
  );
}

export default Main;
