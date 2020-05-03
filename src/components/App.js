import React, {Fragment, useState} from "react";

import styled, { ThemeProvider } from "styled-components";
import GlobalStyle, { dark, light } from "../theme/globalStyle";
import AppHeader from "./AppHeader";




function App() {
    const [isLightTheme, setLightTheme] = useState(true);


  return (
    <Fragment>
      <ThemeProvider theme={isLightTheme ? light : dark}>
        <GlobalStyle />
        <AppHeader setLightTheme={setLightTheme} isLightTheme={isLightTheme} />

      </ThemeProvider>
    </Fragment>
  );
}

export default App;
