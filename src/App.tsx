import { useEffect, useState } from "react";
import styled from "styled-components";

import WeatherCard from "./components/WeatherCard";
import { GlobalStyle } from "./styles/GlobalStyles";
import type { WeatherData } from "./types/weather";
import fetchWeather from "./api/fetchWeather";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  gap: 3rem;
  /* background: linear-gradient(135deg, #a2d2ff 0%, #ffe5ec 100%); */
  background: linear-gradient(to bottom right, #a2d2ff, #bde0fe, #fff1e6);
  padding: 2rem;
  color: #333;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
`;

function App() {
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const [city, setCity] = useState("Kyiv");
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    fetchWeather(API_KEY, city).then(setWeather).catch(console.error);
  }, [API_KEY, city]);

  return (
    <>
      <Layout>
        <Title>Weather Forecast App</Title>
        <WeatherCard />
        {weather && (
          <div>
            <h3>
              {weather.name}, {weather.sys.country}
            </h3>
            <p>Temperature: {weather.main.temp}°C</p>
            <p>Weather: {weather.weather[0].description}</p>
          </div>
        )}
      </Layout>
      <GlobalStyle />
    </>
  );
}

export default App;
