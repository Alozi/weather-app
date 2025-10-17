import { useEffect, useState } from "react";
import styled from "styled-components";

import WeatherCard from "./components/WeatherCard";
import { GlobalStyle } from "./styles/GlobalStyles";
import type { WeatherData } from "./types/weather";
import type { ForecastData } from "./types/forecast";
import { fetchWeather, fetchForecast } from "./api/fetchWeather";
import SearchBar from "./components/SearchBar";
import ForecastCard from "./components/ForecastCard";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  gap: 2rem;
  background: linear-gradient(to bottom right, #a2d2ff, #bde0fe, #fff1e6);
  padding: 2rem;
  color: #333;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
`;

const TitleSecond = styled.h2`
  font-size: 1.8rem;
  color: #fff;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
`;

function App() {
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const [city, setCity] = useState("Lisbon");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastData[] | null>(null);

  useEffect(() => {
    fetchWeather(API_KEY, city).then(setWeather).catch(console.error);
    fetchForecast(API_KEY, city).then(setForecast).catch(console.error);
  }, [API_KEY, city]);

  console.log(forecast);

  return (
    <>
      <Layout>
        <Title>Weather Forecast App</Title>
        <SearchBar onSearch={setCity} />
        <TitleSecond>Current Weather</TitleSecond>
        {weather && <WeatherCard weather={weather} />}

        <TitleSecond>5-Day Forecast</TitleSecond>
        <div style={{ display: "flex", gap: "1rem" }}>
          {forecast &&
            forecast.map((item) => <ForecastCard key={item.dt} item={item} />)}
        </div>
      </Layout>
      <GlobalStyle />
    </>
  );
}

export default App;
