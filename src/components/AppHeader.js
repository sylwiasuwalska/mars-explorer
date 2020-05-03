import React, { useRef } from "react";
import styled from "styled-components";
import GlobalStyle, { dark, light } from "../theme/globalStyle";

import { Form, Button } from "react-bootstrap";

const AppTitle = styled.h1`
  font-family: "Lato", sans-serif;
  font-weight: 900;
  font-size: 5rem;
  color: ${(props) => props.theme.primary};
  margin-left: 1rem;
`;

const ModeThemeChanger = styled.div`
  color: ${(props) => props.theme.secondary};
  position: absolute;
  top: 0;
  right: 10px;
`;

function AppHeader(props) {
  const modeThemeChanger = useRef();

  const handleThemeChange = (changeEvent) => {
    props.setThemeColor(changeEvent.target.value==="dark" ? dark : light);
  };
  return (
    <header>
      <ModeThemeChanger>
        <Form>
          <Form.Switch
            onChange={()=> props.setLightTheme(!props.isLightTheme)}
            ref={modeThemeChanger}
            type="switch"
            id="custom-switch"
            label="switch to dark mode"
            value="dark"
          />

        </Form>
      </ModeThemeChanger>
      <AppTitle>Astronomy Picture of the Day</AppTitle>

      <p>
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <p>
        <Button variant="primary">Learn more</Button>
      </p>
    </header>
  );
}

export default AppHeader;
