import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { ThemeProvider } from "styled-components";
import moment from "moment";

import GlobalStyle, { dark, light } from "../theme/globalStyle";
import AppHeader from "./AppHeader";
import Input from "./Input";
import PictureCard from "./PictureCard";
import TenLastPictures from "./TenLastPictures";
import { today } from "../helpers";

function App() {
  const [isLightTheme, setLightTheme] = useState(false);
  const [date, setDate] = useState(today);
  const [pictureData, setPictureData] = useState("");
  const [tenLastPictures, setTenLastPictures] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setDate(e.target.date.value);
  };

  const fetchPictureData = async (date) => {
    try {
      const response = await axios.get(
        `https://api.nasa.gov/planetary/apod?date=${date}&api_key=IrU9YCmzeRGcHbJULHNnNWTIhNitiAjxTegDI4XJ`
      );
      setPictureData(response.data);
    } catch (error) {
      console.error(error);
      //TODO handling error
    }
  };

  const getLastTenDays = () => {
    let dates = [];
    for (let i = 0; i < 10; i++) {
      dates[i] = moment()
        .subtract(i + 1, "days")
        .format("YYYY-MM-DD");
    }
    return dates;
  };

  const fetchTenLastPictures = () => {
    const dates = getLastTenDays();
    const tenLastPictures = dates.map(async (element) => {
      try {
        const response = await axios.get(
          `https://api.nasa.gov/planetary/apod?date=${element}&api_key=IrU9YCmzeRGcHbJULHNnNWTIhNitiAjxTegDI4XJ`
        );
        return response.data;
      } catch (error) {
        console.error(error);
        //TODO handling error
      }
    });
    Promise.all(tenLastPictures).then((data) => {
      setTenLastPictures(data);
    });
  };

  useEffect(() => {
    fetchPictureData(date);
    fetchTenLastPictures();
  }, [date]);

  return (
    <Fragment>
      <ThemeProvider theme={isLightTheme ? light : dark}>
        <GlobalStyle />
        <AppHeader setLightTheme={setLightTheme} isLightTheme={isLightTheme} />
        <Input handleSubmit={handleSubmit} />
        <PictureCard pictureData={pictureData} />
        <TenLastPictures tenLastPictures={tenLastPictures} />
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
