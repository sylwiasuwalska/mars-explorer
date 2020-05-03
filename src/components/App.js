import React, {Fragment, useState} from "react";

import styled, { ThemeProvider } from "styled-components";
import GlobalStyle, { dark, light } from "../theme/globalStyle";
import AppHeader from "./AppHeader";
import Container from "react-bootstrap/Container";




function App() {
    const [isLightTheme, setLightTheme] = useState(true);


  return (
    <Fragment>
        <Container>
      <ThemeProvider theme={isLightTheme ? light : dark}>
        <GlobalStyle />
        <AppHeader setLightTheme={setLightTheme} isLightTheme={isLightTheme} />

      </ThemeProvider>
        </Container>
    </Fragment>
  );
}

export default App;
