import React, { Fragment, useState } from "react";
import { ThemeProvider } from "styled-components";
import { Switch, Route } from "react-router-dom";
import GlobalStyle, { dark, light } from "../theme/globalStyle";
import AppHeader from "./AppHeader";

import FavouritePictures from "./FavouritePictures";
import Main from "./Main";

function App() {
  const [isLightTheme, setLightTheme] = useState(false);

  let initialNumberOfFavourites = Object.keys(localStorage).length;
  const [numberOfFavourites, setNumberOfFavourites] = useState(
    initialNumberOfFavourites
  );
  return (
    <Fragment>
      <ThemeProvider theme={isLightTheme ? light : dark}>
        <GlobalStyle />
        <AppHeader
          setLightTheme={setLightTheme}
          isLightTheme={isLightTheme}
          numberOfFavourites={numberOfFavourites}
        />
        <Switch>
          <Route exact path="/nasa-explorer">
            <Main setNumberOfFavourites={setNumberOfFavourites} />
          </Route>
          <Route path="/favourite">
            <FavouritePictures
              setLightTheme={setLightTheme}
              isLightTheme={isLightTheme}
            />
          </Route>
        </Switch>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
