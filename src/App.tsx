import { useEffect, useState } from "react";
import styled from "styled-components";

import WeatherCard from "./components/WeatherCard";
import { GlobalStyle } from "./styles/GlobalStyles";
import type { WeatherData } from "./types/weather";
import fetchWeather from "./api/fetchWeather";
import SearchBar from "./components/SearchBar";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  gap: 2rem;
  /* background: linear-gradient(135deg, #a2d2ff 0%, #ffe5ec 100%); */
  background: linear-gradient(to bottom right, #a2d2ff, #bde0fe, #fff1e6);
  padding: 2rem;
  color: #333;
`;

const Time = styled.p`
  font-size: 1rem;
  color: #fff;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
`;

function App() {
  const currentTime = new Date().toLocaleString();
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const [city, setCity] = useState("Kyiv");
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    fetchWeather(API_KEY, city).then(setWeather).catch(console.error);
  }, [API_KEY, city]);

  return (
    <>
      <Layout>
        <Time>{currentTime} EET (UTC+3)</Time>
        <Title>Weather Forecast App</Title>
        <SearchBar onSearch={setCity} />
        {weather && <WeatherCard weather={weather} />}
      </Layout>
      <GlobalStyle />
    </>
  );
}

export default App;
