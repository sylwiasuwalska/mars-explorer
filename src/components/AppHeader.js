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
  background-image: ${(props) => props.theme.background};
  background-size: cover;
  background-color: transparent;
  padding-top: 15vh;
  padding-bottom: 15vh;
`;

const AppTitle = styled.h1`
  font-family: "Lato", sans-serif;
  font-weight: 900;
  font-size: 4rem;
  color: ${(props) => props.theme.primary};
  margin-left: 10%;
`;

const ModeThemeChanger = styled.div`
  color: ${(props) => props.theme.secondary};
  position: absolute;
  top: 20px;
  right: 30px;
`;

const Paragraph = styled.p`
  margin-left: 10%;
  font-size: 1.5rem;
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
            label={props.isLightTheme ? "🌙" : "🌞"}
            value="dark"
          />
        </Form>
      </ModeThemeChanger>
      <AppTitle>Astronomy Picture of the Day</AppTitle>

      <Paragraph>
        This is place where you can see pictures chosen by NASA as Astronomy
        Picture of the Day. Set the date and explore!
      </Paragraph>
    </JumbotronBackground>
  );
}

export default AppHeader;
