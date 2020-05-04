import React, { useRef } from "react";
import styled from "styled-components";

import {
  Form,
  FormControl,
  InputGroup,
  Jumbotron,
  Container,
} from "react-bootstrap";

const JumbotronBackground = styled(Jumbotron)`
  background-color: transparent;
`
const AppTitle = styled.h1`
  font-family: "Lato", sans-serif;
  font-weight: 900;
  font-size: 4rem;
  color: ${(props) => props.theme.primary};
  margin-left: 1rem;
`;

const ModeThemeChanger = styled.div`
  color: ${(props) => props.theme.secondary};
  position: absolute;
  top: 0;
  right: 10px;
`;

const Paragraph = styled.p`
  margin-left: 1rem;
  color: ${(props) => props.theme.secondary};
`;

function AppHeader(props) {
  return (
    <JumbotronBackground fluid>
      <ModeThemeChanger>
        <Form>
          <Form.Switch
            onChange={() => props.setLightTheme(!props.isLightTheme)}
            type="switch"
            id="custom-switch"
            label={props.isLightTheme ? "🌜" : "🌞"}
            value="dark"
          />
        </Form>
      </ModeThemeChanger>
      <AppTitle>Astronomy Picture of the Day</AppTitle>

      <Paragraph>
        This is place where you can see pictures chosen by NASA as Astronomy
        Picture of the Day. Set the date and explore!
      </Paragraph>
      <Paragraph>
        <InputGroup className="mb-3">
          <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
      </Paragraph>
    </JumbotronBackground>
  );
}

export default AppHeader;
