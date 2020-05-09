import React, { Fragment, useState } from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle, { dark, light } from "../theme/globalStyle";
import AppHeader from "./AppHeader";
import Input from "./Input";
import PictureCard from "./PictureCard";
import TenLastPictures from "./TenLastPictures";
import { today } from "../helpers";

function App() {
  const [isLightTheme, setLightTheme] = useState(false);
  const [date, setDate] = useState(today);

  let initialNumberOfFavourites = Object.keys(localStorage).length;
  const [numberOfFavourites, setNumberOfFavourites] = useState(
    initialNumberOfFavourites
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setDate(e.target.date.value);
  };

  return (
    <Fragment>
      <ThemeProvider theme={isLightTheme ? light : dark}>
        <GlobalStyle />
        <AppHeader
          setLightTheme={setLightTheme}
          isLightTheme={isLightTheme}
          numberOfFavourites={numberOfFavourites}
        />
        <Input handleSubmit={handleSubmit} />
        <PictureCard
          date={date}
          key={100}
          order={true}
          shift={"-40%"}
          setNumberOfFavourites={setNumberOfFavourites}
        />
        <TenLastPictures setNumberOfFavourites={setNumberOfFavourites} />
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
