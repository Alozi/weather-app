import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./styles/GlobalStyles";
import { fetchWeather, fetchForecast } from "./api/fetchWeather";
import SearchBar from "./components/SearchBar";
import ErrorCard from "./components/ErrorCard";
import ForecastSection from "./components/ForecastSection";
import WeatherForecast from "./components/WeatherForecast";
import { useWeather } from "./hooks/useWeather";
import Loader from "./components/Loader";
import EmptyState from "./components/EmptyState";
import { darkTheme, lightTheme } from "./styles/theme";
import ThemeToggleButton from "./components/ThemeToggleButton";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  gap: 2rem;
  background: ${({ theme }) => theme.gradients.background};
  transition: background-color 0.5s ease;
  padding: 4rem 2rem 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.whiteColor};
  text-shadow: ${({ theme }) => theme.colors.shadow};
`;

function App() {
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const [themeLight, toogleThemeLight] = useState(true);
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
    <ThemeProvider theme={themeLight === true ? lightTheme : darkTheme}>
      <Layout>
        <ThemeToggleButton
          themeLight={themeLight}
          onChange={() => {
            toogleThemeLight(!themeLight);
          }}
        />
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
    </ThemeProvider>
  );
}

export default App;
