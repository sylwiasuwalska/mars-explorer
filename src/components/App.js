import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle, { dark, light } from "../theme/globalStyle";
import AppHeader from "./AppHeader";
import Input from "./Input";
import PictureCard from "./PictureCard";

function App() {
  const today = new Date().toISOString().slice(0, 10)
  const [isLightTheme, setLightTheme] = useState(false);
  const [date, setDate] = useState(today);
  const [pictureData, setPictureData] = useState("");
  const [animate, setAnimate] = useState(false);



  const handleSubmit = (e) => {
    e.preventDefault();
    setDate(e.target.date.value);
  };

  const fetchData = async (date) => {
    try {
      setAnimate(false);
      const response = await axios.get(
        `https://api.nasa.gov/planetary/apod?date=${date}&api_key=IrU9YCmzeRGcHbJULHNnNWTIhNitiAjxTegDI4XJ`
      );
      console.log(response.data);
      setPictureData(response.data);
      setAnimate(true);
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

          <Input handleSubmit={handleSubmit} />
          <PictureCard pictureData={pictureData} animate={animate} />

      </ThemeProvider>
    </Fragment>
  );
}

export default App;
