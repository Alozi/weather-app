import { useState } from "react";
import styled from "styled-components";

import { GlobalStyle } from "./styles/GlobalStyles";
import { fetchWeather, fetchForecast } from "./api/fetchWeather";
import SearchBar from "./components/SearchBar";
import ErrorCard from "./components/ErrorCard";
import ForecastSection from "./components/ForecastSection";
import WeatherForecast from "./components/WeatherForecast";
import { useWeather } from "./hooks/useWeather";
import Loader from "./components/Loader";
import EmptyState from "./components/EmptyState";

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

function App() {
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const [city, setCity] = useState(() => {
    try {
      const savedCity = localStorage.getItem("city");
      return savedCity ? JSON.parse(savedCity) : null;
    } catch {
      return null;
    }
  });

  const {
    weather,
    forecast,
    error,
    loading,
    setWeather,
    setForecast,
    setError,
  } = useWeather(API_KEY, city);

  async function handleCurrentPosition() {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const [weatherData, forecastData] = await Promise.all([
            fetchWeather({ API_KEY, lat: latitude, lon: longitude }),
            fetchForecast({ API_KEY, lat: latitude, lon: longitude }),
          ]);
          setWeather(weatherData);
          setForecast(forecastData);
          setCity(weatherData.name);
          setError(null);
        } catch {
          setError("Failed to get location weather 😢");
        }
      },
      (error) => {
        alert("Unable to retrieve your location 😢");
        console.error(error);
      }
    );
  }

  return (
    <>
      <Layout>
        <Title>Weather Forecast App</Title>
        <SearchBar
          onSearch={setCity}
          onGetCurrentPosition={handleCurrentPosition}
          API_KEY={API_KEY}
        />

        {city === null && !loading && !weather && !error && (
          <EmptyState message="Please, enter a city to see the weather" />
        )}

        {loading && <Loader />}
        {error && <ErrorCard message={error} />}

        {weather && <WeatherForecast weather={weather} />}
        {forecast && <ForecastSection forecast={forecast} />}
      </Layout>
      <GlobalStyle />
    </>
  );
}

export default App;
