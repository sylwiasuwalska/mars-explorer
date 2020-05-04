import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle, { dark, light } from "../theme/globalStyle";
import AppHeader from "./AppHeader";
import Input from "./Input";
import Container from "react-bootstrap/Container";
import PictureCard from "./PictureCard";

function App() {
  const [isLightTheme, setLightTheme] = useState(true);
  const [date, setDate] = useState("2020-04-03");
  const [pictureData, setPictureData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setDate(e.target.date.value);
  };

  const fetchData = async (date) => {
    try {
      const response = await axios.get(
        `https://api.nasa.gov/planetary/apod?date=${date}&api_key=IrU9YCmzeRGcHbJULHNnNWTIhNitiAjxTegDI4XJ`
      );
      console.log(response.data);
      setPictureData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData(date);
  }, [date]);

  return (
    <Fragment>
      <ThemeProvider theme={isLightTheme ? light : dark}>
        <GlobalStyle />
        <AppHeader setLightTheme={setLightTheme} isLightTheme={isLightTheme} />
        <Container>
          <Input handleSubmit={handleSubmit} />
          <PictureCard pictureData={pictureData} />
        </Container>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
